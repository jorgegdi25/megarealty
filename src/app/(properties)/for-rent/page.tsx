import Link from 'next/link';
import styles from '../properties.module.css';
import pageStyles from '../../page.module.css';

export default function ForRentPage() {
  return (
    <div className={pageStyles.main}>
      <div className={styles.heroBanner}>
        <h1 className={styles.title}>Properties For Rent</h1>
      </div>

      <div className={styles.tabsContainer}>
        <div className={styles.tabs}>
          <Link href="/for-sale" className={styles.tab}>
            For Sale
          </Link>
          <Link href="/for-rent" className={`${styles.tab} ${styles.active}`}>
            For Rent
          </Link>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {/* Placeholder data until Sanity is connected */}
            {[1, 2].map((item) => (
              <div key={item} className={pageStyles.propertyCard}>
                <div className={pageStyles.propertyImage}>
                  {/* Image placeholder */}
                </div>
                <div className={pageStyles.propertyContent}>
                  <div className={pageStyles.propertyPrice}>$3,500 / mo</div>
                  <h3 className={pageStyles.propertyTitle}>789 Ocean Drive Apt 4B</h3>
                  <div className={pageStyles.propertyDetails}>
                    <span>2 Beds</span>
                    <span>2 Baths</span>
                    <span>1,200 sqft</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
                    Condo • MLS# R4455667
                  </p>
                  <Link href={`/properties/rent-${item}`} className="btn btn-outline" style={{ width: '100%' }}>
                    See more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
