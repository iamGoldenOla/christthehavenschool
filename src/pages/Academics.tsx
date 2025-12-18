import { motion } from "framer-motion";
import { BookOpen, Microscope, Laptop, Music, Palette, Trophy, Globe, Users } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: BookOpen,
    title: "Early Years (Ages 3-5)",
    description: "Foundation for lifelong learning through play-based education and early literacy programs.",
    features: ["Play-Based Learning", "Early Literacy", "Social Skills Development"],
  },
  {
    icon: Users,
    title: "Primary School (Ages 6-11)",
    description: "Building strong academic foundations with engaging, student-centered teaching methods.",
    features: ["Core Curriculum", "Character Education", "Creative Arts"],
  },
  {
    icon: Microscope,
    title: "Middle School (Ages 12-14)",
    description: "Preparing students for advanced studies with enhanced academic rigor and exploration.",
    features: ["Advanced Sciences", "Language Arts", "Technology Integration"],
  },
  {
    icon: Globe,
    title: "High School (Ages 15-18)",
    description: "College preparation with diverse course offerings and career guidance programs.",
    features: ["AP Courses", "College Counseling", "Career Exploration"],
  },
];

const extracurriculars = [
  { icon: Microscope, title: "STEM Club", description: "Robotics, coding, and scientific research" },
  { icon: Music, title: "Music & Drama", description: "Orchestra, choir, and theatrical productions" },
  { icon: Palette, title: "Visual Arts", description: "Painting, sculpture, and digital design" },
  { icon: Trophy, title: "Sports", description: "Football, basketball, athletics, and more" },
  { icon: Laptop, title: "Technology", description: "Coding club, app development, and AI" },
  { icon: Globe, title: "Model UN", description: "International affairs and diplomacy" },
];

const Academics = () => {
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
            <h1 className="heading-display mb-4">Academics</h1>
            <p className="text-lg opacity-90">
              Comprehensive educational programs designed for 21st-century success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">
              Our Programs
            </span>
            <h2 className="heading-section text-foreground mt-3 mb-4">
              Academic <span className="text-secondary">Programs</span>
            </h2>
            <p className="text-body">
              From early years through high school, we offer comprehensive programs 
              tailored to each developmental stage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-lg transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4">
                  <program.icon className="text-secondary" size={28} />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary font-medium text-sm uppercase tracking-wider">
                Curriculum
              </span>
              <h2 className="heading-section text-foreground mt-3 mb-6">
                21st Century <span className="text-secondary">Learning</span>
              </h2>
              <p className="text-body mb-6">
                Our curriculum is designed to develop critical thinking, creativity, 
                collaboration, and communication skills essential for success in the modern world.
              </p>
              
              <div className="space-y-4">
                {[
                  "Project-Based Learning",
                  "STEM Integration Across Subjects",
                  "Digital Literacy Programs",
                  "Global Perspectives & Cultural Studies",
                  "Social-Emotional Learning",
                  "Environmental Sustainability Education",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-secondary-foreground text-xs">✓</span>
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop"
                alt="Students in classroom"
                className="rounded-2xl shadow-card-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Extracurriculars */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">
              Beyond The Classroom
            </span>
            <h2 className="heading-section text-foreground mt-3 mb-4">
              Extra-Curricular <span className="text-secondary">Activities</span>
            </h2>
            <p className="text-body">
              We believe in developing well-rounded individuals through diverse 
              extra-curricular programs.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {extracurriculars.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                  <activity.icon className="text-primary-foreground group-hover:text-secondary-foreground" size={24} />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                  {activity.title}
                </h3>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
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
            <h2 className="heading-section mb-4">Ready to Start Your Academic Journey?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Discover the programs that will shape your child's future. 
              Contact us to learn more about enrollment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="sky" size="lg">
                Apply Now
              </Button>
              <Button variant="hero" size="lg">
                Download Curriculum Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Academics;
