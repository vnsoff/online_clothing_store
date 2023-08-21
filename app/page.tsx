import { Hero } from '@/components'
import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
    <Head>
      <title></title>
    </Head>
    <main className="overflow-hidden">
      <Hero />
    </main>
    </div>
  )
}