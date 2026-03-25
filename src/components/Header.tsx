import { type ReactNode } from 'react';
import { Tag } from './Tag';
import type { TagState } from './Tag';
import './Header.css';

function SidebarIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 4v20" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 4a7 7 0 00-7 7v5l-2 2v1h18v-1l-2-2v-5a7 7 0 00-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 22a2 2 0 004 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

interface HeaderProps {
  title?: string;
  hasTag?: boolean;
  tagLabel?: string;
  tagState?: TagState;
  hasNotification?: boolean;
  notificationCount?: number;
  hasAvatar?: boolean;
  avatarSrc?: string;
  avatarAlt?: string;
  onMenuClick?: () => void;
  onNotificationClick?: () => void;
  onAvatarClick?: () => void;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  className?: string;
}

export function Header({
  title = 'Agency Name',
  hasTag = true,
  tagLabel = 'Tag',
  tagState = 'success',
  hasNotification = true,
  notificationCount = 4,
  hasAvatar = true,
  avatarSrc,
  avatarAlt = 'User avatar',
  onMenuClick,
  onNotificationClick,
  onAvatarClick,
  leftSlot,
  rightSlot,
  className,
}: HeaderProps) {
  const classes = ['header', className ?? ''].filter(Boolean).join(' ');

  return (
    <header className={classes}>
      {/* Left */}
      <div className="header-left">
        <button className="header-icon-btn" aria-label="Toggle sidebar" onClick={onMenuClick}>
          <SidebarIcon />
        </button>
        <h1 className="header-title">{title}</h1>
        {leftSlot}
      </div>

      {/* Right */}
      <div className="header-right">
        {rightSlot}
        {hasTag && (
          <Tag label={tagLabel} state={tagState} type="filled" showIconLeft={true} />
        )}
        {hasNotification && (
          <div className="header-notification-wrap">
            <button className="header-icon-btn" aria-label="Notifications" onClick={onNotificationClick}>
              <BellIcon />
            </button>
            {notificationCount > 0 && (
              <span className="header-badge" aria-label={`${notificationCount} notifications`}>
                {notificationCount}
              </span>
            )}
          </div>
        )}
        {hasAvatar && (
          <button className="header-avatar-btn" aria-label="User menu" onClick={onAvatarClick}>
            {avatarSrc
              ? <img src={avatarSrc} alt={avatarAlt} className="header-avatar-img" />
              : <div className="header-avatar-placeholder" aria-hidden="true" />
            }
          </button>
        )}
      </div>
    </header>
  );
}
