import { motion } from "framer-motion";
import { 
  Microscope, 
  Palette, 
  Music, 
  Trophy, 
  Activity,
  Users
} from "lucide-react";

const features = [
  {
    icon: Microscope,
    title: "STEM Education",
    description: "Modern science learning for hands-on educational experiences",
  },
  {
    icon: Palette,
    title: "Arts & Creativity",
    description: "Dedicated spaces for visual arts and creative expression",
  },
  {
    icon: Music,
    title: "Music & Drama",
    description: "Music rooms and performing arts facilities for expression",
  },
  {
    icon: Trophy,
    title: "Sports Excellence",
    description: "Quality sports facilities and coaching programs",
  },
  {
    icon: Activity,
    title: "Extra-curricular Activities",
    description: "Wide range of activities including clubs and competitions",
  },
  {
    icon: Users,
    title: "Small Class Sizes",
    description: "Personalized attention with optimal student-teacher ratio",
  },
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="heading-section text-foreground mt-3 mb-4">
            Quality <span className="text-primary">Learning</span> Experience
          </h2>
          <p className="text-body">
            We provide a comprehensive educational experience with quality 
            facilities and innovative programs designed for the modern learner.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-lg transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                <feature.icon className="text-secondary group-hover:text-secondary-foreground" size={28} />
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;