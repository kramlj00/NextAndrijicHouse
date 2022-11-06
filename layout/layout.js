import React, { useState } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import ToggleBars from "../helpers/toggleBars";
import styles from "./layout.module.scss";

export const siteTitle = "Andrijić House";

export default function Layout({ children, activeTab }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="TWpe2aeZnD_aC8cZiU0xXXfD_CAnbcjHPX7ajgdq-Lw"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <title>{activeTab}</title> */}
      </Head>
      <main className={`${isOpen ? styles.pageContainer : ""}`}>
        <header>
          <ToggleBars
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            activeTab={activeTab}
          />
        </header>
        <div className={styles.mainContent}>{children}</div>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}
