import { ReactNode } from 'react';
import './Popover.css';

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export type PopoverPointer = 'top' | 'bottom' | 'left' | 'right';
export type PopoverSize    = 'sm' | 'md' | 'lg';

interface PopoverProps {
  title?: string;
  description?: string;
  size?: PopoverSize;
  pointer?: PopoverPointer;
  hasPointer?: boolean;
  hasTitle?: boolean;
  hasDescription?: boolean;
  hasActions?: boolean;
  hasPrimaryButton?: boolean;
  hasSecondaryButton?: boolean;
  showX?: boolean;
  children?: ReactNode;
  primaryLabel?: string;
  secondaryLabel?: string;
  onDismiss?: () => void;
  onPrimary?: () => void;
  onSecondary?: () => void;
  className?: string;
}

export function Popover({
  title = 'Title',
  description = 'In the heart of the bustling city, where dreams intertwine with reality, lies a vibrant community filled with creativity and innovation.',
  size = 'md',
  pointer = 'top',
  hasPointer = true,
  hasTitle = true,
  hasDescription = true,
  hasActions = true,
  hasPrimaryButton = true,
  hasSecondaryButton = true,
  showX = true,
  children,
  primaryLabel = 'Button label',
  secondaryLabel = 'Link button',
  onDismiss,
  onPrimary,
  onSecondary,
  className,
}: PopoverProps) {
  const wrapClasses = [
    'popover',
    `popover-${pointer}`,
    className ?? '',
  ].filter(Boolean).join(' ');

  const cardClasses = ['popover-card', `popover-${size}`].join(' ');

  const arrow = hasPointer ? <div className="popover-arrow" /> : null;

  const card = (
    <div className={cardClasses}>
      {(hasTitle || showX) && (
        <div className="popover-header">
          {hasTitle && <span className="popover-title">{title}</span>}
          {showX && (
            <button className="popover-close" onClick={onDismiss} aria-label="Close">
              <XIcon />
            </button>
          )}
        </div>
      )}
      {hasDescription && (
        <p className="popover-description">{description}</p>
      )}
      {children !== undefined
        ? children
        : <div className="popover-slot">swap slot</div>
      }
      {hasActions && (
        <div className="popover-footer">
          <div>
            {hasSecondaryButton && (
              <button className="popover-btn-secondary" onClick={onSecondary}>
                {secondaryLabel}
              </button>
            )}
          </div>
          <div>
            {hasPrimaryButton && (
              <button className="popover-btn-primary" onClick={onPrimary}>
                {primaryLabel}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className={wrapClasses}>
      {arrow}
      {card}
    </div>
  );
}
