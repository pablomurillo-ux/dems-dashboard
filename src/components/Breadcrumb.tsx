import './Breadcrumb.css';

interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  /** Max items to show before collapsing middle ones into "…". Default: 4 */
  max?: number;
  className?: string;
}

const Separator = () => (
  <span className="breadcrumb-separator" aria-hidden>
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const Ellipsis = ({ onClick }: { onClick?: () => void }) => (
  <button className="breadcrumb-ellipsis" onClick={onClick} aria-label="Show hidden pages">
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="3" cy="8" r="1.25" fill="currentColor" />
      <circle cx="8" cy="8" r="1.25" fill="currentColor" />
      <circle cx="13" cy="8" r="1.25" fill="currentColor" />
    </svg>
  </button>
);

export function Breadcrumb({ items, max = 4, className }: BreadcrumbProps) {
  const classes = ['breadcrumb', className].filter(Boolean).join(' ');

  // Determine visible items: first, ...collapsed..., last two
  const shouldCollapse = items.length > max;
  const visibleItems: (BreadcrumbItem | null)[] = shouldCollapse
    ? [items[0], null, ...items.slice(-2)]
    : items;

  return (
    <nav className={classes} aria-label="Breadcrumb">
      <ol style={{ display: 'contents' }}>
        {visibleItems.map((item, i) => {
          const isLast = i === visibleItems.length - 1;

          return (
            <li key={i} style={{ display: 'contents' }}>
              {i > 0 && <Separator />}

              {item === null ? (
                <Ellipsis />
              ) : isLast ? (
                <span className="breadcrumb-item breadcrumb-item-active" aria-current="page">
                  {item.label}
                </span>
              ) : item.href ? (
                <a className="breadcrumb-item breadcrumb-item-base" href={item.href}>
                  {item.label}
                </a>
              ) : (
                <button className="breadcrumb-item breadcrumb-item-base" onClick={item.onClick}>
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
