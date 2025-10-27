"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: "How It Works", href: "#how-it-works" },
      { name: "Pricing", href: "#beta" }, // Links to Founders Launch Program section
      { name: "Results", href: "#results" },
    ],
    Company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
    Resources: [
      { name: "Case Studies", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Support", href: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-dark-900 border-t border-gray-800">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-xl font-bold gradient-text mb-4">
                Biz Automates
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Predictive Growth Engine for scaling SaaS companies
              </p>
              {/* Social media links */}
              <div className="flex gap-4">
                <a
                  href="https://twitter.com/bizautomates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary-500 transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/105999350"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Links columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold mb-4 text-white">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-500 hover:text-primary-500 transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter signup */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="max-w-md mx-auto text-center">
              <h4 className="font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-500 text-sm mb-4">
                Get SaaS growth tips and AI automation insights delivered weekly
              </p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="input-field flex-grow"
                  aria-label="Email for newsletter"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {currentYear} Biz Automates. All rights reserved.</p>
            <p className="text-center">
              Predictive Growth Engine is proprietary initiative of Biz
              Automates.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
