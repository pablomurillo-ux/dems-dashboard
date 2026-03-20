import './Label.css';

interface LabelProps {
  label?: string;
  size?: 'md' | 'sm' | 'xs';
  icon?: React.ReactNode;
  hasIcon?: boolean;
  className?: string;
}

const PlusIcon = ({ size }: { size: number }) => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export function Label({ label = 'Label', size = 'md', icon, hasIcon = true, className }: LabelProps) {
  const iconSize = size === 'xs' ? 12 : 16;
  const resolvedIcon = icon ?? <PlusIcon size={iconSize} />;

  return (
    <div className={['label', `label-${size}`, className ?? ''].filter(Boolean).join(' ')}>
      {hasIcon && <span className="label-icon" aria-hidden>{resolvedIcon}</span>}
      <span className="label-text">{label}</span>
    </div>
  );
}
