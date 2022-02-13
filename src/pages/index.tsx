import { NextPage } from "next"
import Head from "next/head"
import About from "../components/about"
import Contact from "../components/contact"
import Home from "../components/home"
import Projects from "../components/projects"

const Portfolio: NextPage = () => {
    return (
      <div>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500;600;700;800;900&family=Noto+Serif+TC&family=Press+Start+2P&display=swap" rel="stylesheet" />
          
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Wei-Lun Ma | Front-End Developer</title>
          <meta name="description" content="Wei-Lun Ma is a front-end developer based in Slovenia, a Formosan indigenity making a habitat around Melania's nostalgia." />
          <meta name="author" content="Wei-Lun Ma" />
          <meta property="og:title" content="Wei-Lun Ma | Front-End Developer" />
          <meta property="og:image" content="https://weilunma.dev/thumbnail.png" />
          <meta property="og:description" content="Wei-Lun Ma is a front-end developer based in Slovenia, a Formosan indigenity making a habitat around Melania's nostalgia." />
          <meta property="og:url" content="https://weilunma.dev/" />
          <meta property="og:type" content="portfolio" />

        
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
        </Head>

        <main className="App">
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
      
  )
}

export default Portfolio;
