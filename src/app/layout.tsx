import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Engelsiz Dünya Platformu',
  description: 'Dünya genelinde engelli hakları için çalışan, Türkiye merkezli küresel savunuculuk platformu.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        {/* Placeholder for dyslexia friendly font */}
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-secondary selection:text-white">
        {children}
      </body>
    </html>
  );
}
