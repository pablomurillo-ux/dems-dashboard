import './Chip.css';

interface ChipProps {
  label: string;
  icon?: React.ReactNode;
  category?: string;
  advanced?: boolean;
  error?: boolean;
  disabled?: boolean;
  onDismiss?: () => void;
  onDropdown?: () => void;
  className?: string;
}

const XIcon = () => (
  <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
    <path d="M9 3L3 9M3 3l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const CaretDownIcon = () => (
  <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
    <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function Chip({
  label,
  icon,
  category,
  advanced = false,
  error = false,
  disabled = false,
  onDismiss,
  onDropdown,
  className,
}: ChipProps) {
  const classes = [
    'chip',
    error ? 'chip-error' : '',
    disabled ? 'chip-disabled' : '',
    advanced ? 'chip-advanced' : 'chip-simple',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  if (advanced) {
    return (
      <button
        type="button"
        className={classes}
        disabled={disabled}
        onClick={onDropdown}
        aria-haspopup="listbox"
      >
        {icon && <span className="chip-icon" aria-hidden>{icon}</span>}
        {category && (
          <>
            <span className="chip-category">{category}</span>
            <span className="chip-colon" aria-hidden>:</span>
          </>
        )}
        <span className="chip-label">{label}</span>
        <span className="chip-caret" aria-hidden><CaretDownIcon /></span>
      </button>
    );
  }

  return (
    <span className={classes}>
      {icon && <span className="chip-icon" aria-hidden>{icon}</span>}
      <span className="chip-label">{label}</span>
      {onDismiss && (
        <button
          type="button"
          className="chip-dismiss"
          onClick={onDismiss}
          disabled={disabled}
          aria-label={`Remove ${label}`}
        >
          <XIcon />
        </button>
      )}
    </span>
  );
}
