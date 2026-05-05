import { memo } from 'react';
import { LinkCard } from './LinkCard';

type Props = {
  repoName: string;
  owner?: string;
  description?: string;
};

export const GitHubProjectCard = memo(function GitHubProjectCard({
  repoName,
  description = '',
  owner = 'pocket7878',
}: Props) {
  return (
    <LinkCard
      href={`https://github.com/${owner}/${repoName}`}
      title={repoName}
      description={description}
    />
  );
});
