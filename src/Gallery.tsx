import { useState } from 'react';
import { Accordion } from './components/Accordion';
import { Alert } from './components/Alert';
import { Avatar } from './components/Avatar';
import { AvatarGroup } from './components/AvatarGroup';
import { Breadcrumb } from './components/Breadcrumb';
import { Button } from './components/Button';
import { ButtonGroup } from './components/ButtonGroup';
import { Checkbox } from './components/Checkbox';
import { Chip } from './components/Chip';
import { DatePicker, DateRangePicker } from './components/DatePicker';
import { InputField } from './components/InputField';
import { Divider } from './components/Divider';
import { Label } from './components/Label';
import { Link } from './components/Link';
import { Badge } from './components/Badge';
import { Pagination } from './components/Pagination';
import { ProgressBar } from './components/ProgressBar';
import { Radio, RadioGroup } from './components/Radio';
import { Toaster } from './components/Toaster';
import { Toggle } from './components/Toggle';
import { Tooltip } from './components/Tooltip';
import { TextArea } from './components/TextArea';
import { Tag } from './components/Tag';
import { Tabs } from './components/Tabs';
import { Stepper } from './components/Stepper';
import { Skeleton } from './components/Skeleton';
import { Popover } from './components/Popover';
import { PaginationFooter } from './components/PaginationFooter';
import { EmptyState } from './components/EmptyState';
import { FileUploader } from './components/FileUploader';

const PlusIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const TrashIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <path d="M2 4h12M5 4V3h6v1M6 7v5M10 7v5M3 4l1 9h8l1-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EditIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <path d="M11 2l3 3-8 8H3v-3l8-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Section wrapper ───────────────────────────────────────────────────────────
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 48 }}>
      <h2 style={{
        fontFamily: 'var(--font-family-body)',
        fontSize: 'var(--font-size-body-lg)',
        fontWeight: 'var(--font-weight-body-semibold)',
        color: 'var(--color-fg-base-primary)',
        letterSpacing: 'var(--font-letterspacing-body-lg)',
        marginBottom: 4,
        paddingBottom: 12,
        borderBottom: '1px solid var(--color-border-base)',
      }}>
        {title}
      </h2>
      <div style={{ paddingTop: 24 }}>{children}</div>
    </section>
  );
}

