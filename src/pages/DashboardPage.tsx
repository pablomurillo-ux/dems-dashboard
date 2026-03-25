import { useState, useRef, useEffect } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { Subheader } from '../components/Subheader';
import { TableFilterBar } from '../components/TableFilterBar';
import { Table } from '../components/Table';
import type { TableColumn, TableRow } from '../components/Table';
import type { TagState } from '../components/Tag';
import './DashboardPage.css';

// ── Icons for sidebar nav ─────────────────────────────────────────────────────

function UsersIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M1 13c0-2.761 2.239-4 5-4s5 1.239 5 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M11 7.5a2.5 2.5 0 1 0 0-5M15 13c0-2.761-1.343-4-3-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function FilesIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 2h7l3 3v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10 2v4h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DashboardIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5" y="1.5" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="9" y="1.5" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="1.5" y="9" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="9" y="9" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 10A6 6 0 0 1 6 3a6 6 0 1 0 7 7z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SignOutIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3M10 11l3-3-3-3M13 8H6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Table data ────────────────────────────────────────────────────────────────

const COLUMNS: TableColumn[] = [
  { key: 'user',     label: 'User',          type: 'user',  width: 200 },
  { key: 'email',    label: 'Email',         type: 'text',  sortable: true },
  { key: 'status',   label: 'Status',        type: 'tag',   width: 120 },
  { key: 'fileName', label: 'File',          type: 'title', sortable: true },
  { key: 'size',     label: 'Size',          type: 'text',  width: 90, align: 'right' },
  { key: 'folder',   label: 'Location',      type: 'text',  sortable: true },
  { key: 'modified', label: 'Last Modified', type: 'text',  width: 140, sortable: true },
];

type StatusOption = { label: string; state: TagState };

const ROWS: TableRow[] = [
  { id: 1,  user: 'Alice Johnson',   email: 'alice.johnson@agency.gov',   status: { label: 'Active',   state: 'success'  } as StatusOption, fileName: 'Q1_Budget_Report.pdf',        size: '2.4 MB', folder: '/finance/2024/q1',      modified: 'Mar 20, 2026' },
  { id: 2,  user: 'Bob Martínez',    email: 'bob.martinez@agency.gov',    status: { label: 'Pending',  state: 'warning'  } as StatusOption, fileName: 'Site_Assessment_v3.docx',     size: '840 KB', folder: '/projects/site-a',      modified: 'Mar 18, 2026' },
  { id: 3,  user: 'Carol Nguyen',    email: 'carol.nguyen@agency.gov',    status: { label: 'Active',   state: 'success'  } as StatusOption, fileName: 'Permit_Application.pdf',      size: '1.1 MB', folder: '/permits/2026',         modified: 'Mar 22, 2026' },
  { id: 4,  user: 'David Okafor',    email: 'd.okafor@agency.gov',        status: { label: 'Inactive', state: 'error'    } as StatusOption, fileName: 'Environmental_Study.xlsx',    size: '5.7 MB', folder: '/env/studies',          modified: 'Feb 14, 2026' },
  { id: 5,  user: 'Elena Petrov',    email: 'elena.petrov@agency.gov',    status: { label: 'Active',   state: 'success'  } as StatusOption, fileName: 'Staff_Directory_2026.csv',    size: '320 KB', folder: '/hr/directories',       modified: 'Mar 24, 2026' },
  { id: 6,  user: 'Frank Delgado',   email: 'fdelgado@agency.gov',        status: { label: 'Review',   state: 'info'     } as StatusOption, fileName: 'Infrastructure_Plan.pdf',     size: '9.2 MB', folder: '/projects/infra',       modified: 'Mar 10, 2026' },
  { id: 7,  user: 'Grace Kim',       email: 'grace.kim@agency.gov',       status: { label: 'Active',   state: 'success'  } as StatusOption, fileName: 'Policy_Amendment_v2.docx',    size: '460 KB', folder: '/legal/policies',       modified: 'Mar 19, 2026' },
  { id: 8,  user: 'Henry Walsh',     email: 'h.walsh@agency.gov',         status: { label: 'Pending',  state: 'warning'  } as StatusOption, fileName: 'Vendor_Contract_2026.pdf',    size: '1.8 MB', folder: '/procurement',          modified: 'Mar 15, 2026' },
  { id: 9,  user: 'Irene Castillo',  email: 'i.castillo@agency.gov',      status: { label: 'Active',   state: 'success'  } as StatusOption, fileName: 'GIS_Data_Export.zip',         size: '47.3 MB',folder: '/gis/exports/2026',     modified: 'Mar 23, 2026' },
  { id: 10, user: 'James Thornton',  email: 'jthornton@agency.gov',       status: { label: 'Inactive', state: 'error'    } as StatusOption, fileName: 'Legacy_Records_Scan.pdf',     size: '15.1 MB',folder: '/archive/legacy',       modified: 'Jan 03, 2026' },
  { id: 11, user: 'Karen Liu',       email: 'karen.liu@agency.gov',       status: { label: 'Active',   state: 'success'  } as StatusOption, fileName: 'Survey_Results_Q1.xlsx',      size: '2.9 MB', folder: '/research/surveys',     modified: 'Mar 21, 2026' },
  { id: 12, user: 'Luis Fernández',  email: 'l.fernandez@agency.gov',     status: { label: 'Review',   state: 'info'     } as StatusOption, fileName: 'Zoning_Map_Update.pdf',       size: '6.5 MB', folder: '/planning/zoning',      modified: 'Mar 17, 2026' },
];

