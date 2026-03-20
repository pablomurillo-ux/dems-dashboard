import { useState, useRef, useEffect } from 'react';
import { Calendar } from './Calendar';
import './DatePicker.css';

// ── Helpers ───────────────────────────────────────────────────────────────────

const MONTHS_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return `${MONTHS_SHORT[m - 1]} ${d}, ${y}`;
}

const CalendarIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
    <rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2 7h12" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 1v3M11 1v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// ── Trigger input look-alike ───────────────────────────────────────────────────

interface TriggerProps {
  label: string;
  value: string;
  placeholder: string;
  open: boolean;
  error?: string;
  onClick: () => void;
}

function Trigger({ label, value, placeholder, open, error, onClick }: TriggerProps) {
  return (
    <div className="dp-field">
      <span className="dp-label">{label}</span>
      <button
        type="button"
        className={['dp-trigger', open ? 'dp-trigger-open' : '', error ? 'dp-trigger-error' : ''].filter(Boolean).join(' ')}
        onClick={onClick}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <span className={value ? 'dp-trigger-value' : 'dp-trigger-placeholder'}>
          {value || placeholder}
        </span>
        <span className="dp-trigger-icon"><CalendarIcon /></span>
      </button>
      {error && (
        <div className="dp-error" role="alert">{error}</div>
      )}
    </div>
  );
}

// ── Single DatePicker ─────────────────────────────────────────────────────────

interface DatePickerProps {
  label?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  onChange?: (iso: string) => void;
}

export function DatePicker({ label = 'Select a date', placeholder = 'Select a date', value, error, onChange }: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value ?? '');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onOutside);
    return () => document.removeEventListener('mousedown', onOutside);
  }, []);

  function handleSelect(iso: string) {
    setSelected(iso);
    onChange?.(iso);
    setOpen(false);
  }

  const displayValue = (value ?? selected) ? formatDate(value ?? selected) : '';

  return (
    <div className="dp-root" ref={ref}>
      <Trigger
        label={label}
        value={displayValue}
        placeholder={placeholder}
        open={open}
        error={error}
        onClick={() => setOpen(v => !v)}
      />
      {open && (
        <div className="dp-popover">
          <Calendar type="basic" defaultValue={value ?? selected} onChange={handleSelect} />
        </div>
      )}
    </div>
  );
}

// ── Range DatePicker ──────────────────────────────────────────────────────────

interface DateRangePickerProps {
  startLabel?: string;
  endLabel?: string;
  layout?: 'horizontal' | 'vertical';
  startValue?: string;
  endValue?: string;
  startError?: string;
  endError?: string;
  onChange?: (start: string, end: string | null) => void;
}

export function DateRangePicker({
  startLabel = 'Start date',
  endLabel = 'End date',
  layout = 'horizontal',
  startValue,
  endValue,
  startError,
  endError,
  onChange,
}: DateRangePickerProps) {
  const [open, setOpen] = useState(false);
  const [rangeStart, setRangeStart] = useState(startValue ?? '');
  const [rangeEnd, setRangeEnd] = useState(endValue ?? '');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onOutside);
    return () => document.removeEventListener('mousedown', onOutside);
  }, []);

  function handleRangeChange(start: string, end: string | null) {
    setRangeStart(start);
    setRangeEnd(end ?? '');
    onChange?.(start, end);
    if (start && end) setOpen(false);
  }

  const calType = layout === 'vertical' ? 'vertical-range' : 'horizontal-range';

  return (
    <div className="dp-root" ref={ref}>
      <div className="dp-range-triggers">
        <Trigger
          label={startLabel}
          value={rangeStart ? formatDate(rangeStart) : ''}
          placeholder="Select a date"
          open={open}
          error={startError}
          onClick={() => setOpen(v => !v)}
        />
        <Trigger
          label={endLabel}
          value={rangeEnd ? formatDate(rangeEnd) : ''}
          placeholder="Select a date"
          open={open}
          error={endError}
          onClick={() => setOpen(v => !v)}
        />
      </div>
      {open && (
        <div className="dp-popover">
          <Calendar
            type={calType}
            defaultRangeStart={rangeStart}
            defaultRangeEnd={rangeEnd}
            onRangeChange={handleRangeChange}
          />
        </div>
      )}
    </div>
  );
}
