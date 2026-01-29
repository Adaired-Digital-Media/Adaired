import FooterTop from "./FooterTop";
import Header from "./Header";
import WebFooter from "./WebFooter";

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
      <WebFooter/>
    </div>
  );
}
