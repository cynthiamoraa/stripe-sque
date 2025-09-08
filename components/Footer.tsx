import Image from "next/image";

function Footer() {
  const footerLinks = {
    Company: ["Feedback", "Media inquiries", "Contact us"],
    Resources: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Security",
      "Subprocessors",
    ],
  };

  return (
    <footer className="bg-gray-50 text-gray-500 border-t border-white/10 py-16">
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo + About */}
        <div className="space-y-4 md:col-span-2">
          <div className="flex items-center gap-2">
            <Image
              src="/images/sque-logo.png"
              alt="Sque Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="text-xl font-bold">Sque</span>
          </div>
          <p className="text-black/70 max-w-md">
            Sque is an advanced AI legal platform that streamlines legal
            workflows, automates document creation, and provides intelligent
            legal research assistance.
          </p>
        </div>

        {/* Dynamic Footer Links */}
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <h3 className="font-semibold mb-4">{section}</h3>
            <ul className="space-y-3 text-sm text-black/70">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-black">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="mx-auto max-w-7xl px-4 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-black/60 text-sm">
          © 2025 Sque AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
