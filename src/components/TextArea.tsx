import { type ReactNode } from 'react';
import './TextArea.css';

// ── Icons ─────────────────────────────────────────────────────────────────────

function NotchesIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 10l-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M13 6l-7 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

interface TextAreaProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  rows?: number;
  className?: string;
}

export function TextArea({
  placeholder = 'Input placeholder',
  value,
  onChange,
  error = false,
  disabled = false,
  icon,
  rows = 5,
  className,
}: TextAreaProps) {
  const filled = Boolean(value);

  const wrapperClasses = [
    'textarea-wrapper',
    filled  ? 'textarea-wrapper-filled' : '',
    error   ? 'textarea-wrapper-error'  : '',
    disabled ? 'textarea-wrapper-disabled' : '',
    className ?? '',
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClasses}>
      {icon && <span className="textarea-icon">{icon}</span>}
      <textarea
        className="textarea-field"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        rows={rows}
        onChange={(e) => onChange?.(e.target.value)}
      />
      <span className="textarea-resize">
        <NotchesIcon />
      </span>
    </div>
  );
}
