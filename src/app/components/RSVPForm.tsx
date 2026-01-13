"use client";

import { useActionState } from "react";
import { submitRSVP } from "../actions";

export default function RSVPForm() {
  const [state, formAction] = useActionState(submitRSVP, { success: false });

  return (
    <section className="py-20 sm:py-28 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 rounded-3xl shadow-xl p-6 sm:p-10 md:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">Join The Waitlist</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Get early access when we launch. Be among the first to experience our platform.
          </p>

          <form action={formAction} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-5 py-3.5 rounded-lg bg-black border border-zinc-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                aria-label="Your full name"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full px-5 py-3.5 rounded-lg bg-black border border-zinc-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                aria-label="Email address"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 active:from-indigo-700 active:to-purple-700 transition-all duration-200 font-semibold text-white text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Join Waitlist
            </button>

            {state.success && (
              <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-green-500 font-medium flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  You're on the waitlist! 🚀 We'll notify you when we launch.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}