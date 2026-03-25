import { type ReactNode } from 'react';
import { Tag } from './Tag';
import type { TagState } from './Tag';
import { Button } from './Button';
import { Breadcrumb } from './Breadcrumb';
import { AvatarGroup } from './AvatarGroup';
import './Subheader.css';

export type SubheaderType = 'subheader' | 'breadcrumbs';

interface SubheaderProps {
  type?: SubheaderType;
  title?: string;
  description?: string;
  hasTitle?: boolean;
  hasDescription?: boolean;
  hasTag?: boolean;
  tagLabel?: string;
  tagState?: TagState;
  hasRightSection?: boolean;
  hasAvatars?: boolean;
  avatars?: { src: string; alt?: string }[];
  hasButton?: boolean;
  buttonLabel?: string;
  onButtonClick?: () => void;
  hasBreadcrumbs?: boolean;
  breadcrumbs?: { label: string; href?: string; onClick?: () => void }[];
  rightSlot?: ReactNode;
  className?: string;
}

export function Subheader({
  type = 'subheader',
  title = 'Subheader title',
  description = 'Description',
  hasTitle = true,
  hasDescription = true,
  hasTag = true,
  tagLabel = 'Tag',
  tagState = 'success',
  hasRightSection = true,
  hasAvatars = true,
  avatars = [],
  hasButton = true,
  buttonLabel = 'Button label',
  onButtonClick,
  hasBreadcrumbs = true,
  breadcrumbs = [],
  rightSlot,
  className,
}: SubheaderProps) {
  const classes = ['subheader', `subheader-${type}`, className ?? ''].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {type === 'subheader' && (
        <>
          <div className="subheader-info">
            <div className="subheader-title-row">
              {hasTitle && <span className="subheader-title">{title}</span>}
              {hasTag && (
                <Tag label={tagLabel} state={tagState} type="filled" showIconLeft={true} />
              )}
            </div>
            {hasDescription && (
              <p className="subheader-description">{description}</p>
            )}
          </div>

          {hasRightSection && (
            <div className="subheader-right">
              {hasAvatars && avatars.length > 0 && (
                <AvatarGroup avatars={avatars} size="xs" />
              )}
              {hasButton && (
                <Button variant="filled" size="sm" label={buttonLabel} onClick={onButtonClick} />
              )}
              {rightSlot}
            </div>
          )}
        </>
      )}

      {type === 'breadcrumbs' && hasBreadcrumbs && (
        <Breadcrumb items={breadcrumbs} />
      )}
    </div>
  );
}