function Row({ label, children, wrap = false }: { label?: string; children: React.ReactNode; wrap?: boolean }) {
  return (
    <div style={{ marginBottom: 24 }}>
      {label && (
        <p style={{
          fontFamily: 'var(--font-family-body)',
          fontSize: 'var(--font-size-body-xs)',
          fontWeight: 'var(--font-weight-body-medium)',
          color: 'var(--color-fg-base-quarternary)',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          marginBottom: 12,
        }}>
          {label}
        </p>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: wrap ? 'wrap' : 'nowrap' }}>
        {children}
      </div>
    </div>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function PaginationDemo({ total, initial }: { total: number; initial: number }) {
  const [page, setPage] = useState(initial);
  return <Pagination currentPage={page} totalPages={total} onChange={setPage} />;
}

const ALL_TAB_OPTIONS = [
  { value: 'tab1', label: 'Label' },
  { value: 'tab2', label: 'Label' },
  { value: 'tab3', label: 'Label' },
  { value: 'tab4', label: 'Label' },
  { value: 'tab5', label: 'Label' },
];

const TAB_OPTIONS_BADGE = [
  { value: 'home',     label: 'Label', badge: '99+' },
  { value: 'profile',  label: 'Label' },
  { value: 'settings', label: 'Label', disabled: true },
];

function PaginationFooterDemo() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  return (
    <PaginationFooter
      totalItems="99+"
      currentPage={page}
      totalPages={10}
      pageSize={pageSize}
      onPageChange={setPage}
      onPageSizeChange={setPageSize}
    />
  );
}

function TabsDemo({ type, count = 4, showMore = false }: { type: 'underline' | 'segment'; count?: number; showMore?: boolean }) {
  const [tab, setTab] = useState('tab1');
  return <Tabs options={ALL_TAB_OPTIONS.slice(0, count)} value={tab} type={type} showMore={showMore} onChange={setTab} />;
}

function TabsBadgeDemo() {
  const [tab, setTab] = useState('home');
  return <Tabs options={TAB_OPTIONS_BADGE} value={tab} type="underline" onChange={setTab} />;
}

function ToggleDemo() {
  const [on, setOn] = useState(false);
  return <Toggle checked={on} onChange={setOn} />;
}

function RadioGroupDemo() {
  const [value, setValue] = useState('option1');
  return (
    <RadioGroup
      name="demo"
      value={value}
      onChange={setValue}
      options={[
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ]}
    />
  );
}

// ── Gallery ───────────────────────────────────────────────────────────────────
export default function Gallery() {
  return (
    <div style={{
      fontFamily: 'var(--font-family-body)',
      backgroundColor: 'var(--color-bg-base-primary)',
      minHeight: '100vh',
      padding: '48px 64px',
      maxWidth: 1200,
      margin: '0 auto',
    }}>
      <div style={{ marginBottom: 48 }}>
        <h1 style={{
          fontSize: 'var(--font-size-heading-lg)',
          fontWeight: 'var(--font-weight-heading)',
          color: 'var(--color-fg-base-title)',
          letterSpacing: 'var(--font-letterspacing-heading-lg)',
          marginBottom: 8,
        }}>
          Component Gallery
        </h1>
        <p style={{
          fontSize: 'var(--font-size-body-md)',
          color: 'var(--color-fg-base-tertiary)',
          fontWeight: 'var(--font-weight-body-regular)',
        }}>
          DEMS Design System — all components
        </p>
      </div>

      {/* ── Button ── */}
      <Section title="Button">
        <Row label="Filled · Ghost · Clear · Link">
          <Button variant="filled" label="Button label" />
          <Button variant="ghost" label="Button label" />
          <Button variant="clear" label="Button label" />
          <Button variant="link" label="Button label" />
        </Row>
        <Row label="Info · Success · Error · onPrimary · onSecondary">
          <Button variant="info" label="Button label" />
          <Button variant="success" label="Button label" />
          <Button variant="error" label="Button label" />
          <Button variant="onPrimary" label="Button label" />
          <Button variant="onSecondary" label="Button label" />
        </Row>
        <Row label="Sizes — md · sm · xs">
          <Button variant="filled" size="md" label="Medium" />
          <Button variant="filled" size="sm" label="Small" />
          <Button variant="filled" size="xs" label="Extra small" />
        </Row>
        <Row label="With icons">
          <Button variant="filled" size="md" label="Left icon" leftIcon={<PlusIcon />} />
          <Button variant="ghost" size="md" label="Right icon" rightIcon={<PlusIcon />} />
          <Button variant="filled" size="md" iconOnly leftIcon={<PlusIcon />} aria-label="Add" />
          <Button variant="ghost" size="md" iconOnly leftIcon={<PlusIcon />} aria-label="Add" />
        </Row>
        <Row label="Disabled">
          <Button variant="filled" label="Disabled" disabled />
          <Button variant="ghost" label="Disabled" disabled />
          <Button variant="error" label="Disabled" disabled />
        </Row>
      </Section>

      {/* ── Button Group ── */}
      <Section title="Button Group">
        <Row label="All labels — md · sm · xs">
          <ButtonGroup size="md" items={[
            { label: 'Week', onClick: () => {} },
            { label: 'Month', onClick: () => {} },
            { label: 'Quarter', onClick: () => {} },
            { label: 'Year', onClick: () => {} },
          ]} />
          <ButtonGroup size="sm" items={[
            { label: 'Week' }, { label: 'Month' }, { label: 'Quarter' },
          ]} />
          <ButtonGroup size="xs" items={[
            { label: 'Day' }, { label: 'Week' },
          ]} />
        </Row>
        <Row label="Labels + icon last">
          <ButtonGroup size="md" items={[
            { label: 'Edit' },
            { label: 'Copy' },
            { icon: <PlusIcon />, 'aria-label': 'Add' },
          ]} />
          <ButtonGroup size="sm" items={[
            { label: 'Edit' },
            { icon: <PlusIcon />, 'aria-label': 'Add' },
          ]} />
        </Row>
        <Row label="All icons">
          <ButtonGroup size="md" items={[
            { icon: <PlusIcon />, 'aria-label': 'Add' },
            { icon: <EditIcon />, 'aria-label': 'Edit' },
            { icon: <TrashIcon />, 'aria-label': 'Delete' },
          ]} />
          <ButtonGroup size="sm" items={[
            { icon: <PlusIcon />, 'aria-label': 'Add' },
            { icon: <EditIcon />, 'aria-label': 'Edit' },
            { icon: <TrashIcon />, 'aria-label': 'Delete' },
          ]} />
          <ButtonGroup size="xs" items={[
            { icon: <PlusIcon />, 'aria-label': 'Add' },
            { icon: <EditIcon />, 'aria-label': 'Edit' },
          ]} />
        </Row>
      </Section>

      {/* ── Alert ── */}
      <Section title="Alert">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <Alert type="neutral" title="New feature available" description="We've added dark mode support. You can enable it in your account settings." linkLabel="Go to settings" onLinkClick={() => {}} onClose={() => {}} />
          <Alert type="info" title="New feature available" description="We've added dark mode support. You can enable it in your account settings." linkLabel="Go to settings" onLinkClick={() => {}} onClose={() => {}} />
          <Alert type="success" title="Changes saved" description="Your profile has been updated successfully." linkLabel="View profile" onLinkClick={() => {}} onClose={() => {}} />
          <Alert type="error" title="Something went wrong" description="We couldn't process your request. Please try again." linkLabel="Retry" onLinkClick={() => {}} onClose={() => {}} />
          <Alert type="warning" title="Subscription expiring" description="Your plan expires in 3 days. Renew to avoid interruptions." linkLabel="Renew now" onLinkClick={() => {}} onClose={() => {}} />
        </div>
      </Section>

      {/* ── Accordion ── */}
      <Section title="Accordion">
        <div style={{ maxWidth: 480, display: 'flex', flexDirection: 'column' }}>
          <Accordion title="What is DEMS?" description="DEMS is an enterprise management system designed for modern teams." defaultExpanded />
          <Accordion title="How do I get started?" description="Sign up for an account and follow the onboarding guide to set up your workspace." />
          <Accordion title="Is there a free trial?" description="Yes, all plans include a 14-day free trial with full access to all features." />
        </div>
      </Section>

      {/* ── Avatar ── */}
      <Section title="Avatar">
        <Row label="Sizes — lg · md · sm · xs (with image)">
          <Avatar size="lg" src="https://i.pravatar.cc/150?img=1" alt="User" />
          <Avatar size="md" src="https://i.pravatar.cc/150?img=2" alt="User" />
          <Avatar size="sm" src="https://i.pravatar.cc/150?img=3" alt="User" />
          <Avatar size="xs" src="https://i.pravatar.cc/150?img=4" alt="User" />
        </Row>
        <Row label="Initials">
          <Avatar size="lg" initials="VT" />
          <Avatar size="md" initials="AB" />
          <Avatar size="sm" initials="JD" />
          <Avatar size="xs" initials="PM" />
        </Row>
        <Row label="With notification dot">
          <Avatar size="lg" src="https://i.pravatar.cc/150?img=5" hasNotification />
          <Avatar size="md" initials="VT" hasNotification />
          <Avatar size="sm" src="https://i.pravatar.cc/150?img=6" hasNotification />
          <Avatar size="xs" initials="AB" hasNotification />
        </Row>
        <Row label="Disabled">
          <Avatar size="lg" src="https://i.pravatar.cc/150?img=7" disabled />
          <Avatar size="md" initials="VT" disabled />
        </Row>
      </Section>

      {/* ── Avatar Group ── */}
      <Section title="Avatar Group">
        <Row label="Sizes">
          <AvatarGroup size="md" avatars={[
            { src: 'https://i.pravatar.cc/150?img=1' },
            { src: 'https://i.pravatar.cc/150?img=2' },
            { src: 'https://i.pravatar.cc/150?img=3' },
            { src: 'https://i.pravatar.cc/150?img=4' },
          ]} max={3} />
          <AvatarGroup size="sm" avatars={[
            { src: 'https://i.pravatar.cc/150?img=5' },
            { src: 'https://i.pravatar.cc/150?img=6' },
            { src: 'https://i.pravatar.cc/150?img=7' },
          ]} max={3} />
          <AvatarGroup size="xs" avatars={[
            { src: 'https://i.pravatar.cc/150?img=8' },
            { src: 'https://i.pravatar.cc/150?img=9' },
          ]} />
        </Row>
        <Row label="Overflow count">
          <AvatarGroup size="md" avatars={[
            { src: 'https://i.pravatar.cc/150?img=1' },
            { src: 'https://i.pravatar.cc/150?img=2' },
            { src: 'https://i.pravatar.cc/150?img=3' },
            { src: 'https://i.pravatar.cc/150?img=4' },
            { src: 'https://i.pravatar.cc/150?img=5' },
          ]} max={3} />
        </Row>
      </Section>

      {/* ── Breadcrumb ── */}
      <Section title="Breadcrumb">
        <Row label="1 item">
          <Breadcrumb items={[{ label: 'Dashboard' }]} />
        </Row>
        <Row label="2 items">
          <Breadcrumb items={[
            { label: 'Dashboard', onClick: () => {} },
            { label: 'Settings' },
          ]} />
        </Row>
        <Row label="3 items">
          <Breadcrumb items={[
            { label: 'Dashboard', onClick: () => {} },
            { label: 'Settings', onClick: () => {} },
            { label: 'Profile' },
          ]} />
        </Row>
        <Row label="4+ items (collapsed)">
          <Breadcrumb items={[
            { label: 'Dashboard', onClick: () => {} },
            { label: 'Projects', onClick: () => {} },
            { label: 'DEMS', onClick: () => {} },
            { label: 'Components', onClick: () => {} },
            { label: 'Breadcrumb' },
          ]} max={4} />
        </Row>
      </Section>

      {/* ── Radio ── */}
      <Section title="Radio">
        <Row label="Unchecked · Checked">
          <Radio label="label" checked={false} />
          <Radio label="label" checked={true} />
        </Row>
        <Row label="Error states">
          <Radio label="label" checked={false} error />
          <Radio label="label" checked={true} error />
        </Row>
        <Row label="Disabled">
          <Radio label="label" checked={false} disabled />
          <Radio label="label" checked={true} disabled />
        </Row>
        <Row label="No label">
          <Radio checked={false} hasLabel={false} />
          <Radio checked={true} hasLabel={false} />
        </Row>
        <Row label="Group">
          <RadioGroupDemo />
        </Row>
      </Section>

      {/* ── Progress Bar ── */}
      <Section title="Progress Bar">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 320 }}>
          <ProgressBar value={0} />
          <ProgressBar value={25} />
          <ProgressBar value={50} />
          <ProgressBar value={75} />
          <ProgressBar value={100} />
        </div>
      </Section>

      {/* ── Pagination ── */}
      <Section title="Pagination">
        <Row label="Few pages">
          <PaginationDemo total={5} initial={3} />
        </Row>
        <Row label="Many pages — start">
          <PaginationDemo total={20} initial={1} />
        </Row>
        <Row label="Many pages — middle">
          <PaginationDemo total={20} initial={10} />
        </Row>
        <Row label="Many pages — end">
          <PaginationDemo total={20} initial={20} />
        </Row>
        <Row label="Pagination footer">
          <PaginationFooterDemo />
        </Row>
      </Section>

      {/* ── Badge ── */}
      <Section title="Badge">
        <Row label="Counter">
          <Badge type="counter" label="1" />
          <Badge type="counter" label="9" />
          <Badge type="counter" label="99" />
          <Badge type="counter" label="99+" />
        </Row>
        <Row label="Dot">
          <Badge type="dot" />
        </Row>
      </Section>

      {/* ── Link ── */}
      <Section title="Link">
        <Row label="Neutral · Brand · Error">
          <Link type="neutral" label="Link label" />
          <Link type="brand" label="Link label" />
          <Link type="error" label="Link label" />
        </Row>
        <Row label="Left icon only · Right icon only · Both · None">
          <Link type="brand" label="Link label" hasLeftIcon hasRightIcon={false} />
          <Link type="brand" label="Link label" hasLeftIcon={false} hasRightIcon />
          <Link type="brand" label="Link label" hasLeftIcon hasRightIcon />
          <Link type="brand" label="Link label" hasLeftIcon={false} hasRightIcon={false} />
        </Row>
        <Row label="Disabled">
          <Link type="neutral" label="Link label" disabled />
          <Link type="brand" label="Link label" disabled />
          <Link type="error" label="Link label" disabled />
        </Row>
      </Section>

      {/* ── Label ── */}
      <Section title="Label">
        <Row label="Sizes — md · sm · xs">
          <Label size="md" label="Label" />
          <Label size="sm" label="Label" />
          <Label size="xs" label="Label" />
        </Row>
        <Row label="No icon">
          <Label size="md" label="Label" hasIcon={false} />
          <Label size="sm" label="Label" hasIcon={false} />
          <Label size="xs" label="Label" hasIcon={false} />
        </Row>
      </Section>

      {/* ── Divider ── */}
      <Section title="Divider">
        <Row label="Horizontal">
          <div style={{ width: 320 }}>
            <Divider orientation="horizontal" />
          </div>
        </Row>
        <Row label="Vertical">
          <div style={{ height: 64, display: 'flex', alignItems: 'stretch' }}>
            <Divider orientation="vertical" />
          </div>
        </Row>
      </Section>

      {/* ── Input Field ── */}
      <Section title="Input Field">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 760 }}>
          <InputField variant="text" />
          <InputField variant="text" error="This field is required" />
          <InputField variant="select" />
          <InputField variant="select" error="Please select an option" />
          <InputField variant="search" />
          <InputField variant="search" error="No search results" />
          <InputField variant="date" />
          <InputField variant="date" error="Invalid date" />
          <InputField variant="time" />
          <InputField variant="time" error="Invalid time" />
          <InputField variant="password" />
          <InputField variant="password" error="Password is incorrect" />
          <InputField variant="file" />
          <InputField variant="file" error="File too large" />
        </div>
      </Section>

      {/* ── Date Picker ── */}
      <Section title="Date Picker">
        <Row label="Single date">
          <DatePicker />
        </Row>
        <Row label="Single date — with error">
          <DatePicker error="Invalid date" />
        </Row>
        <Row label="Range — horizontal calendar">
          <DateRangePicker layout="horizontal" />
        </Row>
        <Row label="Range — vertical calendar">
          <DateRangePicker layout="vertical" />
        </Row>
      </Section>

      {/* ── Chip ── */}
      <Section title="Chip">
        <Row label="Simple — base · with icon · no dismiss">
          <Chip label="Label" onDismiss={() => {}} />
          <Chip label="Label" icon={<PlusIcon />} onDismiss={() => {}} />
          <Chip label="Label" />
        </Row>
        <Row label="Error">
          <Chip label="Label" error onDismiss={() => {}} />
          <Chip label="Label" icon={<PlusIcon />} error onDismiss={() => {}} />
        </Row>
        <Row label="Disabled">
          <Chip label="Label" disabled onDismiss={() => {}} />
        </Row>
        <Row label="Advanced — category + label + caret">
          <Chip advanced label="Value" category="Filter" onDropdown={() => {}} />
          <Chip advanced label="Value" category="Filter" icon={<PlusIcon />} onDropdown={() => {}} />
          <Chip advanced label="Value" category="Filter" error onDropdown={() => {}} />
          <Chip advanced label="Value" category="Filter" disabled onDropdown={() => {}} />
        </Row>
      </Section>

      {/* ── Popover ── */}
      <Section title="Popover">
        <Row label="Top — sm · md · lg">
          <Popover pointer="top" size="sm" />
          <Popover pointer="top" size="md" />
          <Popover pointer="top" size="lg" />
        </Row>
        <Row label="Bottom — sm · md · lg">
          <Popover pointer="bottom" size="sm" />
          <Popover pointer="bottom" size="md" />
          <Popover pointer="bottom" size="lg" />
        </Row>
        <Row label="Left — sm · md · lg">
          <Popover pointer="left" size="sm" />
          <Popover pointer="left" size="md" />
          <Popover pointer="left" size="lg" />
        </Row>
        <Row label="Right — sm · md · lg">
          <Popover pointer="right" size="sm" />
          <Popover pointer="right" size="md" />
          <Popover pointer="right" size="lg" />
        </Row>
        <Row label="No pointer · No actions · No slot">
          <Popover pointer="top" hasPointer={false} size="sm" />
          <Popover pointer="top" hasActions={false} size="sm" />
          <Popover pointer="top" size="sm">{null}</Popover>
        </Row>
      </Section>

      {/* ── Skeleton ── */}
      <Section title="Skeleton">
        <Row label="Text · Button · Input · Container · Avatar">
          <Skeleton type="text" />
          <Skeleton type="button" />
          <Skeleton type="input" />
          <Skeleton type="container" />
          <Skeleton type="avatar" />
        </Row>
        <Row label="Composed card skeleton">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Skeleton type="container" />
            <Skeleton type="text" />
            <Skeleton type="text" />
            <Skeleton type="button" />
          </div>
        </Row>
      </Section>

      {/* ── Stepper ── */}
      <Section title="Stepper">
        <Row label="Horizontal — all states">
          <Stepper
            orientation="horizontal"
            steps={[
              { state: 'current',       title: 'Title', description: 'Description' },
              { state: 'next',          title: 'Title', description: 'Description' },
              { state: 'error',         title: 'Title', description: 'Description' },
              { state: 'current-error', title: 'Title', description: 'Description' },
              { state: 'completed',     title: 'Title', description: 'Description' },
            ]}
          />
        </Row>
        <Row label="Horizontal — 2 steps">
          <Stepper orientation="horizontal" steps={[
            { state: 'current', hasTitle: false, description: 'Description' },
            { state: 'next',    hasTitle: false, description: 'Description' },
          ]} />
        </Row>
        <Row label="Horizontal — 3 steps">
          <Stepper orientation="horizontal" steps={[
            { state: 'current', hasTitle: false, description: 'Description' },
            { state: 'next',    hasTitle: false, description: 'Description' },
            { state: 'next',    hasTitle: false, description: 'Description' },
          ]} />
        </Row>
        <Row label="Horizontal — 4 steps">
          <Stepper orientation="horizontal" steps={[
            { state: 'current', hasTitle: false, description: 'Description' },
            { state: 'next',    hasTitle: false, description: 'Description' },
            { state: 'next',    hasTitle: false, description: 'Description' },
            { state: 'next',    hasTitle: false, description: 'Description' },
          ]} />
        </Row>
        <Row label="Horizontal — 5 steps">
          <Stepper orientation="horizontal" steps={[
            { state: 'current', hasTitle: false, description: 'Description' },
            { state: 'next',    hasTitle: false, description: 'Description' },
            { state: 'next',    hasTitle: false, description: 'Description' },
            { state: 'next',    hasTitle: false, description: 'Description' },
            { state: 'next',    hasTitle: false, description: 'Description' },
          ]} />
        </Row>
        <Row label="Vertical — 2 steps">
          <Stepper orientation="vertical" steps={[
            { state: 'current', hasTitle: false, description: 'Description' },
            { state: 'next',    hasTitle: false, description: 'Description' },
          ]} />
        </Row>
        <Row label="Vertical — 3 steps">
          <Stepper orientation="vertical" steps={[
            { state: 'current', hasTitle: false, description: 'Description' },
            { state: 'next',    hasTitle: false, description: 'Description' },
            { state: 'next',    hasTitle: false, description: 'Description' },
          ]} />
        </Row>
        <Row label="Vertical — 4 steps">
          <Stepper orientation="vertical" steps={[
            { state: 'current', hasTitle: false, description: 'Description' },
            { state: 'next',    hasTitle: false, description: 'Description' },
            { state: 'next',    hasTitle: false, description: 'Description' },
            { state: 'next',    hasTitle: false, description: 'Description' },
          ]} />
        </Row>
        <Row label="Vertical — 5 steps">
          <Stepper orientation="vertical" steps={[
            { state: 'current', hasTitle: false, description: 'Description' },
            { state: 'next',    hasTitle: false, description: 'Description' },
            { state: 'next',    hasTitle: false, description: 'Description' },
            { state: 'next',    hasTitle: false, description: 'Description' },
            { state: 'next',    hasTitle: false, description: 'Description' },
          ]} />
        </Row>
      </Section>

      {/* ── Tabs ── */}
      <Section title="Tabs">
        <Row label="Underline — 2 items">
          <TabsDemo type="underline" count={2} />
        </Row>
        <Row label="Underline — 3 items">
          <TabsDemo type="underline" count={3} />
        </Row>
        <Row label="Underline — 4 items">
          <TabsDemo type="underline" count={4} />
        </Row>
        <Row label="Underline — 5 items">
          <TabsDemo type="underline" count={5} />
        </Row>
        <Row label="Underline — overflow (More)">
          <TabsDemo type="underline" count={4} showMore />
        </Row>
        <Row label="Underline — with badge">
          <TabsBadgeDemo />
        </Row>
        <Row label="Segment — 2 items">
          <TabsDemo type="segment" count={2} />
        </Row>
        <Row label="Segment — 3 items">
          <TabsDemo type="segment" count={3} />
        </Row>
      </Section>

      {/* ── Tag ── */}
      <Section title="Tag">
        <Row label="Filled">
          <Tag state="success" type="filled" />
          <Tag state="info"    type="filled" />
          <Tag state="error"   type="filled" />
          <Tag state="warning" type="filled" />
          <Tag state="pink"    type="filled" />
          <Tag state="purple"  type="filled" />
          <Tag state="gray"    type="filled" />
        </Row>
        <Row label="Outline">
          <Tag state="success" type="outline" />
          <Tag state="info"    type="outline" />
          <Tag state="error"   type="outline" />
          <Tag state="warning" type="outline" />
          <Tag state="pink"    type="outline" />
          <Tag state="purple"  type="outline" />
          <Tag state="gray"    type="outline" />
        </Row>
        <Row label="Text">
          <Tag state="success" type="text" />
          <Tag state="info"    type="text" />
          <Tag state="error"   type="text" />
          <Tag state="warning" type="text" />
          <Tag state="pink"    type="text" />
          <Tag state="purple"  type="text" />
          <Tag state="gray"    type="text" />
        </Row>
        <Row label="No icon · Right icon · Both icons">
          <Tag state="success" showIconLeft={false} />
          <Tag state="info"    showIconLeft={false} showIconRight />
          <Tag state="error"   showIconRight />
        </Row>
      </Section>

      {/* ── TextArea ── */}
      <Section title="TextArea">
        <Row label="Base · Filled">
          <TextArea placeholder="Input placeholder" icon={<PlusIcon />} />
          <TextArea placeholder="Input placeholder" value="Some content typed here" icon={<PlusIcon />} />
        </Row>
        <Row label="Error · Error focus">
          <TextArea placeholder="Input placeholder" icon={<PlusIcon />} error />
          <TextArea placeholder="Input placeholder" value="Invalid content" icon={<PlusIcon />} error />
        </Row>
        <Row label="Disabled">
          <TextArea placeholder="Input placeholder" icon={<PlusIcon />} disabled />
        </Row>
        <Row label="No icon">
          <TextArea placeholder="Input placeholder" />
        </Row>
      </Section>

      {/* ── Tooltip ── */}
      <Section title="Tooltip">
        <Row label="Top · Bottom · Left · Right">
          <Tooltip pointer="top" />
          <Tooltip pointer="bottom" />
          <Tooltip pointer="left" />
          <Tooltip pointer="right" />
        </Row>
        <Row label="Custom text">
          <Tooltip pointer="top" label="This is a helpful tooltip." />
          <Tooltip pointer="right" label="Save your changes before leaving." />
        </Row>
      </Section>

      {/* ── Toggle ── */}
      <Section title="Toggle">
        <Row label="Off · On">
          <Toggle checked={false} label="Label" />
          <Toggle checked={true} label="Label" />
        </Row>
        <Row label="No label">
          <Toggle checked={false} hasLabel={false} />
          <Toggle checked={true} hasLabel={false} />
        </Row>
        <Row label="Disabled">
          <Toggle checked={false} disabled label="Label" />
          <Toggle checked={true} disabled label="Label" />
        </Row>
        <Row label="Interactive">
          <ToggleDemo />
        </Row>
      </Section>

      {/* ── Toaster ── */}
      <Section title="Toaster">
        <Row label="Success · Info · Error · Warning">
          <Toaster type="success" />
          <Toaster type="info" />
          <Toaster type="error" />
          <Toaster type="warning" />
        </Row>
        <Row label="Neutral · White">
          <Toaster type="neutral" />
          <Toaster type="white" />
        </Row>
        <Row label="Custom text">
          <Toaster type="success" labelText="Your changes have been saved." />
          <Toaster type="error" labelText="Something went wrong. Please try again." />
        </Row>
      </Section>

      {/* ── FileUploader ── */}
      <Section title="File Uploader">
        <Row label="Dropzone">
          <FileUploader type="dropzone" />
        </Row>
        <Row label="Dropzone — custom text">
          <FileUploader type="dropzone" title="Drag & drop your files here or" description="Supports .png, .jpg, .pdf up to 10MB." />
        </Row>
        <Row label="Dropzone — disabled">
          <FileUploader type="dropzone" disabled />
        </Row>
        <Row label="Simple upload">
          <FileUploader type="simple upload" />
        </Row>
        <Row label="Simple upload — disabled">
          <FileUploader type="simple upload" disabled />
        </Row>
      </Section>

      {/* ── EmptyState ── */}
      <Section title="Empty State">
        <Row label="chart · alert · connection · database · documents — lg">
          <EmptyState property1="chart" size="lg" />
          <EmptyState property1="alert" size="lg" />
          <EmptyState property1="connection" size="lg" />
          <EmptyState property1="database" size="lg" />
          <EmptyState property1="documents" size="lg" />
        </Row>
        <Row label="forms · email · permissions · privacy · calendar — lg">
          <EmptyState property1="forms" size="lg" />
          <EmptyState property1="email" size="lg" />
          <EmptyState property1="permissions" size="lg" />
          <EmptyState property1="privacy" size="lg" />
          <EmptyState property1="calendar" size="lg" />
        </Row>
        <Row label="All types — md">
          <EmptyState property1="chart" size="md" />
          <EmptyState property1="alert" size="md" />
          <EmptyState property1="connection" size="md" />
          <EmptyState property1="database" size="md" />
          <EmptyState property1="documents" size="md" />
        </Row>
        <Row label="All types — sm">
          <EmptyState property1="chart" size="sm" />
          <EmptyState property1="alert" size="sm" />
          <EmptyState property1="connection" size="sm" />
          <EmptyState property1="database" size="sm" />
          <EmptyState property1="forms" size="sm" />
          <EmptyState property1="email" size="sm" />
          <EmptyState property1="permissions" size="sm" />
          <EmptyState property1="privacy" size="sm" />
          <EmptyState property1="calendar" size="sm" />
        </Row>
        <Row label="No button · No description · No title">
          <EmptyState property1="chart" hasButton={false} />
          <EmptyState property1="alert" showDescription={false} />
          <EmptyState property1="connection" showTitle={false} showDescription={false} />
        </Row>
      </Section>

      {/* ── Checkbox ── */}
      <Section title="Checkbox">
        <Row label="Unchecked · Checked · Intermediate">
          <Checkbox label="Unchecked" checked={false} />
          <Checkbox label="Checked" checked={true} />
          <Checkbox label="Intermediate" indeterminate={true} />
        </Row>
        <Row label="Error states">
          <Checkbox label="Unchecked error" checked={false} error />
          <Checkbox label="Checked error" checked={true} error />
          <Checkbox label="Intermediate error" indeterminate={true} error />
        </Row>
        <Row label="Disabled">
          <Checkbox label="Unchecked" checked={false} disabled />
          <Checkbox label="Checked" checked={true} disabled />
          <Checkbox label="Intermediate" indeterminate={true} disabled />
        </Row>
        <Row label="No label">
          <Checkbox checked={false} />
          <Checkbox checked={true} />
          <Checkbox indeterminate={true} />
        </Row>
      </Section>
    </div>
  );
}
