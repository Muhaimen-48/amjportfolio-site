import { ExternalLink, BookOpen, Calendar, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Publication {
  id: string;
  title: string;
  journal: string;
  year: string;
  authors?: string;
  abstract: string;
  link: string;
  openAccess: boolean;
  fundedBy?: string;
}

const publications: Publication[] = [
  {
    id: "hilsa-debt",
    title: "Bridging the gap: enhancing socio-ecological resilience by breaking the debt cycle among small-scale hilsa fishers in Bangladesh",
    journal: "Maritime Studies",
    year: "2024",
    abstract: "This research examines the socio-ecological resilience of small-scale hilsa fishers in Bangladesh, analyzing the debt cycles that affect fishing communities and proposing strategies to enhance their resilience while supporting sustainable fisheries management.",
    link: "https://link.springer.com/article/10.1007/s40152-024-00355-3",
    openAccess: true,
    fundedBy: "University of Helsinki",
  },
];

export function PublicationsSection() {
  return (
    <section id="publications" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Publications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Peer-reviewed research contributions to fisheries science and sustainable development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {publications.map((pub) => (
            <Card key={pub.id} className="hover-elevate overflow-visible" data-testid={`card-publication-${pub.id}`}>
              <CardHeader>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="default" className="text-xs">
                    <BookOpen className="h-3 w-3 mr-1" />
                    Research Article
                  </Badge>
                  {pub.openAccess && (
                    <Badge variant="secondary" className="text-xs bg-green-500/10 text-green-600 dark:text-green-400">
                      <Award className="h-3 w-3 mr-1" />
                      Open Access
                    </Badge>
                  )}
                  <span className="flex items-center text-xs text-muted-foreground gap-1">
                    <Calendar className="h-3 w-3" />
                    {pub.year}
                  </span>
                </div>
                <CardTitle className="text-xl font-semibold leading-snug">
                  {pub.title}
                </CardTitle>
                <p className="text-sm text-primary font-medium mt-2">
                  {pub.journal}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {pub.abstract}
                </p>
                
                {pub.fundedBy && (
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Open access funding:</span> {pub.fundedBy}
                  </p>
                )}

                <div className="pt-2">
                  <Button asChild>
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`link-publication-${pub.id}`}
                    >
                      Read Full Article
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block border-dashed">
            <CardContent className="py-8 px-12">
              <div className="flex flex-col items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="font-medium text-foreground">More Research Coming Soon</h3>
                <p className="text-sm text-muted-foreground max-w-sm">
                  Currently working on thesis research analyzing climate-driven shifts in inland 
                  fisheries productivity in northern Bangladesh.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
