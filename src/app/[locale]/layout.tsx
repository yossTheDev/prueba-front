/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next";

import "../globals.css";

import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { fontSans, geistMono } from "../lib/fonts";
import { SlidesProvider } from "../context/SlidesContext";
import { Header } from "../components/header";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${fontSans.variable} ${fontSans.className} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <SlidesProvider>
            <Header></Header>
            {children}
          </SlidesProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
