export default function Home() {
  const businessName = "Midlands Web Studio";
  const phoneDisplay = "07943 617386";
  const whatsappNumber = "447943617386";
  const email = "viddchoudhary@hotmail.com";

  const services = [
    {
      title: "Professional Business Websites",
      desc: "Clean, modern websites that make local businesses look trustworthy and easy to contact.",
      icon: "💼",
    },
    {
      title: "Quote & Booking Forms",
      desc: "Simple forms that help customers request quotes, appointments, bookings, or callbacks.",
      icon: "📝",
    },
    {
      title: "WhatsApp & Call Buttons",
      desc: "Fast contact buttons so customers can call or message directly from their phone.",
      icon: "📱",
    },
    {
      title: "Google-Friendly Pages",
      desc: "Service pages built with local search in mind so businesses can appear more professional online.",
      icon: "📍",
    },
    {
      title: "Mobile-First Design",
      desc: "Websites designed to look excellent on phones, tablets, laptops, and desktops.",
      icon: "✨",
    },
    {
      title: "Monthly Website Care",
      desc: "Ongoing support for edits, updates, improvements, and basic website maintenance.",
      icon: "🛠️",
    },
  ];

  const portfolio = [
    {
      type: "Cleaning Business",
      title: "Local Cleaning Website",
      desc: "A polished website with service pages, quote form, WhatsApp contact, trust sections, and customer-focused wording.",
      tag: "Perfect for cleaners",
      color: "from-cyan-400 to-blue-500",
    },
    {
      type: "Trades Business",
      title: "Builder / Handyman Website",
      desc: "A strong local service website designed to build trust, show previous work, and generate quote requests.",
      tag: "Great for tradesmen",
      color: "from-orange-400 to-pink-500",
    },
    {
      type: "Beauty / Barber",
      title: "Salon Booking Website",
      desc: "A stylish website with prices, treatments, opening hours, reviews, location, and booking buttons.",
      tag: "Ideal for salons",
      color: "from-fuchsia-400 to-violet-500",
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

  const faqs = [
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
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-fuchsia-50 text-slate-900">
      {/* Top Bar */}
      <section className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-2xl font-black text-white shadow-lg shadow-cyan-300/40">
              M
            </div>
            <div>
              <p className="text-2xl font-black tracking-tight text-slate-900">{businessName}</p>
              <p className="text-sm text-slate-600">Websites for local businesses</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-lg font-semibold text-slate-700 md:flex">
            <a href="#services" className="transition hover:text-fuchsia-600">Services</a>
            <a href="#work" className="transition hover:text-fuchsia-600">Examples</a>
            <a href="#pricing" className="transition hover:text-fuchsia-600">Pricing</a>
            <a href="#contact" className="transition hover:text-fuchsia-600">Contact</a>
          </nav>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            className="rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3 text-base font-black text-slate-950 shadow-lg shadow-emerald-200 transition hover:scale-105"
          >
            WhatsApp Us
          </a>
        </div>
      </section>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-cyan-300/40 blur-3xl" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-fuchsia-300/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-16 md:grid-cols-2 md:items-center lg:py-24">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-200 bg-cyan-100 px-5 py-3 text-base font-bold text-cyan-800 shadow-sm">
              Professional websites that help local businesses win more enquiries
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-slate-900 md:text-7xl">
              Websites that make businesses look{" "}
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
                trusted, modern
              </span>{" "}
              and ready to book.
            </h1>

            <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-600">
              We build bright, professional, mobile-friendly websites for local businesses that
              need more calls, WhatsApp messages, quote requests and customer trust.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20need%20a%20professional%20website%20for%20my%20business.`}
                className="rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-400 px-8 py-4 text-center text-lg font-black text-white shadow-xl shadow-fuchsia-200 transition hover:scale-105"
              >
                Get a Free Website Quote
              </a>
              <a
                href="#work"
                className="rounded-full border border-slate-300 bg-white px-8 py-4 text-center text-lg font-bold text-slate-800 shadow-sm transition hover:border-fuchsia-300 hover:text-fuchsia-600"
              >
                See Example Work
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white p-5 shadow-md shadow-slate-200/60">
                <p className="text-3xl font-black text-cyan-600">5★</p>
                <p className="mt-1 text-sm text-slate-600">Professional feel</p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-md shadow-slate-200/60">
                <p className="text-3xl font-black text-fuchsia-600">24/7</p>
                <p className="mt-1 text-sm text-slate-600">Online presence</p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-md shadow-slate-200/60">
                <p className="text-3xl font-black text-orange-500">100%</p>
                <p className="mt-1 text-sm text-slate-600">Mobile-ready</p>
              </div>
            </div>
          </div>

          {/* Hero Mockup */}
          <div className="relative">
            <div className="rounded-[2rem] bg-white p-4 shadow-2xl shadow-slate-300/60">
              <div className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-slate-50">
                <div className="flex items-center gap-2 border-b border-slate-200 bg-white px-4 py-3">
                  <span className="h-3.5 w-3.5 rounded-full bg-rose-400" />
                  <span className="h-3.5 w-3.5 rounded-full bg-amber-400" />
                  <span className="h-3.5 w-3.5 rounded-full bg-emerald-400" />
                  <div className="ml-3 rounded-full bg-slate-100 px-4 py-1 text-sm text-slate-500">
                    yourbusiness.co.uk
                  </div>
                </div>

                <div className="p-6">
                  <div className="rounded-[2rem] bg-gradient-to-br from-cyan-400 via-teal-300 to-emerald-300 p-8 text-slate-950 shadow-lg">
                    <p className="text-sm font-black uppercase tracking-widest">Local Business Website</p>
                    <h2 className="mt-4 text-5xl font-black leading-tight">
                      Get more enquiries from your website
                    </h2>
                    <p className="mt-4 max-w-md text-lg leading-8 text-slate-800">
                      Clear services, strong trust sections, quote form, and instant WhatsApp contact.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <div className="rounded-full bg-slate-950 px-6 py-4 text-lg font-black text-white">
                        Request Quote
                      </div>
                      <div className="rounded-full bg-white px-6 py-4 text-lg font-black text-slate-950">
                        Call Now
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-sm font-black text-slate-700">Services</p>
                      <div className="mt-4 space-y-2">
                        <div className="h-3 rounded-full bg-cyan-100" />
                        <div className="h-3 w-4/5 rounded-full bg-cyan-100" />
                        <div className="h-3 w-3/5 rounded-full bg-cyan-100" />
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-sm font-black text-slate-700">Reviews</p>
                      <p className="mt-4 text-2xl">★★★★★</p>
                      <div className="mt-3 h-3 rounded-full bg-fuchsia-100" />
                    </div>
                    <div className="col-span-2 rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-sm font-black text-slate-700">Quote Form</p>
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="h-10 rounded-xl bg-slate-100" />
                        <div className="h-10 rounded-xl bg-slate-100" />
                        <div className="col-span-2 h-10 rounded-xl bg-gradient-to-r from-fuchsia-500 to-orange-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white px-5 py-4 shadow-xl shadow-slate-200/70">
              <p className="text-sm text-slate-500">Typical goal</p>
              <p className="text-xl font-black text-slate-900">More calls & quotes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white/70 backdrop-blur">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 text-center text-sm font-bold text-slate-700 md:grid-cols-4">
          <p>Mobile-first design</p>
          <p>Quote forms included</p>
          <p>WhatsApp ready</p>
          <p>Built for local businesses</p>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] border border-rose-200 bg-gradient-to-br from-rose-50 to-orange-50 p-8 shadow-sm">
            <p className="text-sm font-black uppercase tracking-widest text-rose-600">The problem</p>
            <h2 className="mt-4 text-3xl font-black text-slate-900">
              Many good businesses lose customers because their website looks weak.
            </h2>
            <ul className="mt-6 space-y-4 text-lg text-slate-700">
              <li>✗ No proper website or only a Facebook page</li>
              <li>✗ Old design that looks unprofessional on mobile</li>
              <li>✗ No clear services, reviews or trust sections</li>
              <li>✗ Customers cannot easily call, WhatsApp or request a quote</li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-cyan-200 bg-gradient-to-br from-cyan-50 to-emerald-50 p-8 shadow-sm">
            <p className="text-sm font-black uppercase tracking-widest text-cyan-700">The solution</p>
            <h2 className="mt-4 text-3xl font-black text-slate-900">
              We build websites that make customers feel ready to contact you.
            </h2>
            <ul className="mt-6 space-y-4 text-lg text-slate-700">
              <li>✓ Modern homepage with strong first impression</li>
              <li>✓ Services, FAQs, reviews, gallery and contact sections</li>
              <li>✓ Fast mobile layout with call and WhatsApp buttons</li>
              <li>✓ Quote forms designed to turn visitors into enquiries</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-widest text-fuchsia-600">What we build</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              Everything a local business needs to look professional online.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              We focus on websites that are clear, trustworthy and easy for customers to use.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const bgClasses = [
                "from-cyan-50 to-blue-50 border-cyan-100",
                "from-orange-50 to-amber-50 border-orange-100",
                "from-fuchsia-50 to-pink-50 border-fuchsia-100",
                "from-emerald-50 to-teal-50 border-emerald-100",
                "from-violet-50 to-purple-50 border-violet-100",
                "from-rose-50 to-orange-50 border-rose-100",
              ];

              return (
                <div
                  key={service.title}
                  className={`rounded-[1.75rem] border bg-gradient-to-br p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${bgClasses[index]}`}
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-black text-slate-900">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="bg-gradient-to-br from-slate-50 to-fuchsia-50">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-widest text-cyan-700">Example work</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
                Show clients what their business could look like.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                These example website styles help business owners imagine their own professional website.
              </p>
            </div>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-4 text-center font-black text-white shadow-lg shadow-cyan-200 transition hover:scale-105"
            >
              Request a Demo
            </a>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {portfolio.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200/70"
              >
                <div className="p-4">
                  <div className={`rounded-[1.5rem] bg-gradient-to-br ${item.color} p-5`}>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <span className="h-3 w-3 rounded-full bg-white/80" />
                        <span className="h-3 w-3 rounded-full bg-white/80" />
                        <span className="h-3 w-3 rounded-full bg-white/80" />
                      </div>
                      <p className="text-xs font-bold text-white/90">Demo</p>
                    </div>

                    <div className="mt-8 rounded-3xl bg-white p-5 text-slate-950 shadow-sm">
                      <p className="text-xs font-black uppercase tracking-widest text-slate-500">
                        {item.type}
                      </p>
                      <h3 className="mt-3 text-2xl font-black">{item.title}</h3>
                      <div className="mt-5 space-y-3">
                        <div className="h-3 rounded-full bg-slate-200" />
                        <div className="h-3 w-4/5 rounded-full bg-slate-200" />
                        <div className="h-3 w-2/3 rounded-full bg-slate-200" />
                      </div>
                      <div className="mt-6 grid grid-cols-2 gap-3">
                        <div className="h-11 rounded-xl bg-slate-950" />
                        <div className="h-11 rounded-xl bg-slate-200" />
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div className="h-16 rounded-2xl bg-white/30" />
                      <div className="h-16 rounded-2xl bg-white/30" />
                      <div className="h-16 rounded-2xl bg-white/30" />
                    </div>
                  </div>
                </div>

                <div className="p-7">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-700">
                    {item.tag}
                  </span>
                  <h3 className="mt-5 text-2xl font-black text-slate-900">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-widest text-orange-500">Who we help</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              Built for real local businesses, not complicated tech companies.
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {industries.map((industry, index) => {
              const chipClasses = [
                "bg-cyan-50 text-cyan-700 border-cyan-200",
                "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200",
                "bg-orange-50 text-orange-700 border-orange-200",
                "bg-emerald-50 text-emerald-700 border-emerald-200",
              ];

              return (
                <span
                  key={industry}
                  className={`rounded-full border px-5 py-3 text-sm font-bold ${chipClasses[index % 4]}`}
                >
                  {industry}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gradient-to-br from-cyan-50 via-white to-orange-50">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-widest text-fuchsia-600">Simple process</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              From idea to professional website without stress.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => {
              const cardClasses = [
                "from-cyan-50 to-blue-50 border-cyan-100",
                "from-fuchsia-50 to-pink-50 border-fuchsia-100",
                "from-orange-50 to-amber-50 border-orange-100",
              ];

              const numberClasses = [
                "text-cyan-600",
                "text-fuchsia-600",
                "text-orange-500",
              ];

              return (
                <div
                  key={step.number}
                  className={`rounded-[2rem] border bg-gradient-to-br p-8 shadow-sm ${cardClasses[index]}`}
                >
                  <p className={`text-5xl font-black ${numberClasses[index]}`}>{step.number}</p>
                  <h3 className="mt-6 text-2xl font-black text-slate-900">{step.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-widest text-cyan-700">Pricing</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
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
                className={`rounded-[2rem] border p-8 shadow-lg ${
                  pkg.highlight
                    ? "border-fuchsia-200 bg-gradient-to-br from-fuchsia-50 via-white to-orange-50 text-slate-950 shadow-fuchsia-100"
                    : "border-slate-200 bg-slate-50 text-slate-950"
                }`}
              >
                {pkg.highlight && (
                  <p className="mb-4 inline-flex rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-400 px-4 py-2 text-sm font-black text-white">
                    Most Popular
                  </p>
                )}
                <h3 className="text-2xl font-black">{pkg.name}</h3>
                <p className="mt-3 leading-7 text-slate-600">{pkg.desc}</p>
                <p className="mt-6 text-5xl font-black text-slate-900">{pkg.price}</p>

                <ul className="mt-8 space-y-4 text-slate-700">
                  {pkg.features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.name)}.`}
                  className={`mt-8 block rounded-full px-6 py-4 text-center font-black transition ${
                    pkg.highlight
                      ? "bg-gradient-to-r from-fuchsia-500 to-orange-400 text-white shadow-lg shadow-fuchsia-100 hover:scale-[1.02]"
                      : "bg-slate-900 text-white hover:bg-slate-800"
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
      <section className="bg-gradient-to-br from-sky-50 to-fuchsia-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-fuchsia-600">Why choose us</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              We do not just make websites look nice. We make them useful.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              A good website should help customers understand your services, trust your business,
              and contact you quickly. That is what we focus on from the first design.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-black text-slate-900">Built around customer action</h3>
                <p className="mt-2 text-slate-600">
                  Every page is designed to guide visitors towards calling, messaging, booking, or requesting a quote.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-black text-slate-900">Professional wording included</h3>
                <p className="mt-2 text-slate-600">
                  We help write clear, trustworthy website content so the business sounds professional.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-black text-slate-900">Simple support</h3>
                <p className="mt-2 text-slate-600">
                  We explain everything clearly and can help with future updates when the business grows.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/70">
            <h3 className="text-2xl font-black text-slate-900">
              A website should answer these questions:
            </h3>
            <div className="mt-8 space-y-4">
              {[
                "What does the business do?",
                "Can I trust them?",
                "Where do they work?",
                "What services do they offer?",
                "How do I contact them quickly?",
                "Can I request a quote easily?",
              ].map((question, index) => {
                const dotClasses = [
                  "bg-cyan-500",
                  "bg-fuchsia-500",
                  "bg-orange-400",
                  "bg-emerald-500",
                  "bg-violet-500",
                  "bg-blue-500",
                ];

                return (
                  <div key={question} className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full font-black text-white ${dotClasses[index]}`}>
                      ✓
                    </div>
                    <p className="font-semibold text-slate-800">{question}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-20">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-widest text-orange-500">Questions</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => {
              const faqBorders = [
                "border-cyan-100 bg-cyan-50/50",
                "border-fuchsia-100 bg-fuchsia-50/50",
                "border-orange-100 bg-orange-50/50",
                "border-emerald-100 bg-emerald-50/50",
                "border-violet-100 bg-violet-50/50",
              ];

              return (
                <div
                  key={faq.q}
                  className={`rounded-2xl border p-6 ${faqBorders[index % faqBorders.length]}`}
                >
                  <h3 className="text-lg font-black text-slate-900">{faq.q}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="contact"
        className="bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-orange-400"
      >
        <div className="mx-auto max-w-5xl px-5 py-20 text-center text-white">
          <p className="text-sm font-black uppercase tracking-widest text-white/90">Ready to start?</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            Let’s build a website your business can be proud to show customers.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
            Message us today and we can discuss the business, the pages needed, and the best website package.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20would%20like%20a%20professional%20website%20for%20my%20business.`}
              className="rounded-full bg-white px-8 py-4 text-center text-base font-black text-slate-950 shadow-xl transition hover:scale-105"
            >
              Message on WhatsApp
            </a>
            <a
              href={`tel:${phoneDisplay.replace(/\s/g, "")}`}
              className="rounded-full border border-white/40 bg-white/10 px-8 py-4 text-center text-base font-bold text-white transition hover:bg-white/20"
            >
              Call {phoneDisplay}
            </a>
            <a
              href={`mailto:${email}`}
              className="rounded-full border border-white/40 bg-white/10 px-8 py-4 text-center text-base font-bold text-white transition hover:bg-white/20"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-black text-slate-900">{businessName}</p>
            <p className="mt-1 text-sm text-slate-500">
              Professional websites for local businesses.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-slate-500 md:text-right">
            <a href={`tel:${phoneDisplay.replace(/\s/g, "")}`} className="hover:text-fuchsia-600">
              {phoneDisplay}
            </a>
            <a href={`mailto:${email}`} className="hover:text-fuchsia-600">
              {email}
            </a>
            <p>© {new Date().getFullYear()} {businessName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
