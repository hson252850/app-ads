interface SectionHeadProps {
  eyebrow: string;
  title: string;
  className?: string;
}

/** Cụm tiêu đề canh giữa dùng cho Dịch vụ & Gallery. */
export default function SectionHead({
  eyebrow,
  title,
  className = "mb-14",
}: SectionHeadProps) {
  return (
    <div className={`mx-auto max-w-[640px] text-center ${className}`}>
      <p className="mb-3 font-heading text-[13px] uppercase tracking-[3px] text-purple-500">
        {eyebrow}
      </p>
      <h2 className="font-heading text-[clamp(28px,4vw,38px)] font-semibold text-purple-900">
        {title}
      </h2>
    </div>
  );
}
