import React, { memo } from 'react';
import { LinkCard } from './LinkCard';

type Props = {
  title: string;
  description?: string;
  url?: string;
};

export const GitHubLinkPlaygroundCard = memo(function GitHubLinkPlaygroundCard({
  title,
  description = '',
  url,
}: Props) {
  return (
    <LinkCard href={url}>
      <h2>{title}</h2>
      <p>{description}</p>
    </LinkCard>
  );
});
