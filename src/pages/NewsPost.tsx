import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, Share2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const newsArticles = [
  {
    id: 1,
    title: "End of Year Party - A Memorable Celebration!",
    excerpt: "What a fantastic way to wrap up the school year! On Wednesday, 10th December 2025, our school premises came alive with joy, laughter, and celebration.",
    content: `What a fantastic way to wrap up the school year! On Wednesday, 10th December 2025, our school premises came alive with joy, laughter, and celebration. The children danced to upbeat music, enjoyed delicious treats, and had an absolutely wonderful time together.

It was a day filled with fun activities that left beautiful memories for everyone. The students participated in various games and competitions, showcasing their talents and teamwork. Parents who attended were thrilled to see their children so happy and engaged.

The celebration included:
• Musical performances by different class groups
• Dance competitions with amazing prizes
• Delicious refreshments and treats
• Fun games and activities for all age groups
• Photo sessions to capture the memorable moments

We want to thank all the parents, teachers, and staff who made this event possible. Your support and dedication to our school community is truly appreciated. Here's to more wonderful celebrations in the coming year!`,
    date: "December 10, 2025",
    category: "Celebration",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=500&fit=crop",
  },
  {
    id: 2,
    title: "School Concert - A Glorious Evening!",
    excerpt: "Thursday, 11th December 2025 marked the peak of our term's extracurricular activities.",
    content: `Thursday, 11th December 2025 marked the peak of our term's extracurricular activities. The concert kicked off at 4:30 PM at Starizo Event Centre, where parents, friends, and families gathered for this glorious celebration.

The evening was a magnificent showcase of our students' talents, marking the birth of our Lord Jesus Christ with songs, dances, and dramatic performances. Every child had an opportunity to shine on stage, demonstrating the skills they've developed throughout the term.

Highlights of the evening included:
• Christmas carol performances by the school choir
• Nativity play by the nursery and primary students
• Traditional and contemporary dance performances
• Instrumental performances by our music students
• Drama presentations with powerful messages

The audience was captivated by the dedication and talent displayed by our young performers. Many parents expressed their pride and joy at seeing their children perform with such confidence and skill.

We extend our heartfelt gratitude to all the teachers who trained the students, the parents who supported them, and everyone who attended to make this evening truly special.`,
    date: "December 11, 2025",
    category: "Concert",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=500&fit=crop",
  },
  {
    id: 3,
    title: "Annual Sports Day Celebration",
    excerpt: "Students showcase their athletic prowess at the annual inter-house sports competition with amazing performances.",
    content: `Our Annual Sports Day was a tremendous success! Students from all houses participated with enthusiasm and sportsmanship that made everyone proud.

The event featured various athletic competitions including:
• Track and field events (100m, 200m, relay races)
• Field events (long jump, high jump, shot put)
• Fun races for younger students
• Team sports competitions

The inter-house competition was fierce but friendly, with all four houses giving their best performances. The day concluded with prize distributions and recognition of outstanding athletes.

Congratulations to all participants and winners! Your dedication to physical fitness and teamwork is commendable.`,
    date: "December 5, 2025",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=500&fit=crop",
  },
  {
    id: 4,
    title: "Art Exhibition Showcases Student Creativity",
    excerpt: "The annual art exhibition displayed artworks created by students from all classes.",
    content: `The annual art exhibition was a beautiful display of creativity and artistic talent from students across all classes. The exhibition showcased various forms of art including paintings, drawings, sculptures, and crafts.

Parents and visitors were amazed at the level of creativity and skill demonstrated by our young artists. Each piece told a unique story and reflected the artistic journey of our students throughout the year.

The exhibition featured:
• Paintings and drawings on various themes
• Sculptures and 3D art pieces
• Craft works and recycled art
• Digital art presentations
• Collaborative class projects

We congratulate all our budding artists and thank the art department for nurturing their talents. Keep creating and expressing yourselves through art!`,
    date: "November 28, 2025",
    category: "Arts",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=500&fit=crop",
  },
];

const NewsPost = () => {
  const { id } = useParams();
  const article = newsArticles.find((a) => a.id === Number(id));

  if (!article) {
    return (
      <main className="min-h-screen">
        <Header />
        <section className="pt-32 pb-16 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h1 className="heading-display mb-4">Article Not Found</h1>
            <p className="text-lg opacity-90 mb-8">
              The article you're looking for doesn't exist.
            </p>
            <Link to="/news">
              <Button variant="sky">
                <ArrowLeft size={18} />
                Back to News
              </Button>
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-primary text-primary-foreground">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-secondary hover:underline mb-6"
            >
              <ArrowLeft size={18} />
              Back to News
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
                {article.category}
              </span>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <Calendar size={14} />
                <span>{article.date}</span>
              </div>
            </div>
            <h1 className="heading-display mb-4">{article.title}</h1>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="rounded-2xl overflow-hidden mb-8">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-80 md:h-96 object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              {article.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-body mb-4 whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
              <p className="text-muted-foreground">Share this article</p>
              <Button variant="outline" size="sm">
                <Share2 size={16} />
                Share
              </Button>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <h2 className="heading-section text-foreground mb-8">
            More <span className="text-secondary">Articles</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {newsArticles
              .filter((a) => a.id !== article.id)
              .slice(0, 3)
              .map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  to={`/news/${relatedArticle.id}`}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-muted-foreground">
                      {relatedArticle.date}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-foreground mt-2 group-hover:text-secondary transition-colors line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default NewsPost;
