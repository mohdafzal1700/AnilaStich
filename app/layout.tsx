import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Anila Stitching Center | Professional Ladies Tailoring near Technopark, Trivandrum',
  description: 'Professional ladies stitching, blouse tailoring, and alterations near Technopark, Trivandrum. Quality stitching for office wear and urgent requests.',
  generator: 'v0.app',
  openGraph: {
    title: 'Anila Stitching Center | Ladies Tailoring in Trivandrum',
    description: 'Professional ladies stitching and tailoring center near Technopark. We offer blouse stitching, alterations, and office wear tailoring.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
