"use client";

export default function Beta() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const benefits = [
    "Priority setup and onboarding",
    "Direct access to our founding team",
    "Custom AI training for your niche",
    "Unlimited strategy consultations",
    "Lifetime grandfathered pricing",
    "First access to new features",
  ];

  return (
    <section className="section-container relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-700/50 to-transparent pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-6">
            <span className="text-primary-500 font-semibold">
              FOUNDERS LAUNCH PROGRAM
            </span>
          </div>
          <h2 className="section-title">
            Join the <span className="gradient-text">Founders Launch Program</span>
          </h2>
          <p className="section-subtitle">
            We're accepting only 3 more SaaS founders this quarter
          </p>
        </div>

        <div className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl border-2 border-primary-500/30 p-8 md:p-12 shadow-2xl shadow-primary-500/10">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Left side - Pricing */}
            <div>
              <div className="mb-6">
                <div className="text-gray-500 mb-2">
                  Founders Launch Program Investment
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold gradient-text">
                    $3,500
                  </span>
                  <span className="text-gray-500">one-time</span>
                </div>
                <div className="text-sm text-gray-500">
                  Regular price: <span className="line-through">$8,500</span> -
                  Save $5,000
                </div>
              </div>

              <div className="bg-dark-900 rounded-xl p-6 border border-gray-800 mb-6">
                <div className="text-sm text-gray-500 mb-3">
                  What's Included:
                </div>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <svg
                        className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-2 text-sm text-primary-500 bg-primary-500/10 rounded-lg p-3">
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-semibold">
                  Only 3 spots remaining this quarter
                </span>
              </div>
            </div>

            {/* Right side - Why Join */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Join the Founders Launch Program?</h3>
              <div className="space-y-4 mb-6">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-500/10 rounded-full flex items-center justify-center">
                    <span className="text-primary-500">💎</span>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">
                      Lock in Founder Pricing
                    </div>
                    <p className="text-sm text-gray-500">
                      Founding members never pay more, even when we raise prices
                      (which we will)
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-500/10 rounded-full flex items-center justify-center">
                    <span className="text-primary-500">🚀</span>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Shape the Product</div>
                    <p className="text-sm text-gray-500">
                      Direct influence on feature development and roadmap
                      priorities
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-500/10 rounded-full flex items-center justify-center">
                    <span className="text-primary-500">🎯</span>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">
                      White-Glove Service
                    </div>
                    <p className="text-sm text-gray-500">
                      Work directly with founders, not support reps. We're
                      invested in your success
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-dark-900 rounded-xl p-4 border border-primary-500/20">
                <div className="text-sm font-semibold mb-2">
                  Next Price Increase:
                </div>
                <div className="text-2xl font-bold gradient-text mb-1">
                  $8,500
                </div>
                <div className="text-xs text-gray-500">
                  After Founders Launch Program closes (Est. Q1 2026)
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="font-semibold mb-1">
                  Ready to automate your growth?
                </div>
                <p className="text-sm text-gray-500">
                  Book a free Predictive Growth Audit to see if you qualify
                </p>
              </div>
              <button
                onClick={scrollToContact}
                className="btn-primary whitespace-nowrap w-full md:w-auto"
              >
                Apply for Early Access →
              </button>
            </div>
          </div>
        </div>

        {/* Urgency element */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            🔥{" "}
            <span className="text-primary-500 font-semibold">
              2 spots filled this week.
            </span>{" "}
            Founders Launch Program closes when all 3 remaining spots are taken.
          </p>
        </div>
      </div>
    </section>
  );
}
