import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <h1>Articles</h1>
          <p>Discover in-depth perspectives and expert insights</p>
        </header>
        <main>{children}</main>
        <footer className="footer">Done by Ilya Sereda</footer>
      </body>
    </html>
  );
}
