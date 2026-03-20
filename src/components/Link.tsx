import './Link.css';

export type LinkType = 'neutral' | 'brand' | 'error';

interface LinkProps {
  label?: string;
  type?: LinkType;
  disabled?: boolean;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const PlusIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export function Link({
  label = 'Link label',
  type = 'neutral',
  disabled = false,
  hasLeftIcon = true,
  hasRightIcon = true,
  leftIcon,
  rightIcon,
  href,
  onClick,
  className,
}: LinkProps) {
  const classes = [
    'link',
    `link-${type}`,
    disabled ? 'link-disabled' : '',
    className ?? '',
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {hasLeftIcon && (
        <span className="link-icon" aria-hidden>{leftIcon ?? <PlusIcon />}</span>
      )}
      <span className="link-text">{label}</span>
      {hasRightIcon && (
        <span className="link-icon" aria-hidden>{rightIcon ?? <PlusIcon />}</span>
      )}
    </>
  );

  if (href && !disabled) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
