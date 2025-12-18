import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Users, 
  Award, 
  BookOpen, 
  Target, 
  Eye,
  Heart,
  Star
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Striving for the highest standards in academics, character, and conduct.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Acting with honesty, transparency, and moral uprightness in all situations.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Fostering a sense of belonging and collaborative spirit among all stakeholders.",
  },
  {
    icon: Star,
    title: "Innovation",
    description: "Embracing creativity and new ideas to enhance learning experiences.",
  },
];

const leadership = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Principal",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "With over 25 years in education, Dr. Mitchell leads Christ The Haven with a vision for academic excellence.",
  },
  {
    name: "Prof. James Okonkwo",
    role: "Vice Principal, Academics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Prof. Okonkwo oversees curriculum development and academic programs.",
  },
  {
    name: "Mrs. Grace Adebayo",
    role: "Vice Principal, Administration",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Mrs. Adebayo manages school operations and student affairs.",
  },
];

const About = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="heading-display mb-4">About Our School</h1>
            <p className="text-lg opacity-90">
              Discover the legacy of excellence at Christ The Haven School
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary font-medium text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="heading-section text-foreground mt-3 mb-6">
                A Legacy of <span className="text-secondary">Excellence</span>
              </h2>
              <p className="text-body mb-6">
                Founded in 1999, Christ The Haven School began with a vision to provide 
                quality education rooted in strong moral values. What started as a small 
                institution with just 50 students has grown into one of the region's 
                most prestigious educational establishments.
              </p>
              <p className="text-body mb-6">
                Over the past 25 years, we have consistently maintained high academic 
                standards while nurturing well-rounded individuals who excel not just 
                in academics but in character, creativity, and community service.
              </p>
              <p className="text-body">
                Today, with over 2,500 students and 150 dedicated educators, we continue 
                to uphold our founding principles while embracing modern educational 
                innovations to prepare our students for the challenges of the 21st century.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop"
                alt="School building"
                className="rounded-2xl shadow-card-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-2xl shadow-lg">
                <p className="font-serif text-4xl font-bold">25+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12"
            >
              <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center mb-6">
                <Eye className="text-secondary-foreground" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">Our Vision</h3>
              <p className="opacity-90 leading-relaxed">
                To be a leading educational institution that nurtures globally competitive, 
                morally upright, and socially responsible individuals who will be agents 
                of positive change in their communities and the world.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl p-8 md:p-12 shadow-card"
            >
              <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center mb-6">
                <Target className="text-secondary" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide comprehensive, high-quality education that develops the intellectual, 
                physical, social, emotional, and spiritual potential of every student in a 
                safe, nurturing, and stimulating environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">
              What We Stand For
            </span>
            <h2 className="heading-section text-foreground mt-3">
              Our Core <span className="text-secondary">Values</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-card rounded-2xl p-8 shadow-card hover:shadow-card-lg transition-all"
              >
                <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-secondary" size={32} />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="heading-section text-foreground mt-3">
              School <span className="text-secondary">Leadership</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-card rounded-2xl p-8 shadow-card"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-secondary"
                />
                <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                  {leader.name}
                </h3>
                <p className="text-secondary font-medium text-sm mb-3">{leader.role}</p>
                <p className="text-sm text-muted-foreground">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-section mb-4">Join Our School Community</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Experience the Christ The Haven difference. Schedule a visit to our campus 
              and discover why we are the choice for quality education.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="sky" size="lg">
                Apply for Admission
              </Button>
              <Button variant="hero" size="lg">
                Schedule a Visit
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
