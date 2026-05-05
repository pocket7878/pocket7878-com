const tileRadius = 44;
const tileHeight = Math.sqrt(3) * tileRadius;
const tileWidth = 2 * tileRadius;
const horizontalStep = tileRadius * 1.5;
const pointSize = 5;
const ballSpeed = 1.8;
const spawnInterval = 70;
const opinions = ["A", "B", "C"];
const opinionShiftPressure = 4.6;
const targetOpinionRatio = 1 / 3;
const scarcityBoostScale = 3.8;
const chargeDecay = 0.006;
const minInfluence = 0.7;
const maxInfluence = 1.55;
const minStubbornness = 0.75;
const maxStubbornness = 1.65;
const memoryDecay = 0.01;
const affinityDecay = 0.0009;
const affinityGain = 0.035;
const affinityDrop = 0.045;
const opennessChance = 0.12;

let graphPoints = [];
let graphEdges = new Set();
let edgeStates = new Map();
let balls = [];
let trails = [];
let ripples = [];
let pointById = new Map();
let opinionBalanceBoost = 0;

function setup() {
  const container = document.getElementById("app");
  const canvas = createCanvas(600, 480);
  canvas.parent(container);
  buildGraph();
}

function draw() {
  drawBackground();
  opinionBalanceBoost = getOpinionBalanceBoost();
  spawnBalls();
  updateBalls();
  decayCharges();
  decayEdgeStates();
  updateEffects();
  drawEdgeMemory();
  drawTrails();
  drawVertices();
  drawBalls();
  drawRipples();
}

function buildGraph() {
  const pointMap = new Map();

  for (let col = -1; col * horizontalStep < width + tileWidth; col += 1) {
    const x = col * horizontalStep;
    const offsetY = col % 2 === 0 ? 0 : tileHeight / 2;

    for (let y = -tileHeight; y < height + tileHeight; y += tileHeight) {
      const tilePoints = getHexPoints(x, y + offsetY);
      const ids = tilePoints.map((point) => getPointId(pointMap, point));

      for (let i = 0; i < ids.length; i += 1) {
        const a = ids[i];
        const b = ids[(i + 1) % ids.length];
        addEdge(a, b);
      }
    }
  }

  graphPoints = [...pointMap.values()]
    .filter((point) => isOnCanvas(point))
    .sort((a, b) => a.y - b.y || a.x - b.x);
  pointById = new Map(graphPoints.map((point) => [point.id, point]));

  const visibleIds = new Set(graphPoints.map((point) => point.id));
  graphEdges = new Set(
    [...graphEdges].filter((edge) => {
      const [a, b] = edge.split(":");
      return visibleIds.has(a) && visibleIds.has(b);
    }),
  );

  for (const point of graphPoints) {
    point.neighbors = [...graphEdges]
      .map((edge) => edge.split(":"))
      .filter(([a, b]) => a === point.id || b === point.id)
      .map(([a, b]) => (a === point.id ? b : a));
    point.opinion = random(opinions);
    point.charge = 0;
    point.influence = random(minInfluence, maxInfluence);
    point.stubbornness = random(minStubbornness, maxStubbornness);
    point.openness = random() < opennessChance ? random(0.75, 1) : random(0, 0.45);
    point.nextSpawnFrame = frameCount + floor(random(15, spawnInterval));
  }

  for (const edgeKey of graphEdges) {
    edgeStates.set(edgeKey, {
      affinity: random(0.45, 0.65),
      memory: 0,
    });
  }
}

function getPointId(pointMap, point) {
  const x = round(point.x * 100) / 100;
  const y = round(point.y * 100) / 100;
  const id = `${x},${y}`;

  if (!pointMap.has(id)) {
    pointMap.set(id, {
      id,
      x,
      y,
      opinion: "A",
      neighbors: [],
      charge: 0,
      influence: 1,
      stubbornness: 1,
      openness: 0,
      nextSpawnFrame: 0,
    });
  }

  return id;
}

function addEdge(a, b) {
  graphEdges.add(getEdgeKey(a, b));
}

function isOnCanvas(point) {
  return point.x >= 0 && point.x <= width && point.y >= 0 && point.y <= height;
}

function spawnBalls() {
  for (const point of graphPoints) {
    if (frameCount < point.nextSpawnFrame) {
      continue;
    }

    if (point.neighbors.length === 0) {
      continue;
    }

    const targetId = chooseTargetId(point);
    const target = getPointById(targetId);

    if (target) {
      balls.push({
        x: point.x,
        y: point.y,
        previousX: point.x,
        previousY: point.y,
        fromId: point.id,
        targetId: target.id,
        opinion: point.opinion,
        influence: point.influence,
      });
    }

    const interval = spawnInterval / point.influence;
    point.nextSpawnFrame = frameCount + interval + floor(random(-20, 30));
  }
}

