import './FileUploadCard.css';

export type FileUploadCardState = 'in-progress' | 'success' | 'error';

function FileIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5 2.5H5a1.5 1.5 0 00-1.5 1.5v12A1.5 1.5 0 005 17.5h10a1.5 1.5 0 001.5-1.5V8.5L11.5 2.5z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.5 2.5v6h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6.5 10l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WarningCircleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10 6.5v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="10" cy="13" r="0.75" fill="currentColor" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.5 5.5h13M8.5 5.5v-2h3v2M15.5 5.5l-1 11h-9l-1-11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface FileUploadCardProps {
  state?: FileUploadCardState;
  filename?: string;
  filesize?: string;
  progress?: number;
  supportMessage?: string;
  onRemove?: () => void;
  className?: string;
}

export function FileUploadCard({
  state = 'in-progress',
  filename = 'File_Test_24080.pdf',
  filesize = '3 mb',
  progress = 50,
  supportMessage = 'Support message',
  onRemove,
  className,
}: FileUploadCardProps) {
  const classes = [
    'file-upload-card',
    `file-upload-card-${state}`,
    className ?? '',
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className="file-upload-card-row">
        <span className="file-upload-card-icon">
          {state === 'success'    && <CheckCircleIcon />}
          {state === 'error'      && <WarningCircleIcon />}
          {state === 'in-progress' && <FileIcon />}
        </span>

        <div className="file-upload-card-info">
          <span className="file-upload-card-filename">{filename}</span>
          <span className="file-upload-card-filesize">{filesize}</span>
        </div>

        <button className="file-upload-card-remove" aria-label="Remove file" onClick={onRemove}>
          <TrashIcon />
        </button>
      </div>

      {state === 'in-progress' && (
        <div className="file-upload-card-progress-row">
          <div className="file-upload-card-progress-track">
            <div
              className="file-upload-card-progress-fill"
              style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            />
          </div>
          <span className="file-upload-card-progress-label">{progress}%</span>
        </div>
      )}

      {state === 'error' && (
        <p className="file-upload-card-support">{supportMessage}</p>
      )}
    </div>
  );
}
