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
                  src="https://maps.google.com/maps?q=2210%20Cleveland%20Ave%20Fort%20Myers%20FL%2033901&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0, width: '100%', height: '100%' }}
                />
              </div>

              <div className={styles.contactInfoList}>
                <div className={styles.infoItem}>
                  <span className={styles.icon}>📍</span>
                  <div className={styles.infoText}>
                    <h4>Office Address</h4>
                    <p>2210 Cleveland Ave<br/>Fort Myers, FL 33901</p>
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
                    <p>epenaloza@magarealtyinternational.com</p>
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

                <form 
                  className={styles.form} 
                  action="https://formsubmit.co/epenaloza@magarealtyinternational.com" 
                  method="POST"
                >
                  {/* Opciones extra para evitar spam y captcha */}
                  <input type="text" name="_honey" style={{ display: 'none' }} />
                  <input type="hidden" name="_captcha" value="false" />
                  
                  <div className={styles.inputGroup}>
                    <input type="text" name="name" placeholder="Name" required />
                  </div>
                  <div className={styles.inputGroup}>
                    <input type="email" name="email" placeholder="Email" required />
                  </div>
                  <div className={styles.inputGroup}>
                    <input type="tel" name="phone" placeholder="Phone Number" required />
                  </div>
                  <div className={styles.inputGroup}>
                    <select name="subject" required defaultValue="">
                      <option value="" disabled>Subject / Inquiry Type</option>
                      <option value="buy">Looking to Buy</option>
                      <option value="sell">Looking to Sell</option>
                      <option value="rent">Looking to Rent</option>
                      <option value="property_management">Property Management</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className={styles.inputGroup}>
                    <textarea name="message" placeholder="Message" rows={6} required></textarea>
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
