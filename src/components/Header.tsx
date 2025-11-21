import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-deep-space-blue/95 backdrop-blur-md border-b border-neon-teal/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[120rem] mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-neon-teal to-accent-cyan rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="font-heading text-xl font-bold text-background">D</span>
            </div>
            <span className="font-heading text-xl font-bold text-white hidden sm:inline">
              DataNorm <span className="text-neon-teal">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-paragraph text-sm font-medium transition-all relative group ${
                  location.pathname === link.path
                    ? 'text-neon-teal'
                    : 'text-light-gray/80 hover:text-white'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-neon-teal to-accent-cyan transition-all ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-neon-teal to-accent-cyan hover:from-neon-teal/90 hover:to-accent-cyan/90 text-background font-semibold text-sm px-6 py-2 rounded-lg">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-6 pb-6 border-t border-neon-teal/20 pt-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-paragraph text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-neon-teal'
                      : 'text-light-gray/80 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="mt-4">
                <Button className="w-full bg-gradient-to-r from-neon-teal to-accent-cyan hover:from-neon-teal/90 hover:to-accent-cyan/90 text-background font-semibold">
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
