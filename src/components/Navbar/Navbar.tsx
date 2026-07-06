'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'For Sale', href: '/for-sale' },
  { label: 'For Rent', href: '/for-rent' },
  { label: 'Professional Team', href: '/professional-team' },
  { label: 'Contacts', href: '/contacts' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContent}>
        <Link href="/" className={styles.logo}>
          <img
            src="/images/logo.png"
            alt="Mega Realty International"
          />
        </Link>

        <div
          className={`${styles.mobileOverlay} ${mobileOpen ? styles.show : ''}`}
          onClick={() => setMobileOpen(false)}
        />

        <div className={`${styles.navLinks} ${mobileOpen ? styles.mobileOpen : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contacts" className={styles.ctaButton}>
            Let&apos;s Connect!
          </Link>
        </div>

        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
