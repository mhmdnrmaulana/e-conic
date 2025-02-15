export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto">
      <div className="w-10/12">{children}</div>
    </div>
  );
}
