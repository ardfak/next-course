import '../styles/main.scss'
import NextProgress from 'nextjs-progressbar'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextProgress
        color='yellow'
        startPosition='0.3'
        stopDelayMs='200'
        height='3'
      />
      <Component {...pageProps} />
    </>
  )
}
