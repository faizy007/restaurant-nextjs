import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Yatch() {
  return (
    <div className="flex flex-col w-full font-sans">
      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0">
           <div className="w-full h-full bg-[url('https://rickyrestaurants.com/wp-content/uploads/2024/05/Yacht-Catering.png')] bg-cover bg-center animate-subtle-zoom"></div>
        </div>
        <div className="relative z-20 text-center px-4 mt-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[0.2em] uppercase mb-6">
            YACHT CATERING SERVICES
          </h1>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-300 font-medium tracking-widest uppercase">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Yacht Catering Services</span>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-24 px-4 md:px-8 bg-white max-w-6xl mx-auto text-center">
        <span className="text-[13px] font-extrabold tracking-[0.3em] text-gold block mb-6 uppercase">Catering</span>
        <h2 className="text-3xl md:text-[44px] mb-12 tracking-tight heading-arial-bold text-[#333]">Yacht Catering in Dubai</h2>
        
        <div className="space-y-8 text-gray-500 leading-[1.8] max-w-5xl mx-auto text-[17px] font-medium">
          <h3 className="text-2xl md:text-3xl mb-6 heading-arial-bold text-[#333]">Welcome to Ricky’s Restaurant Catering</h3>
          <p>
            Welcome to Ricky's Restaurant Catering, where we redefine luxury catering services in Dubai. At Ricky's Restaurant Catering, we are passionate about the culinary arts and committed to delivering the finest catering experiences, especially when it comes to yacht catering for Dubai clients.
          </p>
          <p>
            As specialists in yacht catering, we take pride in curating tailored menus that perfectly blend gourmet excellence with the vibrant flavors of the sea. Our dedication to culinary excellence is matched only by our meticulous planning. From crafting bespoke menus to managing the finest supplies, coordinating with top-tier vendors, and organizing a professional waitstaff, we ensure every detail is seamlessly orchestrated to create an unforgettable dining experience on the high seas.
          </p>
          <p>
            When you choose Ricky's Restaurant Catering for your yacht catering needs, you're not just hiring a catering service; you're embarking on a culinary journey that will leave your guests astounded. Whether it's an intimate gathering or a grand celebration, our team is here to make your yacht event truly exceptional.
          </p>
        </div>
      </section>

      {/* Luxury Yacht Catering Details Section */}
      <section className="pb-24 pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 p-6 md:p-12 rounded-lg border border-gray-100 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Image with specific frame effect */}
              <div className="relative group">
                <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-xl clip-path-hex">
                  <div className="w-full h-full bg-[url('https://rickyrestaurants.com/wp-content/uploads/2024/05/event-detail-img.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
                </div>
                {/* Secondary small image overlay */}
                <div className="absolute -bottom-10 -left-10 w-2/5 aspect-square border-[10px] border-white shadow-2xl rounded-sm overflow-hidden hidden md:block">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1596230502459-01252199b008?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center"></div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl md:text-[28px] font-bold text-[#333] leading-tight mb-6">
                    Luxury Yacht Catering Services in Dubai
                  </h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed font-medium mb-8">
                    Indulge in the epitome of opulence with luxury yacht catering services in Dubai. Hosting a memorable event on the serene waters of Dubai offers an unmatched level of extravagance. Whether you're celebrating a milestone birthday or craving an unparalleled aquatic experience, yacht catering in Dubai sets the stage for an unforgettable voyage.
                  </p>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="font-bold text-lg text-[#333] tracking-tight mb-2">Luxury Yacht Parties</h4>
                      <p className="text-[14px] text-gray-500 leading-relaxed font-medium">
                        Elevate your celebrations to new heights with a luxury yacht party in Dubai. Imagine you and your guests aboard a gleaming vessel, surrounded by the mesmerizing Dubai skyline. Our yacht birthday party services promise an exclusive and intimate ambiance, ensuring your special day is nothing short of magical.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-[#333] tracking-tight mb-2">Yacht Catering Excellence</h4>
                      <p className="text-[14px] text-gray-500 leading-relaxed font-medium">
                        When it comes to catering for yacht parties, every detail matters. Our yacht catering company in Dubai prides itself on crafting exquisite menus that tantalize your taste buds while you cruise the azure waters. From delectable seafood platters to gourmet delicacies, we ensure that the food for your yacht party is exceptional.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom detailed text components */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 border-t border-gray-200 pt-16">
              <div>
                 <h4 className="font-bold text-lg text-[#333] tracking-tight mb-3">Bespoke Menus</h4>
                 <p className="text-[14px] text-gray-500 leading-relaxed font-medium mb-6">
                   Our yacht catering services go beyond standard fare. We offer a wide array of menu options, all designed to complement your yacht experience perfectly. Whether you envision a romantic yacht dinner or a lively boat party, our private culinary team will tailor the menu to your desires.
                 </p>
                 <h4 className="font-bold text-lg text-[#333] tracking-tight mb-3">Impeccable Service</h4>
                 <p className="text-[14px] text-gray-500 leading-relaxed font-medium">
                   At the heart of our yacht catering services is a commitment to excellence. We ensure that every aspect of your yacht charter is seamless, from planning the event to managing supplies and organizing the waitstaff. Your yacht party deserves nothing less than the best, and we guarantee an unmatched level of service.
                 </p>
              </div>
              <div className="flex flex-col justify-end space-y-6">
                <p className="text-[14px] text-gray-500 leading-relaxed font-medium italic">
                  Experience the best yacht party in Dubai with Ricky's Restaurant Catering, where luxury meets the sea, creating moments that will be cherished forever. Our yacht catering services set the stage for an unparalleled culinary journey, ensuring your yacht event is a masterpiece in every sense. Embark on this extraordinary voyage and let us make it truly unforgettable.
                </p>
                <div className="pt-4">
                  <button className="bg-gold text-white px-10 py-4 rounded-md text-[13px] font-bold tracking-widest hover:bg-gold-hover transition-all transform hover:-translate-y-1 shadow-lg shadow-gold/30">
                    CONTACT US
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
