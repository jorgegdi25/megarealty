import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoColumn}>
          <Link href="/">
            <img src="/images/logo.png" alt="Mega Realty International" />
          </Link>
          <p>
            Mega Realty International is a premier real estate agency specializing in luxury properties, residential homes, and commercial real estate in Florida.
          </p>
        </div>

        <div className={styles.linksColumn}>
          <h4>Company Info</h4>
          <ul className={styles.linksList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/for-sale">For Sale</Link></li>
            <li><Link href="/for-rent">For Rent</Link></li>
            <li><Link href="/professional-team">Professional Team</Link></li>
            <li><Link href="/contacts">Contacts</Link></li>
          </ul>
        </div>

        <div className={styles.contactColumn}>
          <h4>Contact Us</h4>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span>📍</span>
              <span>1423 SE 16th Pl, Ste #101<br />Cape Coral, FL 33990</span>
            </div>
            <div className={styles.contactItem}>
              <span>📞</span>
              <span>+1 (954) 439-4134</span>
            </div>
            <div className={styles.contactItem}>
              <span>✉️</span>
              <a href="mailto:info@megarealtyinternational.com">info@megarealtyinternational.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {currentYear} Mega Realty International, Inc. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <a href="#" aria-label="Facebook">FB</a>
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="LinkedIn">IN</a>
        </div>
      </div>
    </footer>
  );
}
