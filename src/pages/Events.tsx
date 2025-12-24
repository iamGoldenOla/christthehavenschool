import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import ExcursionCarousel from "@/components/events/ExcursionCarousel";
import CulturalDayCarousel from "@/components/events/CulturalDayCarousel";
import EventCarousel from "@/components/events/EventCarousel";

import excursion1 from "@/assets/gallery/excursion-1.jpg";
import excursion2 from "@/assets/gallery/excursion-2.jpg";
import excursion3 from "@/assets/gallery/excursion-3.jpg";
import excursion4 from "@/assets/gallery/excursion-4.jpg";
import excursion5 from "@/assets/gallery/excursion-5.jpg";
import excursion6 from "@/assets/gallery/excursion-6.jpg";
import excursion7 from "@/assets/gallery/excursion-7.jpg";
import excursion8 from "@/assets/gallery/excursion-8.jpg";
import excursion9 from "@/assets/gallery/excursion-9.jpg";
import excursion10 from "@/assets/gallery/excursion-10.jpg";
import culturalDay1 from "@/assets/gallery/cultural-day-1.jpg";
import culturalDay2 from "@/assets/gallery/cultural-day-2.jpg";
import culturalDay3 from "@/assets/gallery/cultural-day-3.jpg";
import culturalDay4 from "@/assets/gallery/cultural-day-4.jpg";
import culturalDay5 from "@/assets/gallery/cultural-day-5.jpg";
import culturalDay6 from "@/assets/gallery/cultural-day-6.jpg";
import culturalDay7 from "@/assets/gallery/cultural-day-7.jpg";
import culturalDay8 from "@/assets/gallery/cultural-day-8.jpg";
import culturalDay9 from "@/assets/gallery/cultural-day-9.jpg";
import culturalDay10 from "@/assets/gallery/cultural-day-10.jpg";
import reading1 from "@/assets/gallery/reading-1.jpg";
import reading2 from "@/assets/gallery/reading-2.jpg";
import professional1 from "@/assets/gallery/professional-1.jpg";
import professional2 from "@/assets/gallery/professional-2.jpg";
import professional3 from "@/assets/gallery/professional-3.jpg";
import professional4 from "@/assets/gallery/professional-4.jpg";
import professional5 from "@/assets/gallery/professional-5.jpg";
import professional6 from "@/assets/gallery/professional-6.jpg";
import professional7 from "@/assets/gallery/professional-7.jpg";
import professional8 from "@/assets/gallery/professional-8.jpg";
import professional9 from "@/assets/gallery/professional-9.jpg";
import professional10 from "@/assets/gallery/professional-10.jpg";

const upcomingEvents = [
  {
    id: 1,
    title: "Edufair 2026",
    date: "March 15-17, 2026",
    time: "9:00 AM - 5:00 PM",
    location: "School Main Campus",
    description: "Join us for our annual education fair featuring interactive exhibitions, workshops, college admissions guidance, and career counseling sessions.",
    featured: true,
  },
  {
    id: 2,
    title: "Parent-Teacher Conference",
    date: "January 20, 2026",
    time: "2:00 PM - 6:00 PM",
    location: "School Auditorium",
    description: "Discuss your child's progress with teachers and explore ways to support their learning journey.",
    featured: false,
  },
  {
    id: 3,
    title: "Science Fair 2026",
    date: "February 10, 2026",
    time: "10:00 AM - 4:00 PM",
    location: "Science Block",
    description: "Witness innovative student projects and scientific discoveries at our annual science exhibition.",
    featured: false,
  },
  {
    id: 4,
    title: "Cultural Day Celebration",
    date: "April 5, 2026",
    time: "9:00 AM - 3:00 PM",
    location: "School Grounds",
    description: "A celebration of cultural diversity with traditional performances, food, and exhibitions.",
    featured: false,
  },
];

