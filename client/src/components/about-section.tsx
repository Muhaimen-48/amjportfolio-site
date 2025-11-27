import { Globe, Fish, BarChart3, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Fish,
    title: "Fisheries Science",
    description: "Specializing in aquatic ecology and inland fisheries productivity research",
  },
  {
    icon: Globe,
    title: "Climate Research",
    description: "Investigating climate-ecosystem interactions and biodiversity dynamics",
  },
  {
    icon: BarChart3,
    title: "GIS & Data Analysis",
    description: "Using spatial approaches for ecosystem mapping and analysis",
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "Supporting livelihood resilience in fishing communities",
  },
];

const researchInterests = [
  "Climate change and fisheries productivity",
  "Ecosystem-based conservation",
  "Global change biodiversity dynamics",
  "GIS and remote sensing in fisheries",
  "Coastal and estuarine ecosystem restoration",
  "Community-based fisheries and livelihood resilience",
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a fisheries science student at the University of Chittagong with interests in 
              aquatic ecology, climate-ecosystem interactions, and biodiversity restoration.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              With practical experience in GIS, programming, and research within fisheries and 
              climate studies, I aim to use data-driven and spatial approaches to support 
              ecosystem recovery and biodiversity outcomes, especially in coastal environments.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Currently pursuing my Master's degree in Fisheries Management, I am conducting 
              thesis research on climate-driven shifts in inland fisheries productivity in 
              northern Bangladesh, combining GIS analysis with statistical methods to understand 
              climate-fishery linkages.
            </p>

            <div className="pt-4">
              <h3 className="font-semibold text-foreground mb-4">Research Interests</h3>
              <div className="flex flex-wrap gap-2">
                {researchInterests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-md font-medium"
                    data-testid={`badge-interest-${interest.split(" ")[0].toLowerCase()}`}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <Card key={item.title} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
