import Image from "next/image";
import Link from "next/link";

export default function DeliveryCTA() {
  return (
    <section className="relative py-20 bg-neutral-50/50 overflow-hidden">
      {/* Background decoration lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M0,500 C200,400 300,600 500,500 C700,400 800,600 1000,500" stroke="currentColor" fill="none" strokeWidth="2" strokeDasharray="10,10" className="text-black" />
          <path d="M0,600 C200,500 300,700 500,600 C700,500 800,700 1000,600" stroke="currentColor" fill="none" strokeWidth="2" strokeDasharray="10,10" className="text-black" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-black/5 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Content */}
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <span className="text-gold font-semibold tracking-widest text-sm uppercase mb-4 block">
                Get Delivery
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-8 text-neutral-900">
                On Your <br className="hidden md:block" /> Desired Time
              </h2>
              
              <div className="flex">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center px-8 py-4 bg-gold text-white text-sm md:text-base font-bold tracking-wider rounded-md transition-all duration-300 hover:bg-gold-hover hover:shadow-lg active:scale-95 uppercase shadow-md"
                >
                  ORDER NOW
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[300px] lg:h-auto min-h-[400px]">
              <Image 
                src="https://rickyrestaurants.com/wp-content/uploads/2024/05/sub-img-1024x576.jpg" 
                alt="Delicious Grill Platter" 
                fill 
                className="object-cover"
              />
              {/* Subtle inner shadow on image */}
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}