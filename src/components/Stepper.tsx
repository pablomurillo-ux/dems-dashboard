import './Stepper.css';

// ── Icons ─────────────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WarningCircleIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="6" r="5" stroke="white" strokeWidth="1.2" />
      <path d="M6 3.5v3" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="6" cy="8.5" r="0.6" fill="white" />
    </svg>
  );
}

// ── Types ─────────────────────────────────────────────────────────────────────

export type StepState = 'current' | 'next' | 'error' | 'current-error' | 'completed';
export type StepperOrientation = 'horizontal' | 'vertical';

export interface StepOption {
  state: StepState;
  title?: string;
  description?: string;
  hasTitle?: boolean;
  hasDescription?: boolean;
}

// ── Circle ────────────────────────────────────────────────────────────────────

function StepCircle({ state }: { state: StepState }) {
  return (
    <div className={`step-circle step-circle-${state}`}>
      {state === 'current'       && <div className="step-dot step-dot-brand" />}
      {state === 'current-error' && <div className="step-dot step-dot-error" />}
      {state === 'error'         && <WarningCircleIcon />}
      {state === 'completed'     && <CheckIcon />}
    </div>
  );
}

// ── StepItem ──────────────────────────────────────────────────────────────────

interface StepItemProps {
  state: StepState;
  title?: string;
  description?: string;
  hasTitle?: boolean;
  hasDescription?: boolean;
  showDivider?: boolean;
  orientation: StepperOrientation;
}

function StepItem({
  state,
  title = 'Title',
  description = 'Description',
  hasTitle = true,
  hasDescription = true,
  showDivider = true,
  orientation,
}: StepItemProps) {
  if (orientation === 'horizontal') {
    return (
      <div className="step-horizontal">
        <div className="step-track-horizontal">
          <StepCircle state={state} />
          {showDivider && <div className="step-connector-horizontal" />}
        </div>
        <div className="step-content step-content-horizontal">
          {hasTitle && <span className="step-title">{title}</span>}
          {hasDescription && <span className="step-description">{description}</span>}
        </div>
      </div>
    );
  }

  return (
    <div className="step-vertical">
      <div className="step-track-vertical">
        <StepCircle state={state} />
        {showDivider && <div className="step-connector-vertical" />}
      </div>
      <div className="step-content step-content-vertical">
        {hasTitle && <span className="step-title">{title}</span>}
        {hasDescription && <span className="step-description">{description}</span>}
      </div>
    </div>
  );
}

// ── Stepper ───────────────────────────────────────────────────────────────────

interface StepperProps {
  steps: StepOption[];
  orientation?: StepperOrientation;
  className?: string;
}

export function Stepper({ steps, orientation = 'horizontal', className }: StepperProps) {
  const classes = [
    orientation === 'horizontal' ? 'stepper-horizontal' : 'stepper-vertical',
    className ?? '',
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {steps.map((step, i) => (
        <StepItem
          key={i}
          state={step.state}
          title={step.title}
          description={step.description}
          hasTitle={step.hasTitle}
          hasDescription={step.hasDescription}
          showDivider={i < steps.length - 1}
          orientation={orientation}
        />
      ))}
    </div>
  );
}
