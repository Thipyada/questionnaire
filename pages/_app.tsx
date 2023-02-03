import '@/styles/globals.css'
import '@/styles/home.css'
import '@/styles/header.css'
import '@/styles/qtitle.css'
import '@/styles/qAddButton.css'
import '@/styles/qEachQuestion.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
