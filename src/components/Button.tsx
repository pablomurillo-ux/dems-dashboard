import './Button.css';

type ButtonVariant =
  | 'filled'
  | 'ghost'
  | 'clear'
  | 'link'
  | 'info'
  | 'success'
  | 'error'
  | 'onPrimary'
  | 'onSecondary';

type ButtonSize = 'md' | 'sm' | 'xs';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconOnly?: boolean;
  label?: string;
}

export function Button({
  variant = 'filled',
  size = 'md',
  leftIcon,
  rightIcon,
  iconOnly = false,
  label = 'Button label',
  className,
  disabled,
  children,
  ...rest
}: ButtonProps) {
  const classes = [
    'btn',
    `btn-${size}`,
    `btn-${variant}`,
    iconOnly ? 'btn-icon-only' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} disabled={disabled} {...rest}>
      {leftIcon && <span className="btn-icon">{leftIcon}</span>}
      {!iconOnly && <span>{children ?? label}</span>}
      {rightIcon && <span className="btn-icon">{rightIcon}</span>}
    </button>
  );
}
