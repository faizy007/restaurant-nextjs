import Image from "next/image";
import { Phone, MapPin, Clock3 } from "lucide-react";

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[92px] items-start gap-4 rounded-2xl bg-white px-4 py-4 shadow-[0_4px_18px_rgba(0,0,0,0.08)]">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#c79a4a] text-white">
        {icon}
      </div>

      <div>
        <h3 className="text-[22px] font-semibold leading-none text-[#2f2f2f]">
          {title}
        </h3>
        <div className="mt-2 text-[15px] leading-7 text-[#7f7f7f]">{children}</div>
      </div>
    </div>
  );
}

function InputLabel({
  label,
  required,
}: {
  label: string;
  required?: boolean;
}) {
  return (
    <label className="mb-2 block text-[14px] font-semibold text-[#2f2f2f]">
      {label} {required ? <span className="text-red-500">*</span> : null}
    </label>
  );
}

export default function ContactUsPage() {
  return (
    <div className="bg-[#f8f8f6]">
      {/* Hero */}
      <section className="relative h-[220px] overflow-hidden md:h-[260px]">
        <Image
          src="https://rickyrestaurants.com/wp-content/uploads/2024/05/contact-bg-img1.jpg"
          alt="Contact us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#b98b3d]/65" />
        <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-semibold text-white md:text-6xl">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Info cards */}
      <section className="px-4 pt-16 md:pt-20">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          <InfoCard
            icon={<Phone className="h-6 w-6" strokeWidth={2.4} />}
            title="Call Us"
          >
            +971 54 339 2616 / +971 4 514 7066
          </InfoCard>

          <InfoCard
            icon={<MapPin className="h-6 w-6" strokeWidth={2.4} />}
            title="Address"
          >
            Shop No. 5, Marina Pearl View Hotel Apt., Waterfront Al Masara
            Street, Dubai Marina
          </InfoCard>

          <InfoCard
            icon={<Clock3 className="h-6 w-6" strokeWidth={2.4} />}
            title="Openning Hour"
          >
            7:30 AM - 12:00 Midnight
          </InfoCard>
        </div>
      </section>

      {/* Contact form area */}
      <section className="relative overflow-hidden px-4 py-24 md:py-32">
        {/* decorative shapes */}
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute left-[4%] top-[55px] h-[180px] w-[140px] rounded-[60%_40%_50%_45%/45%_55%_40%_60%] bg-[#edd09a]" />

          <div className="absolute -left-[180px] top-[320px] h-[560px] w-[560px] rounded-full border border-dashed border-[#d8d8d2]" />

          <div className="absolute right-[5%] top-[270px] h-[520px] w-[520px] rounded-full border border-dashed border-[#d8d8d2]" />
        </div>

        <div className="relative mx-auto max-w-4xl">
          <h2 className="text-center font-serif text-[44px] font-semibold leading-tight text-[#2f2f2f] md:text-[62px]">
            Get In Touch With Us
          </h2>

          <form className="mx-auto mt-14 max-w-3xl">
            <div className="grid gap-6">
              {/* Name row */}
              <div>
                <InputLabel label="Name" required />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <input
                      type="text"
                      className="h-12 w-full rounded-none border border-[#cfcfcf] bg-transparent px-3 outline-none transition focus:border-[#c79a4a]"
                    />
                    <p className="mt-1 text-xs text-[#7f7f7f]">First</p>
                  </div>

                  <div>
                    <input
                      type="text"
                      className="h-12 w-full rounded-none border border-[#cfcfcf] bg-transparent px-3 outline-none transition focus:border-[#c79a4a]"
                    />
                    <p className="mt-1 text-xs text-[#7f7f7f]">Last</p>
                  </div>
                </div>
              </div>

              <div>
                <InputLabel label="Mobile Number" required />
                <input
                  type="text"
                  className="h-12 w-full rounded-none border border-[#cfcfcf] bg-transparent px-3 outline-none transition focus:border-[#c79a4a]"
                />
              </div>

              <div>
                <InputLabel label="Email" required />
                <input
                  type="email"
                  className="h-12 w-full rounded-none border border-[#cfcfcf] bg-transparent px-3 outline-none transition focus:border-[#c79a4a]"
                />
              </div>

              <div>
                <InputLabel label="Numbers Of Guest" required />
                <input
                  type="text"
                  className="h-12 w-full rounded-none border border-[#cfcfcf] bg-transparent px-3 outline-none transition focus:border-[#c79a4a]"
                />
              </div>

              <div>
                <InputLabel label="Comment or Message" />
                <textarea
                  rows={5}
                  className="w-full rounded-none border border-[#cfcfcf] bg-transparent px-3 py-3 outline-none transition focus:border-[#c79a4a]"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-[#0d6efd] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#0b5ed7]"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}