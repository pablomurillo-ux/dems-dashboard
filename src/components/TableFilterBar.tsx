import './TableFilterBar.css';

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10.5 10.5L13.5 13.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function DotsThreeIcon() {
  return (
    <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="10" r="1.5" fill="currentColor" />
      <circle cx="12" cy="5"  r="1.5" fill="currentColor" />
      <circle cx="12" cy="15" r="1.5" fill="currentColor" />
    </svg>
  );
}

function SlidersIcon() {
  return (
    <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 5h16M4 10h16M4 15h16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="9"  cy="5"  r="2" fill="var(--color-bg-base-primary)" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="15" cy="10" r="2" fill="var(--color-bg-base-primary)" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="9"  cy="15" r="2" fill="var(--color-bg-base-primary)" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M12 2v2M12 16v2M4.93 4.93l1.41 1.41M17.66 13.66l1.41 1.41M2 10h2M18 10h2M4.93 15.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function ResetIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8a5 5 0 1 0 1-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 4v4h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CaretDownIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProhibitIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2.8 2.8l6.4 6.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export interface FilterChip {
  category: string;
  label: string;
}

interface TableFilterBarProps {
  searchPlaceholder?: string;
  onSearch?: (value: string) => void;
  hasActions?: boolean;
  hasBulkActions?: boolean;
  hasMainAction?: boolean;
  mainActionLabel?: string;
  onMainAction?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  hasNotification?: boolean;
  onFilterClick?: () => void;
  onSettingsClick?: () => void;
  showFilters?: boolean;
  filters?: FilterChip[];
  onAddFilter?: () => void;
  onResetFilters?: () => void;
  className?: string;
}

export function TableFilterBar({
  searchPlaceholder = 'Type to search...',
  onSearch,
  hasActions = true,
  hasBulkActions = true,
  hasMainAction = true,
  mainActionLabel = 'Save changes',
  onMainAction,
  onEdit,
  onDelete,
  hasNotification = false,
  onFilterClick,
  onSettingsClick,
  showFilters = false,
  filters = [],
  onAddFilter,
  onResetFilters,
  className,
}: TableFilterBarProps) {
  const classes = ['table-filter-bar', showFilters ? 'table-filter-bar-expanded' : '', className ?? ''].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className="table-filter-bar-row">

        {/* Search */}
        <div className="table-filter-bar-search">
          <span className="table-filter-bar-search-icon"><SearchIcon /></span>
          <input
            type="search"
            className="table-filter-bar-input"
            placeholder={searchPlaceholder}
            onChange={e => onSearch?.(e.target.value)}
          />
        </div>

        {/* Actions */}
        <div className="table-filter-bar-actions">
          {hasActions && (
            <div className="table-filter-bar-action-group">
              {hasBulkActions && (
                <div className="table-filter-bar-bulk">
                  <span className="table-filter-bar-bulk-label">With selected:</span>
                  <div className="table-filter-bar-btn-group">
                    <button className="table-filter-bar-btn table-filter-bar-btn-first" onClick={onEdit}>Edit</button>
                    <button className="table-filter-bar-btn" onClick={onDelete}>Delete</button>
                    <button className="table-filter-bar-btn table-filter-bar-btn-icon table-filter-bar-btn-last" aria-label="More actions">
                      <DotsThreeIcon />
                    </button>
                  </div>
                </div>
              )}
              {hasMainAction && (
                <button className="table-filter-bar-btn-primary" onClick={onMainAction}>
                  {mainActionLabel}
                </button>
              )}
              <div className="table-filter-bar-divider" role="separator" />
            </div>
          )}

          {/* Filter + Settings icons */}
          <div className="table-filter-bar-controls">
            <div className="table-filter-bar-icon-btn-wrap">
              <button className="table-filter-bar-icon-btn" aria-label="Filters" onClick={onFilterClick}>
                <SlidersIcon />
              </button>
              {hasNotification && <span className="table-filter-bar-badge" aria-hidden="true" />}
            </div>
            <button className="table-filter-bar-icon-btn" aria-label="Settings" onClick={onSettingsClick}>
              <GearIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter chips row */}
      {showFilters && (
        <>
          <div className="table-filter-bar-sep" role="separator" />
          <div className="table-filter-bar-chips">
            {filters.map((f, i) => (
              <div key={i} className="table-filter-chip">
                <span className="table-filter-chip-icon"><ProhibitIcon /></span>
                <span className="table-filter-chip-category">{f.category}:</span>
                <span className="table-filter-chip-label">{f.label}</span>
                <span className="table-filter-chip-caret"><CaretDownIcon /></span>
              </div>
            ))}
            <button className="table-filter-bar-link" onClick={onAddFilter}>
              <PlusIcon /> Add filter
            </button>
            <button className="table-filter-bar-link" onClick={onResetFilters}>
              <ResetIcon /> Reset filters
            </button>
          </div>
        </>
      )}
    </div>
  );
}
