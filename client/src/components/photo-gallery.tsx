import { useState } from "react";
import { Camera, X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface Photo {
  id: string;
  title: string;
  location: string;
  category: "fieldwork" | "travel" | "nature" | "research";
  description: string;
  placeholder: string;
}

const photos: Photo[] = [
  {
    id: "hakaluki-sunset",
    title: "Hakaluki Haor at Sunset",
    location: "Sylhet Division",
    category: "fieldwork",
    description: "Evening view during fieldwork at the Hakaluki Haor wetland, one of Asia's largest freshwater marshes.",
    placeholder: "bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600",
  },
  {
    id: "fishing-community",
    title: "Fishing Community Life",
    location: "Northern Bangladesh",
    category: "fieldwork",
    description: "Traditional fishing practices observed during the climate-fisheries research in northern Bangladesh.",
    placeholder: "bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-400",
  },
  {
    id: "gis-fieldwork",
    title: "GIS Field Mapping",
    location: "Chittagong",
    category: "research",
    description: "GPS data collection during the YouthMappers sanitation mapping project.",
    placeholder: "bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500",
  },
  {
    id: "wetland-ecosystem",
    title: "Wetland Ecosystem",
    location: "Hakaluki Haor",
    category: "nature",
    description: "Rich biodiversity of the haor ecosystem during the monsoon season.",
    placeholder: "bg-gradient-to-br from-green-600 via-emerald-500 to-cyan-500",
  },
  {
    id: "coastal-view",
    title: "Chittagong Coastline",
    location: "Chittagong",
    category: "travel",
    description: "Scenic coastal area near the University of Chittagong.",
    placeholder: "bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400",
  },
  {
    id: "research-team",
    title: "Research Team",
    location: "University of Chittagong",
    category: "research",
    description: "Collaborative fieldwork with fellow researchers from the Department of Fisheries.",
    placeholder: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
  },
  {
    id: "sunrise-haor",
    title: "Morning at Haor",
    location: "Sylhet Division",
    category: "nature",
    description: "Early morning mist over the wetland during field survey.",
    placeholder: "bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400",
  },
  {
    id: "science-carnival",
    title: "Science Carnival 4.0",
    location: "Chittagong",
    category: "research",
    description: "As Convener, organizing Chittagong Science Carnival 4.0 for science outreach.",
    placeholder: "bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "fieldwork", label: "Fieldwork" },
  { id: "research", label: "Research" },
  { id: "nature", label: "Nature" },
  { id: "travel", label: "Travel" },
];

export function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const filteredPhotos = selectedCategory === "all" 
    ? photos 
    : photos.filter(p => p.category === selectedCategory);

  const currentIndex = selectedPhoto ? filteredPhotos.findIndex(p => p.id === selectedPhoto.id) : -1;

  const goToNext = () => {
    if (currentIndex < filteredPhotos.length - 1) {
      setSelectedPhoto(filteredPhotos[currentIndex + 1]);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setSelectedPhoto(filteredPhotos[currentIndex - 1]);
    }
  };

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Photo Gallery
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visual stories from research fieldwork, travel experiences, and academic events.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              data-testid={`button-filter-${category.id}`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredPhotos.map((photo) => (
            <Card 
              key={photo.id} 
              className="overflow-hidden cursor-pointer group hover-elevate"
              onClick={() => openLightbox(photo)}
              data-testid={`card-photo-${photo.id}`}
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className={`absolute inset-0 ${photo.placeholder} transition-transform duration-300 group-hover:scale-105`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Camera className="h-12 w-12 text-white/50" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                    <h3 className="font-medium text-sm">{photo.title}</h3>
                    <p className="text-xs text-white/80 flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3" />
                      {photo.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Photography is one of my hobbies. These placeholder images represent photos 
            from fieldwork and travels. High-quality images can be added here.
          </p>
        </div>

        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black/95 border-none">
            <DialogTitle className="sr-only">
              {selectedPhoto?.title || "Photo"}
            </DialogTitle>
            {selectedPhoto && (
              <div className="relative">
                <div className={`aspect-[16/10] ${selectedPhoto.placeholder}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="h-24 w-24 text-white/30" />
                  </div>
                </div>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 text-white hover:bg-white/20"
                  onClick={() => setLightboxOpen(false)}
                  data-testid="button-close-lightbox"
                >
                  <X className="h-6 w-6" />
                </Button>

                {currentIndex > 0 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                    onClick={goToPrev}
                    data-testid="button-prev-photo"
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>
                )}

                {currentIndex < filteredPhotos.length - 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                    onClick={goToNext}
                    data-testid="button-next-photo"
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>
                )}

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="capitalize">
                      {selectedPhoto.category}
                    </Badge>
                    <span className="text-sm text-white/70 flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {selectedPhoto.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-sm text-white/80">
                    {selectedPhoto.description}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
