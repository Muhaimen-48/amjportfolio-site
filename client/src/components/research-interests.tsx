import { TrendingUp, Droplets, Map, ThermometerSun, Users, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const interests = [
  // 1. Core Topic
  {
    icon: Droplets,
    title: "Aquatic ecosystem ecology and environmental change",
  },
  // 2. Methods / Quantitative
  {
    icon: TrendingUp,
    title: "Quantitative fisheries science and stock productivity",
  },
  // 3. Methods / Spatial
  {
    icon: Map,
    title: "Spatial fisheries analysis using GIS and remote sensing",
  },
  // 4. Application / Impact
  {
    icon: ThermometerSun,
    title: "Climate change impacts on fisheries systems",
  },
  // 5. Application / Human Dimension
  {
    icon: Users,
    title: "Socio-ecological resilience in fishing communities",
  },
  // 6. Application / Goal
  {
    icon: ShieldCheck,
    title: "Sustainable fisheries governance and management",
  },
];

export function ResearchInterestsSection() {
  return (
    <section id="interests" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Research Interests
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My research vision focuses on understanding complex aquatic dynamics 
            and developing data-driven solutions for sustainable resource management.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <Card 
              key={index} 
              className="hover-elevate overflow-hidden border-primary/10 h-full"
            >
              <CardContent className="p-6 flex flex-col items-center text-center gap-4 h-full justify-center">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 transition-transform hover:scale-110 duration-300">
                  <interest.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-medium text-foreground leading-snug">
                  {interest.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}