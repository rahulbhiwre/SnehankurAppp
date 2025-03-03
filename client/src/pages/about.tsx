
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Snehankur</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn about our journey, mission, and the impact we're making in children's lives.
          </p>
        </div>

        {/* History Sections */}
        <div className="space-y-16">
          {/* About Founder */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 relative inline-block">
                <span className="after:content-[''] after:absolute after:w-full after:h-1 after:bg-orange-400 after:bottom-0 after:left-0">
                  About the Founder
                </span>
              </h2>
              <p className="text-gray-600 mt-6">
                [Founder's story and background goes here. This paragraph should highlight the founder's vision, 
                motivation, and dedication to establishing Snehankur.]
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
                alt="Founder"
                className="rounded-lg shadow-lg object-cover w-full max-w-md h-64 transition-transform hover:scale-105 duration-300"
              />
            </div>
          </div>

          {/* Early Life */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center md:order-2">
              <img
                src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a"
                alt="Early Life"
                className="rounded-lg shadow-lg object-cover w-full max-w-md h-64 transition-transform hover:scale-105 duration-300"
              />
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 relative inline-block">
                <span className="after:content-[''] after:absolute after:w-full after:h-1 after:bg-orange-400 after:bottom-0 after:left-0">
                  Early Life
                </span>
              </h2>
              <p className="text-gray-600 mt-6">
                [Early life description goes here. This section should describe the initial challenges,
                inspirations, and experiences that shaped the organization's early days.]
              </p>
            </div>
          </div>

          {/* The Beginning */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 relative inline-block">
                <span className="after:content-[''] after:absolute after:w-full after:h-1 after:bg-orange-400 after:bottom-0 after:left-0">
                  The Beginning
                </span>
              </h2>
              <p className="text-gray-600 mt-6">
                [Story of Snehankur's beginning goes here. This section should cover how the
                organization was established and its initial mission and goals.]
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
                alt="The Beginning"
                className="rounded-lg shadow-lg object-cover w-full max-w-md h-64 transition-transform hover:scale-105 duration-300"
              />
            </div>
          </div>

          {/* The Journey */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center md:order-2">
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846"
                alt="The Journey"
                className="rounded-lg shadow-lg object-cover w-full max-w-md h-64 transition-transform hover:scale-105 duration-300"
              />
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 relative inline-block">
                <span className="after:content-[''] after:absolute after:w-full after:h-1 after:bg-orange-400 after:bottom-0 after:left-0">
                  The Journey
                </span>
              </h2>
              <p className="text-gray-600 mt-6">
                [Journey description goes here. This section should highlight the major milestones,
                challenges overcome, and successes achieved along the way.]
              </p>
            </div>
          </div>

          {/* Helping Hands */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 relative inline-block">
                <span className="after:content-[''] after:absolute after:w-full after:h-1 after:bg-orange-400 after:bottom-0 after:left-0">
                  Helping Hands
                </span>
              </h2>
              <p className="text-gray-600 mt-6">
                [Description of supporters and volunteers goes here. This section should acknowledge
                the contributions of various individuals and organizations.]
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8"
                alt="Helping Hands"
                className="rounded-lg shadow-lg object-cover w-full max-w-md h-64 transition-transform hover:scale-105 duration-300"
              />
            </div>
          </div>

          {/* Roadmap to Future */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center md:order-2">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                alt="Roadmap to Future"
                className="rounded-lg shadow-lg object-cover w-full max-w-md h-64 transition-transform hover:scale-105 duration-300"
              />
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 relative inline-block">
                <span className="after:content-[''] after:absolute after:w-full after:h-1 after:bg-orange-400 after:bottom-0 after:left-0">
                  Roadmap to Future
                </span>
              </h2>
              <p className="text-gray-600 mt-6">
                [Future plans and vision goes here. This section should outline the organization's
                goals, upcoming initiatives, and long-term vision.]
              </p>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16 relative inline-block">
            <span className="after:content-[''] after:absolute after:w-full after:h-1 after:bg-orange-400 after:bottom-0 after:left-0">
              Our Achievements
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Achievement 1 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              whileHover={{ y: -10 }}
            >
              <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-500 text-2xl font-bold">1000+</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Children Supported</h3>
              <p className="text-gray-600 text-center">
                We've provided education, shelter, and care to over 1000 children since our inception.
              </p>
            </motion.div>
            
            {/* Achievement 2 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              whileHover={{ y: -10 }}
            >
              <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-500 text-2xl font-bold">15</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Years of Service</h3>
              <p className="text-gray-600 text-center">
                Dedicated to serving underprivileged children for over 15 years and counting.
              </p>
            </motion.div>
            
            {/* Achievement 3 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              whileHover={{ y: -10 }}
            >
              <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-500 text-2xl font-bold">50+</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Community Partners</h3>
              <p className="text-gray-600 text-center">
                Working with over 50 organizations and community partners to expand our impact.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Achievement 4 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              whileHover={{ y: -10 }}
            >
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-500 text-2xl font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">National Awards</h3>
                  <p className="text-gray-600">
                    Recognized with 5 prestigious national awards for our contribution to child welfare.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Achievement 5 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              whileHover={{ y: -10 }}
            >
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-500 text-2xl font-bold">100%</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education Success Rate</h3>
                  <p className="text-gray-600">
                    All our children have access to quality education with excellent success rates.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
