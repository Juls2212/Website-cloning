import "./globals.css";

export const metadata = {
  title: "Discover Apps",
  description: "A visual App Store discover page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
