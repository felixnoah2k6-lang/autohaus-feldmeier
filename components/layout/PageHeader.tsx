import type { LucideIcon } from "lucide-react";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  align?: "left" | "center";
};

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  icon: Icon,
  align = "left",
}: PageHeaderProps) {
  const isCenter = align === "center";

  return (
    <section className="relative bg-white border-b border-border overflow-hidden">
      {/* Subtle yellow accent stripe on top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />

      {/* Background ornament */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-[420px] rounded-full bg-primary/10 blur-3xl"
      />

      <div className="container mx-auto px-4 md:px-6 py-14 md:py-20 relative">
        <div
          className={`max-w-3xl ${isCenter ? "mx-auto text-center items-center" : ""} flex flex-col`}
        >
          {Icon && (
            <div
              className={`mb-5 inline-flex h-12 w-12 items-center justify-center bg-primary text-black rounded-xs ${isCenter ? "" : ""}`}
            >
              <Icon size={24} strokeWidth={1.75} />
            </div>
          )}
          {eyebrow && (
            <div
              className={`flex items-center gap-3 mb-4 ${isCenter ? "justify-center" : ""}`}
            >
              {isCenter && <div className="h-px w-8 bg-black" />}
              <span className="text-overline text-mute">{eyebrow}</span>
              <div className="h-px w-8 bg-black" />
            </div>
          )}
          <h1 className="text-display-lg md:text-display-xl leading-[1.0] tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-body-lg md:text-subtitle text-mute mt-5 max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
