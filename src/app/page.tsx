import Image from 'next/image';
import Link from 'next/link';
import { client, urlFor } from '@/sanity/client';
import styles from './page.module.css';

export const revalidate = 60;

export default async function Home() {
  const query = `*[_type == "property"] | order(_createdAt desc) [0...3] {
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
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <iframe 
            src="https://www.youtube.com/embed/gmhX-hObY-M?autoplay=1&mute=1&controls=0&showinfo=0&autohide=1&loop=1&playlist=gmhX-hObY-M&start=371"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            className={styles.videoFrame}
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroTitle} animate-fade-in-up`} style={{ textTransform: 'none' }}>
            Mega Realty International
          </h1>
          <p className={`${styles.heroSubtitle} animate-fade-in-up delay-100`} style={{ textTransform: 'none', maxWidth: '800px', margin: '0 auto 2rem auto', lineHeight: '1.6' }}>
            One of the best real estate companies in Florida. We specialize in property sales and management statewide. At Mega Realty, you are in the best hands.
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
                We are a company with many years in the Florida market, specialized in representing our clients in the purchase, sale and management of property in the state of Florida.
              </p>
              <p>
                We are members of the &quot;National Association of Realtors&quot; of the United States and we are registered with the local Association of Realtors of Fort Myers and the beach. We can carry out any operation throughout.
              </p>
              <p>
                We are dedicated and equipped to provide comprehensive advice for property purchase and sale operations, and we have the best staff of bilingual professionals.
              </p>
              <Link href="/contacts" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
            <div className={styles.aboutImage}>
              <img src="/images/logo.png" alt="Mega Realty Logo" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Listings Section */}
      <section className={`${styles.listings} section`}>
        <div className="container">
          <h2 className="section-title">New Listings</h2>
          <div className={styles.listingsGrid}>
            {properties.map((property: any) => (
              <div key={property._id} className={styles.propertyCard}>
                <div className={styles.propertyImage} style={{ position: 'relative' }}>
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
                <div className={styles.propertyContent}>
                  <div className={styles.propertyPrice}>{formatPrice(property.price)}</div>
                  <h3 className={styles.propertyTitle}>{property.title}</h3>
                  <div className={styles.propertyDetails}>
                    {property.bedrooms && <span>{property.bedrooms} Beds</span>}
                    {property.bathrooms && <span>{property.bathrooms} Baths</span>}
                    {property.sqft && <span>{property.sqft.toLocaleString()} sqft</span>}
                  </div>
                  <Link href={`/properties/${property.slug.current}`} className="btn btn-outline" style={{ width: '100%' }}>
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

      {/* Why Invest in Florida Section */}
      <section className={`${styles.featureSection} section`}>
        <div className="container">
          <div className={styles.featureGrid}>
            <div className={styles.featureImageWrapper}>
              <img src="/images/florida.jpg" alt="Invest in Florida" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className={styles.featureContent}>
              <h2>Why invest in Florida?</h2>
              <ul className={styles.featureList}>
                <li>Real estate prices are the lowest in the last 10 years.</li>
                <li>It is surrounded by islands and beaches.</li>
                <li>It is the warmest place in the United States.</li>
                <li>Offers a peaceful, comfortable and luxurious lifestyle.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest with Us Section */}
      <section className={`${styles.featureSection} section`} style={{ background: '#fff' }}>
        <div className="container">
          <div className={`${styles.featureGrid} ${styles.reverse}`}>
            <div className={styles.featureImageWrapper}>
              <img src="/images/negotiate.webp" alt="Why invest with us" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className={styles.featureContent}>
              <h2>Why invest with us?</h2>
              <p style={{ fontWeight: 600, fontSize: '1.15rem', color: '#333', marginBottom: '1rem' }}>
                We have many years of experience selling properties in Southwest Florida.
              </p>
              <p style={{ marginBottom: '1rem', color: '#555' }}>
                We have completed many transactions with local residents as well as clients from around the world who successfully invested their capital while working with us.
              </p>
              <p style={{ color: '#555' }}>
                We are a reliable company that accompanies its clients throughout the purchase or sale process until the end of each transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Build Your House Banner Section */}
      <section className={styles.buildBanner}>
        <div className={styles.buildBannerBackground} />
        <div className={`container ${styles.buildBannerContent}`}>
          <div className={styles.buildBannerText}>
            <h2>We can build your house.</h2>
            <hr />
            <p>We can build the home of your dreams.</p>
            <p>For more information contact us.</p>
            <Link href="/contacts" className="btn" style={{ background: 'white', color: '#333', marginTop: '2rem', display: 'inline-block', fontWeight: 'bold' }}>
              Click here
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
