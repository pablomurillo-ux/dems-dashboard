import { type ReactNode, type CSSProperties } from 'react';
import './TableCell.css';

export type TableCellType =
  | 'title'
  | 'text'
  | 'action'
  | 'icon'
  | 'user'
  | 'user-group'
  | 'tag'
  | 'checkbox'
  | 'select'
  | 'price'
  | 'empty';

interface TableCellProps {
  type?: TableCellType;
  zebra?: boolean;
  compact?: boolean;
  text?: string;
  price?: string;
  userName?: string;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function TableCell({
  type = 'text',
  zebra = false,
  compact = false,
  text = 'Text cell',
  price = '0.00',
  userName = 'John Smith',
  hasLeftIcon = false,
  hasRightIcon = false,
  leftIcon,
  rightIcon,
  children,
  className,
  style,
}: TableCellProps) {
  const classes = [
    'table-cell',
    `table-cell-${type}`,
    zebra ? 'table-cell-zebra' : '',
    compact ? 'table-cell-compact' : '',
    className ?? '',
  ].filter(Boolean).join(' ');

  if (type === 'price') {
    return (
      <div className={classes} style={style}>
        <span className="table-cell-currency">$</span>
        <span>{price}</span>
      </div>
    );
  }

  if (type === 'user') {
    return (
      <div className={classes} style={style}>
        <div className="table-cell-avatar" aria-hidden="true" />
        <span className="table-cell-username">{userName}</span>
      </div>
    );
  }

  if (type === 'icon') {
    return (
      <div className={classes} style={style}>
        {children ?? leftIcon}
      </div>
    );
  }

  if (type === 'empty') {
    return <div className={classes} style={style} aria-hidden="true" />;
  }

  return (
    <div className={classes} style={style}>
      {hasLeftIcon && leftIcon && (
        <span className="table-cell-icon table-cell-icon-left">{leftIcon}</span>
      )}
      <span className="table-cell-text">{children ?? text}</span>
      {hasRightIcon && rightIcon && (
        <span className="table-cell-icon table-cell-icon-right">{rightIcon}</span>
      )}
    </div>
  );
}
