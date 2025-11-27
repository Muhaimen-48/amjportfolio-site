import { ArrowLeft, Calendar, User, MapPin, ExternalLink, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useParams } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

interface ResearchProject {
  id: string;
  title: string;
  shortTitle: string;
  role: string;
  period: string;
  status: "ongoing" | "completed";
  supervisor?: {
    name: string;
    title: string;
    email: string;
  };
  location: string;
  coordinates: { lat: number; lng: number };
  summary: string;
  objectives: string[];
  methodology: string[];
  techniques: string[];
  keyFindings?: string[];
  impact?: string;
  relatedPublications?: string[];
  images?: string[];
}

const researchProjects: Record<string, ResearchProject> = {
  "climate-fisheries-northern-bangladesh": {
    id: "climate-fisheries-northern-bangladesh",
    title: "Climate-Driven Shifts in Inland Fisheries Productivity in Northern Bangladesh: A Spatio-Temporal Analysis",
    shortTitle: "Climate-Fisheries Northern Bangladesh",
    role: "Thesis Research Student",
    period: "May 2025 - Current",
    status: "ongoing",
    supervisor: {
      name: "Dr. Md. Rashed-Un-Nabi",
      title: "Professor, Department of Fisheries, University of Chittagong",
      email: "rashed.nabi@cu.ac.bd",
    },
    location: "Northern Bangladesh",
    coordinates: { lat: 25.0, lng: 89.5 },
    summary: "This research conducts an integrated GIS and statistical analysis to examine how climate variability (temperature and rainfall changes) influences inland fisheries productivity in northern Bangladesh. The study aims to identify vulnerable areas, quantify climate-fishery linkages, and propose adaptive strategies for sustainable fisheries management.",
    objectives: [
      "Analyze spatial and temporal patterns of climate variability in northern Bangladesh",
      "Assess the relationship between climate parameters and inland fisheries productivity",
      "Identify climate-vulnerable areas and fishing communities",
      "Develop adaptive management strategies for sustainable fisheries",
      "Create predictive models for fisheries productivity under different climate scenarios",
    ],
    methodology: [
      "Collection and analysis of historical climate data (temperature, rainfall) from Bangladesh Meteorological Department",
      "Fisheries production data analysis from Department of Fisheries",
      "GIS-based spatial analysis using QGIS and ArcGIS Pro",
      "Statistical correlation and regression analysis",
      "Stakeholder interviews with local fishing communities",
      "Scenario modeling for future climate impacts",
    ],
    techniques: ["GIS Analysis", "Statistical Modeling", "Climate Data Analysis", "Spatial Analysis", "Remote Sensing", "Time Series Analysis"],
    impact: "This research will provide critical insights for policymakers and fisheries managers to develop climate-adaptive strategies for the vulnerable fishing communities in northern Bangladesh.",
  },
  "hakaluki-haor-climate-livelihoods": {
    id: "hakaluki-haor-climate-livelihoods",
    title: "Impacts of Climate Change on Fishery-Dependent Livelihoods in the Hakaluki Haor Wetland of Bangladesh",
    shortTitle: "Hakaluki Haor Climate Study",
    role: "Term Paper Research Student",
    period: "May 2024 - April 2025",
    status: "completed",
    supervisor: {
      name: "Dr. Md. Rashed-Un-Nabi",
      title: "Professor, Department of Fisheries, University of Chittagong",
      email: "rashed.nabi@cu.ac.bd",
    },
    location: "Hakaluki Haor, Sylhet Division",
    coordinates: { lat: 24.6, lng: 92.1 },
    summary: "The study analyzes the impacts of climate change on fishery-dependent livelihoods in the Hakaluki Haor wetland of Bangladesh, employing the Sustainable Livelihood Framework (SLF) to assess local fishing communities' vulnerabilities and coping strategies. The research identifies significant challenges these communities face, including reduced fish stocks, increased weather-related disruptions, and a lack of sufficient adaptation support.",
    objectives: [
      "Document climate change impacts on the Hakaluki Haor ecosystem",
      "Assess vulnerability of fishery-dependent households using SLF",
      "Identify coping and adaptation strategies employed by fishing communities",
      "Analyze livelihood assets and their climate sensitivity",
      "Recommend policy interventions for enhanced community resilience",
    ],
    methodology: [
      "Sustainable Livelihood Framework (SLF) application",
      "Mixed-methods research approach combining quantitative surveys and qualitative interviews",
      "Household surveys with fishery-dependent families",
      "Key informant interviews with community leaders and government officials",
      "Focus group discussions with fishing communities",
      "GIS mapping of vulnerable areas",
    ],
    techniques: ["Sustainable Livelihood Framework", "Mixed-Methods Approach", "QGIS", "ArcGIS", "Google Earth Pro", "Adobe Illustrator", "Thematic Analysis", "Statistical Analysis"],
    keyFindings: [
      "Significant decline in fish catch reported by 85% of respondents over the past decade",
      "Increased frequency of flash floods affecting fishing activities",
      "Limited access to formal credit and insurance for fishing communities",
      "Traditional ecological knowledge being lost due to changing conditions",
      "Diversification into non-fishing livelihoods as primary coping strategy",
    ],
    impact: "The findings contribute to understanding climate adaptation needs for wetland-dependent communities and inform policy recommendations for the Department of Fisheries and local government bodies.",
  },
  "sanitation-hygiene-mapping": {
    id: "sanitation-hygiene-mapping",
    title: "Sanitation & Hygiene Mapping Fieldwork",
    shortTitle: "WASH Mapping Project",
    role: "Research Team Member",
    period: "August 2022 - December 2022",
    status: "completed",
    location: "Chittagong Region",
    coordinates: { lat: 22.3569, lng: 91.7832 },
    summary: "Jointly funded by the YouthMappers Fieldwork program and the US Department of State's MapGive program, this project conducted comprehensive field surveys for sanitation and hygiene mapping using GIS-based spatial analysis and community engagement approaches.",
    objectives: [
      "Map sanitation infrastructure in target communities",
      "Assess WASH (Water, Sanitation, and Hygiene) conditions",
      "Identify accessibility gaps in sanitation services",
      "Create open-source geospatial data for community development",
      "Build local capacity in participatory mapping",
    ],
    methodology: [
      "Door-to-door latrine assessments",
      "Water point mapping and quality assessment",
      "Hygiene practice surveys",
      "Community stakeholder engagement",
      "OpenStreetMap data contribution",
      "QGIS-based spatial analysis",
    ],
    techniques: ["Field Survey Design", "QGIS", "Accessibility Mapping", "WASH Evaluation", "Community Engagement", "OpenStreetMap", "GPS Data Collection"],
    keyFindings: [
      "Identified critical gaps in sanitation coverage in peri-urban areas",
      "Mapped over 500 water points and sanitation facilities",
      "Created accessibility heat maps for service planning",
      "Trained 15 local volunteers in participatory mapping",
    ],
    impact: "The mapping data has been shared with local government and NGOs for infrastructure planning and has contributed to OpenStreetMap, benefiting humanitarian and development organizations.",
  },
};

