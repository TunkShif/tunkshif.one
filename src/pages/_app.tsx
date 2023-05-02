import { ThemeProvider } from "next-themes"
import type { AppProps } from "next/app"
import { DM_Mono as DMMono, Inter } from "next/font/google"

import "@/styles/globals.css"
import "@/styles/prose.css"
import "@/styles/prism.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const dmMono = DMMono({ subsets: ["latin"], weight: ["300", "500"], variable: "--font-dm-mono" })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className={`${inter.variable} ${dmMono.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}
