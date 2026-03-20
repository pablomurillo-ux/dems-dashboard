import { ReactNode } from 'react';
import './Tag.css';

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export type TagState = 'success' | 'info' | 'error' | 'warning' | 'pink' | 'purple' | 'gray';
export type TagType  = 'filled' | 'outline' | 'text';

interface TagProps {
  label?: string;
  state?: TagState;
  type?: TagType;
  showIconLeft?: boolean;
  showIconRight?: boolean;
  showLabel?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
}

export function Tag({
  label = 'Tag',
  state = 'success',
  type = 'filled',
  showIconLeft = true,
  showIconRight = false,
  showLabel = true,
  iconLeft,
  iconRight,
  className,
}: TagProps) {
  const classes = [
    'tag',
    `tag-${state}`,
    `tag-${type}`,
    className ?? '',
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {showIconLeft && (
        <span className="tag-icon">
          {iconLeft ?? <CheckIcon />}
        </span>
      )}
      {showLabel && <span>{label}</span>}
      {showIconRight && (
        <span className="tag-icon">
          {iconRight ?? <CheckIcon />}
        </span>
      )}
    </div>
  );
}
