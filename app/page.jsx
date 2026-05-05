export default function Home() {
  const businessName = "Midlands Web Studio";
  const phoneDisplay = "07943 617386";
  const whatsappNumber = "447943617386";
  const email = "viddchoudhary@hotmail.com";

  const services = [
    {
      title: "Professional Business Websites",
      desc: "Clean, modern websites that make local businesses look trustworthy and easy to contact.",
    },
    {
      title: "Quote & Booking Forms",
      desc: "Simple forms that help customers request quotes, appointments, bookings, or callbacks.",
    },
    {
      title: "WhatsApp & Call Buttons",
      desc: "Fast contact buttons so customers can call or message directly from their phone.",
    },
    {
      title: "Google-Friendly Pages",
      desc: "Service pages built with local search in mind so businesses can appear more professional online.",
    },
    {
      title: "Mobile-First Design",
      desc: "Websites designed to look excellent on phones, tablets, laptops, and desktops.",
    },
    {
      title: "Monthly Website Care",
      desc: "Ongoing support for edits, updates, improvements, and basic website maintenance.",
    },
  ];

  const portfolio = [
    {
      type: "Cleaning Business",
      title: "Local Cleaning Website",
      desc: "A polished website with service pages, quote form, WhatsApp contact, trust sections, and customer-focused wording.",
      tag: "Perfect for cleaners",
    },
    {
      type: "Trades Business",
      title: "Builder / Handyman Website",
      desc: "A strong local service website designed to build trust, show previous work, and generate quote requests.",
      tag: "Great for tradesmen",
    },
    {
      type: "Beauty / Barber",
      title: "Salon Booking Website",
      desc: "A stylish website with prices, treatments, opening hours, reviews, location, and booking buttons.",
      tag: "Ideal for salons",
    },
  ];

  const packages = [
    {
      name: "Starter Website",
      price: "£399",
      desc: "Best for small businesses that need a professional online presence quickly.",
      features: [
        "1 to 5 page website",
        "Mobile-friendly design",
        "Call and WhatsApp buttons",
        "Contact form",
        "Basic service sections",
        "Vercel deployment support",
      ],
      highlight: false,
    },
    {
      name: "Professional Website",
      price: "£799",
      desc: "Best for businesses that want a stronger website built to generate enquiries.",
      features: [
        "Everything in Starter",
        "Service pages",
        "Quote or booking form",
        "Reviews and trust sections",
        "FAQ section",
        "Local SEO structure",
        "Professional copywriting",
      ],
      highlight: true,
    },
    {
      name: "Website Care Plan",
      price: "£59/mo",
      desc: "Best for businesses that want ongoing help, updates, and support.",
      features: [
        "Small website edits",
        "Monthly checks",
        "Content updates",
        "Offer updates",
        "Basic support",
        "Improvement suggestions",
      ],
      highlight: false,
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Free Website Review",
      desc: "We check the business, current website if they have one, and what customers need to see before contacting them.",
    },
    {
      number: "02",
      title: "Professional Design",
      desc: "We build a clean, mobile-friendly website that makes the business look trustworthy and easy to contact.",
    },
    {
      number: "03",
      title: "Launch & Improve",
      desc: "We help get the website online and can continue improving it with updates, pages, offers, and support.",
    },
  ];

  const industries = [
    "Cleaning companies",
    "Builders",
    "Electricians",
    "Plumbers",
    "Mobile mechanics",
    "Barbers",
    "Beauty salons",
    "Takeaways",
    "Gardeners",
    "Driving instructors",
    "Removals companies",
    "Landlords",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Top Bar */}
      <section className="border-b border-white/10 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400 text-xl font-black text-slate-950 shadow-lg shadow-emerald-500/20">
              M
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight">{businessName}</p>
              <p className="text-xs text-slate-400">Websites for local businesses</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Examples</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            className="rounded-full bg-emerald-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-300"
          >
            WhatsApp Us
          </a>
        </div>
      </section>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center lg:py-28">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
              Professional websites that help local businesses win more enquiries
            </div>

            <h1 className="max-w-3xl text-5xl font-black tracking-tight text-white md:text-6xl lg:text-7xl">
              Websites that make businesses look trusted, modern and ready to book.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              We build clean, mobile-friendly websites for local businesses that need more calls,
              WhatsApp messages, quote requests and customer trust. Perfect for service businesses,
              trades, salons, cleaners, takeaways and local professionals.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20need%20a%20professional%20website%20for%20my%20business.`}
                className="rounded-full bg-emerald-400 px-8 py-4 text-center text-base font-black text-slate-950 shadow-xl shadow-emerald-500/20 transition hover:bg-emerald-300"
              >
                Get a Free Website Quote
              </a>
              <a
                href="#work"
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-center text-base font-bold text-white transition hover:bg-white/10"
              >
                See Example Work
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              <div>
                <p className="text-3xl font-black text-white">5★</p>
                <p className="mt-1 text-sm text-slate-400">Professional feel</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">24/7</p>
                <p className="mt-1 text-sm text-slate-400">Online presence</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">100%</p>
                <p className="mt-1 text-sm text-slate-400">Mobile-ready</p>
              </div>
            </div>
          </div>

          {/* Hero mockup */}
          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="overflow-hidden rounded-[1.5rem] bg-slate-900">
                <div className="flex items-center gap-2 border-b border-white/10 bg-slate-800 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <div className="ml-3 rounded-full bg-slate-700 px-4 py-1 text-xs text-slate-300">
                    yourbusiness.co.uk
                  </div>
                </div>

                <div className="p-6">
                  <div className="rounded-3xl bg-gradient-to-br from-emerald-400 to-teal-500 p-6 text-slate-950">
                    <p className="text-sm font-bold uppercase tracking-wider">Local Business Website</p>
                    <h2 className="mt-4 text-3xl font-black">Get more enquiries from your website</h2>
                    <p className="mt-3 text-sm font-medium text-slate-800">
                      Clear services, strong trust sections, quote form, and instant WhatsApp contact.
                    </p>
                    <div className="mt-6 flex gap-3">
                      <div className="rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white">
                        Request Quote
                      </div>
                      <div className="rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950">
                        Call Now
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm font-bold">Services</p>
                      <div className="mt-4 space-y-2">
                        <div className="h-3 rounded-full bg-white/20" />
                        <div className="h-3 w-4/5 rounded-full bg-white/20" />
                        <div className="h-3 w-3/5 rounded-full bg-white/20" />
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm font-bold">Reviews</p>
                      <p className="mt-4 text-2xl">★★★★★</p>
                      <div className="mt-3 h-3 rounded-full bg-white/20" />
                    </div>
                    <div className="col-span-2 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm font-bold">Quote Form</p>
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="h-10 rounded-xl bg-white/10" />
                        <div className="h-10 rounded-xl bg-white/10" />
                        <div className="col-span-2 h-10 rounded-xl bg-emerald-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-2xl">
              <p className="text-sm text-slate-400">Typical goal</p>
              <p className="mt-1 text-xl font-black">More calls & quotes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 text-center text-sm font-semibold text-slate-300 md:grid-cols-4">
          <p>Mobile-first design</p>
          <p>Quote forms included</p>
          <p>WhatsApp ready</p>
          <p>Built for local businesses</p>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] border border-red-400/20 bg-red-400/10 p-8">
            <p className="text-sm font-bold uppercase tracking-widest text-red-300">The problem</p>
            <h2 className="mt-4 text-3xl font-black">Many good businesses lose customers because their website looks weak.</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>✗ No proper website or only a Facebook page</li>
              <li>✗ Old design that looks unprofessional on mobile</li>
              <li>✗ No clear prices, services, reviews or trust sections</li>
              <li>✗ Customers cannot easily call, WhatsApp or request a quote</li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-emerald-400/20 bg-emerald-400/10 p-8">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-300">The solution</p>
            <h2 className="mt-4 text-3xl font-black">We build websites that make customers feel ready to contact you.</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>✓ Modern homepage with strong first impression</li>
              <li>✓ Services, FAQs, reviews, gallery and contact sections</li>
              <li>✓ Fast mobile layout with call and WhatsApp buttons</li>
              <li>✓ Quote forms designed to turn visitors into enquiries</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white text-slate-950">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-widest text-emerald-600">What we build</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Everything a local business needs to look professional online.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              We focus on websites that are clear, trustworthy and easy for customers to use.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
                  ✓
                </div>
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="mx-auto max-w-7xl px-5 py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-widest text-emerald-300">Example work</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Show clients what their business could look like.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              These example website styles help business owners imagine their own professional website.
            </p>
          </div>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            className="rounded-full bg-white px-6 py-4 text-center font-black text-slate-950 transition hover:bg-emerald-300"
          >
            Request a Demo
          </a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {portfolio.map((item, index) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/20"
            >
              <div className="bg-slate-900 p-4">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-800 to-slate-950 p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-400" />
                      <span className="h-3 w-3 rounded-full bg-yellow-400" />
                      <span className="h-3 w-3 rounded-full bg-green-400" />
                    </div>
                    <p className="text-xs text-slate-400">Demo {index + 1}</p>
                  </div>

                  <div className="mt-8 rounded-3xl bg-white p-5 text-slate-950">
                    <p className="text-xs font-black uppercase tracking-widest text-emerald-600">
                      {item.type}
                    </p>
                    <h3 className="mt-3 text-2xl font-black">{item.title}</h3>
                    <div className="mt-5 space-y-3">
                      <div className="h-3 rounded-full bg-slate-200" />
                      <div className="h-3 w-4/5 rounded-full bg-slate-200" />
                      <div className="h-3 w-2/3 rounded-full bg-slate-200" />
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <div className="h-11 rounded-xl bg-emerald-400" />
                      <div className="h-11 rounded-xl bg-slate-950" />
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="h-16 rounded-2xl bg-white/10" />
                    <div className="h-16 rounded-2xl bg-white/10" />
                    <div className="h-16 rounded-2xl bg-white/10" />
                  </div>
                </div>
              </div>

              <div className="p-7">
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-bold text-emerald-300">
                  {item.tag}
                </span>
                <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-widest text-emerald-300">Who we help</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Built for real local businesses, not complicated tech companies.
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-slate-200"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-widest text-emerald-300">Simple process</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
            From idea to professional website without stress.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="text-5xl font-black text-emerald-400">{step.number}</p>
              <h3 className="mt-6 text-2xl font-black">{step.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-white text-slate-950">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-widest text-emerald-600">Pricing</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Clear website packages for local businesses.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Simple pricing that helps business owners understand exactly what they are getting.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-[2rem] border p-8 ${
                  pkg.highlight
                    ? "border-emerald-400 bg-slate-950 text-white shadow-2xl shadow-emerald-500/20"
                    : "border-slate-200 bg-slate-50 text-slate-950"
                }`}
              >
                {pkg.highlight && (
                  <p className="mb-4 inline-flex rounded-full bg-emerald-400 px-4 py-2 text-sm font-black text-slate-950">
                    Most Popular
                  </p>
                )}
                <h3 className="text-2xl font-black">{pkg.name}</h3>
                <p className={`mt-3 leading-7 ${pkg.highlight ? "text-slate-300" : "text-slate-600"}`}>
                  {pkg.desc}
                </p>
                <p className="mt-6 text-5xl font-black">{pkg.price}</p>

                <ul className="mt-8 space-y-4">
                  {pkg.features.map((feature) => (
                    <li key={feature} className={pkg.highlight ? "text-slate-200" : "text-slate-700"}>
                      ✓ {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.name)}.`}
                  className={`mt-8 block rounded-full px-6 py-4 text-center font-black transition ${
                    pkg.highlight
                      ? "bg-emerald-400 text-slate-950 hover:bg-emerald-300"
                      : "bg-slate-950 text-white hover:bg-slate-800"
                  }`}
                >
                  Choose This Package
                </a>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Prices can vary depending on the number of pages, features, content, forms, and ongoing support required.
          </p>
        </div>
      </section>

      {/* Why Us */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-emerald-300">Why choose us</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              We do not just make websites look nice. We make them useful.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              A good website should help customers understand your services, trust your business,
              and contact you quickly. That is what we focus on from the first design.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-black">Built around customer action</h3>
                <p className="mt-2 text-slate-300">
                  Every page is designed to guide visitors towards calling, messaging, booking, or requesting a quote.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-black">Professional wording included</h3>
                <p className="mt-2 text-slate-300">
                  We help write clear, trustworthy website content so the business sounds professional.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-black">Simple support</h3>
                <p className="mt-2 text-slate-300">
                  We explain everything clearly and can help with future updates when the business grows.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-black">A website should answer these questions:</h3>
            <div className="mt-8 space-y-4">
              {[
                "What does the business do?",
                "Can I trust them?",
                "Where do they work?",
                "What services do they offer?",
                "How do I contact them quickly?",
                "Can I request a quote easily?",
              ].map((question) => (
                <div key={question} className="flex items-center gap-4 rounded-2xl bg-slate-900 p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400 font-black text-slate-950">
                    ✓
                  </div>
                  <p className="font-semibold">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-4xl px-5 py-20">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-widest text-emerald-300">Questions</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {[
              {
                q: "Do I need to already have a website?",
                a: "No. We can build a new website from the beginning or improve the business image if you currently only use Facebook, Instagram, Google, or WhatsApp.",
              },
              {
                q: "Can the website work on mobile phones?",
                a: "Yes. The website is designed mobile-first because most local customers search from their phones.",
              },
              {
                q: "Can customers contact me through WhatsApp?",
                a: "Yes. We can add WhatsApp buttons, phone buttons, email buttons, and contact forms.",
              },
              {
                q: "Can you help with the wording?",
                a: "Yes. We can write professional wording for your homepage, services, FAQs, and contact sections.",
              },
              {
                q: "Do you offer monthly support?",
                a: "Yes. Monthly care plans are available for updates, small edits, improvements, and general website support.",
              },
            ].map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-black">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-slate-950 to-slate-950" />
        <div className="relative mx-auto max-w-5xl px-5 py-20 text-center">
          <p className="text-sm font-black uppercase tracking-widest text-emerald-300">Ready to start?</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            Let’s build a website your business can be proud to show customers.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Message us today and we can discuss the business, the pages needed, and the best website package.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20would%20like%20a%20professional%20website%20for%20my%20business.`}
              className="rounded-full bg-emerald-400 px-8 py-4 text-center text-base font-black text-slate-950 shadow-xl shadow-emerald-500/20 transition hover:bg-emerald-300"
            >
              Message on WhatsApp
            </a>
            <a
              href={`tel:${phoneDisplay.replace(/\s/g, "")}`}
              className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-center text-base font-bold text-white transition hover:bg-white/10"
            >
              Call {phoneDisplay}
            </a>
            <a
              href={`mailto:${email}`}
              className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-center text-base font-bold text-white transition hover:bg-white/10"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-black">{businessName}</p>
            <p className="mt-1 text-sm text-slate-400">
              Professional websites for local businesses.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-slate-400 md:text-right">
            <a href={`tel:${phoneDisplay.replace(/\s/g, "")}`} className="hover:text-white">
              {phoneDisplay}
            </a>
            <a href={`mailto:${email}`} className="hover:text-white">
              {email}
            </a>
            <p>© {new Date().getFullYear()} {businessName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
