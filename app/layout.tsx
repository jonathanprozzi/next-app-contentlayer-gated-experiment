import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const inter = Inter({ subsets: ['latin'] });

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          'antialiased max-w-2xl flex flex-col mx-4 my-8 lg:mx-auto bg-slate-900 text-slate-200'
        )}
      >
        <main className="flex-auto min-w-0 flex flex-col px-2 md:px-0">
          <Providers>{children}</Providers>
          <Navbar />
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
