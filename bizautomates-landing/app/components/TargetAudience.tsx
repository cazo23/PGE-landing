export default function TargetAudience() {
  const criteria = [
    {
      icon: '💰',
      title: '$10-50k MRR',
      description: "You've proven product-market fit but need to scale revenue systematically.",
    },
    {
      icon: '⚡',
      title: 'Growth-Ready',
      description: 'Your product works. Now you need a predictable way to fill your pipeline.',
    },
    {
      icon: '🎯',
      title: 'B2B SaaS Focus',
      description: 'You sell to businesses with clear ICP and customer acquisition process.',
    },
    {
      icon: '⏱️',
      title: 'Time-Constrained',
      description:
        "You're wearing too many hats and manual prospecting is eating your productive hours.",
    },
  ]

  const notForYou = [
    'Early-stage startups still finding product-market fit',
    'Companies with MRR below $10k',
    'B2C or marketplace businesses',
    'Businesses without clear ICP or sales process',
  ]

  return (
    <section className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-6">
            <span className="text-primary-500 font-semibold">IS THIS FOR YOU?</span>
          </div>
          <h2 className="section-title">
            Built for <span className="gradient-text">Scaling SaaS Founders</span>
          </h2>
          <p className="section-subtitle">
            The Predictive Growth Engine works best for companies at a specific growth stage
          </p>
        </div>

        {/* Ideal client criteria */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {criteria.map((item, index) => (
            <div
              key={index}
              className="card group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Perfect fit section */}
        <div className="bg-gradient-to-r from-primary-500/10 to-transparent rounded-2xl border border-primary-500/20 p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-4">
                <span className="gradient-text">You're a Perfect Fit If...</span>
              </h3>
              <ul className="space-y-3">
                {[
                  "You're personally handling sales and it's limiting growth",
                  'You know your ICP but lack time to reach them at scale',
                  'Your current sales process is manual and time-intensive',
                  "You want predictable pipeline without hiring a sales team",
                  'You need to free up time for product and strategic work',
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0 text-6xl">✨</div>
          </div>
        </div>

        {/* Not for you section */}
        <div className="bg-dark-800 border border-gray-800 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-4 text-center">
            This <span className="text-gray-500">Might Not Be For You</span> If:
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {notForYou.map((item, index) => (
              <div key={index} className="flex items-start">
                <svg
                  className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0 mt-0.5"
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
                <span className="text-gray-500">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-6 text-sm">
            We're selective about who we work with to ensure we deliver exceptional results.
          </p>
        </div>
      </div>
    </section>
  )
}
