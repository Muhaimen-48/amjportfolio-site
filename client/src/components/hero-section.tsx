import { MapPin, Mail, Linkedin, FileText, ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "wouter";
import profileImage from "@assets/AMJ WASHI_1764257781518.jpg";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-medium text-sm sm:text-base tracking-wide uppercase">
                Welcome to my portfolio
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Abdul Muhaimen Jamil
                <br />
                <span className="text-primary">Washi</span>
              </h1>
            </div>
            
            <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium">
              Graduate Researcher in Fisheries | Climate & Ecosystems
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A fisheries science graduate and M.Sc. student with interests in aquatic ecology, climate-ecosystem interactions, 
              and biodiversity restoration. Uses research and data-driven approaches to understand environmental change and 
              support ecosystem recovery, particularly in coastal and wetland systems.
            </p>

            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm">Chittagong, Bangladesh</span>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                onClick={() => scrollToSection("#research")}
                data-testid="button-view-research"
              >
                <FileText className="h-4 w-4 mr-2" />
                View Research
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("#contact")}
                data-testid="button-contact"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact Me
              </Button>
              <Button
                variant="ghost"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/muhaimenwashi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-linkedin"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl" />
              <Avatar className="h-64 w-64 sm:h-80 sm:w-80 border-4 border-background shadow-xl relative">
                <AvatarImage src={profileImage} alt="Abdul Muhaimen Jamil Washi" />
                <AvatarFallback className="text-5xl sm:text-6xl font-serif font-bold bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                  AMW
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 bg-card border border-card-border rounded-lg px-3 py-1.5 shadow-md">
                <span className="text-xs font-medium text-muted-foreground">MSc Candidate</span>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("#about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
          aria-label="Scroll down"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}
