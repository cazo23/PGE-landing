export default function System() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Profile Building',
      description:
        'We analyze your ideal customer profile, existing sales data, and market position to create a targeting blueprint that finds your highest-value prospects.',
      duration: 'Week 1',
      deliverable: 'Complete ICP analysis + targeting parameters',
    },
    {
      number: '02',
      title: 'AI Engine Configuration',
      description:
        'Our team sets up and trains your dedicated AI engine with your unique value proposition, brand voice, and messaging frameworks.',
      duration: 'Week 1-2',
      deliverable: 'Configured AI engine + brand-aligned messaging',
    },
    {
      number: '03',
      title: 'Lead Discovery & Validation',
      description:
        'The engine identifies and validates 500+ qualified prospects per month using predictive analytics and multi-source verification.',
      duration: 'Week 2-3',
      deliverable: 'First batch of validated leads (500+)',
    },
    {
      number: '04',
      title: 'Automated Outreach Launch',
      description:
        'Personalized, multi-channel campaigns go live. The system sends targeted messages, manages follow-ups, and optimizes based on engagement.',
      duration: 'Week 3-4',
      deliverable: 'Live campaigns + automated follow-up sequences',
    },
    {
      number: '05',
      title: 'Continuous Optimization',
      description:
        'Your engine learns from every interaction, improving targeting, messaging, and timing. Get monthly reports on performance and ROI.',
      duration: 'Ongoing',
      deliverable: 'Monthly analytics + optimization recommendations',
    },
  ]

  return (
    <section className="section-container" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-6">
            <span className="text-primary-500 font-semibold">HOW IT WORKS</span>
          </div>
          <h2 className="section-title">
            The <span className="gradient-text">5-Step System</span> to Automated Growth
          </h2>
          <p className="section-subtitle">
            From setup to scale in 30 days. No manual work required on your end.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-dark-800 border border-gray-800 rounded-xl p-8 hover:border-primary-500/50 transition-all duration-300"
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="absolute left-12 top-full w-0.5 h-8 bg-gradient-to-b from-primary-500/50 to-transparent"></div>
              )}

              <div className="flex flex-col md:flex-row gap-6">
                {/* Step number */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500/20 to-primary-500/5 rounded-xl flex items-center justify-center border border-primary-500/30 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold gradient-text">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <h3 className="text-2xl font-bold mb-2 md:mb-0">{step.title}</h3>
                    <span className="inline-block px-4 py-1 bg-primary-500/10 rounded-full text-sm text-primary-500 font-semibold">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-500 mb-4 leading-relaxed">{step.description}</p>
                  <div className="flex items-center text-sm">
                    <svg
                      className="w-5 h-5 text-primary-500 mr-2"
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
                    <span className="text-gray-400">
                      <span className="font-semibold">Deliverable:</span> {step.deliverable}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline summary */}
        <div className="mt-16 bg-gradient-to-r from-primary-500/10 to-transparent rounded-2xl border border-primary-500/20 p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                From Zero to <span className="gradient-text">Automated Pipeline</span>
              </h3>
              <p className="text-gray-500">
                Complete setup and first qualified leads in your inbox within 30 days.
              </p>
            </div>
            <div className="text-center px-8 py-4 bg-dark-900 rounded-xl border border-primary-500/30">
              <div className="text-4xl font-bold gradient-text mb-1">30</div>
              <div className="text-sm text-gray-500">Days to Launch</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
