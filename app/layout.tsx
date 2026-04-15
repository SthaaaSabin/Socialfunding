import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "United Hope Nepal",
  description:
    "A Nepal-based nonprofit supporting schools, hospitals, and communities from the Himalayas to the Terai.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
