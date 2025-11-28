import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn('lucide lucide-coffee', className)}
    >
        <title>Blu Koffee Studios Logo</title>
        <path d="M10 2v2" />
        <path d="M14 2v2" />
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M4 8h14v9a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z" />
    </svg>
  );
}
