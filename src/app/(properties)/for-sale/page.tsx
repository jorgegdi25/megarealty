import Link from 'next/link';
import styles from '../properties.module.css';
import pageStyles from '../../page.module.css';

export default function ForSalePage() {
  return (
    <div className={pageStyles.main}>
      <div className={styles.heroBanner}>
        <h1 className={styles.title}>Properties For Sale</h1>
      </div>

      <div className={styles.tabsContainer}>
        <div className={styles.tabs}>
          <Link href="/for-sale" className={`${styles.tab} ${styles.active}`}>
            For Sale
          </Link>
          <Link href="/for-rent" className={styles.tab}>
            For Rent
          </Link>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {/* Placeholder data until Sanity is connected */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className={pageStyles.propertyCard}>
                <div className={pageStyles.propertyImage}>
                  {/* Image placeholder */}
                </div>
                <div className={pageStyles.propertyContent}>
                  <div className={pageStyles.propertyPrice}>$550,000</div>
                  <h3 className={pageStyles.propertyTitle}>456 Palm Avenue</h3>
                  <div className={pageStyles.propertyDetails}>
                    <span>4 Beds</span>
                    <span>3 Baths</span>
                    <span>2,800 sqft</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
                    Single Family Residence • MLS# A1122334
                  </p>
                  <Link href={`/properties/sale-${item}`} className="btn btn-outline" style={{ width: '100%' }}>
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
