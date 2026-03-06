import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-6 tracking-wider underline decoration-gold underline-offset-8">CONTACT US</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                <p className="text-sm leading-relaxed">
                  Shop No. 5, Marina Pearl View Hotel Apt., Waterfront Al Masara Street, Dubai Marina
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <p className="text-sm font-medium">+971 54 339 2616</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <p className="text-sm font-medium">+971 4 514 7866</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <p className="text-sm font-medium">director@rickysrestaurants.com</p>
              </div>
            </div>
            <div className="flex space-x-4 mt-8">
              <Link href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gold hover:text-white transition-colors">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gold hover:text-white transition-colors">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gold hover:text-white transition-colors">
                <Twitter className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 tracking-wider underline decoration-gold underline-offset-8">SERVICES</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm hover:text-gold transition-colors">Yacht Party Catering in Dubai</Link></li>
              <li><Link href="#" className="text-sm hover:text-gold transition-colors">Birthday Party Catering</Link></li>
              <li><Link href="#" className="text-sm hover:text-gold transition-colors">Wedding Catering in dubai</Link></li>
              <li><Link href="#" className="text-sm hover:text-gold transition-colors">Business Party Catering</Link></li>
              <li><Link href="#" className="text-sm hover:text-gold transition-colors">Private Catering</Link></li>
            </ul>
          </div>

          {/* Quicklinks */}
          <div>
            <h3 className="text-lg font-bold mb-6 tracking-wider underline decoration-gold underline-offset-8">QUICKLINKS</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm hover:text-gold transition-colors">Reservation</Link></li>
              <li><Link href="#" className="text-sm hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm hover:text-gold transition-colors">Terms & Condition</Link></li>
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <h3 className="text-lg font-bold mb-6 tracking-wider underline decoration-gold underline-offset-8">GALLERY</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                "https://rickyrestaurants.com/wp-content/uploads/2024/05/foot-img-1.jpg",
                "https://rickyrestaurants.com/wp-content/uploads/2024/05/foot-img-2.jpg",
                "https://rickyrestaurants.com/wp-content/uploads/2024/05/foot-img-3.jpg",
                "https://rickyrestaurants.com/wp-content/uploads/2024/05/foot-img-4.jpg"
              ].map((url, i) => (
                <div key={i} className="aspect-square bg-gray-200 rounded-sm overflow-hidden relative group">
                   <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url('${url}')` }}></div>
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors cursor-pointer"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400">© 2024 Ricky's Restaurant. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
