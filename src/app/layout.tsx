import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VALORANT ROULETTE ver.2",
  description: "valorant roulette online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <Head>
        <title>VALORANT ROULETTE ver.2</title>
      </Head>
      <body className={inter.className}>
        <AppRouterCacheProvider>
            {children}
        </AppRouterCacheProvider>
        </body>
    </html>
  );
}
