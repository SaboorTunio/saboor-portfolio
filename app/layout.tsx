import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import './globals.css';

const geistMono = Geist_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Engineer & Full Stack Developer Portfolio',
  description: 'Showcasing expertise in Next.js, Python, and Agentic AI with a futuristic Cyberpunk Glassmorphism aesthetic',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistMono.className} bg-[#050505] text-white`}>
        {children}
      </body>
    </html>
  );
}