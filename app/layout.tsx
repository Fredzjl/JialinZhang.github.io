import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jialin Zhang | Computer Science',
  description: 'Personal site of Jialin Zhang, a Computer Science undergraduate at Tongji University.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
