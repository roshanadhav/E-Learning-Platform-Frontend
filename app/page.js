import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="relative w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-24 gap-12 overflow-hidden">

        {/* Soft background glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-40" />

        {/* HERO IMAGE - LEFT */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <Image
            src="/image-removebg-preview (1).png"
            alt="Coaching Illustration"
            width={520}
            height={520}
            className="object-contain drop-shadow-xl"
          />
        </div>

        {/* HERO CONTENT - RIGHT */}
        <div className="relative w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Learn Smarter. <br />
            <span className="text-orange-500">Achieve Faster.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            A modern coaching platform crafted for students who want
            clarity, confidence, and real academic growth.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="px-9 py-3 bg-orange-400 text-white rounded-xl font-semibold hover:bg-orange-500 transition shadow-md hover:shadow-lg">
              Join Now
            </button>

            <button className="px-9 py-3 border border-orange-300 text-orange-500 rounded-xl font-semibold hover:bg-orange-50 transition">
              Student Login
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="w-full bg-gray-50 py-24 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-14">
          Why Students Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition hover:-translate-y-1">
            <div className="w-12 h-12 mb-4 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500 font-bold">
              01
            </div>
            <h3 className="text-xl font-semibold mb-3">Expert Faculty</h3>
            <p className="text-gray-600">
              Learn from experienced educators who focus on concepts,
              not shortcuts.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition hover:-translate-y-1">
            <div className="w-12 h-12 mb-4 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500 font-bold">
              02
            </div>
            <h3 className="text-xl font-semibold mb-3">Structured Learning</h3>
            <p className="text-gray-600">
              Carefully designed curriculum that builds strong foundations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition hover:-translate-y-1">
            <div className="w-12 h-12 mb-4 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500 font-bold">
              03
            </div>
            <h3 className="text-xl font-semibold mb-3">Student Support</h3>
            <p className="text-gray-600">
              Doubt solving, mentoring, and continuous academic guidance.
            </p>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full py-24 px-6 md:px-16 text-center bg-gradient-to-b from-white to-orange-50">
        <h2 className="text-3xl md:text-4xl font-bold">
          Start Your Learning Journey Today
        </h2>

        <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
          Join a focused coaching environment where learning is simple,
          structured, and effective.
        </p>

        <button className="mt-10 px-12 py-4 bg-orange-400 text-white rounded-xl text-lg font-semibold hover:bg-orange-500 transition shadow-md hover:shadow-xl">
          Get Started
        </button>
      </section>

    </div>
  );
}
