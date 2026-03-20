import './Skeleton.css';

export type SkeletonType = 'text' | 'button' | 'input' | 'container' | 'avatar';

interface SkeletonProps {
  type?: SkeletonType;
  className?: string;
}

export function Skeleton({ type = 'text', className }: SkeletonProps) {
  const classes = [
    'skeleton',
    `skeleton-${type}`,
    className ?? '',
  ].filter(Boolean).join(' ');

  return <div className={classes} aria-hidden="true" />;
}
