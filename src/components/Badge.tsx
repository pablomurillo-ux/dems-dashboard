import './Badge.css';

interface BadgeProps {
  type?: 'counter' | 'dot';
  label?: string;
  className?: string;
}

export function Badge({ type = 'counter', label = '99+', className }: BadgeProps) {
  if (type === 'dot') {
    return <span className={['badge-dot', className ?? ''].filter(Boolean).join(' ')} aria-hidden />;
  }

  return (
    <span className={['badge-counter', className ?? ''].filter(Boolean).join(' ')}>
      {label}
    </span>
  );
}
