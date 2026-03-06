import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-white">
      {/* Decorative Background Icon (Ice Cream Cone SVG) */}
      <div className="absolute top-10 right-10 opacity-5 pointer-events-none hidden lg:block">
        <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400">
          <path d="m7 11 2 3 2-3 2 3 2-3" />
          <path d="M12 2a5 5 0 0 1 5 5v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7a5 5 0 0 1 5-5z" />
          <path d="M6 18c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10H6v8z" />
          <path d="M10 22h4" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Staggered Image Layout */}
          <div className="relative flex items-center justify-center lg:justify-start">
            <div className="relative w-full max-w-[500px] aspect-[4/5]">
              {/* Top Left Image (Kebabs) */}
              <div className="absolute top-0 left-0 w-[55%] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl z-10 animate-fade-in">
                <Image
                  src="https://rickyrestaurants.com/wp-content/uploads/2024/05/img-1.jpg"
                  alt="Premium Kebabs"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Bottom Right Image (Burger) - Staggered */}
              <div className="absolute bottom-0 right-0 w-[60%] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl z-0 mt-20 lg:mt-32 animate-fade-in [animation-delay:200ms]">
                <Image
                  src="https://rickyrestaurants.com/wp-content/uploads/2024/05/img-2.jpg"
                  alt="Gourmet Burger"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="max-w-xl">
            <span className="text-gold font-semibold tracking-widest text-sm uppercase mb-4 block animate-fade-in">
              About us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-8 text-neutral-900 animate-fade-in [animation-delay:100ms]">
              EAT WHAT MAKES YOU HAPPY
            </h2>
            <p className="text-neutral-600 text-base md:text-lg leading-relaxed mb-10 animate-fade-in [animation-delay:200ms]">
              Get the food that makes you drool! Ricky&apos;s Restaurant is one of the finest restaurants to dine-in with the best combination of spices according to your taste. Our professional staff is at your service with food delivery, event catering, and other services.
            </p>

            <div className="mb-12 animate-fade-in [animation-delay:300ms]">
              <Link
                href="/menu"
                className="inline-flex items-center px-8 py-3.5 bg-gold text-white text-sm md:text-base font-semibold rounded-md transition-all duration-300 hover:bg-gold-hover hover:shadow-lg active:scale-95"
              >
                Order Now
              </Link>
            </div>

            {/* Small Horizontal Images Row */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in [animation-delay:400ms]">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://rickyrestaurants.com/wp-content/uploads/2024/05/img-3.jpg"
                  alt="Braised Meat Dish"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://rickyrestaurants.com/wp-content/uploads/2024/05/h2-sub-img.jpg"
                  alt="Gourmet Platter"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}