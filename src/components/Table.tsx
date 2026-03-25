import { type ReactNode, useState } from 'react';
import { TableCell } from './TableCell';
import { Checkbox } from './Checkbox';
import { Tag } from './Tag';
import type { TagState } from './Tag';
import './Table.css';

// ── Types ────────────────────────────────────────────────────────────────────

export type TableVariant = 'columns' | 'rows' | 'sticky';

export interface TableColumn {
  key: string;
  label: string;
  width?: number;
  type?: 'title' | 'text' | 'user' | 'tag' | 'price' | 'icon' | 'empty';
  sortable?: boolean;
  align?: 'left' | 'right' | 'center';
}

export interface TableRow {
  id: string | number;
  [key: string]: unknown;
}

interface TableProps {
  variant?: TableVariant;
  columns: TableColumn[];
  rows: TableRow[];
  selectable?: boolean;
  selectedIds?: (string | number)[];
  onSelectionChange?: (ids: (string | number)[]) => void;
  onRowAction?: (row: TableRow) => void;
  className?: string;
}

// ── Icons ────────────────────────────────────────────────────────────────────

function SortIcon({ direction }: { direction?: 'asc' | 'desc' | null }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="table-sort-icon">
      <path d="M6 2L9 5H3L6 2Z" fill={direction === 'asc' ? 'currentColor' : 'var(--color-fg-base-quarternary)'} />
      <path d="M6 10L3 7H9L6 10Z" fill={direction === 'desc' ? 'currentColor' : 'var(--color-fg-base-quarternary)'} />
    </svg>
  );
}

function DotsThreeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="5"  r="1.25" fill="currentColor" />
      <circle cx="10" cy="10" r="1.25" fill="currentColor" />
      <circle cx="10" cy="15" r="1.25" fill="currentColor" />
    </svg>
  );
}

// ── Table ────────────────────────────────────────────────────────────────────

export function Table({
  variant = 'columns',
  columns,
  rows,
  selectable = true,
  selectedIds = [],
  onSelectionChange,
  onRowAction,
  className,
}: TableProps) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const allSelected = rows.length > 0 && rows.every(r => selectedIds.includes(r.id));
  const someSelected = rows.some(r => selectedIds.includes(r.id)) && !allSelected;

  function toggleAll(checked: boolean) {
    onSelectionChange?.(checked ? rows.map(r => r.id) : []);
  }

  function toggleRow(id: string | number, checked: boolean) {
    onSelectionChange?.(
      checked ? [...selectedIds, id] : selectedIds.filter(s => s !== id)
    );
  }

  function handleSort(key: string) {
    if (sortKey === key) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  }

  const classes = ['table-root', `table-${variant}`, className ?? ''].filter(Boolean).join(' ');

  return (
    <div className={classes} role="table">

      {/* Header */}
      <div className="table-header" role="row">
        {selectable && (
          <div className="table-cell table-cell-header table-col-checkbox" role="columnheader">
            <Checkbox
              checked={allSelected}
              indeterminate={someSelected}
              onChange={toggleAll}
            />
          </div>
        )}
        {columns.map(col => (
          <div
            key={col.key}
            className={['table-cell', 'table-cell-header', col.sortable ? 'table-cell-sortable' : '', col.align ? `table-align-${col.align}` : ''].filter(Boolean).join(' ')}
            style={{ width: col.width, flex: col.width ? `0 0 ${col.width}px` : '1 1 0' }}
            role="columnheader"
            onClick={col.sortable ? () => handleSort(col.key) : undefined}
          >
            <span>{col.label}</span>
            {col.sortable && <SortIcon direction={sortKey === col.key ? sortDir : null} />}
          </div>
        ))}
        {variant === 'sticky' && (
          <div className="table-cell table-cell-header table-col-actions" role="columnheader" />
        )}
      </div>

      {/* Body */}
      <div className="table-body" role="rowgroup">
        {rows.map((row, i) => {
          const isSelected = selectedIds.includes(row.id);
          const isZebra = i % 2 !== 0;

          return (
            <div
              key={row.id}
              className={['table-row', isSelected ? 'table-row-selected' : ''].filter(Boolean).join(' ')}
              role="row"
            >
              {selectable && (
                <div className={['table-cell', 'table-cell-checkbox', 'table-col-checkbox', isZebra ? 'table-cell-zebra' : ''].filter(Boolean).join(' ')} role="cell">
                  <Checkbox
                    checked={isSelected}
                    onChange={checked => toggleRow(row.id, checked)}
                  />
                </div>
              )}
              {columns.map(col => {
                const value = row[col.key];

                if (col.type === 'user') {
                  return (
                    <TableCell
                      key={col.key}
                      type="user"
                      userName={String(value ?? '')}
                      zebra={isZebra}
                      style={{ width: col.width, flex: col.width ? `0 0 ${col.width}px` : '1 1 0' } as React.CSSProperties}
                    />
                  );
                }

                if (col.type === 'tag') {
                  const tagValue = value as { label: string; state: TagState } | undefined;
                  return (
                    <div
                      key={col.key}
                      className={['table-cell', 'table-cell-tag', isZebra ? 'table-cell-zebra' : ''].filter(Boolean).join(' ')}
                      style={{ width: col.width, flex: col.width ? `0 0 ${col.width}px` : '1 1 0' }}
                      role="cell"
                    >
                      {tagValue && <Tag label={tagValue.label} state={tagValue.state} type="filled" showIconLeft={false} />}
                    </div>
                  );
                }

                if (col.type === 'price') {
                  return (
                    <TableCell
                      key={col.key}
                      type="price"
                      price={String(value ?? '0.00')}
                      zebra={isZebra}
                      style={{ width: col.width, flex: col.width ? `0 0 ${col.width}px` : '1 1 0' } as React.CSSProperties}
                    />
                  );
                }

                return (
                  <TableCell
                    key={col.key}
                    type={col.type ?? 'text'}
                    zebra={isZebra}
                    style={{ width: col.width, flex: col.width ? `0 0 ${col.width}px` : '1 1 0' } as React.CSSProperties}
                  >
                    {value as ReactNode}
                  </TableCell>
                );
              })}
              {variant === 'sticky' && (
                <div className={['table-cell', 'table-col-actions', isZebra ? 'table-cell-zebra' : ''].filter(Boolean).join(' ')} role="cell">
                  <button
                    className="table-row-action-btn"
                    aria-label="Row actions"
                    onClick={() => onRowAction?.(row)}
                  >
                    <DotsThreeIcon />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
