import { useState } from 'react';
import './InputField.css';

export type InputVariant = 'text' | 'select' | 'search' | 'date' | 'time' | 'password' | 'file';

export interface SelectOption {
  value: string;
  label: string;
}

interface InputFieldProps {
  variant?: InputVariant;
  label?: string;
  placeholder?: string;
  value?: string;
  options?: SelectOption[];
  error?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  className?: string;
  id?: string;
}

// ── Icons ─────────────────────────────────────────────────────────────────────

const CaretDownIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
    <circle cx="7" cy="7" r="4.25" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10.5 10.5L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
    <rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2 7h12" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 1v3M11 1v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
    <circle cx="8" cy="8" r="5.25" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EyeIcon = ({ open }: { open: boolean }) => open ? (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
    <path d="M1.5 8C3 4.5 13 4.5 14.5 8C13 11.5 3 11.5 1.5 8Z" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="8" cy="8" r="1.75" stroke="currentColor" strokeWidth="1.5" />
  </svg>
) : (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
    <path d="M2 2l12 12M6.5 6.7A1.75 1.75 0 009.3 9.5M4.3 4.5C2.5 5.6 1.5 8 1.5 8s2.5 4 6.5 4c1.3 0 2.4-.4 3.3-1M7 3.1C7.3 3 7.7 3 8 3c4 0 6.5 5 6.5 5s-.4.9-1.3 1.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ErrorIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
    <circle cx="8" cy="8" r="6.25" fill="var(--color-bg-error-primary)" />
    <path d="M8 5v3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="8" cy="11" r="0.75" fill="white" />
  </svg>
);

// ── Default labels/placeholders per variant ───────────────────────────────────

const DEFAULTS: Record<InputVariant, { label: string; placeholder: string }> = {
  text:     { label: 'Label',         placeholder: 'Input placeholder' },
  select:   { label: 'Label',         placeholder: 'Select an option' },
  search:   { label: 'Search',        placeholder: 'Type to search...' },
  date:     { label: 'Select a date', placeholder: 'Select a date' },
  time:     { label: 'Select a time', placeholder: 'Select a time' },
  password: { label: 'Password',      placeholder: '··················' },
  file:     { label: 'Upload a file', placeholder: 'Input placeholder' },
};

// ── Component ─────────────────────────────────────────────────────────────────

export function InputField({
  variant = 'text',
  label,
  placeholder,
  value,
  options,
  error,
  disabled = false,
  onChange,
  className,
  id,
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [internalValue, setInternalValue] = useState(value ?? '');

  const defaults = DEFAULTS[variant];
  const resolvedLabel = label ?? defaults.label;
  const resolvedPlaceholder = placeholder ?? defaults.placeholder;
  const controlled = value !== undefined;
  const currentValue = controlled ? value : internalValue;

  function handleChange(val: string) {
    if (!controlled) setInternalValue(val);
    onChange?.(val);
  }

  const boxClass = ['input-box', error ? 'input-box-error' : '', disabled ? 'input-box-disabled' : '']
    .filter(Boolean).join(' ');

  return (
    <div className={['input-field', className ?? ''].filter(Boolean).join(' ')}>
      {/* Label */}
      <label className="input-label" htmlFor={id}>{resolvedLabel}</label>

      {/* Input box */}
      {variant === 'text' && (
        <div className={boxClass}>
          <input
            id={id}
            className="input-control"
            type="text"
            placeholder={resolvedPlaceholder}
            value={currentValue}
            disabled={disabled}
            onChange={e => handleChange(e.target.value)}
          />
        </div>
      )}

      {variant === 'select' && (
        <div className={boxClass}>
          <select
            id={id}
            className="input-control input-select"
            disabled={disabled}
            value={currentValue}
            onChange={e => handleChange(e.target.value)}
          >
            {!currentValue && <option value="" disabled hidden>{resolvedPlaceholder}</option>}
            {options?.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <span className="input-icon input-icon-right"><CaretDownIcon /></span>
        </div>
      )}

      {variant === 'search' && (
        <div className={boxClass}>
          <span className="input-icon input-icon-left"><SearchIcon /></span>
          <input
            id={id}
            className="input-control"
            type="search"
            placeholder={resolvedPlaceholder}
            value={currentValue}
            disabled={disabled}
            onChange={e => handleChange(e.target.value)}
          />
        </div>
      )}

      {variant === 'date' && (
        <div className={boxClass}>
          <input
            id={id}
            className="input-control input-date"
            type="date"
            disabled={disabled}
            value={currentValue}
            onChange={e => handleChange(e.target.value)}
          />
          <span className="input-icon input-icon-right"><CalendarIcon /></span>
        </div>
      )}

      {variant === 'time' && (
        <div className={boxClass}>
          <input
            id={id}
            className="input-control input-date"
            type="time"
            disabled={disabled}
            value={currentValue}
            onChange={e => handleChange(e.target.value)}
          />
          <span className="input-icon input-icon-right"><ClockIcon /></span>
        </div>
      )}

      {variant === 'password' && (
        <div className={boxClass}>
          <input
            id={id}
            className="input-control"
            type={showPassword ? 'text' : 'password'}
            placeholder={resolvedPlaceholder}
            value={currentValue}
            disabled={disabled}
            onChange={e => handleChange(e.target.value)}
          />
          <button
            type="button"
            className="input-icon input-icon-right input-icon-btn"
            onClick={() => setShowPassword(v => !v)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            tabIndex={-1}
          >
            <EyeIcon open={showPassword} />
          </button>
        </div>
      )}

      {variant === 'file' && (
        <label className={[boxClass, 'input-file-label'].join(' ')} htmlFor={id}>
          <span className="input-file-cta">Choose a file</span>
          <span className="input-control input-file-placeholder">{resolvedPlaceholder}</span>
          <input
            id={id}
            className="input-file-hidden"
            type="file"
            disabled={disabled}
            onChange={e => handleChange(e.target.value)}
          />
        </label>
      )}

      {/* Error prompt */}
      {error && (
        <div className="input-error-prompt" role="alert">
          <ErrorIcon />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
