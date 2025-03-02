import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2",
    alt: "Happy children with caregivers",
    category: "Daily Life"
  },
  {
    src: "https://images.unsplash.com/photo-1472586662442-3eec04b9dbda",
    alt: "Children playing",
    category: "Activities"
  },
  {
    src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a",
    alt: "Group activity",
    category: "Activities"
  },
  {
    src: "https://images.unsplash.com/photo-1484863137850-59afcfe05386",
    alt: "Learning together",
    category: "Education"
  },
  {
    src: "https://images.unsplash.com/photo-1526529613260-5f7cad1eb4b4",
    alt: "Our facility",
    category: "Facility"
  },
  {
    src: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5",
    alt: "Art activities",
    category: "Activities"
  },
  {
    src: "https://images.unsplash.com/photo-1541692641319-981cc79ee10a",
    alt: "Outdoor play",
    category: "Activities"
  },
  {
    src: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368",
    alt: "Celebration time",
    category: "Events"
  }
];

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Gallery</h1>
          <p className="text-lg text-gray-600">
            Moments of joy, learning, and growth at Snehankur
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card 
              key={index} 
              className="overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-transform duration-200"
              onClick={() => openLightbox(index)}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <p className="text-sm font-medium">{image.category}</p>
                    <p className="text-xs opacity-75">{image.alt}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={images}
          render={{
            slide: ({ slide }) => (
              <img 
                src={slide.src} 
                alt={slide.alt} 
                style={{ maxHeight: '85vh', margin: 'auto' }}
              />
            )
          }}
        />
      </div>
    </div>
  );
}