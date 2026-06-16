'use client';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import StorySection from './components/storysection';
import AboutSection from './components/AboutSection';
import CommentsSection from './components/CommentsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import CountdownTimer from './components/CountdownTimer';
import RoadmapSection from './components/RoadmapSection';
import NewsletterSection from './components/NewsletterSection';

export default function Home() {
  return (
    <div style={{position: 'relative', background: '#050505', minHeight: '100vh', cursor: 'none'}}>
      <CustomCursor />
      <ParticleBackground />
      <div style={{position: 'relative', zIndex: 10}}>
        <Navbar />
        <HeroSection />
        <CountdownTimer />
        <GallerySection />
        <RoadmapSection />
        <StorySection />
        <AboutSection />
        <NewsletterSection />
        <CommentsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}