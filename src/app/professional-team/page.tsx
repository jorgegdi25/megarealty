import propertiesStyles from '../(properties)/properties.module.css';
import pageStyles from '../page.module.css';
import styles from './team.module.css';

// Placeholder data based on the screenshots
const teamMembers = [
  {
    name: 'Maria E. Gaviria',
    role: 'Licensed Real Estate Broker',
    phones: ['(239) 810-6750', '(239) 219-5161'],
    email: 'maria@megarealtyinternational.com',
  },
  {
    name: 'Edgardo Penaloza',
    role: 'Realtor',
    phones: ['(954) 439-4134'],
    email: 'edgardo@megarealtyinternational.com',
  },
  {
    name: 'Jorge E. Gonzalez',
    role: 'Realtor',
    phones: ['(954) 439-4134'],
    email: 'jorge@megarealtyinternational.com',
  },
  {
    name: 'Liusbel E. Gomez',
    role: 'Realtor',
    phones: ['(954) 439-4134'],
    email: 'liusbel@megarealtyinternational.com',
  }
];

export default function ProfessionalTeamPage() {
  return (
    <div className={pageStyles.main}>
      <div className={propertiesStyles.heroBanner}>
        <h1 className={propertiesStyles.title}>Professional Team</h1>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto var(--space-2xl)' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
              Our agents are dedicated to providing the highest level of service. With years of experience and deep knowledge of the Florida real estate market, we are here to help you achieve your real estate goals.
            </p>
          </div>

          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.photoWrapper}>
                  {/* Photo will go here when connected to Sanity */}
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <p className={styles.role}>{member.role}</p>
                  
                  <div className={styles.contactList}>
                    {member.phones.map((phone, i) => (
                      <a key={i} href={`tel:${phone.replace(/\D/g,'')}`} className={styles.contactItem}>
                        <span>📞</span> {phone}
                      </a>
                    ))}
                    <a href={`mailto:${member.email}`} className={styles.contactItem}>
                      <span>✉️</span> {member.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
