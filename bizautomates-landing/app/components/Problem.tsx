export default function Problem() {
  const problems = [
    {
      title: 'Burning Hours on Cold Outreach',
      description:
        "You're manually researching leads, personalizing emails, and following up-only to see 2% response rates.",
      icon: '⏰',
    },
    {
      title: 'Missing High-Value Opportunities',
      description:
        'Your ideal customers are out there, but you have no systematic way to identify and reach them at scale.',
      icon: '🎯',
    },
    {
      title: 'Inconsistent Pipeline',
      description:
        'Some months you have too many leads, others you have none. Revenue becomes unpredictable and stressful.',
      icon: '📉',
    },
    {
      title: 'Sales Bottleneck',
      description:
        "You're the main salesperson, and it's killing your ability to work on product and strategy.",
      icon: '🔒',
    },
  ]

  return (
    <section className="section-container" id="problem">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            You're Stuck in the{' '}
            <span className="gradient-text">Manual Sales Trap</span>
          </h2>
          <p className="section-subtitle">
            Sound familiar? You've hit $10-50k MRR, but growth has stalled because...
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="card group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {problem.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{problem.title}</h3>
              <p className="text-gray-500 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-dark-800 to-dark-700 rounded-2xl border border-primary-500/20">
          <div className="text-center">
            <p className="text-xl md:text-2xl font-semibold text-white mb-4">
              The Reality: <span className="text-primary-500">Manual sales doesn't scale.</span>
            </p>
            <p className="text-gray-500 max-w-3xl mx-auto">
              While you're spending 20+ hours a week on outreach, your competitors are using AI to
              reach 10x more qualified leads with better personalization. You're not just losing
              time-you're losing the race.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
