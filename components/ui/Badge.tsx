import clsx from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "orange" | "green" | "slate";
}

export default function Badge({ children, variant = "orange" }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wide",
        variant === "orange" && "bg-brand-100 text-brand-700",
        variant === "green" && "bg-green-100 text-green-700",
        variant === "slate" && "bg-slate-100 text-slate-600"
      )}
    >
      {children}
    </span>
  );
}
