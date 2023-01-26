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
        <meta name="google-site-verification" content="89yr1C8H5GkgzTdpMaGOb15FbofFhAFJvJ3AuwUrVi8" />
        <meta name="google-site-verification" content="XDGxIBikhZwD0YTQX4Xvs5FVmu6uV3Py8JdqOUkrGEw" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://andrijichouse.com/hr" />
        <link rel="canonical" href="https://andrijichouse.com/hr/rooms" />
        <link rel="canonical" href="https://andrijichouse.com/hr/exterior" />
        <link rel="canonical" href="https://andrijichouse.com/hr/contact" />
        <link rel="icon" href="/favicon.ico" />
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
