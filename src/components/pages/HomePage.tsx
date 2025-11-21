import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, TrendingUp, Code, Database, Brain, BarChart3, Sparkles, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
  const features = [
    {
      icon: Brain,
      title: 'AI/ML Expertise',
      description: 'Highly specialized in AI and backend engineering with cutting-edge solutions',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick project turnaround without compromising on quality',
    },
    {
      icon: Code,
      title: 'Custom Solutions',
      description: 'Tailored software built specifically for your business needs',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Systems',
      description: 'Focus on automation, scalability, and long-term efficiency',
    },
  ];

  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support Available' },
    { value: '50+', label: 'Projects Delivered' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section with Animated Data Streams */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-deep-space-blue via-background to-background overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-neon-teal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
          
          {/* Animated Data Streams */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-full bg-gradient-to-b from-neon-teal to-transparent opacity-20"
              style={{ left: `${(i + 1) * 8.33}%` }}
              animate={{
                y: ['0vh', '100vh'],
              }}
              transition={{
                delay: i * 0.15,
                repeat: Infinity,
                duration: 3,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[120rem] mx-auto px-8 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-teal/10 border border-neon-teal/30 rounded-full mb-8">
              <Sparkles className="h-4 w-4 text-neon-teal" />
              <span className="font-paragraph text-sm text-neon-teal font-medium">Modern AI Solutions</span>
            </div>
            
            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
              Transform Your Data Into <span className="bg-gradient-to-r from-neon-teal to-accent-cyan bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="font-paragraph text-lg md:text-xl text-light-gray/80 max-w-3xl mx-auto mb-12">
              Empowering businesses with AI-driven insights and modern data solutions for smarter, faster, and more efficient decision-making
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/services">
                <Button size="lg" className="bg-gradient-to-r from-neon-teal to-accent-cyan hover:from-neon-teal/90 hover:to-accent-cyan/90 text-background px-8 py-6 text-lg font-semibold rounded-lg">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-neon-teal/50 text-neon-teal hover:bg-neon-teal/10 px-8 py-6 text-lg font-semibold rounded-lg"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-neon-teal/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-neon-teal rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-32 px-8 bg-background">
        <div className="max-w-[120rem] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-purple/10 border border-accent-purple/30 rounded-full mb-8">
                <Rocket className="h-4 w-4 text-accent-purple" />
                <span className="font-paragraph text-sm text-accent-purple font-medium">Our Mission</span>
              </div>
              <h2 className="font-heading text-5xl md:text-6xl text-white mb-8">
                Simplifying Data for Modern Businesses
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-neon-teal to-accent-cyan mb-8" />
              <p className="font-paragraph text-lg text-light-gray/80 leading-relaxed mb-6">
                To help businesses make smarter, faster, and more efficient decisions using AI-driven insights and modern data solutions.
              </p>
              <p className="font-paragraph text-base text-light-gray/70 leading-relaxed">
                DataNorm AI was founded with the goal of simplifying and streamlining how businesses use data. After years of experience in software development, backend systems, and data engineering, we bring modern AI capabilities to small and mid-sized businesses that want to operate more efficiently.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-dark-gray to-medium-gray border border-neon-teal/20 p-8 rounded-xl hover:border-neon-teal/50 transition-all group"
                  >
                    <feature.icon className="h-12 w-12 text-neon-teal mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-heading text-lg text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="font-paragraph text-sm text-light-gray/70">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-8 bg-gradient-to-br from-deep-space-blue to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-teal/5 to-accent-purple/5" />
        <div className="max-w-[120rem] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-6xl text-white mb-6">
              Proven Results
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-neon-teal to-accent-cyan mx-auto" />
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-dark-gray/50 border border-neon-teal/20 rounded-xl hover:border-neon-teal/50 transition-all"
              >
                <div className="font-heading text-5xl md:text-6xl bg-gradient-to-r from-neon-teal to-accent-cyan bg-clip-text text-transparent mb-3">
                  {stat.value}
                </div>
                <div className="font-paragraph text-xs text-light-gray/70 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 px-8 bg-background">
        <div className="max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-5xl md:text-6xl text-white mb-8">
              What We Offer
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-neon-teal to-accent-cyan mx-auto mb-8" />
            <p className="font-paragraph text-lg text-light-gray/80 max-w-3xl mx-auto">
              Comprehensive AI and data solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: 'Data Analytics & Dashboarding',
                description: 'Transform raw data into actionable insights with custom dashboards',
              },
              {
                icon: Brain,
                title: 'AI/ML Model Development',
                description: 'Build intelligent systems that learn and adapt to your business',
              },
              {
                icon: Database,
                title: 'Backend Engineering',
                description: 'Robust, scalable backend solutions for modern applications',
              },
              {
                icon: TrendingUp,
                title: 'Business Intelligence',
                description: 'Automate reporting and gain real-time business insights',
              },
              {
                icon: Code,
                title: 'Custom Software Development',
                description: 'Tailored solutions built specifically for your requirements',
              },
              {
                icon: Zap,
                title: 'Data Strategy & Consulting',
                description: 'Expert guidance on data architecture and implementation',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-dark-gray to-medium-gray border border-neon-teal/20 p-8 rounded-xl hover:border-neon-teal/50 transition-all group hover:shadow-lg hover:shadow-neon-teal/10"
              >
                <service.icon className="h-14 w-14 text-neon-teal mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-xl text-white mb-4">
                  {service.title}
                </h3>
                <p className="font-paragraph text-base text-light-gray/70">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <Link to="/services">
              <Button size="lg" className="bg-gradient-to-r from-neon-teal to-accent-cyan hover:from-neon-teal/90 hover:to-accent-cyan/90 text-background px-10 py-6 text-lg font-semibold rounded-lg">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-gradient-to-br from-deep-space-blue via-background to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-teal/10 to-accent-purple/10" />
        <div className="max-w-[120rem] mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-5xl md:text-6xl text-white mb-8">
              Ready to Transform Your Data?
            </h2>
            <p className="font-paragraph text-lg text-light-gray/80 max-w-2xl mx-auto mb-12">
              Let's discuss how we can help your business make smarter decisions with AI-driven insights
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-neon-teal to-accent-cyan hover:from-neon-teal/90 hover:to-accent-cyan/90 text-background px-12 py-6 text-lg font-semibold rounded-lg">
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
