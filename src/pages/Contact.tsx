import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const Contact = () => {
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
            <h1 className="heading-display mb-4">Contact Us</h1>
            <p className="text-lg opacity-90">
              We'd love to hear from you. Get in touch with us today.
            </p>
            <p className="text-yellow font-semibold mt-4">
              School Motto: Excellence & Godliness
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-yellow font-medium text-sm uppercase tracking-wider">
                Get in Touch
              </span>
              <h2 className="heading-section text-foreground mt-3 mb-6">
                Contact <span className="text-secondary">Information</span>
              </h2>
              <p className="text-body mb-8">
                Have questions about admissions, programs, or anything else? 
                We're here to help. Reach out to us using any of the methods below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-yellow" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      10, Christ Avenue, by Starizo Place<br />
                      (Events Centre) Cele 3, Asese-Orimerunmu,<br />
                      Ogun State, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow/10 flex items-center justify-center shrink-0">
                    <Phone className="text-yellow" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      +234 802 335 7800
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow/10 flex items-center justify-center shrink-0">
                    <Mail className="text-yellow" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      info@christthehavenschool.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow/10 flex items-center justify-center shrink-0">
                    <Clock className="text-yellow" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 4:00 PM<br />
                      Saturday: 9:00 AM - 12:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-card border-t-4 border-yellow"
            >
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-yellow"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-yellow"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-yellow"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-yellow">
                    <option>General Inquiry</option>
                    <option>Admissions</option>
                    <option>Academics</option>
                    <option>Events</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-yellow resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <Button className="w-full bg-yellow text-primary hover:bg-yellow-dark" size="lg">
                  Send Message
                  <Send size={18} />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3!2d3.4!3d6.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDInMDAuMCJOIDPCsDI0JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale"
        />
      </section>

      <Footer />
    </main>
  );
};

export default Contact;