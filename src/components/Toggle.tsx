import './Toggle.css';

interface ToggleProps {
  checked?: boolean;
  disabled?: boolean;
  hasLabel?: boolean;
  label?: string;
  onChange?: (checked: boolean) => void;
  id?: string;
  className?: string;
}

export function Toggle({
  checked = false,
  disabled = false,
  hasLabel = true,
  label = 'Label',
  onChange,
  id,
  className,
}: ToggleProps) {
  const classes = [
    'toggle',
    disabled ? 'toggle-disabled' : '',
    className ?? '',
  ].filter(Boolean).join(' ');

  return (
    <label className={classes} htmlFor={id}>
      <input
        id={id}
        className="toggle-input"
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <span className={['toggle-track', checked ? 'toggle-track-on' : ''].filter(Boolean).join(' ')} />
      {hasLabel && <span className="toggle-label">{label}</span>}
    </label>
  );
}
