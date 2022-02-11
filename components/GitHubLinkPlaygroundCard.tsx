import React, { memo } from 'react';
import { LinkCard } from './LinkCard';

type Props = {
  repoName: string;
  owner?: string;
  description?: string;
};

export const GitHubLinkPlaygroundCard = memo(function GitHubLinkPlaygroundCard({
  repoName,
  description = '',
  owner = 'pocket7878',
}: Props) {
  return (
    <LinkCard href={`https://github.com/${owner}/${repoName}`}>
      <h2>{repoName}</h2>
      <p>{description}</p>
    </LinkCard>
  );
});
