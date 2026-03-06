import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { 
    name: "Caesar Salad", 
    desc: "Crisp romaine lettuce tossed with creamy Caesar dressing, Parmesan cheese, and homemade croutons", 
    img: "https://rickyrestaurants.com/wp-content/uploads/2024/05/Caesar-Salad-768x512.jpg" 
  },
  { 
    name: "Hummus", 
    desc: "Smooth and savory chickpea hummus, drizzled with extra virgin olive oil, and served with warm pita bread", 
    img: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/hummus-index-6463bace4bba5-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpeg" 
  },
  { 
    name: "Tahina", 
    desc: "Rich and velvety tahini sauce made with sesame paste, garlic, lemon juice, and a hint of olive oil.", 
    img: "https://rickyrestaurants.com/wp-content/uploads/2024/05/Tahina-300x200.jpg" 
  },
  { 
    name: "Mutton Kofta ( Seekh Kabab )", 
    desc: "Juicy mutton seekh kebabs, expertly seasoned with aromatic spices and grilled to perfection", 
    img: "https://rickyrestaurants.com/wp-content/uploads/2024/05/muttonkofta-300x200.jpg" 
  },
  { 
    name: "Chicken Skewers", 
    desc: "Tender chicken skewers marinated in a flavorful blend of spices, grilled to juicy perfection, served with your choice of dipping sauce", 
    img: "https://rickyrestaurants.com/wp-content/uploads/2024/05/hm-img-5-300x242.jpg" 
  },
  { 
    name: "Grilled Chicken Bone", 
    desc: "Grilled chicken bone-in, seasoned to perfection and bursting with savory flavor, served with your choice of delectable sides", 
    img: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/Grilled-Chicken-Thighs-Square-new-480x270-1-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpeg" 
  },
  { 
    name: "Pasta ( White or Pink )", 
    desc: "Al dente pasta served with your choice of creamy white sauce or tangy pink sauce, topped with freshly grated Parmesan cheese", 
    img: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/PinkSaucePasta02-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpg" 
  },
  { 
    name: "Seasoned Rice", 
    desc: "Fluffy seasoned rice, infused with aromatic herbs and spices, offering a fragrant and flavorful complement to any dish", 
    img: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/seasoned-rice-qpe6omzt4o543tlvgprxvb396zydmn3mj7bx0bny70.jpg" 
  },
  { 
    name: "Potato Wedges", 
    desc: "Crispy potato wedges or golden French fries, seasoned to perfection and served with your choice of dipping sauce", 
    img: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/potatow-qpe6omzt4o543tlvgprxvb396zydmn3mj7bx0bny70.jpg" 
  },
  { 
    name: "French Fries", 
    desc: "Golden French fries, perfectly crispy on the outside and fluffy on the inside, served with your favorite dipping sauce", 
    img: "https://rickyrestaurants.com/wp-content/uploads/2024/05/frenchfries-300x200.jpeg" 
  },
];

export default function MenuSection() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Decorative Background Icons */}
      <div className="absolute top-20 left-10 opacity-5 pointer-events-none hidden lg:block">
         <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-neutral-400"><path d="M15 11h.01M12 15h.01M10 11h.01M12 5a7 7 0 0 0-7 7v5a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-5a7 7 0 0 0-7-7Z" /></svg>
      </div>
      <div className="absolute bottom-20 right-10 opacity-5 pointer-events-none hidden lg:block">
         <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-neutral-400"><path d="M7 21a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a4 4 0 0 1-4 4H7Z"/><path d="M7 13h10M7 17h10"/></svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold font-semibold tracking-widest text-sm uppercase mb-4 animate-fade-in">
            CATERING MENU
          </p>
          <h2 className="text-5xl md:text-6xl font-serif font-medium text-neutral-900 animate-fade-in [animation-delay:100ms]">
            Grill Feast
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {menuItems.map((item, idx) => (
            <div 
              key={item.name} 
              className="group flex gap-6 p-4 rounded-xl transition-all duration-300 hover:bg-neutral-50 border border-transparent hover:border-black/5 animate-fade-in"
              style={{ animationDelay: `${200 + idx * 50}ms` }}
            >
              <div className="relative h-20 w-20 flex-none overflow-hidden rounded-lg shadow-sm">
                <Image 
                  src={item.img} 
                  alt={item.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-neutral-800 whitespace-nowrap">
                    {item.name}
                  </h3>
                  <div className="flex-1 border-b border-dotted border-neutral-300 mb-1.5" />
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in [animation-delay:800ms]">
          <Link
            href="/menu"
            className="inline-flex items-center px-10 py-4 bg-gold text-white text-sm md:text-base font-bold tracking-wider rounded-md transition-all duration-300 hover:bg-gold-hover hover:shadow-xl hover:-translate-y-1 active:scale-95 uppercase shadow-md"
          >
            MORE MENU
          </Link>
        </div>
      </div>
    </section>
  );
}