import { useState } from 'react';
import './Calendar.css';

// ── Helpers ───────────────────────────────────────────────────────────────────

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const MONTHS_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function daysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function startDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function addMonths(year: number, month: number, delta: number) {
  const d = new Date(year, month + delta, 1);
  return { year: d.getFullYear(), month: d.getMonth() };
}

function dateKey(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function toTs(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).getTime();
}

// ── Cell state type (mirrors the Figma atom) ──────────────────────────────────

type CellState =
  | 'unselected'
  | 'selected'
  | 'grey'
  | 'hover'
  | 'range'
  | 'range-left'
  | 'range-right'
  | 'range-selected-start'
  | 'range-selected-end';

// ── Month grid ────────────────────────────────────────────────────────────────

interface MonthGridProps {
  year: number;
  month: number;
  isRange: boolean;
  selectedStart?: string;
  selectedEnd?: string;
  hoverDate?: string;
  pickingEnd?: boolean;
  onDayClick: (key: string) => void;
  onDayHover?: (key: string | null) => void;
}

function MonthGrid({
  year, month, isRange,
  selectedStart, selectedEnd, hoverDate, pickingEnd,
  onDayClick, onDayHover,
}: MonthGridProps) {
  const startDay = startDayOfMonth(year, month);
  const totalDays = daysInMonth(year, month);
  const prevTotal = daysInMonth(year, month - 1 < 0 ? 11 : month - 1);

  // Build cells: 6 rows × 7 cols
  const cells: Array<{ day: number; outOfMonth: boolean }> = [];
  for (let i = 0; i < startDay; i++) {
    cells.push({ day: prevTotal - startDay + i + 1, outOfMonth: true });
  }
  for (let d = 1; d <= totalDays; d++) {
    cells.push({ day: d, outOfMonth: false });
  }
  while (cells.length % 7 !== 0) {
    cells.push({ day: cells.length - totalDays - startDay + 1, outOfMonth: true });
  }

  const weeks: typeof cells[] = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }

  function getCellState(cell: { day: number; outOfMonth: boolean }, col: number): CellState {
    if (cell.outOfMonth) return 'grey';

    const key = dateKey(year, month, cell.day);

    if (isRange) {
      const isStart = key === selectedStart;
      const isEnd   = key === selectedEnd;

      if (isStart && isEnd) return 'selected';
      if (isStart) return 'range-selected-start';
      if (isEnd)   return 'range-selected-end';

      // Determine effective range for preview or confirmed
      let rangeFrom = selectedStart;
      let rangeTo   = selectedEnd ?? (pickingEnd ? hoverDate : undefined);

      if (rangeFrom && rangeTo) {
        const fromTs = toTs(rangeFrom);
        const toTs2  = toTs(rangeTo);
        const [lo, hi] = fromTs < toTs2 ? [fromTs, toTs2] : [toTs2, fromTs];
        const cur = new Date(year, month, cell.day).getTime();

        if (cur > lo && cur < hi) {
          if (col === 0) return 'range-left';
          if (col === 6) return 'range-right';
          return 'range';
        }
      }

      // Hover on a single unselected day (no start picked yet, or hovering start/end)
      if (key === hoverDate && !pickingEnd) return 'hover';
    } else {
      if (key === selectedStart) return 'selected';
      if (key === hoverDate)     return 'hover';
    }

    return 'unselected';
  }

  return (
    <div className="cal-grid">
      {/* Day-of-week header */}
      <div className="cal-week">
        {DAYS.map(d => (
          <div key={d} className="cal-weekday">{d}</div>
        ))}
      </div>

      {weeks.map((week, wi) => (
        <div key={wi} className="cal-week">
          {week.map((cell, col) => {
            const state = getCellState(cell, col);
            const key = cell.outOfMonth ? null : dateKey(year, month, cell.day);
            return (
              <button
                key={col}
                type="button"
                className={`cal-day cal-day--${state}`}
                disabled={cell.outOfMonth}
                onClick={() => key && onDayClick(key)}
                onMouseEnter={() => key && onDayHover?.(key)}
                onMouseLeave={() => onDayHover?.(null)}
                tabIndex={cell.outOfMonth ? -1 : 0}
                aria-pressed={state === 'selected' || state === 'range-selected-start' || state === 'range-selected-end'}
                aria-label={key ? `${MONTHS_SHORT[month]} ${cell.day}, ${year}` : undefined}
              >
                {cell.day}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

// ── Calendar header ───────────────────────────────────────────────────────────

interface CalHeaderProps {
  year: number;
  month: number;
  onPrev?: () => void;
  onNext?: () => void;
  showPrev?: boolean;
  showNext?: boolean;
  showDropdowns?: boolean;
  onMonthChange?: (m: number) => void;
  onYearChange?: (y: number) => void;
}

const ChevronLeft = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
    <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ChevronRight = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ChevronDown = () => (
  <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
    <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function CalHeader({
  year, month,
  onPrev, onNext,
  showPrev = true, showNext = true,
  showDropdowns = false,
  onMonthChange, onYearChange,
}: CalHeaderProps) {
  const years = Array.from({ length: 20 }, (_, i) => year - 5 + i);

  return (
    <div className="cal-header">
      {showPrev ? (
        <button type="button" className="cal-nav-btn" onClick={onPrev} aria-label="Previous month">
          <ChevronLeft />
        </button>
      ) : <div className="cal-nav-spacer" />}

      {showDropdowns ? (
        <div className="cal-header-dropdowns">
          <div className="cal-select-wrap">
            <select
              className="cal-select"
              value={month}
              onChange={e => onMonthChange?.(Number(e.target.value))}
              aria-label="Month"
            >
              {MONTHS.map((m, i) => <option key={i} value={i}>{m.slice(0, 3)}</option>)}
            </select>
            <ChevronDown />
          </div>
          <div className="cal-select-wrap">
            <select
              className="cal-select"
              value={year}
              onChange={e => onYearChange?.(Number(e.target.value))}
              aria-label="Year"
            >
              {years.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
            <ChevronDown />
          </div>
        </div>
      ) : (
        <div className="cal-header-title">{MONTHS[month]} {year}</div>
      )}

      {showNext ? (
        <button type="button" className="cal-nav-btn" onClick={onNext} aria-label="Next month">
          <ChevronRight />
        </button>
      ) : <div className="cal-nav-spacer" />}
    </div>
  );
}

// ── Main Calendar ─────────────────────────────────────────────────────────────

export type CalendarType = 'basic' | 'horizontal-range' | 'vertical-range';

interface CalendarProps {
  type?: CalendarType;
  defaultValue?: string;
  defaultRangeStart?: string;
  defaultRangeEnd?: string;
  onChange?: (date: string) => void;
  onRangeChange?: (start: string, end: string | null) => void;
}

export function Calendar({
  type = 'basic',
  defaultValue,
  defaultRangeStart,
  defaultRangeEnd,
  onChange,
  onRangeChange,
}: CalendarProps) {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const [selected, setSelected]       = useState(defaultValue ?? '');
  const [rangeStart, setRangeStart]   = useState(defaultRangeStart ?? '');
  const [rangeEnd, setRangeEnd]       = useState(defaultRangeEnd ?? '');
  const [pickingEnd, setPickingEnd]   = useState(false);
  const [hoverDate, setHoverDate]     = useState<string | null>(null);

  const isRange = type !== 'basic';
  const second  = addMonths(year, month, 1);

  function handlePrev() {
    const p = addMonths(year, month, -1);
    setYear(p.year); setMonth(p.month);
  }
  function handleNext() {
    const n = addMonths(year, month, 1);
    setYear(n.year); setMonth(n.month);
  }

  function handleDayClick(key: string) {
    if (!isRange) {
      setSelected(key);
      onChange?.(key);
      return;
    }

    if (!pickingEnd) {
      // First click: set start, wait for end
      setRangeStart(key);
      setRangeEnd('');
      setPickingEnd(true);
      onRangeChange?.(key, null);
    } else {
      // Second click: set end (swap if needed)
      const start = rangeStart;
      const end   = key;
      if (toTs(end) < toTs(start)) {
        setRangeStart(end);
        setRangeEnd(start);
        onRangeChange?.(end, start);
      } else {
        setRangeEnd(end);
        onRangeChange?.(start, end);
      }
      setPickingEnd(false);
      setHoverDate(null);
    }
  }

  function handleHover(key: string | null) {
    setHoverDate(key);
  }

  const gridProps = {
    isRange,
    selectedStart: isRange ? rangeStart : selected,
    selectedEnd:   isRange ? rangeEnd   : selected,
    hoverDate:     hoverDate ?? undefined,
    pickingEnd,
    onDayClick:    handleDayClick,
    onDayHover:    handleHover,
  };

  if (type === 'basic') {
    return (
      <div className="cal-container">
        <CalHeader
          year={year} month={month}
          onPrev={handlePrev} onNext={handleNext}
          showDropdowns
          onMonthChange={setMonth}
          onYearChange={setYear}
        />
        <MonthGrid year={year} month={month} {...gridProps} />
      </div>
    );
  }

  if (type === 'horizontal-range') {
    return (
      <div className="cal-container cal-horizontal">
        <div className="cal-month-panel">
          <CalHeader year={year} month={month} onPrev={handlePrev} showNext={false} />
          <MonthGrid year={year} month={month} {...gridProps} />
        </div>
        <div className="cal-divider" />
        <div className="cal-month-panel">
          <CalHeader year={second.year} month={second.month} onNext={handleNext} showPrev={false} />
          <MonthGrid year={second.year} month={second.month} {...gridProps} />
        </div>
      </div>
    );
  }

  // vertical-range
  return (
    <div className="cal-container cal-vertical">
      <div className="cal-month-panel">
        <CalHeader year={year} month={month} onPrev={handlePrev} onNext={handleNext} />
        <MonthGrid year={year} month={month} {...gridProps} />
      </div>
      <div className="cal-divider-h" />
      <div className="cal-month-panel">
        <CalHeader year={second.year} month={second.month} showPrev={false} showNext={false} />
        <MonthGrid year={second.year} month={second.month} {...gridProps} />
      </div>
    </div>
  );
}
