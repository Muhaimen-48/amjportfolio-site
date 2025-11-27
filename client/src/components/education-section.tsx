import { GraduationCap, Calendar, Award, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  cgpa?: string;
  credits?: string;
  status: "current" | "completed";
  courses: string[];
}

const educationData: Education[] = [
  {
    id: "msc",
    degree: "Master of Science",
    field: "Fisheries Management",
    institution: "University of Chittagong",
    location: "Hathazari, Chittagong-4331",
    period: "May 2025 - Current",
    cgpa: "Appeared",
    credits: "36 Credits",
    status: "current",
    courses: [
      "Applied Fisheries Technology",
      "Fisheries Resources Systems",
      "Community Based Fisheries Management",
      "Fisheries Genetics and Molecular Biology",
      "Blue Economy and Sustainable Development",
      "Fisheries Project Formulation, Evaluation & Management",
    ],
  },
  {
    id: "bsc",
    degree: "Bachelor of Science",
    field: "Fisheries (Honours)",
    institution: "University of Chittagong",
    location: "Hathazari, Chittagong-4331",
    period: "January 2019 - May 2025",
    cgpa: "3.65/4.00",
    credits: "160 Credits",
    status: "completed",
    courses: [
      "Bio-statistics",
      "Fisheries Economics",
      "Environmental Management",
      "Remote Sensing and GIS in Fisheries",
      "Climate Change and Fisheries",
      "Aquaculture Planning and Engineering",
      "Computer Application",
      "Fisheries Resources Management",
      "Environmental Impact Assessment",
      "Fish and Shellfish Disease and Management",
      "Fish Pharmacology",
      "Post-Harvest Technology",
      "Hatchery Operation and Management",
      "Fish Population Dynamics",
    ],
  },
];

function EducationCard({ education }: { education: Education }) {
  const [showCourses, setShowCourses] = useState(false);

  return (
    <Card 
      className={`hover-elevate overflow-visible relative ${
        education.status === "current" ? "border-primary/30" : ""
      }`}
      data-testid={`card-education-${education.id}`}
    >
      {education.status === "current" && (
        <div className="absolute -top-px left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
      )}
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <GraduationCap className="h-7 w-7 text-primary" />
          </div>
          
          <div className="flex-1 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge 
                variant={education.status === "current" ? "default" : "secondary"}
                className="text-xs"
              >
                {education.status === "current" ? "In Progress" : "Completed"}
              </Badge>
              <span className="flex items-center text-xs text-muted-foreground gap-1">
                <Calendar className="h-3 w-3" />
                {education.period}
              </span>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground">
                {education.degree}
              </h3>
              <p className="text-primary font-medium">{education.field}</p>
            </div>

            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground">{education.institution}</p>
              <p>{education.location}</p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              {education.cgpa && (
                <div className="flex items-center gap-1.5">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-sm">
                    <span className="font-medium text-foreground">CGPA:</span>{" "}
                    <span className="text-muted-foreground">{education.cgpa}</span>
                  </span>
                </div>
              )}
              {education.credits && (
                <span className="text-sm text-muted-foreground">
                  {education.credits}
                </span>
              )}
            </div>

            <div className="pt-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground -ml-3"
                onClick={() => setShowCourses(!showCourses)}
                data-testid={`button-courses-${education.id}`}
              >
                {showCourses ? (
                  <>
                    Hide Core Courses <ChevronUp className="h-4 w-4 ml-1" />
                  </>
                ) : (
                  <>
                    View Core Courses ({education.courses.length}) <ChevronDown className="h-4 w-4 ml-1" />
                  </>
                )}
              </Button>

              {showCourses && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {education.courses.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function EducationSection() {
  return (
    <section id="education" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Academic Background
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in fisheries science at the University of Chittagong.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="relative">
            <div className="absolute left-7 top-20 bottom-20 w-0.5 bg-border hidden sm:block" />
            <div className="space-y-6 relative">
              {educationData.map((education) => (
                <EducationCard key={education.id} education={education} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
