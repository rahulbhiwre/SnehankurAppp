import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Snehankur Orphanage</h3>
            <p className="text-gray-600 text-sm">
              Providing love, care and support to children in need
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/rahul.bhiwre/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/rahulbhiwre/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://wa.me/919689227171"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="/about" className="hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-primary">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/donate" className="hover:text-primary">
                  Donate
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/rahul.bhiwre/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/rahulbhiwre/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://wa.me/9689227171"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Snehankur Orphanage. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
