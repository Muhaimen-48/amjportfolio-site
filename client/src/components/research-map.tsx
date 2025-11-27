import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

interface ResearchLocation {
  id: string;
  name: string;
  shortName: string;
  coordinates: [number, number];
  description: string;
  period: string;
  status: "ongoing" | "completed";
  detailPageId?: string;
}

const researchLocations: ResearchLocation[] = [
  {
    id: "northern-bangladesh",
    name: "Northern Bangladesh Climate-Fisheries Study",
    shortName: "Northern Bangladesh",
    coordinates: [25.0, 89.5],
    description: "Thesis research examining climate-driven shifts in inland fisheries productivity through spatio-temporal GIS analysis.",
    period: "May 2025 - Current",
    status: "ongoing",
    detailPageId: "climate-fisheries-northern-bangladesh",
  },
  {
    id: "hakaluki-haor",
    name: "Hakaluki Haor Wetland Study",
    shortName: "Hakaluki Haor",
    coordinates: [24.6, 92.1],
    description: "Research on climate change impacts on fishery-dependent livelihoods using Sustainable Livelihood Framework.",
    period: "May 2024 - April 2025",
    status: "completed",
    detailPageId: "hakaluki-haor-climate-livelihoods",
  },
  {
    id: "chittagong",
    name: "Sanitation & Hygiene Mapping",
    shortName: "Chittagong",
    coordinates: [22.3569, 91.7832],
    description: "Field surveys for WASH condition evaluation using QGIS-based spatial analysis.",
    period: "Aug 2022 - Dec 2022",
    status: "completed",
    detailPageId: "sanitation-hygiene-mapping",
  },
  {
    id: "university",
    name: "University of Chittagong",
    shortName: "University",
    coordinates: [22.4618, 91.7906],
    description: "Academic base - Department of Fisheries. Currently pursuing MSc in Fisheries Management.",
    period: "2019 - Present",
    status: "ongoing",
  },
];

function MapBounds() {
  const map = useMap();
  
  useEffect(() => {
    const bounds = L.latLngBounds(researchLocations.map(loc => loc.coordinates));
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [map]);

  return null;
}

export function ResearchMap() {
  const center: [number, number] = [23.8, 90.4];

  return (
    <section id="map" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Research Locations
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the geographic scope of my research across Bangladesh, from coastal regions 
            to inland wetlands and northern fisheries.
          </p>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="h-[500px] w-full relative">
              <MapContainer
                center={center}
                zoom={7}
                scrollWheelZoom={true}
                className="h-full w-full z-0"
                style={{ background: "hsl(var(--muted))" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapBounds />
                {researchLocations.map((location) => (
                  <Marker key={location.id} position={location.coordinates}>
                    <Popup className="research-popup" minWidth={280} maxWidth={320}>
                      <div className="p-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge 
                            variant={location.status === "ongoing" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {location.status === "ongoing" ? "Ongoing" : "Completed"}
                          </Badge>
                          <span className="flex items-center text-xs text-muted-foreground gap-1">
                            <Calendar className="h-3 w-3" />
                            {location.period}
                          </span>
                        </div>
                        <h3 className="font-semibold text-foreground text-sm mb-1">
                          {location.name}
                        </h3>
                        <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                          {location.description}
                        </p>
                        {location.detailPageId && (
                          <Link href={`/research/${location.detailPageId}`}>
                            <Button size="sm" variant="outline" className="w-full">
                              View Project <ArrowRight className="h-3 w-3 ml-1" />
                            </Button>
                          </Link>
                        )}
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {researchLocations.map((location) => (
            <Card 
              key={location.id} 
              className="hover-elevate overflow-visible"
              data-testid={`card-location-${location.id}`}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-foreground text-sm truncate">
                      {location.shortName}
                    </h4>
                    <p className="text-xs text-muted-foreground">{location.period}</p>
                    <Badge 
                      variant={location.status === "ongoing" ? "default" : "secondary"}
                      className="text-xs mt-1"
                    >
                      {location.status === "ongoing" ? "Ongoing" : "Completed"}
                    </Badge>
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
