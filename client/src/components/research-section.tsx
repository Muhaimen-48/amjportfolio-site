import { Calendar, User, ChevronDown, ChevronUp, MapPin, FlaskConical, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "wouter";

interface ResearchProject {
  id: string;
  title: string;
  role: string;
  period: string;
  supervisor?: {
    name: string;
    title: string;
    email: string;
  };
  summary: string;
  techniques: string[];
  status: "ongoing" | "completed";
  detailPageId?: string;
}

const researchProjects: ResearchProject[] = [
  {
    id: "thesis",
    title: "Climate-Driven Shifts in Inland Fisheries Productivity in Northern Bangladesh: A Spatio-Temporal Analysis",
    role: "Thesis Research Student",
    period: "May 2025 - Current",
    supervisor: {
      name: "Dr. Md. Rashed-Un-Nabi",
      title: "Professor, Department of Fisheries, University of Chittagong",
      email: "rashed.nabi@cu.ac.bd",
    },
    summary: "Conducting an integrated GIS and statistical analysis to examine how climate variability (temperature and rainfall changes) influences inland fisheries productivity in northern Bangladesh. The research aims to identify vulnerable areas, quantify climate-fishery linkages, and propose adaptive strategies for sustainable fisheries management.",
    techniques: ["GIS Analysis", "Statistical Modeling", "Climate Data Analysis", "Spatial Analysis"],
    status: "ongoing",
    detailPageId: "climate-fisheries-northern-bangladesh",
  },
  {
    id: "hakaluki",
    title: "Impacts of Climate Change on Fishery-Dependent Livelihoods in the Hakaluki Haor Wetland of Bangladesh",
    role: "Term Paper Research Student",
    period: "May 2024 - April 2025",
    supervisor: {
      name: "Dr. Md. Rashed-Un-Nabi",
      title: "Professor, Department of Fisheries, University of Chittagong",
      email: "rashed.nabi@cu.ac.bd",
    },
    summary: "The study analyzes the impacts of climate change on fishery-dependent livelihoods in the Hakaluki Haor wetland of Bangladesh, employing the Sustainable Livelihood Framework (SLF) to assess local fishing communities' vulnerabilities and coping strategies.",
    techniques: ["Sustainable Livelihood Framework", "Mixed-Methods Approach", "QGIS", "ArcGIS", "Google Earth Pro", "Adobe Illustrator", "Thematic Analysis"],
    status: "completed",
    detailPageId: "hakaluki-haor-climate-livelihoods",
  },
  {
    id: "python",
    title: "Basic Programming with Python - EDGE Project",
    role: "Trainee at Bangladesh Computer Council, ICT Division",
    period: "May 2024 - December 2024",
    summary: "A 60-hour, 6-month training program covering fundamental Python topics, including a capstone project and hands-on exercises for practical learning.",
    techniques: ["Python", "Data Structures", "Algorithms", "Capstone Project"],
    status: "completed",
  },
  {
    id: "nvivo",
    title: "Qualitative Data Analysis with NVivo",
    role: "Trainee at Datascape Research & Consultancy Ltd",
    period: "December 2023",
    summary: "A comprehensive five-day online training program on NVivo, focusing on qualitative data analysis including data coding, thematic analysis, and organization of qualitative data.",
    techniques: ["NVivo", "Qualitative Analysis", "Data Coding", "Thematic Analysis"],
    status: "completed",
  },
  {
    id: "pgis",
    title: "Participatory GIS Train the Trainer Workshop",
    role: "Trainee",
    period: "January 2023",
    summary: "Completed an eight-hour in-person training on Participatory GIS, provided by West Virginia University through its YouthMappers program. The hands-on session was led by Dr. Brent McCusker and focused on training trainers in the use of GIS for participatory mapping and community-driven research.",
    techniques: ["Participatory GIS", "Community Mapping", "OpenStreetMap", "Field Mapping"],
    status: "completed",
  },
  {
    id: "wash",
    title: "Sanitation & Hygiene Mapping Fieldwork",
    role: "Research Team Member",
    period: "August 2022 - December 2022",
    summary: "Funded by the YouthMappers Fieldwork program and the US Department of State's MapGive program. Conducted field surveys for sanitation and hygiene mapping using GIS-based spatial analysis.",
    techniques: ["Field Survey Design", "QGIS", "Accessibility Mapping", "WASH Evaluation", "Community Engagement"],
    status: "completed",
    detailPageId: "sanitation-hygiene-mapping",
  },
];

function ResearchCard({ project }: { project: ResearchProject }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="hover-elevate overflow-visible" data-testid={`card-research-${project.id}`}>
      <CardHeader className="pb-3">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <Badge 
            variant={project.status === "ongoing" ? "default" : "secondary"}
            className="text-xs"
          >
            {project.status === "ongoing" ? "Ongoing" : "Completed"}
          </Badge>
          <span className="flex items-center text-xs text-muted-foreground gap-1">
            <Calendar className="h-3 w-3" />
            {project.period}
          </span>
        </div>
        <CardTitle className="text-lg font-semibold leading-snug">
          {project.title}
        </CardTitle>
        <p className="text-sm text-primary font-medium flex items-center gap-1.5 mt-1">
          <FlaskConical className="h-3.5 w-3.5" />
          {project.role}
        </p>
      </CardHeader>
      <CardContent className="pt-0 space-y-4">
        {project.supervisor && (
          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <User className="h-4 w-4 mt-0.5 shrink-0" />
            <div>
              <span className="font-medium text-foreground">{project.supervisor.name}</span>
              <br />
              <span className="text-xs">{project.supervisor.title}</span>
            </div>
          </div>
        )}

        <p className={`text-sm text-muted-foreground leading-relaxed ${!isExpanded ? "line-clamp-3" : ""}`}>
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.techniques.slice(0, isExpanded ? undefined : 4).map((technique) => (
            <span
              key={technique}
              className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded font-mono"
            >
              {technique}
            </span>
          ))}
          {!isExpanded && project.techniques.length > 4 && (
            <span className="px-2 py-0.5 text-muted-foreground text-xs">
              +{project.techniques.length - 4} more
            </span>
          )}
        </div>

        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="flex-1 text-muted-foreground"
            onClick={() => setIsExpanded(!isExpanded)}
            data-testid={`button-expand-${project.id}`}
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="h-4 w-4 ml-1" />
              </>
            ) : (
              <>
                Show More <ChevronDown className="h-4 w-4 ml-1" />
              </>
            )}
          </Button>
          {project.detailPageId && (
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <Link href={`/research/${project.detailPageId}`} data-testid={`link-research-detail-${project.id}`}>
                View Details <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export function ResearchSection() {
  return (
    <section id="research" className="py-20 sm:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Research Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My research focuses on understanding climate-ecosystem interactions and developing 
            data-driven approaches for sustainable fisheries management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {researchProjects.map((project) => (
            <ResearchCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
