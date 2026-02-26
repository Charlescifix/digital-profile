export default function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="max-w-3xl">
      {kicker ? (
        <div className="flex items-center gap-2 mb-3">
          <div className="h-2 w-2 bg-amber-400 rounded-sm" />
          <p className="text-xs tracking-[0.22em] uppercase text-neutral-600">{kicker}</p>
        </div>
      ) : null}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">{title}</h2>
      {subtitle ? (
        <p className="mt-3 text-neutral-700 leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}
