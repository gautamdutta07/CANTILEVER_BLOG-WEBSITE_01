import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Design
          <span className="block text-blog-text">Stories & Insights</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-blog-text mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover the latest trends, techniques, and stories from the world of digital design
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6">
            Explore Articles
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;