const galleryCategories = [
  {
    id: "excursion",
    name: "Excursion",
    description: "Educational trips and outdoor learning adventures",
    images: [
      { src: excursion1, alt: "Students at Olumo Rock excursion" },
      { src: excursion2, alt: "Cultural exhibition at Obasanjo Zoo" },
      { src: excursion3, alt: "Students at Alake's Palace" },
      { src: excursion4, alt: "Students listening attentively at palace" },
      { src: excursion5, alt: "Royal throne at Alake's Palace" },
      { src: excursion6, alt: "Group photo at Alake's Palace" },
      { src: excursion7, alt: "Students seated at palace hall" },
      { src: excursion8, alt: "Students on ornate chairs" },
      { src: excursion9, alt: "Students during palace tour" },
      { src: excursion10, alt: "Group photo at OOPL Wildlife Park" },
    ],
  },
  {
    id: "cultural",
    name: "Cultural Day",
    description: "Celebrating diversity through cultural performances and traditions",
    images: [
      { src: culturalDay1, alt: "Students in traditional Nigerian attire - group photo" },
      { src: culturalDay2, alt: "Children in colorful cultural costumes" },
      { src: culturalDay3, alt: "Teachers dressed in traditional attire" },
      { src: culturalDay4, alt: "Children showcasing traditional outfits" },
      { src: culturalDay5, alt: "Teacher coordinating cultural activities" },
      { src: culturalDay6, alt: "Boys in traditional northern attire" },
      { src: culturalDay7, alt: "Boys greeting in traditional manner" },
      { src: culturalDay8, alt: "Children in playful traditional poses" },
      { src: culturalDay9, alt: "Students representing diverse Nigerian cultures" },
      { src: culturalDay10, alt: "Girls performing traditional dance" },
    ],
  },
  {
    id: "reading",
    name: "World Reading Day",
    description: "Promoting literacy and the joy of reading",
    images: [
      { src: reading1, alt: "Students reading in library" },
      { src: reading2, alt: "Storytelling session" },
    ],
  },
  {
    id: "professional",
    name: "Professional Day",
    description: "Career exploration and professional development activities",
    images: [
      { src: professional1, alt: "Students as future footballers" },
      { src: professional2, alt: "Students and teachers as chefs" },
      { src: professional3, alt: "Student dressed in engineer outfit" },
      { src: professional4, alt: "Students with cooking utensils" },
      { src: professional5, alt: "Students as future pilots" },
      { src: professional6, alt: "Students in military and pilot uniforms" },
      { src: professional7, alt: "Students dressed as doctors" },
      { src: professional8, alt: "Students as future lawyers" },
      { src: professional9, alt: "Students at career day activities" },
      { src: professional10, alt: "Student as future pilot" },
    ],
  },
];

const Events = () => {
  const [activeCategory, setActiveCategory] = useState("excursion");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
            <h1 className="heading-display mb-4">Events & Gallery</h1>
            <p className="text-lg opacity-90">
              Explore our vibrant school life through events and memorable moments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">
              Mark Your Calendar
            </span>
            <h2 className="heading-section text-foreground mt-3">
              Upcoming <span className="text-secondary">Events</span>
            </h2>
          </motion.div>

          <div className="grid gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl p-6 md:p-8 ${
                  event.featured 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-card shadow-card"
                }`}
              >
                {event.featured && (
                  <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium mb-4">
                    Featured Event
                  </span>
                )}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className={`font-serif text-xl md:text-2xl font-bold mb-2 ${
                      event.featured ? "" : "text-foreground"
                    }`}>
                      {event.title}
                    </h3>
                    <p className={`text-sm mb-4 ${
                      event.featured ? "opacity-90" : "text-muted-foreground"
                    }`}>
                      {event.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className={event.featured ? "text-secondary" : "text-secondary"} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} className={event.featured ? "text-secondary" : "text-secondary"} />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className={event.featured ? "text-secondary" : "text-secondary"} />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant={event.featured ? "sky" : "default"} className="shrink-0">
                    Register Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">
              Memories
            </span>
            <h2 className="heading-section text-foreground mt-3 mb-4">
              Event <span className="text-secondary">Gallery</span>
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              Browse through our collection of memorable moments from various school events
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground hover:bg-accent shadow-sm"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Display */}
          {galleryCategories.map((category) => (
            category.id === activeCategory && (
              <motion.div
                key={category.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
                
                {/* All categories use carousel */}
                {category.id === "excursion" ? (
                  <ExcursionCarousel 
                    images={category.images} 
                    onImageClick={(src) => setSelectedImage(src)} 
                  />
                ) : category.id === "cultural" ? (
                  <CulturalDayCarousel 
                    images={category.images} 
                    onImageClick={(src) => setSelectedImage(src)} 
                  />
                ) : (
                  <EventCarousel 
                    images={category.images} 
                    onImageClick={(src) => setSelectedImage(src)} 
                  />
                )}
              </motion.div>
            )
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-primary/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
          />
          <button 
            className="absolute top-6 right-6 text-primary-foreground hover:text-secondary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <span className="text-3xl">×</span>
          </button>
        </div>
      )}

      <Footer />
    </main>
  );
};

export default Events;
