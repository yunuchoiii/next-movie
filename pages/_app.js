import Layout from "@/components/Layout"
import Head from "next/head"
import "/styles/globals.css"

export default function App({Component, pageProps}){
  return (
    <>
      <Head>
        <title>Next Movie</title>
      </Head>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
      <style global jsx>{`
        html,
        body,
        #__next {
          height: 100%;
        }
      `}</style>
    </>
  )
}