interface ArrowIconProps {
  direction?: 'down-right' | 'up-right';
  className?: string;
}

export function ArrowIcon({ direction = 'up-right', className }: ArrowIconProps) {
  const d = direction === 'down-right' ? 'M7 7L17 17M17 17H9M17 17V9' : 'M7 17L17 7M17 7H9M17 7V15';
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

export function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <path d="M6 6L18 18M18 6L6 18" />
    </svg>
  );
}

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}
