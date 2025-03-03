
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Snehankur</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn about our journey, mission, and the impact we're making in children's lives.
          </p>
        </div>

        {/* Achievements Section - Highlighted at the top */}
        <div className="mb-24">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 text-center mb-12 relative inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="after:content-[''] after:absolute after:w-full after:h-1 after:bg-orange-400 after:bottom-0 after:left-0">
              Our Achievements
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Achievement 1 - Children Supported */}
            <motion.div 
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ 
                y: -15,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                scale: 1.02
              }}
            >
              <div className="h-2 bg-orange-500"></div>
              <div className="p-8">
                <div className="h-20 w-20 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">1000+</span>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">Children Supported</h3>
                <p className="text-gray-600 text-center">
                  We've provided education, shelter, and care to over 1000 children since our inception, 
                  nurturing their growth and development.
                </p>
              </div>
            </motion.div>
            
            {/* Achievement 2 - Years of Service */}
            <motion.div 
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ 
                y: -15,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                scale: 1.02
              }}
            >
              <div className="h-2 bg-orange-500"></div>
              <div className="p-8">
                <div className="h-20 w-20 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">15</span>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">Years of Service</h3>
                <p className="text-gray-600 text-center">
                  Dedicated to serving underprivileged children for over 15 years with unwavering 
                  commitment to their wellbeing.
                </p>
              </div>
            </motion.div>
            
            {/* Achievement 3 - Awards */}
            <motion.div 
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ 
                y: -15,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                scale: 1.02
              }}
            >
              <div className="h-2 bg-orange-500"></div>
              <div className="p-8">
                <div className="h-20 w-20 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">5</span>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">National Awards</h3>
                <p className="text-gray-600 text-center">
                  Recognized with 5 prestigious national awards for our outstanding contribution to child welfare
                  and education.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Our Story Section */}
        <div className="mb-24">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-12 relative inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="after:content-[''] after:absolute after:w-full after:h-1 after:bg-orange-400 after:bottom-0 after:left-0">
              Our Story
            </span>
          </motion.h2>
          
          {/* The Beginning */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-orange-600">The Beginning</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Snehankur was founded in 2008 with a vision to provide a nurturing environment for children who lack proper care and support. What began as a small initiative with just 5 children has now grown into a comprehensive support system helping hundreds annually.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our founders recognized the need for not just physical care, but emotional and educational support that would empower these children to build better futures for themselves.
              </p>
            </div>
            <motion.div 
              className="flex justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop&q=80"
                alt="The Beginning"
                className="rounded-lg shadow-xl object-cover w-full max-w-md h-64"
              />
            </motion.div>
          </motion.div>
          
          {/* The Journey */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="flex justify-center md:order-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop&q=80"
                alt="The Journey"
                className="rounded-lg shadow-xl object-cover w-full max-w-md h-64"
              />
            </motion.div>
            <div className="md:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-orange-600">The Journey</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Over the years, Snehankur has expanded its services from basic care to comprehensive education programs, skill development workshops, and health initiatives. We've navigated through challenges and celebrated countless success stories.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our journey has been marked by the transformation of young lives - children who came to us with little hope and are now confident, educated individuals making their mark in various fields.
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Our Team Section */}
        <div className="mb-24">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 text-center mb-12 relative inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="after:content-[''] after:absolute after:w-full after:h-1 after:bg-orange-400 after:bottom-0 after:left-0">
              Our Team
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border-4 border-orange-200">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Anita Sharma</h3>
              <p className="text-orange-600 mb-4">Founder</p>
              <p className="text-gray-600">
                Dedicated her life to creating a safe haven for children in need, with over 20 years of experience in child welfare.
              </p>
            </motion.div>
            
            {/* Team Member 2 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border-4 border-orange-200">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80"
                  alt="Director"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Rajesh Patel</h3>
              <p className="text-orange-600 mb-4">Executive Director</p>
              <p className="text-gray-600">
                Brings strategic vision and operational excellence to our organization with his background in education management.
              </p>
            </motion.div>
            
            {/* Team Member 3 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border-4 border-orange-200">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&q=80"
                  alt="Education Lead"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Priya Desai</h3>
              <p className="text-orange-600 mb-4">Education Program Lead</p>
              <p className="text-gray-600">
                Passionate educator who designs our curriculum and mentoring programs to give our children the best learning opportunities.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Call to Action */}
        <motion.div 
          className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl p-10 text-white text-center shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether through volunteering, donations, or spreading awareness, you can make a significant difference in a child's life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a 
              href="/donate" 
              className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Donate
            </motion.a>
            <motion.a 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
