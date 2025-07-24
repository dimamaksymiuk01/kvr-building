import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import InteriorSection from './components/InteriorSection';
import RenovationSection from './components/RenovationSection';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import styles from './ClientPage.module.scss';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'm2.visual',
  description: 'Profesjonalne remonty mieszkań i domów w Krakowie',
  url: 'https://m2visual.pl',
  telephone: '+48123456789',
  email: 'kontakt@m2visual.pl',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ul. Przykładowa 123',
    addressLocality: 'Kraków',
    postalCode: '31-000',
    addressCountry: 'PL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '50.0647',
    longitude: '19.9450',
  },
  openingHours: ['Mo-Fr 08:00-18:00', 'Sa 09:00-15:00'],
  serviceArea: {
    '@type': 'City',
    name: 'Kraków',
  },
  services: [
    {
      '@type': 'Service',
      name: 'Wykończenia wnętrz',
      description: 'Kompleksowe wykończenia wnętrz mieszkań i domów',
    },
    {
      '@type': 'Service',
      name: 'Generalne remonty',
      description: 'Kompleksowe remonty mieszkań i domów od podstaw',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
  },
};

export default function ClientPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.container}>
        <Navigation />
        <main>
          <HeroSection />
          <InteriorSection />
          <RenovationSection />
          <GallerySection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
