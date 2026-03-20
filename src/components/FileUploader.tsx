import { useRef, useState } from 'react';
import './FileUploader.css';

export type FileUploaderType = 'dropzone' | 'simple upload';

interface FileUploaderProps {
  type?: FileUploaderType;
  title?: string;
  description?: string;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  onChange?: (files: FileList) => void;
  className?: string;
}

// ── Upload icon ────────────────────────────────────────────────────────────
const FileArrowUpIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
    <path d="M19 4H8a2 2 0 00-2 2v20a2 2 0 002 2h16a2 2 0 002-2V11L19 4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 4v7h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 22v-7M13 18l3-3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Component ──────────────────────────────────────────────────────────────
export function FileUploader({
  type = 'dropzone',
  title = 'Upload your files here or',
  description = 'Only .jpg files are supported and max file size is 1MB.',
  accept,
  multiple,
  disabled = false,
  onChange,
  className,
}: FileUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  function openPicker() {
    if (!disabled) inputRef.current?.click();
  }

  function handleFiles(files: FileList | null) {
    if (files && files.length > 0) onChange?.(files);
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    if (!disabled) setDragging(true);
  }

  function handleDragLeave() {
    setDragging(false);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragging(false);
    if (!disabled) handleFiles(e.dataTransfer.files);
  }

  const hiddenInput = (
    <input
      ref={inputRef}
      type="file"
      accept={accept}
      multiple={multiple}
      disabled={disabled}
      className="file-uploader-hidden-input"
      onChange={e => handleFiles(e.target.files)}
    />
  );

  if (type === 'dropzone') {
    return (
      <div
        className={['file-uploader-dropzone', dragging ? 'file-uploader-dragging' : '', disabled ? 'file-uploader-disabled' : '', className ?? ''].filter(Boolean).join(' ')}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {hiddenInput}
        <FileArrowUpIcon />
        <p className="file-uploader-title">{title}</p>
        <button className="file-uploader-btn" type="button" onClick={openPicker} disabled={disabled}>
          Browse files
        </button>
        <p className="file-uploader-description file-uploader-description-center">{description}</p>
      </div>
    );
  }

  return (
    <div className={['file-uploader-simple', disabled ? 'file-uploader-disabled' : '', className ?? ''].filter(Boolean).join(' ')}>
      {hiddenInput}
      <button className="file-uploader-btn" type="button" onClick={openPicker} disabled={disabled}>
        Browse files
      </button>
      <p className="file-uploader-description">{description}</p>
    </div>
  );
}
