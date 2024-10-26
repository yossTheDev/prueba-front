import { Inter as FontSans } from "next/font/google"

export const fontSans = FontSans({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: "normal",
    variable: "--font-sans",
})

