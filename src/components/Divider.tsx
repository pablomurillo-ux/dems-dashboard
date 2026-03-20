import './Divider.css';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export function Divider({ orientation = 'horizontal', className }: DividerProps) {
  return (
    <div
      className={[
        'divider',
        orientation === 'vertical' ? 'divider-vertical' : 'divider-horizontal',
        className ?? '',
      ].filter(Boolean).join(' ')}
      role="separator"
      aria-orientation={orientation}
    />
  );
}
