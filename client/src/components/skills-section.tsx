import { Map, Code2, Palette, Users, Database, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SkillCategory {
  icon: typeof Map;
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: Map,
    title: "Geospatial Tools",
    skills: ["QGIS", "ArcGIS Pro", "KoboToolbox", "Google Earth Pro", "OpenStreetMap"],
  },
  {
    icon: Code2,
    title: "Programming & Technical",
    skills: [
      "Python",
      "R/RStudio",
      "TropFishR",
      "ggplot2",
      "JABBA",
      "LBSPR",
      "LBB",
      "DBI",
      "Microsoft Office",
    ],
  },
  {
    icon: Palette,
    title: "Design & Visualization",
    skills: ["Adobe Illustrator", "Adobe Photoshop", "Adobe Lightroom", "Data Visualization"],
  },
  {
    icon: Database,
    title: "Data Analysis",
    skills: ["NVivo", "Statistical Analysis", "Thematic Analysis", "Mixed-Methods Research"],
  },
  {
    icon: FileText,
    title: "Research Skills",
    skills: [
      "Data Collection",
      "Data Processing",
      "Scientific Writing",
      "Literature Review",
      "Field Survey Design",
    ],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: [
      "Project Management",
      "Team Leadership",
      "Communication",
      "Community Engagement",
      "Event Organization",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning geospatial analysis, programming, design, and research methodologies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card 
              key={category.title} 
              className="hover-elevate overflow-visible"
              data-testid={`card-skills-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-muted text-muted-foreground text-sm rounded-md font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="py-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="font-semibold text-xl text-foreground mb-2">
                    IELTS Score: 7.0/9.0
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Achieved in September 2025
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  <div className="text-center px-4">
                    <div className="text-2xl font-bold text-primary">7.5</div>
                    <div className="text-xs text-muted-foreground">Listening</div>
                  </div>
                  <div className="text-center px-4">
                    <div className="text-2xl font-bold text-primary">8.5</div>
                    <div className="text-xs text-muted-foreground">Reading</div>
                  </div>
                  <div className="text-center px-4">
                    <div className="text-2xl font-bold text-primary">6.0</div>
                    <div className="text-xs text-muted-foreground">Writing</div>
                  </div>
                  <div className="text-center px-4">
                    <div className="text-2xl font-bold text-primary">6.5</div>
                    <div className="text-xs text-muted-foreground">Speaking</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
