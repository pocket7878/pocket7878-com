import { Metadata, Viewport } from 'next';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pocket7878.com',
  description: 'pocket7878 portfolio',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ja'>
      <body>
        <div className='gird grid-cols-12 gap-1'>
          <Header />
          <main className='mt-11 mb-15 px-6 py-4'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
