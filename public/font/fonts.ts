import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const helvetica = localFont({
  src: './fonts/Helvetica.woff2',
});

export { inter, helvetica };
