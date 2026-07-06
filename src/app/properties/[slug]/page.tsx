import styles from './detail.module.css';
import pageStyles from '../../page.module.css';

export default function PropertyDetailPage({ params }: { params: { slug: string } }) {
  // En el futuro: const property = await getPropertyBySlug(params.slug);
  
  return (
    <div className={pageStyles.main}>
      <div className={`container ${styles.detailContainer}`}>
        
        <div className={styles.header}>
          <div className={styles.price}>$550,000</div>
          <h1 className={styles.title}>456 Palm Avenue, Cape Coral, FL 33990</h1>
          <div className={styles.badges}>
            <span className={styles.badge}>For Sale</span>
            <span className={styles.badge}>Single Family Residence</span>
            <span className={styles.badge}>MLS# A1122334</span>
          </div>
        </div>

        <div className={styles.gallery}>
          <div className={styles.mainImage} />
          <div className={styles.sideImage} />
          <div className={styles.sideImage} />
        </div>

        <div className={styles.contentGrid}>
          <div>
            <h2 className={styles.sectionTitle}>Property Overview</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <span className={styles.featureLabel}>Bedrooms</span>
                <span className={styles.featureValue}>4</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureLabel}>Bathrooms</span>
                <span className={styles.featureValue}>3</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureLabel}>Square Feet</span>
                <span className={styles.featureValue}>2,800 sqft</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureLabel}>Property Type</span>
                <span className={styles.featureValue}>Single Family</span>
              </div>
            </div>

            <h2 className={styles.sectionTitle}>Description</h2>
            <div className={styles.description}>
              <p>
                Beautiful single-family home located in the heart of Cape Coral. This spacious property features an open floor plan, a modern kitchen with stainless steel appliances, and a large backyard perfect for entertaining. 
              </p>
              <br/>
              <p>
                Close to shopping centers, schools, and just a short drive to the beach. Don't miss this opportunity to own your dream home in Florida!
              </p>
            </div>
          </div>

          <div>
            <div className={styles.contactBox}>
              <h3>Interested in this property?</h3>
              <p style={{ marginBottom: '1.5rem', color: '#666' }}>Contact our agents for more details or to schedule a showing.</p>
              
              <form className={styles.contactForm}>
                <div className={styles.inputGroup}>
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className={styles.inputGroup}>
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className={styles.inputGroup}>
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                <div className={styles.inputGroup}>
                  <textarea placeholder="Message" rows={4} required defaultValue="I am interested in 456 Palm Avenue, Cape Coral, FL 33990 (MLS# A1122334)" />
                </div>
                <button type="button" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
