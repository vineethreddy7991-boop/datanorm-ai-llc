import { Link } from 'react-router-dom';
import { Mail, Phone, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: 'Contact', path: '/contact' },
    ],
    services: [
      { name: 'Data Analytics', path: '/services' },
      { name: 'AI/ML Development', path: '/services' },
      { name: 'Backend Engineering', path: '/services' },
      { name: 'Business Intelligence', path: '/services' },
    ],
  };

  return (
    <footer className="bg-deep-space-blue border-t border-neon-teal/20">
      <div className="max-w-[100rem] mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-neon-teal rounded flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="font-heading text-xl font-bold text-background">D</span>
              </div>
              <span className="font-heading text-2xl text-white">
                Datanorm <span className="text-neon-teal">AI</span>
              </span>
            </Link>
            <p className="font-paragraph text-sm text-light-gray/80 leading-relaxed mb-6">
              Empowering businesses with AI-driven insights and modern data solutions for smarter, faster, and more efficient decision-making.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-heading text-lg text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-paragraph text-sm text-light-gray hover:text-neon-teal transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-heading text-lg text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="font-paragraph text-sm text-light-gray hover:text-neon-teal transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg text-white mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-neon-teal flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@datanormai.com"
                  className="font-paragraph text-sm text-light-gray hover:text-neon-teal transition-colors"
                >
                  info@datanormai.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-neon-teal flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+13072055239"
                  className="font-paragraph text-sm text-light-gray hover:text-neon-teal transition-colors"
                >
                  (307) 205-5239
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-neon-teal flex-shrink-0 mt-0.5" />
                <span className="font-paragraph text-sm text-light-gray">
                  Mon–Fri, 9 AM – 6 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neon-teal/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-light-gray/60">
              © {currentYear} DataNorm AI LLC. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="font-paragraph text-sm text-light-gray/60 hover:text-neon-teal transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-paragraph text-sm text-light-gray/60 hover:text-neon-teal transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
