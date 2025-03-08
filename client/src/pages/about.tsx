import { motion } from "framer-motion";
const years_of_service = new Date().getFullYear() - 2017;

export default function About() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Snehankur
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            आमचा प्रवास, ध्येय आणि मुलांच्या जीवनात आम्ही करत असलेल्या
            प्रभावाबद्दल जाणून घ्या.
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
                scale: 1.02,
              }}
            >
              <div className="h-2 bg-orange-500"></div>
              <div className="p-8">
                <div className="h-20 w-20 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">15+</span>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">
                  Children Supported
                </h3>
                <p className="text-gray-600 text-center">
                  We've provided education, shelter, and care to over 1000
                  children since our inception, nurturing their growth and
                  development.
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
                scale: 1.02,
              }}
            >
              <div className="h-2 bg-orange-500"></div>
              <div className="p-8">
                <div className="h-20 w-20 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">
                    {years_of_service}+
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">
                  Years of Service
                </h3>
                <p className="text-gray-600 text-center">
                  Dedicated to serving underprivileged children for over{" "}
                  {years_of_service} years. with unwavering commitment to their
                  wellbeing.
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
                scale: 1.02,
              }}
            >
              <div className="h-2 bg-orange-500"></div>
              <div className="p-8">
                <div className="h-20 w-20 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">5+</span>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">
                  Awards
                </h3>
                <p className="text-gray-600 text-center">
                  Recognized with more than 5 prestigious awards for our
                  outstanding contribution to child welfare andeducation.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-orange-600">
                About Founder
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                प्रदीप कातारे हे एक दूरदर्शी समाजसुधारक आहेत ज्यांनी अनाथ आणि
                वंचित मुलांच्या उन्नतीसाठी आपले जीवन समर्पित केले आहे. एक
                सुशिक्षित आणि दयाळू व्यक्ती म्हणून, त्यांनी पारंपारिक करिअर
                मार्गांपासून दूर जाऊन गरजू मुलांना एक प्रेमळ घर आणि उज्ज्वल
                भविष्य प्रदान करण्याचा एक मोठा उद्देश साध्य करण्याचा निर्णय
                घेतला.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                त्यांच्या पत्नी नीता कातारे यांच्यासोबत, ते पूर्णवेळ
                वचनबद्धतेनुसार अनाथाश्रम चालवतात, जेणेकरून प्रत्येक मुलाला केवळ
                अन्न आणि निवाराच नाही तर दर्जेदार शिक्षण, भावनिक आधार आणि
                सन्माननीय जीवन जगण्याची संधी देखील मिळेल याची खात्री करतात.
                त्यांचा प्रवास प्रत्येक मुलाला प्रेम, काळजी आणि भरभराटीसाठी
                योग्य वातावरण मिळवे या अढळ विश्वासाने चालवला जातो.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                प्रदीप आणि नीता यांना वेगळे करणारी गोष्ट म्हणजे त्यांचा
                प्रत्यक्ष दृष्टिकोन - ते केवळ प्रशासक नाहीत तर सक्रिय काळजीवाहक,
                मार्गदर्शक आणि मुलांचे पालक आहेत. वाढदिवस साजरा करण्यापासून ते
                अभ्यास आणि जीवनातील आव्हानांमधून त्यांना मार्गदर्शन
                करण्यापर्यंत, त्यांनी अनाथाश्रमात एक खरे कुटुंब निर्माण केले
                आहे.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                त्यांचे काम केवळ या मुलांच्या डोक्यावर छप्पर प्रदान करण्याबद्दल
                नाही; हे भविष्य घडवण्याबद्दल, स्वप्नांना घडवण्याबद्दल आणि
                आत्मविश्वास निर्माण करण्याबद्दल आहे. त्यांच्या मार्गदर्शनाखाली,
                अनाथाश्रम आशेचे एक अभयारण्य बनले आहे, जिथे प्रत्येक मुलाला
                कष्टाच्या चक्रातून मुक्त होण्यासाठी आणि शक्यतांनी भरलेल्या
                भविष्याला स्वीकारण्यास सक्षम केले जाते.
              </p>
              <p className="text-gray-700 leading-relaxed">
                त्यांचे निःस्वार्थ समर्पण अनेकांना प्रेरणा देत आहे, हे सिद्ध
                करून की उत्कटतेने आणि वचनबद्धतेने प्रेरित होऊन दयाळूपणाचे एक
                कृत्य असंख्य जीवन बदलू शकते.
              </p>
            </div>
            <motion.div
              className="flex justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1560702226-a2317a8d6210?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-orange-600">
                The Journey
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                स्नेहांकुरचा प्रवास हा केवळ अनाथाश्रम बांधण्याची कहाणी नाही तर संघर्षांवर मात करण्याची, आव्हानांमध्ये आशा शोधण्याची आणि दयाळूपणाची शक्ती पाहण्याची कहाणी आहे. ❤️
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                हे सर्व एका साध्या इच्छेने सुरू झाले - गरजू मुलांना मदत करणे. पण या स्वप्नाचे वास्तवात रूपांतर करणे सोपे नव्हते. हा मार्ग अनिश्चितता, आर्थिक अडचणी आणि आत्म-शंकेच्या क्षणांनी भरलेला होता. संसाधने शोधणे, सुरक्षित जागा मिळवणे आणि मुलांची सतत काळजी घेणे हे आम्हाला दररोज लढावे लागत होते. असे काही वेळा होते जेव्हा आम्हाला वाटायचे की आपण ते टिकवू शकू का, परंतु आमच्या ध्येयावरील विश्वासाने आम्हाला पुढे जाण्यास मदत केली. 💪🌿
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                या प्रवासात, आम्ही कधीही एकटे नव्हतो. आमचे देणगीदार, हितचिंतक आणि समर्थक आमची शक्ती बनले. छोटेसे योगदान असो, प्रोत्साहनाचे शब्द असो किंवा दयाळूपणाचे कृत्य असो, प्रत्येक कृती स्नेहांकुरला आज जे आहे ते बनवण्यासाठी एक पाऊल ठरली. 🏡💖
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700">
                <li className="mb-2">जेव्हा निधी कमी होता, तेव्हा कोणीतरी मदतीसाठी पुढे आले.</li>
                <li className="mb-2">जेव्हा आम्हाला मार्गदर्शनाची आवश्यकता होती, तेव्हा अनुभवी मार्गदर्शकांनी आम्हाला मार्ग दाखवला. 🛤️</li>
                <li className="mb-2">जेव्हा शंका निर्माण झाल्या, तेव्हा मुलांच्या यशाने आम्हाला आठवण करून दिली की आम्ही का सुरुवात केली. 🌟</li>
              </ul>
              <p className="text-gray-700 mb-4 leading-relaxed">
                या निःस्वार्थ हृदयांशिवाय, हा प्रवास शक्य झाला नसता. दिले जाणारे प्रत्येक जेवण, दिले जाणारे प्रत्येक पुस्तक आणि निर्माण केलेली प्रत्येक संधी असंख्य हातांच्या एकत्र येण्याचे परिणाम आहे. 🙌📚
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                रस्ता नेहमीच गुळगुळीत नव्हता. भाडे देण्यासाठी संघर्ष करण्यापासून ते प्रत्येक मुलाचे शिक्षण सुनिश्चित करण्यापर्यंत, प्रत्येक दिवस एक नवीन आव्हान घेऊन येत असे. परंतु विश्वास, चिकाटी आणि आमच्या समर्थकांच्या प्रेमाने आम्ही पुढे सरकलो. ज्या अडथळ्यांना आम्ही तोंड दिले त्यांनी आमचा निर्धारच बळकट केला.
              </p>
              <p className="text-gray-700 leading-relaxed">
                लहान पावलाने सुरू झालेले हे आता करुणा आणि बदलाची चळवळ बनली आहे. प्रत्येक दिवस जात असताना, आपण वाढतो, शिकतो आणि अधिकाधिक जीवनांवर परिणाम करतो. आणि आमच्या देणगीदारांच्या आणि हितचिंतकांच्या अढळ पाठिंब्यामुळे, आपल्याला माहित आहे की भविष्यात आणखी शक्यता आहेत. 💞 कारण स्नेहांकुरच्या हृदयात, फक्त एक संस्था नाही - अशा लोकांचा समुदाय आहे ज्यांचा असा विश्वास आहे की कोणत्याही मुलाला कधीही एकटे वाटू नये. ❤️🤗
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
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
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
                Dedicated her life to creating a safe haven for children in
                need, with over 20 years of experience in child welfare.
              </p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
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
                Brings strategic vision and operational excellence to our
                organization with his background in education management.
              </p>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
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
                Passionate educator who designs our curriculum and mentoring
                programs to give our children the best learning opportunities.
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
            Whether through volunteering, donations, or spreading awareness, you
            can make a significant difference in a child's life.
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
