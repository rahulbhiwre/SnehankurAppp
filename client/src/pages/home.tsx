import { Banner } from "@/components/Banner";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  // Define banner images
  const bannerImages = [
    {
      src: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2",
      alt: "Happy children with caregivers"
    },
    {
      src: "https://images.unsplash.com/photo-1472586662442-3eec04b9dbda",
      alt: "Children playing"
    },
    {
      src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a",
      alt: "Group activity"
    },
    {
      src: "https://images.unsplash.com/photo-1526529613260-5f7cad1eb4b4",
      alt: "Our facility"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Banner images={bannerImages} /> {/* Added Banner component with images */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Welcome to <span className="text-primary">स्नेहांकुर</span>
            </h1>
            <p className="text-2xl text-primary mb-6 font-semibold">
              सेवा समर्पण सामर्थ्य
            </p>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Providing love, care, and support to children in need. Join us in making a difference in their lives.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/donate">
                <Button size="lg">Donate Now</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Images */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <img
              src="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2"
              alt="Happy children"
              className="rounded-lg shadow-md aspect-video object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5"
              alt="Children activities"
              className="rounded-lg shadow-md aspect-video object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1526529613260-5f7cad1eb4b4"
              alt="Our facility"
              className="rounded-lg shadow-md aspect-video object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Snehankur, we believe every child deserves a loving home and the opportunity 
            to reach their full potential. Through dedication and compassion, we provide 
            education, healthcare, and emotional support to create a nurturing environment 
            where children can thrive.
          </p>
        </div>
      </section>
    </div>
  );
}