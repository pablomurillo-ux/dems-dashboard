import './Alert.css';

type AlertType = 'neutral' | 'info' | 'error' | 'success' | 'warning';

interface AlertProps {
  type?: AlertType;
  title: string;
  description?: string;
  linkLabel?: string;
  onLinkClick?: () => void;
  onClose?: () => void;
  className?: string;
}

const icons: Record<AlertType, React.ReactNode> = {
  neutral: (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <line x1="10" y1="2.5" x2="10" y2="4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="15.5" x2="10" y2="17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="2.5" y1="10" x2="4.5" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="15.5" y1="10" x2="17.5" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  info: (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 9v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="6.5" r="0.75" fill="currentColor" />
    </svg>
  ),
  error: (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.5 7.5l5 5M12.5 7.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  success: (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 10.5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 7v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="13.5" r="0.75" fill="currentColor" />
    </svg>
  ),
};

export function Alert({
  type = 'neutral',
  title,
  description,
  linkLabel,
  onLinkClick,
  onClose,
  className,
}: AlertProps) {
  const classes = ['alert', `alert-${type}`, className].filter(Boolean).join(' ');

  return (
    <div className={classes} role="alert">
      <span className={`alert-icon alert-icon-${type}`} aria-hidden>
        {icons[type]}
      </span>

      <div className="alert-body">
        <span className="alert-title">{title}</span>
        {description && <span className="alert-description">{description}</span>}
        {linkLabel && (
          <button className="alert-link" onClick={onLinkClick}>
            {linkLabel}
            <span className="alert-link-icon" aria-hidden>
              <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 11.5L11.5 4.5M11.5 4.5H6.5M11.5 4.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        )}
      </div>

      {onClose && (
        <button className="alert-close" onClick={onClose} aria-label="Dismiss">
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  );
}
