type Status = "nowe" | "w-trakcie" | "zakonczone" | "ocenione" | "anulowane";

interface StatusChipProps {
  status: Status;
}

const statusConfig: Record<Status, { label: string; color: string; bg: string }> = {
  "nowe": { label: "Nowe", color: "#1B4332", bg: "#E8F5E9" },
  "w-trakcie": { label: "W trakcie", color: "#C9A961", bg: "#FBF8F0" },
  "zakonczone": { label: "Zakończone", color: "#1B4332", bg: "#E8F5E9" },
  "ocenione": { label: "Ocenione", color: "#1B4332", bg: "#E8F5E9" },
  "anulowane": { label: "Anulowane", color: "#7A7A7A", bg: "#F0F0F0" }
};

export function StatusChip({ status }: StatusChipProps) {
  const config = statusConfig[status];
  
  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-[8px] text-sm font-medium"
      style={{
        backgroundColor: config.bg,
        color: config.color
      }}
    >
      {config.label}
    </span>
  );
}