function updateBalls() {
  balls = balls.filter((ball) => {
    const target = getPointById(ball.targetId);

    if (!target) {
      return false;
    }

    const distance = dist(ball.x, ball.y, target.x, target.y);

    if (distance <= ballSpeed) {
      addTrail(ball.x, ball.y, target.x, target.y);
      touchEdge(ball.fromId, ball.targetId, ball.opinion, target.opinion);
      receiveBall(target, ball.opinion, ball.influence, ball.fromId);
      return false;
    }

    ball.previousX = ball.x;
    ball.previousY = ball.y;
    ball.x += ((target.x - ball.x) / distance) * ballSpeed;
    ball.y += ((target.y - ball.y) / distance) * ballSpeed;
    addTrail(ball.previousX, ball.previousY, ball.x, ball.y);
    return true;
  });
}

function receiveBall(point, incomingOpinion, influence, fromId) {
  if (incomingOpinion === point.opinion) {
    point.charge = max(
      0,
      point.charge -
        getReceivedInfluence(point, incomingOpinion, influence, fromId) * 0.35,
    );
    return;
  }

  point.charge += getReceivedInfluence(point, incomingOpinion, influence, fromId);

  if (point.charge < getFlipPressure(point)) {
    return;
  }

  point.opinion = incomingOpinion;
  point.charge = 0;
  point.nextSpawnFrame = frameCount + floor(random(20, spawnInterval));
  ripples.push({
    x: point.x,
    y: point.y,
    age: 0,
    maxAge: 38,
    opinion: point.opinion,
  });
}

function decayCharges() {
  for (const point of graphPoints) {
    point.charge = max(0, point.charge - chargeDecay);
  }
}

function decayEdgeStates() {
  for (const state of edgeStates.values()) {
    state.memory = max(0, state.memory - memoryDecay);
    state.affinity += (0.5 - state.affinity) * affinityDecay;
  }
}

function chooseTargetId(point) {
  const weights = point.neighbors.map((neighborId) => {
    const neighbor = getPointById(neighborId);
    const state = getEdgeState(point.id, neighborId);
    const affinityBias =
      neighbor && neighbor.opinion === point.opinion ? 0.65 : point.openness;
    const memoryBonus = state.memory * 0.7;

    return max(0.05, state.affinity + affinityBias + memoryBonus);
  });
  const total = weights.reduce((sum, weight) => sum + weight, 0);
  let cursor = random(total);

  for (let i = 0; i < point.neighbors.length; i += 1) {
    cursor -= weights[i];

    if (cursor <= 0) {
      return point.neighbors[i];
    }
  }

  return point.neighbors[point.neighbors.length - 1];
}

function touchEdge(fromId, targetId, sourceRole, targetRole) {
  const from = getPointById(fromId);
  const target = getPointById(targetId);
  const state = getEdgeState(fromId, targetId);
  const openness = max(from?.openness ?? 0, target?.openness ?? 0);

  state.memory = min(1, state.memory + 0.18 + openness * 0.08);

  if (sourceRole === targetRole) {
    state.affinity = min(1, state.affinity + affinityGain);
  } else {
    state.affinity = max(0.05, state.affinity - affinityDrop * (1 - openness));
  }
}

function getReceivedInfluence(point, incomingOpinion, influence, fromId) {
  const state = getEdgeState(point.id, fromId);
  return (
    influence *
    getOpinionFlowBias(point.opinion, incomingOpinion) *
    (0.65 + state.affinity * 0.7 + point.openness * 0.2)
  );
}

function getOpinionFlowBias(receiverOpinion, senderOpinion) {
  if (!senderOpinion || receiverOpinion === senderOpinion) {
    return 1;
  }

  const receiverIndex = opinions.indexOf(receiverOpinion);
  const senderIndex = opinions.indexOf(senderOpinion);
  const favoredSenderIndex = (receiverIndex + opinions.length - 1) % opinions.length;

  return senderIndex === favoredSenderIndex ? 1.16 : 0.94;
}

function getFlipPressure(point) {
  const counts = getNeighborRoleCounts(point);
  const scarcityBoost = getOpinionScarcityBoost(point.opinion);
  const socialPressure =
    opinionShiftPressure +
    counts.sameOpinionCount -
    counts.oppositeOpinionCount -
    scarcityBoost;
  const pressure = socialPressure * point.stubbornness;

  return max(1, pressure);
}

function getOpinionBalanceBoost() {
  const boosts = {};

  for (const opinion of opinions) {
    const count = graphPoints.filter((point) => point.opinion === opinion).length;
    const ratio = count / graphPoints.length;
    boosts[opinion] = max(0, targetOpinionRatio - ratio) * scarcityBoostScale;
  }

  return boosts;
}

function getOpinionScarcityBoost(opinion) {
  return opinionBalanceBoost[opinion] ?? 0;
}

function getNeighborRoleCounts(point) {
  let sameOpinionCount = 0;
  let oppositeOpinionCount = 0;

  for (const neighborId of point.neighbors) {
    const neighbor = getPointById(neighborId);

    if (!neighbor) {
      continue;
    }

    if (neighbor.opinion === point.opinion) {
      sameOpinionCount += 1;
    } else {
      oppositeOpinionCount += 1;
    }
  }

  return { sameOpinionCount, oppositeOpinionCount };
}

