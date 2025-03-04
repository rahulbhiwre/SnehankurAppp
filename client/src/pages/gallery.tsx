
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

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

const videos = [
  {
    id: "9ZfoZENyt4w",
    title: "Children's Day Celebration",
    description: "Special moments from our annual celebration"
  },
  {
    id: "2g811Eo7K8U",
    title: "Learning Through Play",
    description: "Educational activities for children" 
  },
  {
    id: "TdD8QgGgzgA",
    title: "Art & Craft Workshop",
    description: "Creative expression through various art forms"
  }
];

const mediaContent = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1526634332515-d56c5fd16991",
    alt: "Community event",
    category: "Events"
  },
  {
    type: "video",
    id: "gcgADLf82Y8",
    title: "Volunteer Experiences",
    description: "Stories from our volunteers"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1511949860663-92c5c57d48a7",
    alt: "Children's artwork",
    category: "Activities"
  },
  {
    type: "video",
    id: "2zLb5ZFhX0s",
    title: "Annual Day Celebration",
    description: "Highlights from our annual day"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b40",
    alt: "Children playing outdoors",
    category: "Outdoor Activities"
  },
  {
    type: "video",
    id: "J1nk2qMS0-E",
    title: "Our Mission",
    description: "Learn about our work and mission"
  }
];

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("photos");

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

        <Tabs defaultValue="photos" className="w-full mb-8" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 p-1 rounded-xl shadow-sm">
              <TabsTrigger 
                value="photos" 
                className="px-6 py-2 rounded-lg text-sm font-medium transition-all data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                Photos
              </TabsTrigger>
              <TabsTrigger 
                value="videos" 
                className="px-6 py-2 rounded-lg text-sm font-medium transition-all data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                Videos
              </TabsTrigger>
              <TabsTrigger 
                value="media" 
                className="px-6 py-2 rounded-lg text-sm font-medium transition-all data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                Media
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="photos" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-transform duration-200 border-orange-100 hover:border-orange-300"
                  onClick={() => openLightbox(index)}
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full aspect-video object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                        <p className="text-sm font-medium">{image.category}</p>
                        <p className="text-xs opacity-75">{image.alt}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden border-orange-100"
                >
                  <CardContent className="p-4">
                    <div className="aspect-video mb-4 rounded-md overflow-hidden shadow-md">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        allowFullScreen
                        className="border-0"
                      ></iframe>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{video.title}</h3>
                    <p className="text-sm text-gray-600">{video.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="media" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mediaContent.map((item, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden border-orange-100 hover:border-orange-300 transition-colors"
                >
                  <CardContent className="p-0">
                    {item.type === "image" ? (
                      <div 
                        className="relative cursor-pointer" 
                        onClick={() => {
                          const imageIndex = images.findIndex(img => img.src === item.src);
                          if (imageIndex >= 0) openLightbox(imageIndex);
                        }}
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full aspect-video object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                          <p className="text-sm font-medium">{item.category}</p>
                          <p className="text-xs opacity-75">{item.alt}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4">
                        <div className="aspect-video mb-4 rounded-md overflow-hidden shadow-md">
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${item.id}`}
                            title={item.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="border-0"
                          ></iframe>
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${item.id}`}
                            title={item.title}
                            allowFullScreen
                            className="border-0"
                          ></iframe>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Lightbox
          open={isOpen && activeTab === "photos"}
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
