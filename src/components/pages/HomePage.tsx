import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, TrendingUp, Code, Database, Brain, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
  const dataStreamVariants = {
    animate: {
      y: ['0vh', '100vh'],
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: 'linear' as const,
      },
    },
  };

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
      <section className="relative h-screen flex items-center justify-center bg-deep-space-blue overflow-hidden">
        {/* Animated Data Streams */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-full bg-gradient-to-b from-neon-teal to-transparent opacity-30"
              style={{ left: `${(i + 1) * 8.33}%` }}
              variants={dataStreamVariants}
              animate="animate"
              initial={{ y: '-100vh' }}
              transition={{
                delay: i * 0.15,
                repeat: Infinity,
                duration: 2,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[120rem] mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-7xl md:text-8xl lg:text-9xl text-white mb-8">
              Datanorm AI
            </h1>
            <p className="font-heading text-2xl md:text-3xl text-neon-teal mb-6">
              Data-Driven Decisions
            </p>
            <p className="font-paragraph text-lg md:text-xl text-light-gray max-w-3xl mx-auto mb-12">
              Empowering businesses with AI-driven insights and modern data solutions for smarter, faster, and more efficient decision-making
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/services">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-neon-teal text-neon-teal hover:bg-neon-teal/10 px-8 py-6 text-lg"
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
          <div className="w-6 h-10 border-2 border-neon-teal rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-neon-teal rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-8 bg-background">
        <div className="max-w-[100rem] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-5xl md:text-6xl text-white mb-6">
                Our Mission
              </h2>
              <div className="h-1 w-24 bg-neon-teal mb-8" />
              <p className="font-paragraph text-lg text-light-gray leading-relaxed mb-6">
                To help businesses make smarter, faster, and more efficient decisions using AI-driven insights and modern data solutions.
              </p>
              <p className="font-paragraph text-base text-light-gray/80 leading-relaxed">
                Datanorm AI was founded with the goal of simplifying and streamlining how businesses use data. After years of experience in software development, backend systems, and data engineering, we bring modern AI capabilities to small and mid-sized businesses that want to operate more efficiently.
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
                    className="bg-deep-space-blue border border-neon-teal/20 p-6 rounded-lg hover:border-neon-teal/50 transition-all"
                  >
                    <feature.icon className="h-10 w-10 text-neon-teal mb-4" />
                    <h3 className="font-heading text-xl text-white mb-2">
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
      <section className="py-24 px-8 bg-deep-space-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-teal/5 to-transparent" />
        <div className="max-w-[100rem] mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-5xl md:text-6xl text-neon-teal mb-2">
                  {stat.value}
                </div>
                <div className="font-paragraph text-sm text-light-gray uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-8 bg-background">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-6xl text-white mb-6">
              What We Offer
            </h2>
            <div className="h-1 w-24 bg-neon-teal mx-auto mb-8" />
            <p className="font-paragraph text-lg text-light-gray max-w-3xl mx-auto">
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
                className="bg-deep-space-blue border border-neon-teal/20 p-8 rounded-lg hover:border-neon-teal/50 transition-all group"
              >
                <service.icon className="h-12 w-12 text-neon-teal mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-2xl text-white mb-4">
                  {service.title}
                </h3>
                <p className="font-paragraph text-base text-light-gray/80">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/services">
              <Button size="lg" className="bg-neon-teal hover:bg-neon-teal/90 text-background px-8 py-6 text-lg font-semibold">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 bg-gradient-to-br from-deep-space-blue to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-teal/10 to-primary/10" />
        <div className="max-w-[100rem] mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-5xl md:text-6xl text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="font-paragraph text-lg text-light-gray max-w-2xl mx-auto mb-12">
              Let's discuss how we can help your business make smarter decisions with AI-driven insights
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-neon-teal hover:bg-neon-teal/90 text-background px-12 py-6 text-lg font-semibold">
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
