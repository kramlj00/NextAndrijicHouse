import Footer from "../components/Footer";
import ToggleBars from "../helpers/toggleBars";
import React, { useState } from "react";
import styles from "./layout.module.scss";

export const siteTitle = "Andrijić House";

export default function Layout({ children, activeTab }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${isOpen && styles.pageContainer}`}>
      <header>
        <ToggleBars
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          activeTab={activeTab}
        />
      </header>
      <main className={styles.mainContent}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
