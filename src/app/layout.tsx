import { type Metadata } from 'next'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Studio',
    default: 'Karabiner - Height access experts',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-red-600 text-base antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
