import './Avatar.css';

interface AvatarProps {
  size?: 'lg' | 'md' | 'sm' | 'xs';
  src?: string;
  initials?: string;
  hasNotification?: boolean;
  disabled?: boolean;
  alt?: string;
  className?: string;
}

export function Avatar({
  size = 'md',
  src,
  initials = 'VT',
  hasNotification = false,
  disabled = false,
  alt = '',
  className,
}: AvatarProps) {
  const hasImage = Boolean(src);

  const classes = [
    'avatar',
    `avatar-${size}`,
    !hasImage ? 'avatar-initials' : '',
    disabled ? 'avatar-disabled' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {hasImage && <img className="avatar-image" src={src} alt={alt} />}
      {!hasImage && <span className="avatar-initials-text">{initials}</span>}
      {hasNotification && <span className="avatar-notification" aria-label="Notification" />}
    </div>
  );
}
