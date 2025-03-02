export default function About() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Snehankur</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn about our journey, mission, and the impact we're making in children's lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Snehankur was founded with a vision to provide a loving home for children 
              who need it most. Since our establishment, we've been dedicated to nurturing 
              and supporting children through their journey of growth and development.
            </p>
            <p className="text-gray-600">
              We believe in creating a family environment where each child receives 
              individual attention, care, and opportunities to develop their talents 
              and abilities.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1457131760772-7017c6180f05"
            alt="Children playing"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Values</h3>
            <p className="text-gray-600">
              Love, compassion, and respect form the foundation of our approach to 
              childcare and development.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Approach</h3>
            <p className="text-gray-600">
              We provide holistic care including education, healthcare, emotional support, 
              and life skills training.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Impact</h3>
            <p className="text-gray-600">
              We've helped numerous children find their path and achieve their dreams 
              through dedicated support and guidance.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Facility</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="https://images.unsplash.com/photo-1519220985059-ddd08d6aee2c"
              alt="Facility exterior"
              className="rounded-lg shadow-md aspect-video object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1534319398804-54438b8142bb"
              alt="Children's play area"
              className="rounded-lg shadow-md aspect-video object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
