import { ChevronDown } from "lucide-react";

export default function SelectControl({ label }: { label: string }) {
  return (
    <button className="flex h-10 min-w-36 items-center justify-between gap-4 rounded-md border border-border bg-card px-3 text-sm text-foreground shadow-xs">
      <span>{label}</span>
      <ChevronDown className="size-4 text-muted-foreground" />
    </button>
  );
}

 
