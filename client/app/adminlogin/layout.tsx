export default function AdminLogin({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="max-w-screen-4xl mx-auto flex h-full flex-col items-center justify-center sm:flex-row ">
          {children}
        </main>
      </body>
    </html>
  );
}
