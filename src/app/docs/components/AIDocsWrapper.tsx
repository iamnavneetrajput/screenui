export default function AIDocsWrapper({
  aiReadable,
  children,
}: {
  aiReadable?: boolean;
  children: React.ReactNode;
}) {
  if (!aiReadable) return <>{children}</>;

  return (
    <article
      data-ai-readable="true"
      className="prose max-w-none"
    >
      {children}
    </article>
  );
}
