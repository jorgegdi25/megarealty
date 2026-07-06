import propertiesStyles from '../(properties)/properties.module.css';
import pageStyles from '../page.module.css';
import styles from './contacts.module.css';

export default function ContactsPage() {
  return (
    <div className={pageStyles.main}>
      <div className={propertiesStyles.heroBanner}>
        <h1 className={propertiesStyles.title}>Contacts</h1>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            
            {/* Left Column: Map & Info */}
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Contact Us</h2>
              <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: '#555' }}>
                We'd love to hear from you!
              </p>
              
              <div className={styles.mapContainer}>
                {/* Google Maps Embed iframe */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.428482436323!2d-81.95689108496464!3d26.634676683248386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db421867ddbe57%3A0xc331dddf6389f4dc!2s1423%20SE%2016th%20Pl%20%23101%2C%20Cape%20Coral%2C%20FL%2033990!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus" 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className={styles.contactInfoList}>
                <div className={styles.infoItem}>
                  <span className={styles.icon}>📍</span>
                  <div className={styles.infoText}>
                    <h4>Office Address</h4>
                    <p>1423 SE 16th Pl, Ste #101<br/>Cape Coral, FL 33990</p>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <span className={styles.icon}>📞</span>
                  <div className={styles.infoText}>
                    <h4>Phone</h4>
                    <p>+1 (954) 439-4134</p>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <span className={styles.icon}>✉️</span>
                  <div className={styles.infoText}>
                    <h4>Email</h4>
                    <p>info@megarealtyinternational.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div>
              <div className={styles.formContainer}>
                <h2>Let's Connect</h2>
                <p className={styles.formSubtitle}>
                  <strong>Have questions or need assistance?</strong> Fill out the form below and one of our real estate professionals will get back to you shortly.
                </p>

                <form className={styles.form}>
                  <div className={styles.inputGroup}>
                    <input type="text" placeholder="Name" required />
                  </div>
                  <div className={styles.inputGroup}>
                    <input type="email" placeholder="Email" required />
                  </div>
                  <div className={styles.inputGroup}>
                    <input type="tel" placeholder="Phone Number" required />
                  </div>
                  <div className={styles.inputGroup}>
                    <select required defaultValue="">
                      <option value="" disabled>Subject / Inquiry Type</option>
                      <option value="buy">Looking to Buy</option>
                      <option value="sell">Looking to Sell</option>
                      <option value="rent">Looking to Rent</option>
                      <option value="property_management">Property Management</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className={styles.inputGroup}>
                    <textarea placeholder="Message" rows={6} required></textarea>
                  </div>
                  <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                    Send
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
