export default function SectionHeader({ eyebrow, title, children, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="heading">{title}</h1>
      {children && <p className="lead">{children}</p>}
    </div>
  );
}
