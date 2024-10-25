"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.css';
import house from '../assets/houseofprivilege.png';
import InstagramLogo from '../assets/instagram.svg';
import TwitterLogo from '../assets/x.svg';
import LinkedInLogo from '../assets/linkedin.svg';

export default function OrangePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Ensure the element exists before removing it
  useEffect(() => {
    // Check if an element with id 'someElement' exists before removing it
    const element = document.getElementById('someElement');

    if (element) {
      // If the element exists, remove it from the DOM
      element.remove();
      console.log('Element removed successfully.');
    }
    // If you want to avoid logging an error when the element is not found, you can skip the console.error
  }, []); // Empty dependency array means this runs once after the component is mounted

  return (
    <>
      <Head>
        <title>Orange Header and Footer</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.sideStripLeft}></div>

        <div className={styles.mainContent}>
          <header className={styles.header}>
            <div className={styles.logo}>
              <h1>Logo</h1>
            </div>
            <nav className={`${styles.navMenu} ${menuOpen ? styles.active : ''}`}>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
            <button className={`${styles.menuButton} ${menuOpen ? styles.open : ''}`} onClick={toggleMenu}>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </button>
          </header>

          <div className={styles.orangeBox}>
            <Image src={house} alt="House of Privilege" className={styles.houseImage} />
          </div>

          <main className={styles.main}>
            <h2>Welcome to the Orange-Themed Page</h2>
            <p>This is the main content of the page.</p>
          </main>

          <footer className={styles.footer}>
            <div className={styles.whiteBox}>
              <p>houseofpriviledge.xyz | @houseofpriviledge.xyz all rights reserved |</p>
              <div className={styles.socialMediaIcons}>
                <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                  <img src={TwitterLogo.src} alt="X" className={styles.icon} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img src={LinkedInLogo.src} alt="LinkedIn" className={styles.icon} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={InstagramLogo.src} alt="Instagram" className={styles.icon} />
                </a>
              </div>
            </div>
          </footer>
        </div>

        <div className={styles.sideStripRight}></div>
      </div>
    </>
  );
}
