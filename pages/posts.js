import Head from 'next/head'
import { useState, useEffect } from 'react'
import { MainLayout } from '../components/MainLayout'
import Link from 'next/link'

export default function Posts({ posts: serverPost }) {
  const [posts, setPosts] = useState(serverPost)

  useEffect(() => {
    async function load() {
      const response = await fetch('http://localhost:4200/posts')
      const json = await response.json()
      setPosts(json)
    }
    if (!serverPost) {
      load()
    }
  }, [])

  if (!posts) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    )
  }

  return (
    <MainLayout title='Posts Page'>
      <Head>
        <title>Posts</title>
      </Head>
      <h1>Posts page</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                {post.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </MainLayout>
  )
}

Posts.getInitialProps = async ({ req }) => {
  if (!req) {
    return { posts: null }
  }
  const response = await fetch('http://localhost:4200/posts')
  const posts = await response.json()
  return { posts }
}
