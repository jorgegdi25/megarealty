import Image from 'next/image';
import { client, urlFor } from '@/sanity/client';
import propertiesStyles from '../(properties)/properties.module.css';
import pageStyles from '../page.module.css';
import styles from './team.module.css';

// Revalidate the page every 60 seconds (or you can use on-demand revalidation)
export const revalidate = 60;

export default async function ProfessionalTeamPage() {
  // Fetch up to 9 team members ordered by their display order (or creation date)
  const query = `*[_type == "teamMember"] | order(order asc, _createdAt asc) [0...9] {
    _id,
    name,
    role,
    photo,
    phones,
    email
  }`;
  
  const teamMembers = await client.fetch(query);

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
            {teamMembers.length === 0 && (
              <p style={{ textAlign: 'center', gridColumn: '1 / -1' }}>No team members found. Add some in Sanity Studio!</p>
            )}
            
            {teamMembers.map((member: any) => (
              <div key={member._id} className={styles.teamCard}>
                <div className={styles.photoWrapper}>
                  {member.photo ? (
                    <Image 
                      src={urlFor(member.photo).url()} 
                      alt={member.name}
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'top' }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#eee', color: '#aaa' }}>
                      No Photo
                    </div>
                  )}
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <p className={styles.role}>{member.role}</p>
                  
                  <div className={styles.contactList}>
                    {member.phones && member.phones.map((phone: string, i: number) => (
                      <a key={i} href={`tel:${phone.replace(/\D/g,'')}`} className={styles.contactItem}>
                        <span>📞</span> {phone}
                      </a>
                    ))}
                    {member.email && (
                      <a href={`mailto:${member.email}`} className={styles.contactItem}>
                        <span>✉️</span> {member.email}
                      </a>
                    )}
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
