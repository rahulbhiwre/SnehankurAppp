import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Welcome to <span style={{ color: "#ff80ff" }}>स्नेहांकुर</span>
            </h1>
            <p className="text-2xl text-primary mb-6 font-semibold">
              सेवा समर्पण सामर्थ्य
            </p>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              शृखला पायी असू दे, मी गतीचे गीत गाई दुःख उधळायास आता, आसवांना वेळ
              नाही...!
              <br />- बाबा आमटे
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/donate">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Donate
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">आमचे ध्येय</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            स्वर्गीय श्री. बाबा आमटे आणि शांतिवन सामाजिक प्रकल्पाचे संचालक श्री.
            दिपक (काका) नागरगोजे यांच्या सामाजिक कार्यापासून प्रेरणा घेऊन २०१७
            पासून कुटुंब आणि जिवलग मित्रांच्या सहकार्याने सामाजिक कार्यास
            सुरूवात केली.
            <br />
            <br />
            काही मोजक्या गरजू, होतकरू आणि बिकट आर्थिक परिस्थिती असलेल्या मुलांना
            शैक्षणिक मदत करण्यात आली.
            <br />
            <br />
            हे करत असतांना आणखी खूप काम करण्याची आवश्यकता आहे असं सातत्याने
            जाणवत होत. समाजातील वंचित, दुर्बल, अनाथ, आत्महत्याग्रस्त कुटुंबातील
            मुलं आर्थिक परिस्थिती आणि योग्य मार्गदर्शनाचा अभाव यामुळे
            शिक्षणापासून, विकासाचा प्रवाहापासून कोसो दूर रहात होती.
            त्यांच्यासाठी कोणी काही केलं पाहिजे अशी तळ-मळ वाटत होती. या कालावधीत
            सातत्याने शांतीवन प्रकल्पासोबत नातं जुळत गेलं आणि खोलवर असलेली सुप्त
            ईच्छा नव्याने अंकुरित झाली. दुसर कोणी काही करण्यापेक्षा आपणच आपल्या
            क्षमतेत काही का करू नये असं निश्चित झालं. आणि या ईच्छारूपी अंकुराला
            खत-पाणी आणि वातावरणाची प्रेरणा देण्याचे काम दिपक काकांनी केलं. आणि
            यातून स्नेहांकुर प्रकल्पाचे बीज उभारत गेले.
          </p>
        </div>
      </section>
    </div>
  );
}
