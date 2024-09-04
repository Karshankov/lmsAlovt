"use client";
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ToastProvider from '@/components/providers/toaster-provider';

import { Toaster } from 'sonner';

import { env } from 'process';

import { ClerkProvider } from "@clerk/clerk-react";
import { ruRU } from "@clerk/localizations";


const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    
    <ClerkProvider
    localization={ruRU}
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    >
      <html lang="ru">
        <body className={inter.className}>

          <ToastProvider />
          <Toaster position="bottom-center" />
          {children}

        </body>
        
      </html>
      </ClerkProvider>
  );
}