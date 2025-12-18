import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto text-primary-foreground"
        >
          <h2 className="heading-section mb-6">
            Ready to Give Your Child the Best Education?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Join the Christ The Haven School family and give your child access to 
            world-class education, exceptional facilities, and a nurturing environment 
            that fosters growth and excellence.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="sky" size="lg">
              Apply for Admission
            </Button>
            <Button variant="hero" size="lg">
              Schedule a Visit
            </Button>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-8">
            <a href="tel:+12345678900" className="flex items-center gap-3 hover:text-secondary transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Phone size={20} />
              </div>
              <div className="text-left">
                <p className="text-sm opacity-70">Call Us</p>
                <p className="font-medium">+1 (234) 567-8900</p>
              </div>
            </a>
            <a href="mailto:admissions@christthehaven.edu" className="flex items-center gap-3 hover:text-secondary transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Mail size={20} />
              </div>
              <div className="text-left">
                <p className="text-sm opacity-70">Email Us</p>
                <p className="font-medium">admissions@christthehaven.edu</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
