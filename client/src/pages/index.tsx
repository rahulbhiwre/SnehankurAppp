
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function Home() {
  // Sample images for the carousel - replace with your actual images
  const carouselImages = [
    { 
      src: "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80", 
      alt: "Children playing together" 
    },
    { 
      src: "https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80", 
      alt: "Education for children" 
    },
    { 
      src: "https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80", 
      alt: "Community support" 
    },
    { 
      src: "https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80", 
      alt: "Volunteer activities" 
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    emblaApi.on('select', onSelect);
    onSelect();
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative">
        <div className="carousel-wrapper">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {carouselImages.map((image, index) => (
                <div className="embla__slide" key={index}>
                  <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover transform transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <div className="text-center text-white px-4">
                        <motion.h1 
                          className="text-4xl md:text-6xl font-bold mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          Snehankur Adoption Center
                        </motion.h1>
                        <motion.p 
                          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          Giving every child a loving home and a chance for a brighter future
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <Link to="/adoption">
                            <Button size="lg" className="mr-4 bg-primary hover:bg-primary/90">
                              Learn About Adoption
                            </Button>
                          </Link>
                          <Link to="/donate">
                            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white">
                              Support Our Cause
                            </Button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <button 
            className="embla__prev absolute left-5 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 rounded-full p-3 hover:bg-white transition-all shadow-lg"
            onClick={() => emblaApi?.scrollPrev()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          
          <button 
            className="embla__next absolute right-5 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 rounded-full p-3 hover:bg-white transition-all shadow-lg"
            onClick={() => emblaApi?.scrollNext()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
          
          {/* Carousel Indicators */}
          <div className="embla__dots absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  selectedIndex === index 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                At Snehankur Adoption Center, we believe every child deserves a loving family and a stable home. 
                For over 20 years, we've been connecting children with families who can provide the love, care, 
                and opportunities they deserve.
              </p>
              <p className="text-lg mb-6">
                Our dedicated team works tirelessly to ensure both children and adoptive parents receive 
                the support and resources they need throughout the adoption journey and beyond.
              </p>
              <Link to="/about">
                <Button className="bg-primary hover:bg-primary/90">Learn More About Us</Button>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Happy family"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
              <p className="text-xl">Successful Adoptions</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">20+</h3>
              <p className="text-xl">Years of Experience</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">100%</h3>
              <p className="text-xl">Commitment to Every Child</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Adoption Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step toward building your family and providing a loving home for a child in need.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white hover:bg-white hover:text-primary">
                Contact Us
              </Button>
            </Link>
            <Link to="/adoption-process">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Start the Process
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
