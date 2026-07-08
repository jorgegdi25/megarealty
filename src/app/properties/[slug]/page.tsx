import { notFound } from 'next/navigation';
import Image from 'next/image';
import { client, urlFor } from '@/sanity/client';
import styles from './detail.module.css';
import pageStyles from '../../page.module.css';

export const revalidate = 60;

export default async function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  // Fetch property data by slug
  const query = `*[_type == "property" && slug.current == $slug][0]`;
  const property = await client.fetch(query, { slug: resolvedParams.slug });
  
  if (!property) {
    notFound();
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <div className={pageStyles.main}>
      <div className={`container ${styles.detailContainer}`}>
        
        <div className={styles.header}>
          <div className={styles.price}>{formatPrice(property.price)}</div>
          <h1 className={styles.title}>{property.title}</h1>
          <div className={styles.badges}>
            <span className={styles.badge}>{property.listingType === 'for-sale' ? 'For Sale' : 'For Rent'}</span>
            {property.propertyType && <span className={styles.badge}>{property.propertyType}</span>}
            {property.mlsNumber && <span className={styles.badge}>MLS# {property.mlsNumber}</span>}
          </div>
        </div>

        <div 
          className={styles.gallery}
          style={property.images?.length === 1 ? { gridTemplateColumns: '1fr', gridTemplateRows: '600px' } : undefined}
        >
          {property.images && property.images.length > 0 ? (
            <>
              <div className={styles.mainImage} style={{ position: 'relative' }}>
                <Image src={urlFor(property.images[0]).url()} alt={property.title} fill style={{ objectFit: 'cover' }} />
              </div>
              {property.images[1] && (
                <div className={styles.sideImage} style={{ position: 'relative' }}>
                  <Image src={urlFor(property.images[1]).url()} alt={`${property.title} - Image 2`} fill style={{ objectFit: 'cover' }} />
                </div>
              )}
              {property.images[2] && (
                <div className={styles.sideImage} style={{ position: 'relative' }}>
                  <Image src={urlFor(property.images[2]).url()} alt={`${property.title} - Image 3`} fill style={{ objectFit: 'cover' }} />
                </div>
              )}
            </>
          ) : (
            <div className={styles.mainImage} style={{ background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>No Images</div>
          )}
        </div>

        <div className={styles.contentGrid}>
          <div>
            <h2 className={styles.sectionTitle}>Property Overview</h2>
            <div className={styles.featuresGrid}>
              {property.bedrooms && (
                <div className={styles.featureItem}>
                  <span className={styles.featureLabel}>Bedrooms</span>
                  <span className={styles.featureValue}>{property.bedrooms}</span>
                </div>
              )}
              {property.bathrooms && (
                <div className={styles.featureItem}>
                  <span className={styles.featureLabel}>Bathrooms</span>
                  <span className={styles.featureValue}>{property.bathrooms}</span>
                </div>
              )}
              {property.sqft && (
                <div className={styles.featureItem}>
                  <span className={styles.featureLabel}>Square Feet</span>
                  <span className={styles.featureValue}>{property.sqft.toLocaleString()} sqft</span>
                </div>
              )}
              {property.address && (
                <div className={styles.featureItem}>
                  <span className={styles.featureLabel}>Address</span>
                  <span className={styles.featureValue}>{property.address}, {property.city}, {property.state} {property.zipCode}</span>
                </div>
              )}
            </div>

            <h2 className={styles.sectionTitle}>Description</h2>
            <div className={styles.description}>
              <p style={{ whiteSpace: 'pre-line' }}>{property.description || 'No description provided.'}</p>
            </div>
            
            {property.externalLink && (
              <div style={{ marginTop: '2rem' }}>
                <a href={property.externalLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-block', padding: '1rem 2rem' }}>
                  View Full Listing on OneHome
                </a>
              </div>
            )}
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
                  <textarea placeholder="Message" rows={4} required defaultValue={`I am interested in ${property.title} ${property.mlsNumber ? `(MLS# ${property.mlsNumber})` : ''}`} />
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
