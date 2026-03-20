import './Tooltip.css';

export type TooltipPointer = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps {
  label?: string;
  pointer?: TooltipPointer;
  className?: string;
}

export function Tooltip({
  label = 'Tooltip text',
  pointer = 'top',
  className,
}: TooltipProps) {
  const classes = [
    'tooltip',
    `tooltip-${pointer}`,
    className ?? '',
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className="tooltip-arrow" />
      <div className="tooltip-content">{label}</div>
    </div>
  );
}
