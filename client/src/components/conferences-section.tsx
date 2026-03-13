import { Calendar, MapPin, Presentation, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const conferences = [
  {
    title: "3rd International Conference on Sustainable Fisheries (ICSF) 2025",
    date: "September 5 - 6, 2025",
    location: "Sylhet Agricultural University, Bangladesh",
    role: "Poster Presenter",
    description: "Presented a research poster on my Bachelor's term paper findings.",
    icon: Presentation,
  },
  {
    title: "State of the Map Asia 2024",
    date: "November 30 - December 1, 2024",
    location: "Cox's Bazar, Bangladesh",
    role: "Campus Ambassador",
    description: "Participated in workshops on open mapping and GIS, and collaborated with YouthMappers, HOT, and the Open Mapping Hub (Asia-Pacific).",
    icon: Users,
  }
];

export function ConferencesSection() {
  return (
    <section id="conferences" className="py-20 sm:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Conferences & Seminars
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {conferences.map((conf, index) => (
            <Card key={index} className="hover-elevate">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <conf.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground leading-tight mb-2">
                        {conf.title}
                      </h3>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{conf.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{conf.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium mb-3">
                      {conf.role}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed text-justify [text-justify:inter-word]">
                      {conf.description}
                    </p>
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