export default function ResearchProjectPage() {
  const params = useParams<{ id: string }>();
  const projectId = params.id;
  const project = projectId ? researchProjects[projectId] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-serif font-bold text-foreground mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">The research project you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/#research">View All Research</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/#research">
              <Button variant="ghost" size="sm" className="mb-4" data-testid="button-back-research">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Research
              </Button>
            </Link>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant={project.status === "ongoing" ? "default" : "secondary"}>
                {project.status === "ongoing" ? "Ongoing" : "Completed"}
              </Badge>
              <span className="flex items-center text-sm text-muted-foreground gap-1">
                <Calendar className="h-4 w-4" />
                {project.period}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {project.role}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {project.location}
              </span>
            </div>
          </div>

          {project.supervisor && (
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Research Supervisor</h3>
                    <p className="text-primary font-medium">{project.supervisor.name}</p>
                    <p className="text-sm text-muted-foreground">{project.supervisor.title}</p>
                    <a 
                      href={`mailto:${project.supervisor.email}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {project.supervisor.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Project Summary</h2>
            <p className="text-muted-foreground leading-relaxed">{project.summary}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Research Objectives</h2>
            <ul className="space-y-2">
              {project.objectives.map((objective, idx) => (
                <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Methodology</h2>
            <ul className="space-y-2">
              {project.methodology.map((method, idx) => (
                <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{method}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Techniques & Tools</h2>
            <div className="flex flex-wrap gap-2">
              {project.techniques.map((technique) => (
                <span
                  key={technique}
                  className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-md font-mono"
                >
                  {technique}
                </span>
              ))}
            </div>
          </section>

          {project.keyFindings && project.keyFindings.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">Key Findings</h2>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {project.keyFindings.map((finding, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>
          )}

          {project.impact && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">Research Impact</h2>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">{project.impact}</p>
                </CardContent>
              </Card>
            </section>
          )}

          <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
            <Link href="/#research">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                All Research Projects
              </Button>
            </Link>
            <Link href="/#contact">
              <Button>
                Contact for Collaboration
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