function drawVertices() {
  noStroke();

  for (const point of graphPoints) {
    const progress = constrain(point.charge / getFlipPressure(point), 0, 1);
    const stubbornnessSize = map(
      point.stubbornness,
      minStubbornness,
      maxStubbornness,
      -0.8,
      1.8,
    );
    const influenceGlow = map(point.influence, minInfluence, maxInfluence, 0, 10);
    const openGlow = point.openness * 10;
    const size = pointSize + stubbornnessSize + progress * 6;

    const pointColor = getOpinionColor(point.opinion);
    drawGlow(
      point.x,
      point.y,
      size,
      pointColor,
      19 + influenceGlow + openGlow + progress * 18,
    );
    fill(
      min(255, red(pointColor) + point.openness * 45),
      min(255, green(pointColor) + point.openness * 45),
      min(255, blue(pointColor) + point.openness * 55),
    );

    circle(point.x, point.y, size);
  }
}

function drawBalls() {
  noStroke();

  for (const ball of balls) {
    const size = pointSize + (ball.influence - minInfluence) * 2;
    const ballColor = getOpinionColor(ball.opinion);
    drawGlow(ball.x, ball.y, size, ballColor, 14 + ball.influence * 3);
    fill(red(ballColor), green(ballColor), blue(ballColor));
    circle(ball.x, ball.y, size);
  }
}

function drawBackground() {
  background(2, 4, 5);
  noStroke();

  for (let i = 0; i < 60; i += 1) {
    const x = (i * 89 + frameCount * 0.12) % width;
    const y = (i * 53 + sin(frameCount * 0.01 + i) * 12 + height) % height;
    fill(20, 36, 34, 36);
    circle(x, y, 1.2);
  }
}

function updateEffects() {
  trails = trails
    .map((trail) => ({ ...trail, life: trail.life - 1 }))
    .filter((trail) => trail.life > 0);

  ripples = ripples
    .map((ripple) => ({ ...ripple, age: ripple.age + 1 }))
    .filter((ripple) => ripple.age < ripple.maxAge);
}

function addTrail(x1, y1, x2, y2) {
  trails.push({
    x1,
    y1,
    x2,
    y2,
    life: 24,
    maxLife: 24,
  });

  if (trails.length > 420) {
    trails.shift();
  }
}

function drawTrails() {
  for (const trail of trails) {
    const alpha = (trail.life / trail.maxLife) * 115;
    stroke(190, 255, 222, alpha);
    strokeWeight(1.4);
    line(trail.x1, trail.y1, trail.x2, trail.y2);
  }
}

function drawEdgeMemory() {
  for (const [edgeKey, state] of edgeStates) {
    if (state.memory <= 0.02) {
      continue;
    }

    const [aId, bId] = edgeKey.split(":");
    const a = getPointById(aId);
    const b = getPointById(bId);

    if (!a || !b) {
      continue;
    }

    const alpha = state.memory * (35 + state.affinity * 70);
    const weight = 0.5 + state.memory * 1.8;

    if (a.opinion === b.opinion) {
      stroke(184, 255, 214, alpha);
    } else {
      stroke(130, 160, 172, alpha * 0.55);
    }

    strokeWeight(weight);
    line(a.x, a.y, b.x, b.y);
  }
}

function drawRipples() {
  noFill();

  for (const ripple of ripples) {
    const progress = ripple.age / ripple.maxAge;
    const alpha = (1 - progress) * 150;
    const radius = 5 + progress * 34;

    const rippleColor = getOpinionColor(ripple.opinion);
    stroke(red(rippleColor), green(rippleColor), blue(rippleColor), alpha);

    strokeWeight(1.2);
    circle(ripple.x, ripple.y, radius);
  }
}

function getOpinionColor(opinion) {
  if (opinion === "A") {
    return color(255, 188, 105);
  }

  if (opinion === "B") {
    return color(91, 226, 208);
  }

  return color(204, 126, 255);
}

function drawGlow(x, y, size, glowColor, radius) {
  noStroke();

  for (let i = 3; i >= 1; i -= 1) {
    const alpha = 22 / i;
    fill(red(glowColor), green(glowColor), blue(glowColor), alpha);
    circle(x, y, size + radius * i * 0.45);
  }
}

function getPointById(id) {
  return pointById.get(id);
}

function getEdgeKey(a, b) {
  return [a, b].sort().join(":");
}

function getEdgeState(a, b) {
  const edgeKey = getEdgeKey(a, b);

  if (!edgeStates.has(edgeKey)) {
    edgeStates.set(edgeKey, {
      affinity: 0.5,
      memory: 0,
    });
  }

  return edgeStates.get(edgeKey);
}

function getHexPoints(cx, cy) {
  const points = [];

  for (let i = 0; i < 6; i += 1) {
    const angle = (TWO_PI / 6) * i;
    points.push({
      x: cx + cos(angle) * tileRadius,
      y: cy + sin(angle) * tileRadius,
    });
  }

  return points;
}
