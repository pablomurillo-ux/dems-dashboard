import { useState } from 'react';
import './Accordion.css';

interface AccordionProps {
  title: string;
  description?: React.ReactNode;
  defaultExpanded?: boolean;
  expanded?: boolean;
  onToggle?: (expanded: boolean) => void;
  className?: string;
}

export function Accordion({
  title,
  description,
  defaultExpanded = false,
  expanded: controlledExpanded,
  onToggle,
  className,
}: AccordionProps) {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);

  const isControlled = controlledExpanded !== undefined;
  const isExpanded = isControlled ? controlledExpanded : internalExpanded;

  function handleToggle() {
    if (!isControlled) setInternalExpanded((prev) => !prev);
    onToggle?.(!isExpanded);
  }

  return (
    <div
      className={['accordion', className].filter(Boolean).join(' ')}
      data-expanded={isExpanded}
    >
      <button className="accordion-trigger" onClick={handleToggle} aria-expanded={isExpanded}>
        <span className="accordion-title">{title}</span>
        <span className="accordion-chevron" aria-hidden>
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div className="accordion-body" aria-hidden={!isExpanded}>
        {description && <p className="accordion-description">{description}</p>}
      </div>
    </div>
  );
}
