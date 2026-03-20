import { useEffect, useRef } from 'react';
import './Checkbox.css';

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  indeterminate?: boolean;
  error?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  id?: string;
}

export function Checkbox({
  label,
  checked = false,
  indeterminate = false,
  error = false,
  disabled = false,
  onChange,
  className,
  id,
}: CheckboxProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const stateClass = error
    ? indeterminate
      ? 'checkbox-intermediate-error'
      : checked
      ? 'checkbox-checked-error'
      : 'checkbox-unchecked-error'
    : indeterminate
    ? 'checkbox-intermediate'
    : checked
    ? 'checkbox-checked'
    : 'checkbox-unchecked';

  const classes = [
    'checkbox',
    stateClass,
    disabled ? 'checkbox-disabled' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={classes} htmlFor={id}>
      <input
        ref={inputRef}
        id={id}
        className="checkbox-input"
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        aria-checked={indeterminate ? 'mixed' : checked}
      />
      <span className="checkbox-box">
        {(checked || indeterminate) && (
          <span className="checkbox-icon" aria-hidden>
            {indeterminate ? (
              <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </span>
        )}
      </span>
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  );
}
