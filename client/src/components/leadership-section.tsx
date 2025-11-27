import { Users, MapPin, Calendar, Award, Globe, Microscope } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface LeadershipRole {
  id: string;
  position: string;
  organization: string;
  location: string;
  country: string;
  period: string;
  type: "leadership" | "membership" | "event";
  current: boolean;
}

const leadershipRoles: LeadershipRole[] = [
  {
    id: "youthmappers-president",
    position: "President",
    organization: "CUSS YouthMappers",
    location: "Chittagong",
    country: "Bangladesh",
    period: "October 2025 - Current",
    type: "leadership",
    current: true,
  },
  {
    id: "sama-member",
    position: "Student Member",
    organization: "South Asian Meteorological Association (SAMA)",
    location: "New Delhi",
    country: "India",
    period: "June 2025 - Current",
    type: "membership",
    current: true,
  },
  {
    id: "noami-member",
    position: "General Member",
    organization: "National Oceanographic And Maritime Institute (NOAMI)",
    location: "Dhaka",
    country: "Bangladesh",
    period: "May 2025 - Current",
    type: "membership",
    current: true,
  },
  {
    id: "carnival-4",
    position: "Convener",
    organization: "Chittagong Science Carnival 4.0",
    location: "Chittagong",
    country: "Bangladesh",
    period: "February 2025",
    type: "event",
    current: false,
  },
  {
    id: "cdsa-vp",
    position: "Vice President",
    organization: "Chapainawabganj District Students' Association, University of Chittagong",
    location: "Chittagong",
    country: "Bangladesh",
    period: "February 2024 - March 2025",
    type: "leadership",
    current: false,
  },
  {
    id: "carnival-3",
    position: "Convener",
    organization: "Chittagong Science Carnival 3.0",
    location: "Chittagong",
    country: "Bangladesh",
    period: "June 2023",
    type: "event",
    current: false,
  },
  {
    id: "cuss-gs",
    position: "General Secretary",
    organization: "Chittagong University Scientific Society",
    location: "Chittagong",
    country: "Bangladesh",
    period: "January 2023 - February 2024",
    type: "leadership",
    current: false,
  },
  {
    id: "carnival-2",
    position: "Organizer",
    organization: "Chittagong Science Carnival 2.0",
    location: "Chittagong",
    country: "Bangladesh",
    period: "June 2022",
    type: "event",
    current: false,
  },
];

const teachingExperience = {
  role: "Science Tutor (O Level)",
  period: "2019 - Current",
  description: "Providing one-on-one instruction, developing teaching materials and optimizing lessons of high school students in chemistry, physics, biology and mathematics.",
};

function getTypeIcon(type: string) {
  switch (type) {
    case "leadership":
      return Users;
    case "membership":
      return Globe;
    case "event":
      return Microscope;
    default:
      return Award;
  }
}

function getTypeBadgeVariant(type: string): "default" | "secondary" | "outline" {
  switch (type) {
    case "leadership":
      return "default";
    case "membership":
      return "secondary";
    default:
      return "outline";
  }
}

export function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 sm:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Leadership & Volunteering
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Active involvement in scientific communities, student organizations, and science outreach events.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {leadershipRoles.map((role) => {
            const Icon = getTypeIcon(role.type);
            return (
              <Card 
                key={role.id} 
                className={`hover-elevate overflow-visible ${role.current ? "border-primary/30" : ""}`}
                data-testid={`card-leadership-${role.id}`}
              >
                <CardContent className="p-5">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      {role.current && (
                        <Badge variant="default" className="text-xs shrink-0">
                          Current
                        </Badge>
                      )}
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground">{role.position}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {role.organization}
                      </p>
                    </div>

                    <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {role.location}, {role.country}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {role.period}
                      </span>
                    </div>

                    <Badge variant={getTypeBadgeVariant(role.type)} className="text-xs capitalize">
                      {role.type}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg text-foreground">
                      {teachingExperience.role}
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {teachingExperience.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">
                    {teachingExperience.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Hobbies: Photography & Post-Editing (Lightroom), Student leadership & Event organizing, Travel & cultural exploration
          </p>
        </div>
      </div>
    </section>
  );
}
