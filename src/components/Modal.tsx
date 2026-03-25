import { type ReactNode } from 'react';
import { Button } from './Button';
import './Modal.css';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl';

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 3.5L3.5 12.5M3.5 3.5l9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function DefaultIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

interface ModalProps {
  open?: boolean;
  size?: ModalSize;
  title?: string;
  headerIcon?: ReactNode;
  hasFooter?: boolean;
  hasSecondaryAction?: boolean;
  hasTertiaryAction?: boolean;
  primaryLabel?: string;
  secondaryLabel?: string;
  tertiaryLabel?: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  onTertiaryAction?: () => void;
  onClose?: () => void;
  children?: ReactNode;
  className?: string;
}

export function Modal({
  open = true,
  size = 'sm',
  title = 'Modal title',
  headerIcon,
  hasFooter = true,
  hasSecondaryAction = true,
  hasTertiaryAction = false,
  primaryLabel = 'Button label',
  secondaryLabel = 'Button label',
  tertiaryLabel = 'Button label',
  onPrimaryAction,
  onSecondaryAction,
  onTertiaryAction,
  onClose,
  children,
  className,
}: ModalProps) {
  if (!open) return null;

  const isSm = size === 'sm';

  return (
    <div className="modal-backdrop" onClick={onClose} aria-hidden="true">
      <div
        className={['modal', `modal-${size}`, className ?? ''].filter(Boolean).join(' ')}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-header-icon">
              {headerIcon ?? <DefaultIcon />}
            </div>
            <h2 className="modal-title">{title}</h2>
          </div>
          <button className="modal-close" aria-label="Close modal" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {children}
        </div>

        {/* Footer */}
        {hasFooter && (
          <div className="modal-footer">
            {!isSm && hasTertiaryAction && (
              <Button variant="link" size="sm" label={tertiaryLabel} onClick={onTertiaryAction} />
            )}
            <div className="modal-footer-right">
              {hasSecondaryAction && (
                <Button variant="info" size="sm" label={secondaryLabel} onClick={onSecondaryAction} />
              )}
              <Button variant="filled" size="sm" label={primaryLabel} onClick={onPrimaryAction} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
