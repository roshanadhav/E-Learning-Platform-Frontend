"use client";

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen px-6 md:px-20 py-24 bg-white">

      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center">
          Get in <span className="text-orange-500">Touch</span>
        </h1>

        <p className="mt-4 text-center text-gray-600">
          Have questions? We’re here to help students succeed.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">📍 Address</h3>
              <p className="text-gray-600">
                Core Academy, Pune, Maharashtra
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">📞 Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">✉ Email</h3>
              <p className="text-gray-600">support@explaimeasy.in</p>
            </div>
          </div>

          {/* Form */}
          <form className="bg-gray-50 p-8 rounded-2xl space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-orange-300"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-orange-300"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-orange-300"
            />

            <button className="w-full py-3 bg-orange-400 text-white rounded-xl font-semibold hover:bg-orange-500 transition">
              Send Message
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
