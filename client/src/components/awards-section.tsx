import { Trophy, Medal, Calendar, Building2, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    title: "National Science & Technology Fellowship",
    date: "January 13, 2026",
    organization: "Ministry of Science and Technology, Bangladesh",
    role: "For Master's Thesis",
    description: "Awarded the prestigious National Science & Technology Fellowship by the Ministry of Science and Technology, Bangladesh, to support Master's thesis research.",
    icon: Trophy,
    highlights: []
  },
  {
    title: "Jamal Nazrul Islam Research Excellence Award",
    date: "February 26, 2025",
    organization: "Jamal Nazrul Islam Research & Innovation Festival",
    role: "Best Stall Award | Team Lead",
    description: "Served as Team Lead for the Department of Fisheries stall, securing the Best Stall Award.",
    icon: Medal,
    highlights: [
      "Led departmental coordination and liaison with faculty and organizers.",
      "Managed logistics, resources, and on-site operations.",
      "Curated and organized showcased research projects.",
      "Supervised the preparation and presentation of documentary and visual background materials representing the department."
    ]
  }
];

export function AwardsSection() {
  return (
    <section id="awards" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Achievements & Awards
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start">
          {achievements.map((item, index) => (
            <Card key={index} className="hover-elevate h-full">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground leading-tight mb-2">
                        {item.title}
                      </h3>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 shrink-0" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Building2 className="h-4 w-4 shrink-0" />
                          <span>{item.organization}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium mb-3">
                      {item.role}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed text-justify [text-justify:inter-word] mb-4">
                      {item.description}
                    </p>
                    
                    {item.highlights.length > 0 && (
                      <ul className="space-y-2">
                        {item.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-justify [text-justify:inter-word]">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}