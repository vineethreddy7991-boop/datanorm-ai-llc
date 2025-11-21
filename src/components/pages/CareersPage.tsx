import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, MapPin, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CareersPage() {
  const positions = [
    {
      id: 1,
      title: 'Research Intern - AI/ML',
      department: 'Research & Development',
      location: 'Remote',
      type: 'Internship',
      description: 'Join our AI/ML research team and contribute to cutting-edge machine learning projects. You\'ll work on developing and optimizing neural networks, exploring novel architectures, and implementing state-of-the-art algorithms for real-world applications.',
      responsibilities: [
        'Develop and train machine learning models for various use cases',
        'Conduct research on emerging AI/ML techniques and frameworks',
        'Collaborate with senior researchers to implement novel algorithms',
        'Optimize model performance and scalability',
        'Document research findings and contribute to technical reports',
      ],
      requirements: [
        'Currently pursuing or recently completed degree in Computer Science, Mathematics, or related field',
        'Strong understanding of machine learning fundamentals',
        'Proficiency in Python and popular ML libraries (TensorFlow, PyTorch)',
        'Experience with data analysis and visualization',
        'Excellent problem-solving and analytical skills',
      ],
      benefits: [
        'Hands-on experience with cutting-edge AI/ML technologies',
        'Mentorship from experienced researchers',
        'Flexible work schedule',
        'Competitive internship stipend',
        'Professional development opportunities',
      ],
    },
    {
      id: 2,
      title: 'Research Intern - Data Engineering',
      department: 'Data Engineering',
      location: 'Remote',
      type: 'Internship',
      description: 'Help us build scalable data infrastructure and pipelines that power our analytics platform. You\'ll design and implement data processing systems, optimize database queries, and contribute to our data architecture strategy.',
      responsibilities: [
        'Design and implement data pipelines and ETL processes',
        'Optimize database queries and improve data retrieval performance',
        'Work with big data technologies and distributed systems',
        'Develop data validation and quality assurance processes',
        'Collaborate with data scientists and analysts to support their needs',
      ],
      requirements: [
        'Currently pursuing or recently completed degree in Computer Science, Engineering, or related field',
        'Strong SQL and database design knowledge',
        'Experience with data processing tools (Apache Spark, Airflow, or similar)',
        'Familiarity with cloud platforms (AWS, GCP, or Azure)',
        'Understanding of data warehousing concepts',
      ],
      benefits: [
        'Experience with enterprise-scale data systems',
        'Mentorship from senior data engineers',
        'Flexible remote work arrangement',
        'Competitive internship compensation',
        'Opportunity to work on impactful projects',
      ],
    },
  ];

  const whyJoinUs = [
    {
      icon: Briefcase,
      title: 'Real Impact',
      description: 'Work on projects that directly influence business decisions and drive innovation',
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Learn from experienced professionals in AI, ML, and data engineering',
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Internship structure designed to accommodate academic commitments',
    },
    {
      icon: MapPin,
      title: 'Remote Friendly',
      description: 'Work from anywhere with our fully remote internship program',
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
              Join Our Team
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-neon-teal to-accent-cyan mx-auto mb-8" />
            <p className="font-paragraph text-lg md:text-xl text-light-gray/80 max-w-3xl mx-auto">
              Help us build the future of AI-driven data solutions. We're looking for talented individuals passionate about technology and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-32 px-8 bg-background">
        <div className="max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-5xl md:text-6xl text-white mb-8">
              Why Join DataNorm AI?
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-neon-teal to-accent-cyan mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyJoinUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-dark-gray to-medium-gray border border-neon-teal/20 p-8 rounded-xl hover:border-neon-teal/50 transition-all group"
              >
                <item.icon className="h-14 w-14 text-neon-teal mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-xl text-white mb-4">
                  {item.title}
                </h3>
                <p className="font-paragraph text-sm text-light-gray/70">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-32 px-8 bg-gradient-to-br from-deep-space-blue to-background">
        <div className="max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-5xl md:text-6xl text-white mb-8">
              Open Positions
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-neon-teal to-accent-cyan mx-auto" />
          </motion.div>

          <div className="space-y-12">
            {positions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-dark-gray to-medium-gray border border-neon-teal/20 rounded-xl overflow-hidden hover:border-neon-teal/50 transition-all"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-neon-teal/10 to-accent-cyan/10 p-8 border-b border-neon-teal/20">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="font-heading text-3xl text-white mb-3">
                        {position.title}
                      </h3>
                      <p className="font-paragraph text-sm text-neon-teal uppercase tracking-wider font-medium">
                        {position.department}
                      </p>
                    </div>
                    <div className="inline-block px-4 py-2 bg-neon-teal/10 border border-neon-teal/30 rounded-lg">
                      <span className="font-paragraph text-sm text-neon-teal font-semibold">
                        {position.type}
                      </span>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-neon-teal" />
                      <span className="font-paragraph text-sm text-light-gray/80">
                        {position.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Description */}
                  <div className="mb-10">
                    <p className="font-paragraph text-base text-light-gray/80 leading-relaxed">
                      {position.description}
                    </p>
                  </div>

                  {/* Three Column Layout */}
                  <div className="grid md:grid-cols-3 gap-10 mb-10">
                    {/* Responsibilities */}
                    <div>
                      <h4 className="font-heading text-lg text-white mb-6">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-4">
                        {position.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-neon-teal to-accent-cyan rounded-full mt-2 flex-shrink-0" />
                            <span className="font-paragraph text-sm text-light-gray/80">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Requirements */}
                    <div>
                      <h4 className="font-heading text-lg text-white mb-6">
                        Requirements
                      </h4>
                      <ul className="space-y-4">
                        {position.requirements.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-neon-teal to-accent-cyan rounded-full mt-2 flex-shrink-0" />
                            <span className="font-paragraph text-sm text-light-gray/80">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="font-heading text-lg text-white mb-6">
                        What We Offer
                      </h4>
                      <ul className="space-y-4">
                        {position.benefits.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-neon-teal to-accent-cyan rounded-full mt-2 flex-shrink-0" />
                            <span className="font-paragraph text-sm text-light-gray/80">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Application Section */}
                  <div className="pt-10 border-t border-neon-teal/20">
                    <div className="bg-dark-gray/50 p-6 rounded-lg mb-6">
                      <h4 className="font-heading text-lg text-white mb-4">
                        How to Apply
                      </h4>
                      <p className="font-paragraph text-base text-light-gray/80 mb-4">
                        Interested in this position? Send us your resume, a cover letter, and any relevant portfolio or project links to:
                      </p>
                      <a
                        href={`mailto:careers@datanormai.com?subject=Application for ${position.title}`}
                        className="inline-block px-6 py-3 bg-neon-teal/10 border border-neon-teal/30 rounded-lg hover:bg-neon-teal/20 transition-colors"
                      >
                        <span className="font-paragraph font-semibold text-neon-teal">
                          careers@datanormai.com
                        </span>
                      </a>
                    </div>

                    <Link to="/contact">
                      <Button className="bg-gradient-to-r from-neon-teal to-accent-cyan hover:from-neon-teal/90 hover:to-accent-cyan/90 text-background font-semibold rounded-lg">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-32 px-8 bg-background">
        <div className="max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading text-5xl md:text-6xl text-white mb-8">
              Volunteer Opportunities
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-accent-emerald to-accent-cyan mx-auto mb-8" />
            <p className="font-paragraph text-lg text-light-gray/80 max-w-2xl mx-auto">
              For volunteer opportunities, email <a href="mailto:research@datanormai.com" className="text-accent-emerald hover:text-accent-emerald/80 transition-colors font-semibold">research@datanormai.com</a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-32 px-8 bg-background">
        <div className="max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-5xl md:text-6xl text-white mb-8">
              Application Process
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-neon-teal to-accent-cyan mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Submit Application',
                description: 'Send your resume, cover letter, and portfolio to careers@datanormai.com',
              },
              {
                step: '02',
                title: 'Initial Review',
                description: 'Our team reviews your application and qualifications',
              },
              {
                step: '03',
                title: 'Technical Interview',
                description: 'Discuss your skills and experience with our team',
              },
              {
                step: '04',
                title: 'Offer & Onboarding',
                description: 'Receive your offer and get started with our team',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-dark-gray to-medium-gray border border-neon-teal/20 p-8 rounded-xl text-center h-full hover:border-neon-teal/50 transition-all">
                  <div className="font-heading text-5xl bg-gradient-to-r from-neon-teal to-accent-cyan bg-clip-text text-transparent mb-6">
                    {item.step}
                  </div>
                  <h3 className="font-heading text-xl text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="font-paragraph text-sm text-light-gray/70">
                    {item.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-neon-teal to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-gradient-to-br from-deep-space-blue to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-teal/10 to-accent-purple/10" />
        <div className="max-w-[120rem] mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-5xl md:text-6xl text-white mb-8">
              Ready to Make an Impact?
            </h2>
            <p className="font-paragraph text-lg text-light-gray/80 max-w-2xl mx-auto mb-12">
              Apply today and become part of a team that's transforming the future of AI and data analytics.
            </p>
            <a href="mailto:careers@datanormai.com">
              <Button size="lg" className="bg-gradient-to-r from-neon-teal to-accent-cyan hover:from-neon-teal/90 hover:to-accent-cyan/90 text-background px-12 py-6 text-lg font-semibold rounded-lg">
                Send Your Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
