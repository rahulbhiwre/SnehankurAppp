import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from 'react';

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

  const [current, setCurrent] = useState(0);

  const scrollToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative">
        <Carousel className="w-full carousel-container" opts={{ loop: true, duration: 10, watchDrag: true }} key="home-carousel">
          <CarouselContent className="carousel-content">
            {carouselImages.map((image, index) => (
              <CarouselItem key={`slide-${index}-${Date.now()}`} className="carousel-item carousel-fade">
                <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
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
                        Bringing families together through love and care
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <Link to="/contact">
                          <Button size="lg" className="mr-4 bg-primary hover:bg-primary/90 text-white">
                            Contact Us
                          </Button>
                        </Link>
                        <Link to="/about">
                          <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
                            Learn More
                          </Button>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute z-10 inset-0 flex items-center justify-between p-4">
            <CarouselPrevious className="relative left-2 md:left-4 h-12 w-12 rounded-full bg-white/90 hover:bg-white transition-all duration-300 shadow-lg border-2 border-primary" />
            <CarouselNext className="relative right-2 md:right-4 h-12 w-12 rounded-full bg-white/90 hover:bg-white transition-all duration-300 shadow-lg border-2 border-primary" />
          </div>
          <div className="absolute z-10 bottom-8 left-0 right-0 flex justify-center gap-3">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index ? 'bg-white' : 'bg-white/50 hover:bg-white/90'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={current === index ? 'true' : 'false'}
              />
            ))}
          </div>
        </Carousel>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <motion.img 
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="About Snehankur" 
                className="rounded-lg shadow-md w-full"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <motion.h2 
                className="text-3xl font-bold mb-6 text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                About Snehankur
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Snehankur Adoption Center is a leading adoption institution committed to finding loving homes for children in need. We believe every child deserves a family that provides love, care, and support.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link to="/about">
                  <Button>Learn More About Us</Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Make a Difference?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join us in our mission to provide every child with a loving family. There are many ways you can help.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white bg-transparent hover:bg-white hover:text-primary">
                Contact Us
              </Button>
            </Link>
            <Link to="/donate">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Donate Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}