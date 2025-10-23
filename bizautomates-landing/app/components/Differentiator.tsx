export default function Differentiator() {
  const comparisons = [
    {
      category: "Manual Outreach",
      problems: [
        "Time-intensive: 20+ hours/week",
        "Low response rates (2-5%)",
        "Limited daily reach (20-50 leads)",
        "Inconsistent messaging",
        "Burns out founders",
      ],
      icon: "😓",
    },
    {
      category: "Generic Sales Tools",
      problems: [
        "One-size-fits-all templates",
        "No predictive targeting",
        "Requires constant management",
        "High learning curve",
        "Still very manual",
      ],
      icon: "🔧",
    },
    {
      category: "Hiring Sales Team",
      problems: [
        "Expensive ($500k+/year)",
        "Long ramp-up time (3-6 months)",
        "Management overhead",
        "Variable performance",
        "Not scalable at your stage",
      ],
      icon: "💰",
    },
  ];

  const advantages = [
    {
      title: "Truly Predictive",
      description:
        "Our AI doesn't just send emails-it predicts which leads will convert before you reach out.",
      icon: "🎯",
    },
    {
      title: "Self-Optimizing",
      description:
        "The engine learns from every interaction, continuously improving targeting and messaging.",
      icon: "🧠",
    },
    {
      title: "Done-For-You",
      description:
        "We handle setup, training, and optimization. You just close the deals we deliver.",
      icon: "✨",
    },
    {
      title: "Built for SaaS",
      description:
        "Not a generic tool. Purpose-built for B2B SaaS companies at the $10-50k MRR stage.",
      icon: "🚀",
    },
  ];

  return (
    <section className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-6">
            <span className="text-primary-500 font-semibold">WHY US</span>
          </div>
          <h2 className="section-title">
            Not Another <span className="gradient-text">Sales Tool</span>
          </h2>
          <p className="section-subtitle">
            See how the Predictive Growth Engine compares to traditional
            approaches
          </p>
        </div>

        {/* Comparison grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {comparisons.map((item, index) => (
            <div
              key={index}
              className="bg-dark-800 border border-gray-800 rounded-xl p-6"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-400">
                  {item.category}
                </h3>
              </div>
              <ul className="space-y-3">
                {item.problems.map((problem, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <svg
                      className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="text-gray-500">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* PGE advantages */}
        <div className="bg-gradient-to-br from-primary-500/10 to-transparent rounded-2xl border-2 border-primary-500/30 p-8 md:p-12 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-3">
              The{" "}
              <span className="gradient-text">Predictive Growth Engine</span>{" "}
              Difference
            </h3>
            <p className="text-gray-500">
              A complete system that combines AI, automation, and SaaS expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 text-3xl">{advantage.icon}</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{advantage.title}</h4>
                  <p className="text-gray-500">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature comparison table */}
        <div className="bg-dark-800 border border-gray-800 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-dark-700">
                <tr>
                  <th className="text-left p-4 text-gray-400 font-semibold">
                    Feature
                  </th>
                  <th className="text-center p-4 text-gray-400 font-semibold">
                    Manual
                  </th>
                  <th className="text-center p-4 text-gray-400 font-semibold">
                    Sales Tools
                  </th>
                  <th className="text-center p-4 text-primary-500 font-semibold">
                    PGE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[
                  {
                    feature: "Predictive Lead Scoring",
                    manual: false,
                    tools: false,
                    pge: true,
                  },
                  {
                    feature: "AI-Personalized Outreach",
                    manual: false,
                    tools: false,
                    pge: true,
                  },
                  {
                    feature: "Multi-Channel Automation",
                    manual: false,
                    tools: true,
                    pge: true,
                  },
                  {
                    feature: "Continuous Optimization",
                    manual: false,
                    tools: false,
                    pge: true,
                  },
                  {
                    feature: "Done-For-You Setup",
                    manual: false,
                    tools: false,
                    pge: true,
                  },
                  {
                    feature: "SaaS-Specific Training",
                    manual: false,
                    tools: false,
                    pge: true,
                  },
                  {
                    feature: "500+ Leads/Month",
                    manual: false,
                    tools: true,
                    pge: true,
                  },
                  {
                    feature: "Time Investment",
                    manual: "20+ hrs",
                    tools: "10+ hrs",
                    pge: "2 hrs",
                  },
                ].map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-dark-700/50 transition-colors"
                  >
                    <td className="p-4 text-gray-300">{row.feature}</td>
                    <td className="p-4 text-center">
                      {typeof row.manual === "boolean" ? (
                        row.manual ? (
                          <span className="text-primary-500">✓</span>
                        ) : (
                          <span className="text-gray-600">✗</span>
                        )
                      ) : (
                        <span className="text-gray-500 text-sm">
                          {row.manual}
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.tools === "boolean" ? (
                        row.tools ? (
                          <span className="text-primary-500">✓</span>
                        ) : (
                          <span className="text-gray-600">✗</span>
                        )
                      ) : (
                        <span className="text-gray-500 text-sm">
                          {row.tools}
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-center bg-primary-500/5">
                      {typeof row.pge === "boolean" ? (
                        row.pge ? (
                          <span className="text-primary-500 text-xl">✓</span>
                        ) : (
                          <span className="text-gray-600">✗</span>
                        )
                      ) : (
                        <span className="text-primary-500 text-sm font-semibold">
                          {row.pge}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
