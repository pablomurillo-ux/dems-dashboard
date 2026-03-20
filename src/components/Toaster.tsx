import './Toaster.css';

// ── Icons ─────────────────────────────────────────────────────────────────────

function CheckCircleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="#0b8437" strokeWidth="1.5" />
      <path d="M8 12l3 3 5-5" stroke="#0b8437" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="#1d6ec5" strokeWidth="1.5" />
      <path d="M12 11v5" stroke="#1d6ec5" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="8.5" r="0.75" fill="#1d6ec5" />
    </svg>
  );
}

function WarningCircleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="#d93636" strokeWidth="1.5" />
      <path d="M12 8v5" stroke="#d93636" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="15.5" r="0.75" fill="#d93636" />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4L21.5 20H2.5L12 4Z" stroke="#c88904" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 10v4" stroke="#c88904" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="16.5" r="0.75" fill="#c88904" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ── Types ─────────────────────────────────────────────────────────────────────

export type ToasterType = 'success' | 'info' | 'error' | 'warning' | 'neutral' | 'white';

interface ToasterProps {
  type?: ToasterType;
  labelText?: string;
  onDismiss?: () => void;
  className?: string;
}

const ICONS: Record<ToasterType, React.ReactNode> = {
  success: <CheckCircleIcon />,
  info:    <InfoIcon />,
  error:   <WarningCircleIcon />,
  warning: <WarningIcon />,
  neutral: null,
  white:   null,
};

export function Toaster({
  type = 'success',
  labelText = 'This a toast text',
  onDismiss,
  className,
}: ToasterProps) {
  const icon = ICONS[type];
  const classes = [
    'toaster',
    `toaster-${type}`,
    className ?? '',
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {icon && <span className="toaster-icon">{icon}</span>}
      <span className="toaster-text">{labelText}</span>
      <button className="toaster-dismiss" onClick={onDismiss} aria-label="Dismiss">
        <XIcon />
      </button>
    </div>
  );
}
