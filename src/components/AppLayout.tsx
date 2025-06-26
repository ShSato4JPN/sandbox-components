import { ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="w-full h-full grid grid-rows-[auto_1fr_auto]">
        <header className="w-full text-left border-b p-3">
          <h1 className="text-2xl font-bold">App Header</h1>
        </header>
        <main className="p-3">{children}</main>
        <footer className="w-full text-center"></footer>
      </div>
    </div>
  );
}
