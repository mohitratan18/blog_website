import "./globals.css";

export const metadata = {
  title: "Blog App",
  description: "created by mohit ratan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