// ── DashboardPage ─────────────────────────────────────────────────────────────

type Theme = 'light' | 'dark';

export function DashboardPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [theme, setTheme] = useState<Theme>('light');
  const [avatarMenuOpen, setAvatarMenuOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState<(string | number)[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const avatarMenuRef = useRef<HTMLDivElement>(null);

  // Apply theme to root element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Close avatar menu on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (avatarMenuRef.current && !avatarMenuRef.current.contains(e.target as Node)) {
        setAvatarMenuOpen(false);
      }
    }
    if (avatarMenuOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [avatarMenuOpen]);

  function switchTheme(t: Theme) {
    setTheme(t);
    setAvatarMenuOpen(false);
  }

  // Filter rows by search
  const filteredRows = searchQuery
    ? ROWS.filter(r =>
        Object.values(r).some(v =>
          typeof v === 'string' && v.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        (typeof (r.status as StatusOption)?.label === 'string' &&
          (r.status as StatusOption).label.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : ROWS;

  // Avatar dropdown rendered as rightSlot in Header
  const avatarSlot = (
    <div className="dashboard-avatar-wrap" ref={avatarMenuRef}>
      <button
        className="header-avatar-btn"
        aria-label="User menu"
        aria-expanded={avatarMenuOpen}
        onClick={() => setAvatarMenuOpen(o => !o)}
      >
        <div className="header-avatar-placeholder" aria-hidden="true" />
      </button>

      {avatarMenuOpen && (
        <div className="avatar-dropdown" role="menu">
          <div className="avatar-dropdown-user">
            <div className="avatar-dropdown-avatar" aria-hidden="true" />
            <div>
              <div className="avatar-dropdown-name">Admin User</div>
              <div className="avatar-dropdown-email">admin@agency.gov</div>
            </div>
          </div>
          <div className="avatar-dropdown-divider" />

          <div className="avatar-dropdown-section-label">Appearance</div>
          <button
            className={`avatar-dropdown-item ${theme === 'light' ? 'avatar-dropdown-item--active' : ''}`}
            role="menuitemradio"
            aria-checked={theme === 'light'}
            onClick={() => switchTheme('light')}
          >
            <SunIcon /> Light mode
            {theme === 'light' && <span className="avatar-dropdown-check">✓</span>}
          </button>
          <button
            className={`avatar-dropdown-item ${theme === 'dark' ? 'avatar-dropdown-item--active' : ''}`}
            role="menuitemradio"
            aria-checked={theme === 'dark'}
            onClick={() => switchTheme('dark')}
          >
            <MoonIcon /> Dark mode
            {theme === 'dark' && <span className="avatar-dropdown-check">✓</span>}
          </button>
          <div className="avatar-dropdown-divider" />

          <button className="avatar-dropdown-item avatar-dropdown-item--danger" role="menuitem">
            <SignOutIcon /> Sign out
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <Sidebar
        collapsed={sidebarCollapsed}
        productName="DEMS"
        groups={[
          {
            title: 'Main',
            items: [
              { icon: <DashboardIcon />, label: 'Dashboard', active: true },
              { icon: <UsersIcon />,     label: 'Users' },
              { icon: <FilesIcon />,     label: 'Files' },
            ],
          },
          {
            title: 'System',
            items: [
              { icon: <SettingsIcon />, label: 'Settings' },
            ],
          },
        ]}
      />

      {/* Main column */}
      <div className="dashboard-main">
        <Header
          title="DEMS"
          hasTag={true}
          tagLabel="v1.0"
          tagState="info"
          hasNotification={true}
          notificationCount={3}
          hasAvatar={false}
          rightSlot={avatarSlot}
          onMenuClick={() => setSidebarCollapsed(c => !c)}
        />

        <Subheader
          type="subheader"
          title="User File Registry"
          description="All agency users and their associated documents"
          hasTag={true}
          tagLabel={`${filteredRows.length} records`}
          tagState="info"
          hasRightSection={true}
          hasAvatars={false}
          hasButton={true}
          buttonLabel="Export CSV"
        />

        <div className="dashboard-content">
          <TableFilterBar
            searchPlaceholder="Search users, files, folders…"
            onSearch={setSearchQuery}
            hasActions={true}
            hasBulkActions={selectedIds.length > 0}
            hasMainAction={false}
            onEdit={() => {}}
            onDelete={() => {}}
          />

          <Table
            variant="sticky"
            columns={COLUMNS}
            rows={filteredRows}
            selectable={true}
            selectedIds={selectedIds}
            onSelectionChange={setSelectedIds}
          />
        </div>
      </div>
    </div>
  );
}
