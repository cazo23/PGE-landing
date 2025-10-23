'use client'

export default function FinalCTA() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section-container relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-3xl border-2 border-primary-500/30 p-8 md:p-16 text-center shadow-2xl shadow-primary-500/20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop Trading <span className="gradient-text">Time for Revenue</span>
          </h2>

          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Every day you spend on manual outreach is a day your competitors are scaling with AI.
            The question isn't if you'll automate-it's when.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-dark-900 rounded-xl p-6 border border-gray-800">
              <div className="text-3xl font-bold text-primary-500 mb-2">Today</div>
              <div className="text-gray-500 text-sm">Manual outreach, limited reach</div>
            </div>
            <div className="bg-dark-900 rounded-xl p-6 border border-gray-800">
              <div className="text-3xl font-bold text-primary-500 mb-2">30 Days</div>
              <div className="text-gray-500 text-sm">Automated system live</div>
            </div>
            <div className="bg-dark-900 rounded-xl p-6 border border-gray-800">
              <div className="text-3xl font-bold text-primary-500 mb-2">90 Days</div>
              <div className="text-gray-500 text-sm">Pipeline full, revenue scaling</div>
            </div>
          </div>

          <div className="space-y-4 mb-10">
            <button onClick={scrollToContact} className="btn-primary text-lg w-full md:w-auto">
              Book Your Free Growth Audit
            </button>
            <p className="text-sm text-gray-500">
              <span className="text-primary-500 font-semibold">Limited to 3 founders</span> this
              quarter · No credit card required
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center">
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Setup in 30 days
              </div>
              <div className="flex items-center">
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                White-glove onboarding
              </div>
              <div className="flex items-center">
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Founder pricing locked
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">Trusted by SaaS founders scaling from:</p>
          <div className="flex justify-center gap-8 text-2xl font-bold text-gray-700">
            <span>$10k</span>
            <span className="text-primary-500">→</span>
            <span>$50k+</span>
            <span className="text-primary-500">→</span>
            <span className="text-primary-500">$100k+ MRR</span>
          </div>
        </div>
      </div>
    </section>
  )
}
