import './Pagination.css';

// ── Icons ─────────────────────────────────────────────────────────────────────

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

const DotsIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
    <circle cx="3" cy="8" r="1.25" fill="currentColor" />
    <circle cx="8" cy="8" r="1.25" fill="currentColor" />
    <circle cx="13" cy="8" r="1.25" fill="currentColor" />
  </svg>
);

// ── PaginationItem atom ───────────────────────────────────────────────────────

interface PaginationItemProps {
  label?: string;
  icon?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  'aria-label'?: string;
}

function PaginationItem({ label, icon, active, disabled, onClick, 'aria-label': ariaLabel }: PaginationItemProps) {
  const classes = [
    'pg-item',
    active   ? 'pg-item-active'   : '',
    disabled ? 'pg-item-disabled' : '',
    icon     ? 'pg-item-icon'     : 'pg-item-number',
  ].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-current={active ? 'page' : undefined}
    >
      {icon ?? <span>{label}</span>}
    </button>
  );
}

// ── Page range builder ────────────────────────────────────────────────────────

function buildPages(current: number, total: number): (number | '…')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  if (current <= 4) {
    return [1, 2, 3, 4, 5, '…', total];
  }
  if (current >= total - 3) {
    return [1, '…', total - 4, total - 3, total - 2, total - 1, total];
  }
  return [1, '…', current - 1, current, current + 1, '…', total];
}

// ── Pagination ────────────────────────────────────────────────────────────────

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onChange }: PaginationProps) {
  const pages = buildPages(currentPage, totalPages);

  return (
    <nav className="pg-root" aria-label="Pagination">
      <PaginationItem
        icon={<ChevronLeft />}
        disabled={currentPage === 1}
        onClick={() => onChange(currentPage - 1)}
        aria-label="Previous page"
      />

      {pages.map((p, i) =>
        p === '…' ? (
          <PaginationItem
            key={`ellipsis-${i}`}
            icon={<DotsIcon />}
            disabled
            aria-label="More pages"
          />
        ) : (
          <PaginationItem
            key={p}
            label={String(p)}
            active={p === currentPage}
            onClick={() => onChange(p as number)}
            aria-label={`Page ${p}`}
          />
        )
      )}

      <PaginationItem
        icon={<ChevronRight />}
        disabled={currentPage === totalPages}
        onClick={() => onChange(currentPage + 1)}
        aria-label="Next page"
      />
    </nav>
  );
}
