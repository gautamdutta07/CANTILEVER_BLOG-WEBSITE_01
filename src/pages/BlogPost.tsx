import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import blog1 from "@/assets/blog-1.jpg";

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data - in a real app, this would come from an API
  const post = {
    title: "The Evolution of Modern Design Systems",
    content: `
      <p>Design systems have become the backbone of modern digital product development. They provide a shared language between designers and developers, ensuring consistency across all touchpoints of a user's journey.</p>
      
      <h2>What Makes a Great Design System?</h2>
      <p>A well-crafted design system goes beyond just colors and typography. It encompasses the entire user experience, from micro-interactions to comprehensive component libraries that scale across platforms.</p>
      
      <h3>Key Components</h3>
      <ul>
        <li>Typography hierarchy and font selections</li>
        <li>Color palettes with semantic meaning</li>
        <li>Spacing and layout principles</li>
        <li>Interactive components and states</li>
        <li>Icon libraries and illustration styles</li>
      </ul>
      
      <p>The most successful design systems are those that evolve with the product and organization. They're living documents that grow and adapt while maintaining their core principles.</p>
      
      <h2>Implementation Strategies</h2>
      <p>Building a design system requires careful planning and stakeholder buy-in. Start small with foundational elements and gradually expand based on actual needs and usage patterns.</p>
      
      <p>Remember, the goal isn't to create the most comprehensive system possible, but rather to solve real problems and improve the efficiency of your design and development workflow.</p>
    `,
    author: "Sarah Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Design Systems",
    image: blog1
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary">{post.category}</Badge>
            <span className="text-sm text-blog-light">{post.readTime}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-blog-light">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
        </div>
        
        <div className="aspect-[16/9] mb-12 overflow-hidden rounded-lg">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div 
          className="prose prose-lg max-w-none text-blog-text"
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={{
            lineHeight: '1.8',
          }}
        />
        
        <div className="mt-12 pt-8 border-t border-blog-border">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div>
              <h4 className="font-semibold text-foreground mb-1">Enjoyed this article?</h4>
              <p className="text-blog-light text-sm">Share it with your network or subscribe for more insights.</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">Share</Button>
              <Button size="sm">Subscribe</Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;