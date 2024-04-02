import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/team">Team</Link>
          </li>
        </ul>
      </nav>
      <body>{children}</body>
    </html>
  );
}
