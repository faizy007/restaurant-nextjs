import Image from "next/image";

const items = [
  { title: "Wedding Catering", image: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/4f70ac522dd448dc88c9f57887596a26-qpe6omzvkdpp3j974i61twuz2r5jb7jh01rcancwqg.jpg" },
  { title: "Special Occasion", image: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/catering-2-qpe6omzvkdpp3j974i61twuz2r5jb7jh01rcancwqg.png" },
  { title: "Birthday Party Catering", image: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/blog-image-3-qpe6onxpr7qzf57tz0koeemfo50wiwn7c6etrxbik8.jpg" },
  { title: "Kids Party Catering", image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/kidsparty.avif" },
  { title: "Staff Party", image: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/event-detail-img-1-qpe6omzvkdpp3j974i61twuz2r5jb7jh01rcancwqg.jpg" },
  { title: "Yacht Party Catering", image: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/Yacht-Catering-qpe6omzvkdpp3j974i61twuz2r5jb7jh01rcancwqg.png" },
];

export default function CateringSection() {
  return (
    <section className="bg-neutral-50 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center text-gold font-semibold tracking-widest text-xl uppercase mb-4 block animate-fade-in">
          CATERING
        </p>
        <h2 className="mt-3 text-center text-gold text-2xl font-semibold sm:text-3xl md:text-4xl">
          Organising Private & Corporate Parties
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-neutral-600 md:text-base">
         Are you planning a private party, birthday, small or large event, wedding or outdoor food catering? Treat your friends and your clients with one of the best restaurant food available in Dubai. We do more than catering services, we create a holiday atmosphere and deliver the freshest and finest food to your place.

Any time of the day, promptly and at the highest quality, we cater the best for you. You can be rest assured that your event and especially – food – is in the right hands. We administer everything right on time, which is as important as the food itself.
        </p>

        {/* Responsive grid: 1 col → 2 → 3 */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-md"
            >
              {/* Keep image ratio stable */}
              <div className="relative aspect-[4/3]">
                <Image src={it.image} alt={it.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <div className="inline-flex text-black px-3 py-1 text-md font-medium ">
                  {it.title.toUpperCase()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}