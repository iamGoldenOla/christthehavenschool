import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";
import hero7 from "@/assets/hero-7.jpg";
import hero8 from "@/assets/hero-8.jpg";
import hero9 from "@/assets/hero-9.jpg";
import hero10 from "@/assets/hero-10.jpg";

const slides = [
  {
    image: hero1,
    title: "Welcome to Christ The Haven School",
    subtitle: "Where Excellence Meets Character",
    description: "Nurturing future leaders with quality education and moral values",
  },
  {
    image: hero2,
    title: "State-of-the-Art Science Labs",
    subtitle: "Learning by Discovery",
    description: "Hands-on experiments that bring science to life",
  },
  {
    image: hero3,
    title: "World-Class Library",
    subtitle: "A Gateway to Knowledge",
    description: "Extensive collection of books and digital resources",
  },
  {
    image: hero4,
    title: "Excellence in Sports",
    subtitle: "Building Champions",
    description: "Modern sports facilities for physical development",
  },
  {
    image: hero5,
    title: "Future-Ready Technology",
    subtitle: "Digital Learning Hub",
    description: "Preparing students for the 21st-century digital world",
  },
  {
    image: hero6,
    title: "Creative Arts Program",
    subtitle: "Express Your Creativity",
    description: "Nurturing artistic talents and creative expression",
  },
  {
    image: hero7,
    title: "Celebrating Success",
    subtitle: "Graduation Day",
    description: "Proud moments of achievement and accomplishment",
  },
  {
    image: hero8,
    title: "Interactive Classrooms",
    subtitle: "Engaging Education",
    description: "Modern teaching methods with smart technology",
  },
  {
    image: hero9,
    title: "Music & Performing Arts",
    subtitle: "Rhythm of Learning",
    description: "Developing musical talents and performance skills",
  },
  {
    image: hero10,
    title: "Community & Values",
    subtitle: "Together We Grow",
    description: "Building character through shared experiences",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 gradient-hero-overlay" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl text-primary-foreground"
            >
              <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-6">
                {slides[currentSlide].subtitle}
              </span>
              <h1 className="heading-display mb-6 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="sky" size="lg">
                  Explore Programs
                </Button>
                <Button variant="hero" size="lg">
                  Virtual Tour
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-card/40 transition-all"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-card/40 transition-all"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-secondary"
                : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
