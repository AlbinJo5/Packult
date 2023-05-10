import Head from 'next/head'
import { useRouter } from 'next/router'

export default function MetaHead({ pageMeta }) {
  const router = useRouter()
  const meta = {
    title: 'Packult',
    description: 'Group of packaging experts committed to the cause of better, smarter and sustainable packaging',
    type: 'website',
    url: process.env.NEXT_PUBLIC_SERVER_URL,

    ...pageMeta
  }
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:url" content={meta.url + router.pathname} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:sitename" content={"Packult"} />
      {
        meta.date && <meta property="article:published_time" content={meta.date} />
      }
    </Head>
  )
}
