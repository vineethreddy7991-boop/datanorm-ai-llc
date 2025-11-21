import { motion } from 'framer-motion';
import { Mail, Phone, Clock, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    salutation: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    service: '',
    subject: '',
    message: '',
    smsConsent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    'Data Solutions',
    'Data Modelling',
    'Data Architecture',
    'Data Analysis',
    'Data Engineering',
    'Business System Analysis',
    'Technical Product Ownership',
    'Medallion Architecture',
    'Azure',
    'Microsoft Fabric',
    'Data Bricks',
    'Power BI Reporting',
    'ETL/ELT',
    'Service/API Integrations',
    'AI/ML Solutions',
  ];

  const salutations = ['Mr', 'Ms', 'Mrs', 'Dr'];
  const countries = ['USA', 'India'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        salutation: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        service: '',
        subject: '',
        message: '',
        smsConsent: false,
      });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@datanormai.com',
      href: 'mailto:info@datanormai.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(307) 205-5239',
      href: 'tel:+13072055239',
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Monday–Friday, 9 AM – 6 PM',
      href: null,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'United States',
      href: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 px-8 bg-gradient-to-br from-deep-space-blue to-background overflow-hidden pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-teal/10 to-accent-purple/5" />
        <div className="max-w-[120rem] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl text-white mb-8">
              Get In Touch
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-neon-teal to-accent-cyan mx-auto mb-8" />
            <p className="font-paragraph text-lg md:text-xl text-light-gray/80 max-w-3xl mx-auto">
              Ready to transform your business with AI-driven insights? We're here to help you get started
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-32 px-8 bg-background">
        <div className="max-w-[120rem] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left Column - Contact Cards */}
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-5xl md:text-6xl text-white mb-8">
                  Contact Information
                </h2>
                <p className="font-paragraph text-lg text-light-gray/80 mb-12">
                  Reach out to us through any of the following channels. We're always happy to discuss your project and explore how we can help.
                </p>
              </motion.div>

              <div className="grid gap-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-dark-gray to-medium-gray border border-neon-teal/20 p-8 rounded-xl hover:border-neon-teal/50 transition-all group"
                  >
                    <div className="flex items-start gap-6">
                      <div className="bg-gradient-to-br from-neon-teal/20 to-accent-cyan/20 p-4 rounded-lg group-hover:from-neon-teal/30 group-hover:to-accent-cyan/30 transition-colors">
                        <item.icon className="h-8 w-8 text-neon-teal" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-xl text-white mb-3">
                          {item.label}
                        </h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-paragraph text-lg text-light-gray/80 hover:text-neon-teal transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-paragraph text-lg text-light-gray/80">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-dark-gray to-medium-gray border border-neon-teal/20 p-8 rounded-xl">
                <h3 className="font-heading text-3xl text-white mb-8">
                  Why Choose DataNorm AI?
                </h3>
                <div className="space-y-5">
                  {[
                    'Highly specialized in AI and backend engineering',
                    'Fast project delivery with high quality',
                    'Custom-built solutions tailored to each client',
                    'Strong technical expertise with practical business understanding',
                    'Focus on automation, scalability, and efficiency',
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-neon-teal to-accent-cyan rounded-full mt-2 flex-shrink-0" />
                      <p className="font-paragraph text-base text-light-gray/80">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industry Experience */}
              <div className="bg-gradient-to-br from-dark-gray to-medium-gray border border-neon-teal/20 p-8 rounded-xl">
                <h3 className="font-heading text-3xl text-white mb-8">
                  Industry Expertise
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Software Development',
                    'AI/ML Engineering',
                    'Data Engineering',
                    'Backend Architecture',
                    'Automation Systems',
                    'Business Intelligence',
                  ].map((expertise, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 bg-neon-teal/10 border border-neon-teal/30 rounded-lg hover:bg-neon-teal/20 transition-colors"
                    >
                      <span className="font-paragraph text-sm text-neon-teal font-medium">
                        {expertise}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-br from-neon-teal/10 to-accent-cyan/10 border border-neon-teal/30 p-8 rounded-xl">
                <h3 className="font-heading text-2xl text-white mb-4">
                  Quick Response Time
                </h3>
                <p className="font-paragraph text-base text-light-gray/80">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 px-8 bg-background">
        <div className="max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-heading text-5xl md:text-6xl text-white mb-8 text-center">
              Send Us Your Details
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-neon-teal to-accent-cyan mx-auto mb-8" />
            <p className="font-paragraph text-lg text-light-gray/80 max-w-2xl mx-auto text-center">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-dark-gray to-medium-gray border border-neon-teal/20 p-8 md:p-12 rounded-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Row 1: Salutation, First Name, Last Name */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block font-paragraph text-sm font-medium text-light-gray mb-3">
                    Salutation <span className="text-neon-teal">*</span>
                  </label>
                  <select
                    name="salutation"
                    value={formData.salutation}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-gray border border-neon-teal/30 rounded-lg text-light-gray placeholder-light-gray/50 focus:outline-none focus:border-neon-teal/60 focus:ring-1 focus:ring-neon-teal/30 transition-colors font-paragraph"
                  >
                    <option value="">Select Salutation</option>
                    {salutations.map(sal => (
                      <option key={sal} value={sal}>{sal}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-paragraph text-sm font-medium text-light-gray mb-3">
                    First Name <span className="text-neon-teal">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder="John"
                    className="w-full px-4 py-3 bg-dark-gray border border-neon-teal/30 rounded-lg text-light-gray placeholder-light-gray/50 focus:outline-none focus:border-neon-teal/60 focus:ring-1 focus:ring-neon-teal/30 transition-colors font-paragraph"
                  />
                </div>

                <div>
                  <label className="block font-paragraph text-sm font-medium text-light-gray mb-3">
                    Last Name <span className="text-neon-teal">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    placeholder="Doe"
                    className="w-full px-4 py-3 bg-dark-gray border border-neon-teal/30 rounded-lg text-light-gray placeholder-light-gray/50 focus:outline-none focus:border-neon-teal/60 focus:ring-1 focus:ring-neon-teal/30 transition-colors font-paragraph"
                  />
                </div>
              </div>

              {/* Row 2: Email, Phone, Country */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block font-paragraph text-sm font-medium text-light-gray mb-3">
                    Email <span className="text-neon-teal">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-dark-gray border border-neon-teal/30 rounded-lg text-light-gray placeholder-light-gray/50 focus:outline-none focus:border-neon-teal/60 focus:ring-1 focus:ring-neon-teal/30 transition-colors font-paragraph"
                  />
                </div>

                <div>
                  <label className="block font-paragraph text-sm font-medium text-light-gray mb-3">
                    Phone Number <span className="text-neon-teal">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 bg-dark-gray border border-neon-teal/30 rounded-lg text-light-gray placeholder-light-gray/50 focus:outline-none focus:border-neon-teal/60 focus:ring-1 focus:ring-neon-teal/30 transition-colors font-paragraph"
                  />
                </div>

                <div>
                  <label className="block font-paragraph text-sm font-medium text-light-gray mb-3">
                    Country <span className="text-neon-teal">*</span>
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-gray border border-neon-teal/30 rounded-lg text-light-gray placeholder-light-gray/50 focus:outline-none focus:border-neon-teal/60 focus:ring-1 focus:ring-neon-teal/30 transition-colors font-paragraph"
                  >
                    <option value="">Select Country</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Service Selection */}
              <div>
                <label className="block font-paragraph text-sm font-medium text-light-gray mb-3">
                  Service <span className="text-neon-teal">*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-gray border border-neon-teal/30 rounded-lg text-light-gray placeholder-light-gray/50 focus:outline-none focus:border-neon-teal/60 focus:ring-1 focus:ring-neon-teal/30 transition-colors font-paragraph"
                >
                  <option value="">Select a Service</option>
                  {services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              {/* Row 4: Subject */}
              <div>
                <label className="block font-paragraph text-sm font-medium text-light-gray mb-3">
                  Subject <span className="text-neon-teal">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What is this inquiry about?"
                  className="w-full px-4 py-3 bg-dark-gray border border-neon-teal/30 rounded-lg text-light-gray placeholder-light-gray/50 focus:outline-none focus:border-neon-teal/60 focus:ring-1 focus:ring-neon-teal/30 transition-colors font-paragraph"
                />
              </div>

              {/* Row 5: Message */}
              <div>
                <label className="block font-paragraph text-sm font-medium text-light-gray mb-3">
                  Message <span className="text-neon-teal">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us more about your project..."
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-gray border border-neon-teal/30 rounded-lg text-light-gray placeholder-light-gray/50 focus:outline-none focus:border-neon-teal/60 focus:ring-1 focus:ring-neon-teal/30 transition-colors font-paragraph resize-none"
                />
              </div>

              {/* SMS Consent Checkbox */}
              <div className="bg-dark-gray/50 border border-neon-teal/20 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <input
                    type="checkbox"
                    name="smsConsent"
                    id="smsConsent"
                    checked={formData.smsConsent}
                    onChange={handleInputChange}
                    className="w-5 h-5 mt-1 accent-neon-teal cursor-pointer"
                  />
                  <div className="flex-1">
                    <label htmlFor="smsConsent" className="font-paragraph text-sm text-light-gray/80 cursor-pointer">
                      I agree to receive SMS updates and promotional messages from DataNorm AI. By checking this box, you consent to receive text messages at the phone number provided. Standard message and data rates may apply. You can opt-out at any time by replying STOP. For more information, please review our{' '}
                      <a href="#" className="text-neon-teal hover:text-neon-teal/80 transition-colors font-semibold">
                        Privacy Policy
                      </a>
                      {' '}and{' '}
                      <a href="#" className="text-neon-teal hover:text-neon-teal/80 transition-colors font-semibold">
                        Terms of Service
                      </a>
                      .
                    </label>
                  </div>
                </div>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-accent-emerald/10 border border-accent-emerald/30 p-4 rounded-lg"
                >
                  <p className="font-paragraph text-sm text-accent-emerald">
                    ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg"
                >
                  <p className="font-paragraph text-sm text-destructive">
                    ✗ Something went wrong. Please try again or contact us directly.
                  </p>
                </motion.div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-neon-teal to-accent-cyan hover:from-neon-teal/90 hover:to-accent-cyan/90 disabled:from-neon-teal/50 disabled:to-accent-cyan/50 text-background font-semibold rounded-lg py-3 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-32 px-8 bg-gradient-to-br from-deep-space-blue to-background">
        <div className="max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading text-5xl md:text-6xl text-white mb-8">
              Ready to Start Your Project?
            </h2>
            <p className="font-paragraph text-lg text-light-gray/80 max-w-2xl mx-auto mb-16">
              Whether you need data analytics, AI/ML solutions, or custom software development, we're here to bring your vision to life
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  step: '01',
                  title: 'Contact Us',
                  description: 'Reach out via email or phone',
                },
                {
                  step: '02',
                  title: 'Consultation',
                  description: 'Discuss your project requirements',
                },
                {
                  step: '03',
                  title: 'Get Started',
                  description: 'Begin your transformation journey',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8 bg-dark-gray/50 border border-neon-teal/20 rounded-xl hover:border-neon-teal/50 transition-all"
                >
                  <div className="font-heading text-5xl bg-gradient-to-r from-neon-teal to-accent-cyan bg-clip-text text-transparent mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-heading text-xl text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="font-paragraph text-sm text-light-gray/70">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
