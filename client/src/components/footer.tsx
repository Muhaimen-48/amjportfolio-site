import { Linkedin, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-card-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
              Abdul Muhaimen Jamil Washi
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fisheries Science Researcher & GIS Specialist focused on climate-ecosystem 
              interactions and sustainable fisheries management.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {["About", "Research", "Publications", "Skills", "Education", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:amjwashi@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                amjwashi@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/muhaimenwashi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn Profile
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Chittagong, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Abdul Muhaimen Jamil Washi. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              MSc Candidate, Fisheries Management | University of Chittagong
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
