import { Pagination } from './Pagination';
import { InputField } from './InputField';
import './PaginationFooter.css';

const DEFAULT_PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

interface PaginationFooterProps {
  totalItems?: number | string;
  currentPage?: number;
  totalPages?: number;
  pageSize?: number;
  pageSizeOptions?: number[];
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
  className?: string;
}

export function PaginationFooter({
  totalItems = '99+',
  currentPage = 1,
  totalPages = 10,
  pageSize = 10,
  pageSizeOptions = DEFAULT_PAGE_SIZE_OPTIONS,
  onPageChange,
  onPageSizeChange,
  className,
}: PaginationFooterProps) {
  const classes = ['pagination-footer', className ?? ''].filter(Boolean).join(' ');

  const sizeOptions = pageSizeOptions.map((n) => ({
    value: String(n),
    label: `Show ${n} items / page`,
  }));

  return (
    <div className={classes}>
      <span className="pagination-footer-total">
        Total items: {totalItems}
      </span>

      <div className="pagination-footer-pages">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onChange={onPageChange ?? (() => {})}
        />
      </div>

      <InputField
        variant="select"
        value={String(pageSize)}
        options={sizeOptions}
        onChange={(val) => onPageSizeChange?.(Number(val))}
      />
    </div>
  );
}
