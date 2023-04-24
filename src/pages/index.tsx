/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import React, { useState } from 'react';

// Sections
import AdditionalDetails from '@/sections/AdditionalDetails';
import Services from '@/sections/Services';
import About from '@/sections/About';
import Consultation from '@/sections/Consultation';
import LactationServices from '@/sections/LactationServices';
import Appointments from '@/sections/Appointments';

import logo from '../images/logoCropped.png';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <meta prefix="og: http://ogp.me/ns#" property="og:type" content="website" />
        <meta name="title" property="og:title" content="Loving Lactations" />
        <meta name="image" property="og:image" content="https://lovinglactation.netlify.app/logo.png" />
        <meta name="url" property="og:url" content="https://lovinglactation.netlify.app" />
        <meta
          name="description"
          property="og:description"
          content=" Mrs. Loving is a professional lactation consultant, certified by the International Board of Lactation
          Consultant Examiners. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris."
        />
        <title>Loving Lactation</title>
        <meta
          name="description"
          content=" Mrs. Loving is a professional lactation consultant, certified by the International Board of Lactation
          Consultant Examiners. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar-top"></div>
          <div className="bar-middle"></div>
          <div className="bar-bottom"></div>
        </div>
        <nav className={`navMenu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a className="menu-item" href="#consultation" onClick={() => setMenuOpen(false)}>
                Consultation
              </a>
            </li>
            <li>
              <a className="menu-item" href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a className="menu-item" href="#services" onClick={() => setMenuOpen(false)}>
                Services
              </a>
            </li>
            <li>
              <a className="menu-item" href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <section className="heroSection">
          <div className="logoWrapper">
            <Image className="logo" src={logo} alt="logo" priority />
          </div>

          <h1>Loving Lactation</h1>
        </section>

        <Consultation />
        <LactationServices />
        <About />
        <Services />
        <Appointments />
        <AdditionalDetails />
      </main>
      <footer style={{ textAlign: 'center', padding: '1rem', background: '#F4ECE0' }}>
        &copy; 2023 Loving Lactation LLC
      </footer>
    </>
  );
}
