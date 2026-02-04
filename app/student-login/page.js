"use client";

export default function StudentLogin() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-orange-50 to-white">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center">
          Student <span className="text-orange-500">Login</span>
        </h2>

        <p className="mt-2 text-center text-gray-600">
          Access your learning dashboard
        </p>

        <form className="mt-8 space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-orange-300"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-orange-300"
          />

          <button className="w-full py-3 bg-orange-400 text-white rounded-xl font-semibold hover:bg-orange-500 transition">
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Forgot password? Contact admin.
        </p>
      </div>
    </div>
  );
}
