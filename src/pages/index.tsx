import Head from "next/head";

import Navbar from "~/components/navbar";
import Footer from "~/components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>WP CLI GUI - Powered by MrDemonWolf</title>
        <meta
          name="description"
          content="A user-friendly graphical interface for managing WordPress through its command line, simplifying tasks for developers and enhancing productivity.
"
        />
        <meta property="og:url" content="https://wpcligui.mrdemonwolf.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="WP CLI GUI - Powered by MrDemonWolf"
        />
        <meta
          property="og:description"
          content="A user-friendly graphical interface for managing WordPress through its command line, simplifying tasks for developers and enhancing productivity."
        />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="mrdemonwolf.com" />
        <meta
          property="twitter:url"
          content="https://wpcligui.mrdemonwolf.com"
        />
        <meta
          name="twitter:title"
          content="WP CLI GUI - Powered by MrDemonWolf"
        />
        <meta
          name="twitter:description"
          content="A user-friendly graphical interface for managing WordPress through its command line, simplifying tasks for developers and enhancing productivity.r"
        />
        <meta name="twitter:image" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen flex-col justify-between bg-gray-100 dark:bg-gray-900">
        <Navbar />
        <Footer />
      </main>
    </>
  );
}
