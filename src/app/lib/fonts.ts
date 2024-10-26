import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local";

export const fontSans = FontSans({
    subsets: ["latin"],
    style: "normal",
    variable: "--font-sans",
})

export const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

export const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});