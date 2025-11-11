"use client";

import { Nunito_Sans } from "next/font/google";
const nunitoBold = Nunito_Sans({
  weight: ["800"],
  subsets: ["latin"],
  style: ["italic"],
});

const nunitoRegular = Nunito_Sans({
  weight: ["500"],
  subsets: ["latin"],
});

const nunitoThin = Nunito_Sans({
  weight: ["300"],
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <article className="w-full h-[100dvh] relative overflow-hidden back-ground-color">
      {/* Content */}
      <div className="max-w-7xl mx-auto h-full relative z-10">
        <div className="px-12 pt-40 h-full">
          <div>
            <h4
              className={`${nunitoBold.className} text-xl md:text-2xl lg:text-4xl font-bold h-content overflow-y-hidden tracking-tighter text-gray-600`}
            >
              What if your Vest could save your life?
            </h4>

            <style jsx>{`
              @keyframes gradient-shift {
                0% {
                  background-position: 0% 50%;
                }
                50% {
                  background-position: 100% 50%;
                }
                100% {
                  background-position: 0% 50%;
                }
              }
            `}</style>
          </div>

          <p
            className={`${nunitoRegular.className} text-xl pt-8 text-gray-300 max-w-2xl pl-4`}
          >
            Revolutionary smart safety technology that protects workers in
            real-time, combining AI detection with instant holographic alerts to
            save lives.
          </p>

          <ul
            className={`${nunitoThin.className} text-lg pt-10 pl-6 space-y-3 max-w-2xl`}
          >
            {[
              "Every worker deserves to come home safe.",
              "Your vest technology watches out when no one else can.",
              "You don't just get a notification, you get a saved life.",
            ].map((text, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-400">
                <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
