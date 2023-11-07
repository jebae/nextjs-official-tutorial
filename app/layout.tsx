import '@/app/ui/global.css';
import { pretendard } from '@/app/ui/fonts';

export const metadata = {
  title: 'Acme',
  openGraph: {
    title: 'Acme'
  }
}

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
