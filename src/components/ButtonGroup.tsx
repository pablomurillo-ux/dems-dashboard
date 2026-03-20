import './ButtonGroup.css';

interface ButtonGroupItem {
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  'aria-label'?: string;
  disabled?: boolean;
}

interface ButtonGroupProps {
  items: ButtonGroupItem[];
  size?: 'md' | 'sm' | 'xs';
  className?: string;
}

export function ButtonGroup({ items, size = 'md', className }: ButtonGroupProps) {
  const classes = ['btn-group', `btn-group-${size}`, className].filter(Boolean).join(' ');

  return (
    <div className={classes} role="group">
      {items.map((item, i) => {
        const isIconOnly = !item.label && Boolean(item.icon);
        const itemClasses = [
          'btn-group-item',
          isIconOnly ? 'btn-group-item-icon-only' : '',
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <button
            key={i}
            className={itemClasses}
            onClick={item.onClick}
            disabled={item.disabled}
            aria-label={item['aria-label']}
          >
            {item.icon && (
              <span className="btn-group-item-icon" aria-hidden>
                {item.icon}
              </span>
            )}
            {item.label && <span>{item.label}</span>}
          </button>
        );
      })}
    </div>
  );
}
