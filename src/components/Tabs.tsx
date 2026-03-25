import { type ReactNode } from 'react';
import './Tabs.css';

// ── Icons ─────────────────────────────────────────────────────────────────────

function CaretDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2.5 13.5c0-2.485 2.462-4.5 5.5-4.5s5.5 2.015 5.5 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

// ── TabItem ───────────────────────────────────────────────────────────────────

export type TabType = 'underline' | 'segment';

interface TabItemProps {
  label?: string;
  active?: boolean;
  disabled?: boolean;
  type?: TabType;
  iconLeft?: ReactNode | boolean;
  iconRight?: ReactNode | boolean;
  badge?: string;
  onClick?: () => void;
  className?: string;
}

export function TabItem({
  label = 'Label',
  active = false,
  disabled = false,
  type = 'underline',
  iconLeft = true,
  iconRight = false,
  badge,
  onClick,
  className,
}: TabItemProps) {
  const classes = [
    'tab-item',
    `tab-item-${type}`,
    active ? 'tab-item-active' : '',
    className ?? '',
  ].filter(Boolean).join(' ');

  const leftIcon = iconLeft === true ? <UserIcon /> : iconLeft || null;
  const rightIcon = iconRight === true ? <UserIcon /> : iconRight || null;

  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {leftIcon && <span className="tab-item-icon">{leftIcon}</span>}
      {label && <span>{label}</span>}
      {rightIcon && <span className="tab-item-icon">{rightIcon}</span>}
      {badge && <span className="tab-item-badge">{badge}</span>}
    </button>
  );
}

// ── Tabs ──────────────────────────────────────────────────────────────────────

export interface TabOption {
  value: string;
  label: string;
  disabled?: boolean;
  badge?: string;
  iconLeft?: ReactNode | boolean;
  iconRight?: ReactNode | boolean;
}

interface TabsProps {
  options: TabOption[];
  value?: string;
  type?: TabType;
  showMore?: boolean;
  onChange?: (value: string) => void;
  className?: string;
}

export function Tabs({
  options,
  value,
  type = 'underline',
  showMore = false,
  onChange,
  className,
}: TabsProps) {
  const barClass = [
    type === 'underline' ? 'tabs-underline' : 'tabs-segment',
    className ?? '',
  ].filter(Boolean).join(' ');

  return (
    <div className={barClass} role="tablist">
      {options.map((opt) => (
        <TabItem
          key={opt.value}
          label={opt.label}
          active={value === opt.value}
          disabled={opt.disabled}
          type={type}
          iconLeft={opt.iconLeft ?? true}
          iconRight={opt.iconRight ?? false}
          badge={opt.badge}
          onClick={() => !opt.disabled && onChange?.(opt.value)}
        />
      ))}
      {showMore && type === 'underline' && (
        <TabItem
          label="More"
          type="underline"
          iconLeft={false}
          iconRight={<CaretDownIcon />}
        />
      )}
    </div>
  );
}
