import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
}

const BlogCard = ({ title, excerpt, author, date, category, readTime, image, slug }: BlogCardProps) => {
  return (
    <Card className="group overflow-hidden border-blog-border bg-gradient-card hover:shadow-hover transition-all duration-300 cursor-pointer">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          <span className="text-xs text-blog-light">{readTime}</span>
        </div>
        
        <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        
        <p className="text-blog-text text-sm mb-4 line-clamp-2">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-xs text-blog-light">
          <span>{author}</span>
          <span>{date}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;