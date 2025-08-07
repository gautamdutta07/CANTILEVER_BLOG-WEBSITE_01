import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-blog-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold text-accent-foreground">B</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">Design Blog</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-blog-text hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#" className="text-blog-light hover:text-foreground transition-colors">
              Articles
            </a>
            <a href="#" className="text-blog-light hover:text-foreground transition-colors">
              Categories
            </a>
            <a href="#" className="text-blog-light hover:text-foreground transition-colors">
              About
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              Search
            </Button>
            <Button size="sm">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;