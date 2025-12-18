import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const events = [
  {
    id: 1,
    title: "Edufair 2026",
    date: "March 15-17, 2026",
    time: "9:00 AM - 5:00 PM",
    location: "School Main Campus",
    description: "Join us for our annual education fair featuring interactive exhibitions, workshops, and college admissions guidance.",
    featured: true,
    category: "Annual Event",
  },
  {
    id: 2,
    title: "Parent-Teacher Conference",
    date: "January 20, 2026",
    time: "2:00 PM - 6:00 PM",
    location: "School Auditorium",
    description: "Discuss your child's progress with teachers and explore ways to support their learning journey.",
    featured: false,
    category: "Academic",
  },
  {
    id: 3,
    title: "Science Fair 2026",
    date: "February 10, 2026",
    time: "10:00 AM - 4:00 PM",
    location: "Science Block",
    description: "Witness innovative student projects and scientific discoveries at our annual science exhibition.",
    featured: false,
    category: "Academic",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">
              Mark Your Calendar
            </span>
            <h2 className="heading-section text-foreground mt-3">
              Upcoming <span className="text-secondary">Events</span>
            </h2>
          </div>
          <Link to="/events">
            <Button variant="outline" className="group">
              View All Events
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </Link>
        </motion.div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Event */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative rounded-3xl overflow-hidden bg-primary text-primary-foreground p-8 md:p-12"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <span className="inline-block px-4 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
                Featured Event
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                {events[0].title}
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-xl">
                {events[0].description}
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar size={20} className="text-secondary" />
                  <span>{events[0].date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-secondary" />
                  <span>{events[0].time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="text-secondary" />
                  <span>{events[0].location}</span>
                </div>
              </div>
              
              <Button variant="sky" size="lg">
                Register Now
              </Button>
            </div>
          </motion.div>

          {/* Other Events */}
          <div className="flex flex-col gap-6">
            {events.slice(1).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-lg transition-all"
              >
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium mb-3">
                  {event.category}
                </span>
                <h4 className="font-serif text-lg font-bold text-foreground mb-2">
                  {event.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {event.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{event.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
