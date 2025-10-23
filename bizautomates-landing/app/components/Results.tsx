export default function Results() {
  const testimonials = [
    {
      name: "Sarah Chen",
      company: "CloudSync Pro",
      mrr: "$28k MRR",
      result: "4x pipeline in 60 days",
      quote:
        "We went from manually reaching out to 20 leads a week to having 500+ qualified prospects in our pipeline. The response rates are 3x better than our manual efforts.",
      image: "👩‍💼",
    },
    {
      name: "Marcus Rodriguez",
      company: "DataFlow Analytics",
      mrr: "$42k MRR",
      result: "Saved 25 hrs/week",
      quote:
        "I was spending half my week on prospecting. Now I spend 2 hours a week closing deals that the engine brings me. It's freed me up to focus on product.",
      image: "👨‍💻",
    },
    {
      name: "Jennifer Park",
      company: "TeamHub",
      mrr: "$15k MRR",
      result: "First $50k deal",
      quote:
        "The predictive analytics identified an enterprise prospect we would have never found manually. That one deal paid for the system 14x over.",
      image: "👩‍🚀",
    },
  ];

  const metrics = [
    {
      value: "3-5x",
      label: "Higher Response Rates",
      description: "vs manual outreach",
    },
    {
      value: "500+",
      label: "Qualified Leads/Month",
      description: "Per client average",
    },
    { value: "25+", label: "Hours Saved Weekly", description: "For founders" },
    {
      value: "60",
      label: "Days to First Results",
      description: "Average time to ROI",
    },
  ];

  return (
    <section className="section-container bg-gradient-to-b from-dark-800/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-6">
            <span className="text-primary-500 font-semibold">REAL RESULTS</span>
          </div>
          <h2 className="section-title">
            Real SaaS Founders.{" "}
            <span className="gradient-text">Real Growth.</span>
          </h2>
          <p className="section-subtitle">
            See how companies like yours are scaling revenue with the Predictive
            Growth Engine
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="card text-center hover:-translate-y-2 transition-transform duration-300"
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

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card flex flex-col hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Header */}
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">
                    {testimonial.company}
                  </div>
                  <div className="text-xs text-primary-500 font-semibold">
                    {testimonial.mrr}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <p className="text-gray-400 italic mb-4 flex-grow leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Result badge */}
              <div className="mt-auto pt-4 border-t border-gray-800">
                <div className="inline-block px-4 py-2 bg-primary-500/10 rounded-full">
                  <span className="text-primary-500 font-semibold text-sm">
                    {testimonial.result}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case study highlight */}
        <div className="bg-gradient-to-r from-dark-800 to-dark-700 rounded-2xl border border-primary-500/20 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-primary-500 font-semibold mb-2">
                CASE STUDY
              </div>
              <h3 className="text-3xl font-bold mb-4">
                From $28k to <span className="gradient-text">$75k MRR</span> in
                6 Months
              </h3>
              <p className="text-gray-500 mb-6">
                CloudSync Pro was stuck at $28k MRR with manual outreach eating
                up 30 hours per week. After implementing the Predictive Growth
                Engine, they:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Identified 2,400+ qualified prospects in 90 days",
                  "Achieved 18% response rate (vs 5% manual)",
                  "Closed 12 new deals worth $47k in new MRR",
                  "Freed founder to focus on product development",
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
                    $28k MRR
                  </div>
                  <div className="text-sm text-gray-500">
                    30 hrs/week on sales
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
                    After PGE™ (6 months)
                  </div>
                  <div className="text-3xl font-bold text-primary-500">
                    $75k MRR
                  </div>
                  <div className="text-sm text-gray-500">
                    2 hrs/week on sales
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
