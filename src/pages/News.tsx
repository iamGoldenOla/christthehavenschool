import { motion } from "framer-motion";
import { Calendar, ArrowRight, Search, Bell, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const newsArticles = [
  {
    id: 1,
    title: "End of Year Party - A Memorable Celebration!",
    excerpt: "What a fantastic way to wrap up the school year! On Wednesday, 10th December 2025, our school premises came alive with joy, laughter, and celebration. The children danced to upbeat music, enjoyed delicious treats, and had an absolutely wonderful time together. It was a day filled with fun activities that left beautiful memories for everyone.",
    content: "Full article content here...",
    date: "December 10, 2025",
    category: "Celebration",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=500&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "School Concert - A Glorious Evening!",
    excerpt: "Thursday, 11th December 2025 marked the peak of our term's extracurricular activities. The concert kicked off at 4:30 PM at Starizo Event Centre, where parents, friends, and families gathered for this glorious celebration. The evening was a magnificent showcase of our students' talents, marking the birth of our Lord Jesus Christ with songs, dances, and dramatic performances.",
    content: "Full article content here...",
    date: "December 11, 2025",
    category: "Concert",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: 3,
    title: "Annual Sports Day Celebration",
    excerpt: "Students showcase their athletic prowess at the annual inter-house sports competition with amazing performances. The event was a testament to the physical education program at our school.",
    content: "Full article content here...",
    date: "December 5, 2025",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: 4,
    title: "Art Exhibition Showcases Student Creativity",
    excerpt: "The annual art exhibition displayed artworks created by students from all classes, demonstrating the vibrant creative culture at Christ The Haven School.",
    content: "Full article content here...",
    date: "November 28, 2025",
    category: "Arts",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=500&fit=crop",
    featured: false,
  },
];

const informationDesk = [
  {
    id: 1,
    title: "Second Term Resumption",
    message: "School resumes for second term on Monday, January 6th, 2026. All students should be in school by 8:00 AM.",
    date: "December 2025",
    type: "Important",
  },
  {
    id: 2,
    title: "Fee Payment Reminder",
    message: "Parents are reminded to complete school fees payment before resumption. Contact the school office for more information.",
    date: "December 2025",
    type: "Reminder",
  },
  {
    id: 3,
    title: "New School Uniform",
    message: "New school uniforms are available at the school store. Please ensure your child has the correct uniform for the new term.",
    date: "December 2025",
    type: "Notice",
  },
];

const categories = ["All", "Celebration", "Concert", "Sports", "Arts"];

const News = () => {
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
            <h1 className="heading-display mb-4">News & Blog</h1>
            <p className="text-lg opacity-90">
              Stay updated with the latest news, events, and stories from Christ The Haven School
            </p>
          </motion.div>
        </div>
      </section>

      {/* Information Desk */}
      <section className="py-8 bg-yellow">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Megaphone className="text-yellow" size={20} />
            </div>
            <h2 className="font-serif text-xl font-bold text-primary">Information Desk</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {informationDesk.map((info, index) => (
              <motion.div
                key={info.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary/10 rounded-xl p-4 border border-primary/20"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Bell size={14} className="text-primary" />
                  <span className="text-xs font-medium text-primary">{info.type}</span>
                  <span className="text-xs text-primary/60 ml-auto">{info.date}</span>
                </div>
                <h3 className="font-semibold text-primary mb-1">{info.title}</h3>
                <p className="text-sm text-primary/80">{info.message}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-muted border-b border-border">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-yellow"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    category === "All"
                      ? "bg-yellow text-primary"
                      : "bg-card text-foreground hover:bg-yellow/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {newsArticles.filter(a => a.featured).map((article) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <span className="absolute top-4 left-4 px-4 py-1 bg-yellow text-primary rounded-full text-sm font-medium">
                  Featured
                </span>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-yellow/10 text-yellow rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                </div>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {article.title}
                </h2>
                <p className="text-body mb-6">
                  {article.excerpt}
                </p>
                <Link to={`/news/${article.id}`}>
                  <Button className="bg-yellow text-primary hover:bg-yellow-dark">
                    Read Full Article
                    <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* All Articles */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="heading-section text-foreground">
              Latest <span className="text-secondary">Articles</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.filter(a => !a.featured).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-yellow text-primary rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  <Link 
                    to={`/news/${article.id}`}
                    className="inline-flex items-center text-sm font-medium text-yellow hover:underline"
                  >
                    Read More
                    <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-yellow text-yellow hover:bg-yellow hover:text-primary">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="heading-section mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg opacity-90 mb-8">
              Stay informed about school news, events, and important announcements
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-yellow"
              />
              <Button className="bg-yellow text-primary hover:bg-yellow-dark">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default News;