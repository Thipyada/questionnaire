import Head from 'next/head'
import Antmin from '../index'

const FirebaseKey = {
  apiKey: process.env.NESXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
}


export default function Home() {
  return (
    <>
      <Head>
        <title>Antmin</title>
        <meta name="description" content="Created by KanBC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Antmin firebaseKey={FirebaseKey} />
    </>
  )
}