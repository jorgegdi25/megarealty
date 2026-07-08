import Image from 'next/image';
import Link from 'next/link';
import { client, urlFor } from '@/sanity/client';
import styles from '../properties.module.css';
import pageStyles from '../../page.module.css';

export const revalidate = 60;

export default async function ForSalePage() {
  const query = `*[_type == "property" && listingType == "for-sale"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    price,
    bedrooms,
    bathrooms,
    sqft,
    propertyType,
    mlsNumber,
    images
  }`;
  
  const properties = await client.fetch(query);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price);
  };

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
            {properties.length === 0 && (
              <p style={{ textAlign: 'center', gridColumn: '1 / -1' }}>No properties for sale found.</p>
            )}
            
            {properties.map((property: any) => (
              <div key={property._id} className={pageStyles.propertyCard}>
                <div className={pageStyles.propertyImage} style={{ position: 'relative' }}>
                  {property.images && property.images.length > 0 ? (
                    <Image 
                      src={urlFor(property.images[0]).url()} 
                      alt={property.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div style={{ width: '100%', height: '100%', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>
                      No Photo
                    </div>
                  )}
                </div>
                <div className={pageStyles.propertyContent}>
                  <div className={pageStyles.propertyPrice}>{formatPrice(property.price)}</div>
                  <h3 className={pageStyles.propertyTitle}>{property.title}</h3>
                  <div className={pageStyles.propertyDetails}>
                    {property.bedrooms && <span>{property.bedrooms} Beds</span>}
                    {property.bathrooms && <span>{property.bathrooms} Baths</span>}
                    {property.sqft && <span>{property.sqft.toLocaleString()} sqft</span>}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
                    {property.propertyType || 'Property'} {property.mlsNumber && `• MLS# ${property.mlsNumber}`}
                  </p>
                  <Link href={`/properties/${property.slug.current}`} className="btn btn-outline" style={{ width: '100%' }}>
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
