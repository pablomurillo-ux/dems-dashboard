import './AvatarGroup.css';

interface AvatarGroupProps {
  /** Avatar image sources to display */
  avatars: { src: string; alt?: string }[];
  /** Max avatars to show before showing overflow count */
  max?: number;
  size?: 'xs' | 'sm' | 'md';
  className?: string;
}

export function AvatarGroup({ avatars, max = 3, size = 'xs', className }: AvatarGroupProps) {
  const visible = avatars.slice(0, max);
  const overflow = avatars.length - visible.length;

  const classes = ['avatar-group', `avatar-group-${size}`, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className="avatar-group-stack">
        {visible.map((avatar, i) => (
          <div key={i} className="avatar-group-item">
            <img src={avatar.src} alt={avatar.alt ?? ''} />
          </div>
        ))}
      </div>
      {overflow > 0 && (
        <span className="avatar-group-count">+{overflow}</span>
      )}
    </div>
  );
}
