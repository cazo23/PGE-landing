export default function Solution() {
  return (
    <section className="section-container bg-gradient-to-b from-transparent to-dark-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-6">
            <span className="text-primary-500 font-semibold">THE SOLUTION</span>
          </div>
          <h2 className="section-title">
            Meet the{" "}
            <span className="gradient-text">Predictive Growth Engine</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            AI-powered sales automation that works 24/7 to fill your pipeline
            with qualified leads while you focus on closing deals and building
            product.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card text-center">
            <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">AI-Powered Intelligence</h3>
            <p className="text-gray-500">
              Our engine analyzes thousands of data points to identify your
              perfect customers before your competitors do.
            </p>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Automated Outreach</h3>
            <p className="text-gray-500">
              Personalized messages crafted and sent automatically.
              Multi-channel follow-ups that feel human, not robotic.
            </p>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Predictive Analytics</h3>
            <p className="text-gray-500">
              Know which leads are most likely to convert before you even reach
              out. Optimize ROI with data-driven insights.
            </p>
          </div>
        </div>

        <div className="bg-dark-800 border border-gray-800 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                It's Like Having a{" "}
                <span className="gradient-text">Sales Team of 10</span>
              </h3>
              <p className="text-gray-500 mb-6">
                Without the overhead, training, or management headaches. The
                Predictive Growth Engine works around the clock, learning and
                improving with every interaction.
              </p>
              <ul className="space-y-3">
                {[
                  "Identifies 500+ qualified leads per month",
                  "Sends personalized outreach at scale",
                  "Manages multi-touch follow-up sequences",
                  "Learns from every interaction to improve",
                  "Delivers warm leads directly to your inbox",
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
            <div className="bg-gradient-to-br from-primary-500/10 to-transparent rounded-xl p-8 border border-primary-500/20">
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-500 mb-1">
                    Traditional Sales Team
                  </div>
                  <div className="text-3xl font-bold text-gray-400">
                    $500k+/year
                  </div>
                </div>
                <div className="border-t border-gray-800 pt-6">
                  <div className="text-sm text-primary-500 mb-1">
                    Predictive Growth Engine
                  </div>
                  <div className="text-3xl font-bold text-primary-500">
                    $3.5k setup
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    One-time investment
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
