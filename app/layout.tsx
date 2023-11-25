import '@/app/ui/global.css';
import { pretendard } from '@/app/ui/fonts';
import type { Metadata } from 'next/types';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${pretendard.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
