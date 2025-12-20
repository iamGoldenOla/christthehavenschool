import { motion } from "framer-motion";
import { Mail, Phone, Award } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import proprietressImg from "@/assets/proprietress.jpg";

const staff = [
  {
    name: "Mrs Bisola Toriola",
    role: "Proprietress",
    image: proprietressImg,
    description: "Visionary leader dedicated to providing quality education rooted in godliness and excellence.",
    featured: true,
  },
  {
    name: "Staff Member",
    role: "Head Teacher",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    description: "Experienced educator passionate about nurturing young minds.",
    featured: false,
  },
  {
    name: "Staff Member",
    role: "Class Teacher",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop",
    description: "Dedicated teacher committed to creating engaging learning experiences.",
    featured: false,
  },
  {
    name: "Staff Member",
    role: "Class Teacher",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&h=400&fit=crop",
    description: "Enthusiastic educator with a love for creative teaching methods.",
    featured: false,
  },
  {
    name: "Staff Member",
    role: "Music Instructor",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    description: "Talented musician helping students discover their musical potential.",
    featured: false,
  },
  {
    name: "Staff Member",
    role: "Administrative Staff",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
    description: "Efficient administrator ensuring smooth school operations.",
    featured: false,
  },
];

const Staff = () => {
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
            <span className="text-yellow font-medium text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h1 className="heading-display mt-4 mb-6">
              Meet Our <span className="text-yellow">Dedicated</span> Staff
            </h1>
            <p className="text-lg opacity-90">
              Our team of passionate educators and support staff work together 
              to provide the best learning experience for every child at 
              Christ The Haven School.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Staff - Proprietress */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl shadow-card-lg overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto">
                <img
                  src={staff[0].image}
                  alt={staff[0].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow text-primary rounded-full text-sm font-medium">
                    <Award size={16} />
                    Proprietress
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {staff[0].name}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {staff[0].description}
                </p>
                <p className="text-muted-foreground mb-6">
                  Under her visionary leadership, Christ The Haven School has grown 
                  into a nurturing educational institution that combines academic 
                  excellence with strong moral values. Her commitment to providing 
                  quality education has touched the lives of many young learners.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="mailto:info@christthehavenschool.com"
                    className="inline-flex items-center gap-2 text-secondary hover:underline"
                  >
                    <Mail size={18} />
                    Contact
                  </a>
                  <a 
                    href="tel:+2348023357800"
                    className="inline-flex items-center gap-2 text-secondary hover:underline"
                  >
                    <Phone size={18} />
                    +234 802 335 7800
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Staff */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">
              Our Educators
            </span>
            <h2 className="heading-section text-foreground mt-3">
              Teaching & Support <span className="text-primary">Staff</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.slice(1).map((member, index) => (
              <motion.div
                key={member.name + index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium mb-3">
                    {member.role}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Placeholder message */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mt-8 italic"
          >
            * Staff photos and names will be updated with actual team members
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Staff;
