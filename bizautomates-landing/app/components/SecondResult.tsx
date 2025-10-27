export default function Results() {
  const metrics = [
    {
      value: "3–5×",
      label: "Higher Response Rates",
      description: "vs. manual outreach",
    },
    { value: "25+", label: "Hours Saved Weekly", description: "for founders" },
    {
      value: "60",
      label: "Days to First Results",
      description: "average ROI timeline",
    },
  ];

  return (
    <section className="section-container bg-gradient-to-b from-dark-800/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-6">
            <span className="text-primary-500 font-semibold">GROWTH IN ACTION</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">Predictable Pipeline.</span> Real
            Impact.
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Based on early implementations of the Predictive Growth Engine,
            here’s what SaaS founders are achieving within 60 days.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="card text-center hover:-translate-y-2 transition-transform duration-300 border border-gray-800/50"
            >
              <div className="text-4xl font-bold gradient-text mb-2">
                {metric.value}
              </div>
              <div className="text-white font-semibold mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-gray-500">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Example Case */}
        <div className="bg-gradient-to-r from-dark-800 to-dark-700 rounded-2xl border border-primary-500/20 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-primary-500 font-semibold mb-2">
                CASE STUDY
              </div>
              <h3 className="text-3xl font-bold mb-4">
                From $25k to <span className="gradient-text">$60k MRR</span> in
                3 Months
              </h3>
              <p className="text-gray-500 mb-6">
                A lean SaaS team replaced their manual outreach with the
                Predictive Growth Engine. In the first 90 days they:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Reached 10× more qualified leads automatically",
                  "Increased reply rate from 4% → 15%",
                  "Closed 7 new deals worth $35k in new MRR",
                  "Reduced founder sales time by 80%",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0 mt-0.5"
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
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-dark-900 rounded-xl p-8 border border-gray-800">
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Before PGE</div>
                  <div className="text-2xl font-bold text-gray-400">
                    $25k MRR
                  </div>
                  <div className="text-sm text-gray-500">
                    20 hrs/week on outreach
                  </div>
                </div>
                <div className="relative py-4">
                  <div className="border-t border-gray-800"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dark-900 px-4">
                    <svg
                      className="w-6 h-6 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-primary-500 mb-1">
                    After PGE (3 months)
                  </div>
                  <div className="text-3xl font-bold text-primary-500">
                    $60k MRR
                  </div>
                  <div className="text-sm text-gray-500">
                    4 hrs/week on outreach
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center mt-8 text-gray-400">
            Ready to build your own Predictive Growth Engine?{" "}
            <a
              href="#contact"
              className="text-primary-500 font-semibold hover:underline"
            >
              Book your Growth Audit
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
