"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <div
            className={`mb-8 flex justify-center transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            <Image
              src="/logo.svg"
              alt="BizAutomates"
              width={240}
              height={60}
              priority
              className="h-16 w-auto md:h-20"
            />
          </div>

          {/* Main headline */}
          <h1
            className={`section-title transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Replace Manual Sales with{" "}
            <span className="gradient-text">AI Automation</span>
          </h1>

          <p
            className={`section-subtitle max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            The{" "}
            <span className="text-primary-500 font-semibold">
              Predictive Growth Engine
            </span>{" "}
            finds your next $100k+ customers while you sleep. Purpose-built for
            SaaS founders scaling from $10-50k MRR.
          </p>

          {/* Key benefits */}
          <div
            className={`grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="card text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">
                3-5x
              </div>
              <div className="text-gray-500">Response Rate vs Manual</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">
                24/7
              </div>
              <div className="text-gray-500">Automated Prospecting</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">$0</div>
              <div className="text-gray-500">Manual Sales Work</div>
            </div>
          </div>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <button onClick={scrollToContact} className="btn-primary">
              Book Your Growth Audit
            </button>
            <a href="#how-it-works" className="btn-secondary">
              See How It Works
            </a>
          </div>

          {/* Social proof */}
          <p
            className={`mt-8 text-sm text-gray-500 transition-all duration-700 delay-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-primary-500 font-semibold">
              Only 3 spots left
            </span>{" "}
            in our Founders Launch Program this quarter
          </p>
        </div>
      </div>
    </section>
  );
}
