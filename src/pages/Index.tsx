import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const Index = () => {
  // Mock blog posts data - in a real app, this would come from an API
  const blogPosts = [
    {
      id: 1,
      title: "The Evolution of Modern Design Systems",
      excerpt: "Explore how design systems have transformed the way we build digital products and create consistent user experiences across platforms.",
      author: "Sarah Chen",
      date: "Mar 15, 2024",
      category: "Design Systems",
      readTime: "8 min read",
      image: blog1,
      slug: "evolution-modern-design-systems"
    },
    {
      id: 2,
      title: "Collaborative Design: Building Better Products Together",
      excerpt: "Learn effective strategies for fostering collaboration between designers, developers, and stakeholders in your design process.",
      author: "Michael Rodriguez",
      date: "Mar 12, 2024",
      category: "Collaboration",
      readTime: "6 min read",
      image: blog2,
      slug: "collaborative-design-building-better-products"
    },
    {
      id: 3,
      title: "From Sketch to Screen: The UX Design Process",
      excerpt: "A comprehensive guide to transforming initial concepts into polished user interfaces that users love to interact with.",
      author: "Emma Thompson",
      date: "Mar 10, 2024",
      category: "UX Design",
      readTime: "10 min read",
      image: blog3,
      slug: "sketch-to-screen-ux-design-process"
    },
    {
      id: 4,
      title: "Color Psychology in Digital Design",
      excerpt: "Understanding how colors influence user behavior and decision-making in digital interfaces and brand experiences.",
      author: "David Kim",
      date: "Mar 8, 2024",
      category: "Visual Design",
      readTime: "7 min read",
      image: blog1,
      slug: "color-psychology-digital-design"
    },
    {
      id: 5,
      title: "Accessibility-First Design Principles",
      excerpt: "Creating inclusive digital experiences that work for everyone, regardless of their abilities or the technology they use.",
      author: "Lisa Wang",
      date: "Mar 5, 2024",
      category: "Accessibility",
      readTime: "9 min read",
      image: blog2,
      slug: "accessibility-first-design-principles"
    },
    {
      id: 6,
      title: "The Future of Design Tools",
      excerpt: "Examining emerging technologies and how they're reshaping the design landscape, from AI to collaborative platforms.",
      author: "Alex Johnson",
      date: "Mar 3, 2024",
      category: "Technology",
      readTime: "5 min read",
      image: blog3,
      slug: "future-of-design-tools"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <section className="container mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest Articles
          </h2>
          <p className="text-xl text-blog-text max-w-2xl">
            Discover insights, tutorials, and stories from the design community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
