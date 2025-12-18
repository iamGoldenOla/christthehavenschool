import { motion } from "framer-motion";
import { BookOpen, Bus, Utensils, Shield, Music, Laptop, Heart, Users } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: BookOpen,
    title: "Quality Education",
    description: "Our curriculum follows the Nigerian National Educational standards while incorporating modern teaching methods and 21st-century skills development.",
    features: ["Experienced Teachers", "Small Class Sizes", "Interactive Learning", "Regular Assessments"]
  },
  {
    icon: Bus,
    title: "School Transportation",
    description: "Safe and reliable bus services covering major routes across the city, ensuring your children arrive at school comfortably and on time.",
    features: ["GPS Tracked Buses", "Trained Drivers", "Multiple Routes", "Door-to-Door Service"]
  },
  {
    icon: Utensils,
    title: "Nutritious Meals",
    description: "Healthy, balanced meals prepared fresh daily in our school kitchen, catering to various dietary requirements and preferences.",
    features: ["Balanced Menu", "Fresh Ingredients", "Hygienic Preparation", "Dietary Options"]
  },
  {
    icon: Shield,
    title: "Safety & Security",
    description: "24/7 security surveillance and trained personnel ensure a safe learning environment for all students and staff.",
    features: ["CCTV Monitoring", "Security Personnel", "Visitor Management", "Emergency Protocols"]
  },
  {
    icon: Music,
    title: "Extra-Curricular Activities",
    description: "A wide range of activities including music, arts, drama, and sports to nurture talents and build well-rounded individuals.",
    features: ["Music & Dance", "Arts & Crafts", "Drama Club", "Various Sports"]
  },
  {
    icon: Laptop,
    title: "ICT & Digital Learning",
    description: "Modern computer labs and digital tools integrated into our curriculum to prepare students for the digital age.",
    features: ["Computer Classes", "Digital Library", "Interactive Boards", "Coding Programs"]
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "On-site sick bay with trained personnel, regular health checks, and wellness programs to ensure student well-being.",
    features: ["Sick Bay", "Health Education", "Regular Check-ups", "First Aid Ready"]
  },
  {
    icon: Users,
    title: "Parent Engagement",
    description: "Regular communication channels and events to keep parents involved in their children's educational journey.",
    features: ["Parent Portal", "PTA Meetings", "Progress Reports", "Open Days"]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="heading-display text-primary-foreground mb-6">
              Our Services
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-3xl mx-auto">
              Comprehensive services designed to support every aspect of your child's 
              educational journey at Christ The Haven School.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-sky/10 flex items-center justify-center mb-6 group-hover:bg-sky group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-sky group-hover:text-secondary-foreground transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-section text-foreground mb-4">
              Additional Support Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We go the extra mile to ensure every child receives the support they need to thrive.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "After-School Care",
              "Special Needs Support",
              "Counseling Services",
              "Library Access",
              "Sports Facilities",
              "Science Laboratory",
              "Music Room",
              "Art Studio"
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <p className="font-medium text-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-primary">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-section text-primary-foreground mb-6">
              Ready to Give Your Child the Best?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Join the Christ The Haven School family and give your child access to 
              quality education and comprehensive support services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="sky">
                <Link to="/contact">Enquire Now</Link>
              </Button>
              <Button asChild size="lg" variant="hero">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
