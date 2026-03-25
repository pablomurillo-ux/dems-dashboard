import { type ReactNode } from 'react';
import './Sidebar.css';

export interface SidebarItem {
  icon?: ReactNode;
  label: string;
  href?: string;
  active?: boolean;
  onClick?: () => void;
}

export interface SidebarGroup {
  title?: string;
  items: SidebarItem[];
}

interface SidebarProps {
  collapsed?: boolean;
  logo?: ReactNode;
  productName?: string;
  groups?: SidebarGroup[];
  className?: string;
}

function DefaultLogoIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L4 7v10l8 5 8-5V7L12 2z" fill="var(--color-brand-primary, #0d9488)" />
      <path d="M12 2l8 5-8 5-8-5 8-5z" fill="var(--color-brand-secondary, #06b6d4)" opacity="0.6" />
    </svg>
  );
}

function DefaultNavIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="5" height="5" rx="1" fill="currentColor" opacity="0.4" />
      <rect x="9" y="2" width="5" height="5" rx="1" fill="currentColor" opacity="0.4" />
      <rect x="2" y="9" width="5" height="5" rx="1" fill="currentColor" opacity="0.4" />
      <rect x="9" y="9" width="5" height="5" rx="1" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

const DEFAULT_GROUPS: SidebarGroup[] = [
  {
    title: 'Sidebar Group',
    items: [
      { label: 'Sidebar item' },
      { label: 'Sidebar item' },
    ],
  },
  {
    title: 'Sidebar Group',
    items: [
      { label: 'Sidebar item' },
      { label: 'Sidebar item' },
    ],
  },
];

export function Sidebar({
  collapsed = false,
  logo,
  productName = 'NAME',
  groups = DEFAULT_GROUPS,
  className,
}: SidebarProps) {
  const classes = [
    'sidebar',
    collapsed ? 'sidebar--collapsed' : 'sidebar--expanded',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <aside className={classes}>
      {/* Logo / brand area */}
      <div className="sidebar-brand">
        <span className="sidebar-brand-icon">{logo ?? <DefaultLogoIcon />}</span>
        {!collapsed && <span className="sidebar-brand-name">{productName}</span>}
      </div>

      {/* Nav groups */}
      <nav className="sidebar-nav">
        {groups.map((group, gi) => (
          <div key={gi} className="sidebar-group">
            {!collapsed && group.title && (
              <span className="sidebar-group-title">{group.title}</span>
            )}
            <ul className="sidebar-group-items">
              {group.items.map((item, ii) => {
                const Tag = item.href ? 'a' : 'button';
                return (
                  <li key={ii}>
                    <Tag
                      className={['sidebar-item', item.active ? 'sidebar-item--active' : ''].filter(Boolean).join(' ')}
                      href={item.href}
                      onClick={item.onClick}
                      title={collapsed ? item.label : undefined}
                    >
                      <span className="sidebar-item-icon">
                        {item.icon ?? <DefaultNavIcon />}
                      </span>
                      {!collapsed && (
                        <span className="sidebar-item-label">{item.label}</span>
                      )}
                    </Tag>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
