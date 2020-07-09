import Link from 'next/link'
import Head from 'next/head'
import { MainLayout } from '../components/MainLayout'

export default function Index() {
  return (
    <MainLayout title='Main Page'>
      <h1>Hello Next.js!!!</h1>
      <p>
        <Link href={'/about'}>
          <a>About</a>
        </Link>
      </p>
      <p>
        <Link href={'/posts'}>
          <a>Posts</a>
        </Link>
      </p>
      <p>
        Nulla officia pariatur cupidatat eiusmod cillum. Qui labore labore nulla
        irure ad Lorem. Magna do aliqua nulla deserunt. Labore consectetur
        laboris sunt sint officia consectetur adipisicing incididunt et laboris
        velit quis duis aute.
      </p>
    </MainLayout>
  )
}
