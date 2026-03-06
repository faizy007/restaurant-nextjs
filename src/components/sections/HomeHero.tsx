export default function HomeHero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with subtle zoom and dark overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-[url('https://rickyrestaurants.com/wp-content/uploads/2024/05/event-img-1.png')] bg-cover bg-center animate-subtle-zoom scale-105"
        />
        {/* Sophisticated dual overlay for depth */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4 text-center text-white max-w-5xl">
        {/* Subtle Welcome Text */}
        <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-medium animate-fade-in opacity-90 drop-shadow-sm">
          Welcome To Ricky&apos;s Restaurant
        </p>

        {/* Elegant Serif Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] mb-10 drop-shadow-lg animate-fade-in [animation-delay:200ms]">
          Eat What Makes <br className="hidden md:block" /> You Happy
        </h1>

        {/* Call to Action Button */}
        <div className="animate-fade-in [animation-delay:400ms]">
          <a
            href="/contact-us"
            className="inline-flex items-center px-8 py-4 bg-gold text-white text-sm md:text-base font-semibold rounded-md transition-all duration-300 hover:bg-gold-hover hover:scale-105 hover:shadow-xl active:scale-95 shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}