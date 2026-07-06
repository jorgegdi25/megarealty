import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground} />
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroTitle} animate-fade-in-up`}>
            The New Real Estate Concept
          </h1>
          <p className={`${styles.heroSubtitle} animate-fade-in-up delay-1`}>
            in Florida
          </p>
          <div className="animate-fade-in-up delay-2">
            <a href="tel:+19544394134" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2.5rem' }}>
              +1 (954) 439-4134
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`${styles.about} section`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <h2>Mega Realty International</h2>
              <p>
                We provide our customers with top-tier services in residential and commercial real estate. Our professional team brings decades of experience to the Florida market.
              </p>
              <p>
                Whether you are looking to buy, sell, or rent, we guide you through every step of the process with integrity and dedication.
              </p>
              <Link href="/contacts" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
            <div className={styles.aboutImage}>
              <img src="/images/logo.png" alt="Mega Realty Logo Large" />
            </div>
          </div>
        </div>
      </section>

      {/* Listings Section (Placeholder before Sanity integration) */}
      <section className={`${styles.listings} section`}>
        <div className="container">
          <h2 className="section-title">New Listings</h2>
          <div className={styles.listingsGrid}>
            {/* We will map Sanity data here later. For now, 3 static placeholders */}
            {[1, 2, 3].map((item) => (
              <div key={item} className={styles.propertyCard}>
                <div className={styles.propertyImage}>
                  {/* Image placeholder */}
                </div>
                <div className={styles.propertyContent}>
                  <div className={styles.propertyPrice}>$450,000</div>
                  <h3 className={styles.propertyTitle}>123 Example Street</h3>
                  <div className={styles.propertyDetails}>
                    <span>3 Beds</span>
                    <span>2 Baths</span>
                    <span>2,100 sqft</span>
                  </div>
                  <Link href={`/properties/example-${item}`} className="btn btn-outline" style={{ width: '100%' }}>
                    See more
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/for-sale" className="btn btn-primary">
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Build Your House Section */}
      <section className={`${styles.featureSection} section`}>
        <div className="container">
          <div className={styles.featureGrid}>
            <div className={styles.featureImageWrapper}>
              <div style={{ background: '#ddd', height: '400px', width: '100%' }} /> {/* Placeholder */}
            </div>
            <div className={styles.featureContent}>
              <h2>We can build your house!</h2>
              <p>
                Design your dream home with our partner builders. From concept to reality, we guide you through the custom home building process in Southwest Florida.
              </p>
              <ul className={styles.featureList}>
                <li>Custom architectural designs</li>
                <li>Premium materials and finishes</li>
                <li>Project management and oversight</li>
                <li>Turn-key solutions</li>
              </ul>
              <Link href="/contacts" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest in Florida */}
      <section className={`${styles.featureSection} section`} style={{ background: '#fff' }}>
        <div className="container">
          <div className={`${styles.featureGrid} ${styles.reverse}`}>
            <div className={styles.featureImageWrapper}>
              <div style={{ background: '#ddd', height: '400px', width: '100%' }} /> {/* Placeholder */}
            </div>
            <div className={styles.featureContent}>
              <h2>Why invest in Florida?</h2>
              <ul className={styles.featureList}>
                <li>No state income tax</li>
                <li>Strong and growing economy</li>
                <li>High demand for rentals (long and short term)</li>
                <li>Amazing weather and lifestyle</li>
                <li>Constant population growth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
