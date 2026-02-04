"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/* =======================
   STAT COUNTER COMPONENT
======================= */
function StatCounter({ end, suffix = "", duration = 1500 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <h3 className="text-4xl font-extrabold text-orange-500">
      {count}
      {suffix}
    </h3>
  );
}

/* =======================
   HOME PAGE
======================= */
export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900">

      {/* HERO SECTION (UNCHANGED) */}
      <section className="relative w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-24 gap-12 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-40" />

        <div className="relative w-full md:w-1/2 flex justify-center">
          <Image
            src="/hero-img-removebg-preview(1).png"
            alt="Coaching Illustration"
            width={320}
            height={320}
            className="object-contain drop-shadow-xl"
          />
        </div>

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

      {/* STATS SECTION (ANIMATED) */}
      <section className="w-full py-20 px-6 md:px-16 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>
            <StatCounter end={500} suffix="+" />
            <p className="mt-2 text-gray-600">Students Enrolled</p>
          </div>

          <div>
            <StatCounter end={95} suffix="%" />
            <p className="mt-2 text-gray-600">Success Rate</p>
          </div>

          <div>
            <StatCounter end={10} suffix="+" />
            <p className="mt-2 text-gray-600">Expert Teachers</p>
          </div>

          <div>
            <StatCounter end={24} suffix="/7" />
            <p className="mt-2 text-gray-600">Student Support</p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="w-full bg-gray-50 py-24 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-14">
          Why Students Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Faculty",
              desc: "Learn from experienced educators focused on strong fundamentals.",
              no: "01",
            },
            {
              title: "Structured Learning",
              desc: "Well-planned curriculum that builds concepts step-by-step.",
              no: "02",
            },
            {
              title: "Continuous Support",
              desc: "Doubt-solving, mentoring, and personalized guidance.",
              no: "03",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition hover:-translate-y-1"
            >
              <div className="w-12 h-12 mb-4 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500 font-bold">
                {item.no}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="w-full py-24 px-6 md:px-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-14">
          Our Programs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Foundation Course",
              desc: "Build strong academic basics with conceptual clarity.",
            },
            {
              title: "Board Exam Preparation",
              desc: "Focused learning with regular tests and revision.",
            },
            {
              title: "Competitive Exam Prep",
              desc: "Advanced problem-solving and exam strategies.",
            },
          ].map((p) => (
            <div
              key={p.title}
              className="border border-gray-200 p-8 rounded-2xl hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
              <p className="text-gray-600 mb-6">{p.desc}</p>
              <button className="text-orange-500 font-semibold hover:underline">
                Explore →
              </button>
            </div>
          ))}
        </div>
      </section>


      {/* FAQ SECTION */}
      <section className="w-full py-24 px-6 md:px-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-14">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: "Is this coaching suitable for beginners?",
              a: "Yes, our programs are designed from basic to advanced levels.",
            },
            {
              q: "Do you provide doubt-solving support?",
              a: "Yes, we offer regular doubt sessions and mentor support.",
            },
            {
              q: "Are classes online or offline?",
              a: "We provide both online and offline learning options.",
            },
          ].map((faq) => (
            <div
              key={faq.q}
              className="bg-gray-50 p-6 rounded-xl shadow-sm"
            >
              <h4 className="font-semibold text-gray-900">{faq.q}</h4>
              <p className="mt-2 text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full py-24 px-6 md:px-16 text-center bg-gradient-to-b from-white to-orange-50">
        <h2 className="text-4xl font-bold">
          Start Your Learning Journey Today
        </h2>

        <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
          Learn in a focused, structured environment designed for success.
        </p>

        <button className="mt-10 px-12 py-4 bg-orange-400 text-white rounded-xl text-lg font-semibold hover:bg-orange-500 transition shadow-md hover:shadow-xl">
          Get Started
        </button>
      </section>

    </div>
  );
}
