import { type ReactNode } from 'react';
import { Avatar } from './Avatar';
import './UserCard.css';

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

interface UserCardProps {
  name?: string;
  email?: string;
  avatarSrc?: string;
  icon?: ReactNode;
  onIconClick?: () => void;
  className?: string;
}

export function UserCard({
  name = 'John Smith',
  email = 'john_smith_234115@gmail.com',
  avatarSrc,
  icon,
  onIconClick,
  className,
}: UserCardProps) {
  const classes = ['user-card', className ?? ''].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <Avatar size="md" src={avatarSrc} hasNotification={false} />
      <div className="user-card-text">
        <span className="user-card-name">{name}</span>
        <span className="user-card-email">{email}</span>
      </div>
      <button className="user-card-action" aria-label="Add user" onClick={onIconClick}>
        {icon ?? <PlusIcon />}
      </button>
    </div>
  );
}
