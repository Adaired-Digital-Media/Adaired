import Header from "./Header";

export default function MainWebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-dvh flex-col">
      <div className="fixed z-40 mt-[1rem] w-[100%]">
        <Header />
      </div>
      <main id="main" className="flex-1">
        {children}
      </main>
    </div>
  );
}
