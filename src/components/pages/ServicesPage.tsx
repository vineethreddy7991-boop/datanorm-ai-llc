import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { Services } from '@/entities';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  const [services, setServices] = useState<Services[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { items } = await BaseCrudService.getAll<Services>('services');
        setServices(items);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-12 w-12 text-neon-teal animate-spin" />
      </div>
    );
  }

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
              Our Services
            </h1>
            <div className="h-1 w-24 bg-neon-teal mx-auto mb-8" />
            <p className="font-paragraph text-lg md:text-xl text-light-gray max-w-3xl mx-auto">
              Comprehensive AI-driven solutions designed to transform your business operations and drive data-informed decision-making
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-8 bg-background">
        <div className="max-w-[100rem] mx-auto">
          {services.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-paragraph text-lg text-light-gray">
                No services available at the moment.
              </p>
            </div>
          ) : (
            <div className="space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={service._id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  >
                    <div className="relative overflow-hidden rounded-lg border border-neon-teal/20 group">
                      {service.serviceImage ? (
                        <Image
                          src={service.serviceImage}
                          alt={service.serviceName || 'Service image'}
                          width={800}
                          className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-[400px] bg-deep-space-blue flex items-center justify-center">
                          <div className="text-neon-teal/30 font-heading text-2xl">
                            {service.serviceName}
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-space-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    {/* Decorative Element */}
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-neon-teal/30 rounded-lg -z-10" />
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="inline-block px-4 py-2 bg-neon-teal/10 border border-neon-teal/30 rounded mb-6">
                      <span className="font-paragraph text-sm text-neon-teal uppercase tracking-wider">
                        Service {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    
                    <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
                      {service.serviceName}
                    </h2>

                    {service.shortDescription && (
                      <p className="font-paragraph text-xl text-neon-teal mb-6">
                        {service.shortDescription}
                      </p>
                    )}

                    {service.detailedDescription && (
                      <p className="font-paragraph text-base text-light-gray/80 leading-relaxed mb-6">
                        {service.detailedDescription}
                      </p>
                    )}

                    {service.keyBenefits && (
                      <div className="mb-6">
                        <h3 className="font-heading text-xl text-white mb-4">
                          Key Benefits
                        </h3>
                        <div className="space-y-3">
                          {service.keyBenefits.split('\n').filter(Boolean).map((benefit, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-neon-teal rounded-full mt-2 flex-shrink-0" />
                              <p className="font-paragraph text-base text-light-gray">
                                {benefit.trim()}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {service.targetAudience && (
                      <div className="mb-8">
                        <h3 className="font-heading text-xl text-white mb-3">
                          Ideal For
                        </h3>
                        <p className="font-paragraph text-base text-light-gray/80">
                          {service.targetAudience}
                        </p>
                      </div>
                    )}

                    {service.callToActionUrl ? (
                      <a href={service.callToActionUrl} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-neon-teal hover:bg-neon-teal/90 text-background font-semibold">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    ) : (
                      <Link to="/contact">
                        <Button className="bg-neon-teal hover:bg-neon-teal/90 text-background font-semibold">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 bg-deep-space-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-teal/10 to-primary/10" />
        <div className="max-w-[100rem] mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-5xl md:text-6xl text-white mb-6">
              Let's Build Something Amazing
            </h2>
            <p className="font-paragraph text-lg text-light-gray max-w-2xl mx-auto mb-12">
              Ready to leverage AI and data analytics for your business? Contact us to discuss your project
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-neon-teal hover:bg-neon-teal/90 text-background px-12 py-6 text-lg font-semibold">
                Contact Us
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
