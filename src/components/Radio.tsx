import './Radio.css';

// ── Single Radio ──────────────────────────────────────────────────────────────

interface RadioProps {
  label?: string;
  checked?: boolean;
  error?: boolean;
  disabled?: boolean;
  hasLabel?: boolean;
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
  id?: string;
  className?: string;
}

export function Radio({
  label = 'label',
  checked = false,
  error = false,
  disabled = false,
  hasLabel = true,
  name,
  value,
  onChange,
  id,
  className,
}: RadioProps) {
  const classes = [
    'radio',
    error    ? 'radio-error'    : '',
    disabled ? 'radio-disabled' : '',
    className ?? '',
  ].filter(Boolean).join(' ');

  return (
    <label className={classes} htmlFor={id}>
      <input
        id={id}
        className="radio-input"
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange?.(value ?? '')}
      />
      <span className={['radio-circle', checked ? (error ? 'radio-circle-checked-error' : 'radio-circle-checked') : ''].filter(Boolean).join(' ')} />
      {hasLabel && <span className="radio-label">{label}</span>}
    </label>
  );
}

// ── Radio Group ───────────────────────────────────────────────────────────────

interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  error?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
  className?: string;
}

export function RadioGroup({
  name,
  options,
  value,
  error = false,
  disabled = false,
  onChange,
  className,
}: RadioGroupProps) {
  return (
    <div className={['radio-group', className ?? ''].filter(Boolean).join(' ')} role="radiogroup">
      {options.map((opt) => (
        <Radio
          key={opt.value}
          id={`${name}-${opt.value}`}
          name={name}
          label={opt.label}
          value={opt.value}
          checked={value === opt.value}
          error={error}
          disabled={disabled || opt.disabled}
          onChange={onChange}
        />
      ))}
    </div>
  );
}
