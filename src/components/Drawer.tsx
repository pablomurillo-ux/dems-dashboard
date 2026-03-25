import { type ReactNode } from 'react';
import { Button } from './Button';
import { Tag } from './Tag';
import type { TagState } from './Tag';
import './Drawer.css';

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 5L9 10L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface DrawerProps {
  open?: boolean;
  title?: string;
  hasTitle?: boolean;
  hasLeftHeaderIcon?: boolean;
  hasRightHeaderIcon?: boolean;
  hasTag?: boolean;
  tagLabel?: string;
  tagState?: TagState;
  hasFooter?: boolean;
  hasPrimaryAction?: boolean;
  hasSecondaryAction?: boolean;
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  onClose?: () => void;
  onBack?: () => void;
  children?: ReactNode;
  className?: string;
}

export function Drawer({
  open = true,
  title = 'Title of the drawer',
  hasTitle = true,
  hasLeftHeaderIcon = false,
  hasRightHeaderIcon = true,
  hasTag = false,
  tagLabel = 'Tag',
  tagState = 'success',
  hasFooter = true,
  hasPrimaryAction = true,
  hasSecondaryAction = true,
  primaryLabel = 'Button label',
  secondaryLabel = 'Button label',
  onPrimaryAction,
  onSecondaryAction,
  onClose,
  onBack,
  children,
  className,
}: DrawerProps) {
  if (!open) return null;

  return (
    <>
      <div className="drawer-overlay" onClick={onClose} aria-hidden="true" />
      <div
        className={['drawer', className ?? ''].filter(Boolean).join(' ')}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        {/* Header */}
        <div className="drawer-header">
          {hasLeftHeaderIcon && (
            <button className="drawer-icon-btn" aria-label="Back" onClick={onBack}>
              <BackIcon />
            </button>
          )}
          {hasTitle && <h2 className="drawer-title">{title}</h2>}
          {hasTag && (
            <Tag label={tagLabel} state={tagState} type="filled" showIconLeft={false} />
          )}
          {hasRightHeaderIcon && (
            <button className="drawer-icon-btn drawer-close-btn" aria-label="Close drawer" onClick={onClose}>
              <CloseIcon />
            </button>
          )}
        </div>

        {/* Body */}
        <div className="drawer-body">
          {children}
        </div>

        {/* Footer */}
        {hasFooter && (
          <div className="drawer-footer">
            {hasSecondaryAction && (
              <Button variant="info" size="md" label={secondaryLabel} onClick={onSecondaryAction} className="drawer-footer-btn" />
            )}
            {hasPrimaryAction && (
              <Button variant="filled" size="md" label={primaryLabel} onClick={onPrimaryAction} className="drawer-footer-btn" />
            )}
          </div>
        )}
      </div>
    </>
  );
}
