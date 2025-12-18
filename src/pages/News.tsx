import { motion } from "framer-motion";
import { Calendar, ArrowRight, Search, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const newsArticles = [
  {
    id: 1,
    title: "Students Excel at National Science Olympiad",
    excerpt: "Our students brought home 5 gold medals and 3 silver medals at the prestigious National Science Olympiad held in the capital. This remarkable achievement showcases the dedication of our students and the excellence of our science program.",
    content: "Lorem ipsum dolor sit amet...",
    date: "December 15, 2024",
    category: "Achievement",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=500&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "New STEM Lab Inauguration",
    excerpt: "Christ The Haven School inaugurates state-of-the-art STEM laboratory with cutting-edge robotics and AI equipment. The new facility will enhance hands-on learning experiences for students.",
    content: "Lorem ipsum dolor sit amet...",
    date: "December 10, 2024",
    category: "Facilities",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: 3,
    title: "Annual Sports Day Celebration",
    excerpt: "Students showcase their athletic prowess at the annual inter-house sports competition with record-breaking performances. The event was a testament to the physical education program at our school.",
    content: "Lorem ipsum dolor sit amet...",
    date: "December 5, 2024",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: 4,
    title: "Art Exhibition Showcases Student Creativity",
    excerpt: "The annual art exhibition displayed over 200 artworks created by students from all grade levels, demonstrating the vibrant creative culture at Christ The Haven School.",
    content: "Lorem ipsum dolor sit amet...",
    date: "November 28, 2024",
    category: "Arts",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: 5,
    title: "Community Service Initiative Launch",
    excerpt: "Students launch a new community service initiative to support local education. The program aims to provide tutoring and mentorship to underprivileged students in neighboring communities.",
    content: "Lorem ipsum dolor sit amet...",
    date: "November 20, 2024",
    category: "Community",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: 6,
    title: "Teacher Excellence Awards Ceremony",
    excerpt: "Five outstanding teachers were recognized for their exceptional contributions to education at the annual Teacher Excellence Awards ceremony held in the school auditorium.",
    content: "Lorem ipsum dolor sit amet...",
    date: "November 15, 2024",
    category: "Faculty",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop",
    featured: false,
  },
];

const categories = ["All", "Achievement", "Facilities", "Sports", "Arts", "Community", "Faculty"];

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

      {/* Search & Filter */}
      <section className="py-8 bg-muted border-b border-border">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    category === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground hover:bg-accent"
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
                <span className="absolute top-4 left-4 px-4 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                  Featured
                </span>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium">
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
                <Button variant="sky">
                  Read Full Article
                  <ArrowRight size={18} />
                </Button>
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
                  <span className="absolute top-4 left-4 px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
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
                    className="inline-flex items-center text-sm font-medium text-secondary hover:underline"
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
            <Button variant="outline" size="lg">
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
                className="flex-1 px-6 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-secondary"
              />
              <Button variant="sky">
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
