import { motion } from 'framer-motion';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
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
      <section className="relative py-32 px-8 bg-deep-space-blue overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-teal/10 to-transparent" />
        <div className="max-w-[100rem] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl text-white mb-6">
              Get In Touch
            </h1>
            <div className="h-1 w-24 bg-neon-teal mx-auto mb-8" />
            <p className="font-paragraph text-lg md:text-xl text-light-gray max-w-3xl mx-auto">
              Ready to transform your business with AI-driven insights? We're here to help you get started
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 px-8 bg-background">
        <div className="max-w-[100rem] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Cards */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
                  Contact Information
                </h2>
                <p className="font-paragraph text-lg text-light-gray mb-12">
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
                    className="bg-deep-space-blue border border-neon-teal/20 p-8 rounded-lg hover:border-neon-teal/50 transition-all group"
                  >
                    <div className="flex items-start gap-6">
                      <div className="bg-neon-teal/10 p-4 rounded-lg group-hover:bg-neon-teal/20 transition-colors">
                        <item.icon className="h-8 w-8 text-neon-teal" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-xl text-white mb-2">
                          {item.label}
                        </h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-paragraph text-lg text-light-gray hover:text-neon-teal transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-paragraph text-lg text-light-gray">
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
              <div className="bg-gradient-to-br from-deep-space-blue to-background border border-neon-teal/20 p-8 rounded-lg">
                <h3 className="font-heading text-3xl text-white mb-6">
                  Why Choose Datanorm AI?
                </h3>
                <div className="space-y-4">
                  {[
                    'Highly specialized in AI and backend engineering',
                    'Fast project delivery with high quality',
                    'Custom-built solutions tailored to each client',
                    'Strong technical expertise with practical business understanding',
                    'Focus on automation, scalability, and efficiency',
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-neon-teal rounded-full mt-2 flex-shrink-0" />
                      <p className="font-paragraph text-base text-light-gray">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industry Experience */}
              <div className="bg-deep-space-blue border border-neon-teal/20 p-8 rounded-lg">
                <h3 className="font-heading text-3xl text-white mb-6">
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
                      className="px-4 py-2 bg-neon-teal/10 border border-neon-teal/30 rounded-lg"
                    >
                      <span className="font-paragraph text-sm text-neon-teal">
                        {expertise}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-br from-neon-teal/10 to-primary/10 border border-neon-teal/30 p-8 rounded-lg">
                <h3 className="font-heading text-2xl text-white mb-4">
                  Quick Response Time
                </h3>
                <p className="font-paragraph text-base text-light-gray">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-24 px-8 bg-deep-space-blue">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="font-paragraph text-lg text-light-gray max-w-2xl mx-auto mb-12">
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
                  className="text-center"
                >
                  <div className="font-heading text-5xl text-neon-teal/30 mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-heading text-xl text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="font-paragraph text-sm text-light-gray">
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
