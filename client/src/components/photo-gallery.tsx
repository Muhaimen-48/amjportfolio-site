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
  image?: string;
}

const photos: Photo[] = [
  {
    id: "hakaluki-1",
    title: "Field Interviews with Small-scale Fishers",
    location: "Hakaluki Haor, Gilachhara, Fenchuganj, Sylhet",
    category: "fieldwork",
    description: "Engaging with the fishing community at Hakaluki Haor to collect primary data for my research on climate-driven livelihood vulnerabilities.",
    placeholder: "bg-gradient-to-br from-orange-400 to-purple-600",
    image: "/images/Hakaluki1.jpg",
  },
  {
    id: "hakaluki-2",
    title: "Focus Group Discussions and Community Surveys",
    location: "Gilachhara Ghater bazar, Fenchuganj, Sylhet",
    category: "fieldwork",
    description: "Conducting semi-structured interviews with local residents to assess the socio-economic impacts of environmental shifts and traditional coping mechanisms.",
    placeholder: "bg-gradient-to-br from-blue-400 to-teal-400",
    image: "/images/Hakaluki2.jpg",
  },
  {
    id: "sundarban",
    title: "Sundarbans Excursion",
    location: "Dublar Char, Sundarbans",
    category: "fieldwork",
    description: "Observing traditional livelihood practices at Dublar Char in the world's largest mangrove forest.",
    placeholder: "bg-gradient-to-br from-green-500 to-emerald-500",
    image: "/images/Sundarban.jpg",
  },
  {
    id: "gis-workshop",
    title: "GIS Workshop with YouthMappers",
    location: "University of Chittagong",
    category: "research",
    description: "Participating in a spatial data analysis workshop as part of the CUSS YouthMappers chapter.",
    placeholder: "bg-gradient-to-br from-indigo-500 to-pink-500",
    image: "/images/GIS Workshop with YouthMappers.jpg",
  },
  {
    id: "sanitation",
    title: "Sanitation Mapping",
    location: "Shantinagar, Chittagong",
    category: "research",
    description: "Field data collection for the Sanitation & Hygiene Mapping project of YouthMappers.",
    placeholder: "bg-gradient-to-br from-gray-400 to-slate-600",
    image: "/images/Sanitation.png",
  },
  {
    id: "research-fair",
    title: "Jamal Nazrul Islam Research Excellence Award",
    location: "University of Chittagong",
    category: "research",
    description: "Achieved Jamal Nazrul Islam Research Excellence Award in the Category of 'Best Stall Award' in 2023-24. Led the Department team in this fair.",
    placeholder: "bg-gradient-to-br from-red-500 to-orange-400",
    image: "/images/Research Fair.jpg",
  },
  {
    id: "science-carnival",
    title: "Science Carnival Convener",
    location: "University of Chittagong",
    category: "research",
    description: "Serving as Convener for Chittagong Science Carnival 3.0 to promote scientific outreach.",
    placeholder: "bg-gradient-to-br from-violet-500 to-fuchsia-500",
    image: "/images/carnival.jpg",
  },
  {
    id: "organizer",
    title: "Organizing Research Capacity Building Workshops",
    location: "Department of Oceanography, University of Chittagong",
    category: "research",
    description: "Serving as the lead organizer for CUSS YouthMappers to host 'Mapping the Future with Next-Gen Research Skills.' I coordinated the event logistics and brought together experts to train students in AI, climate modeling, and survey analysis.",
    placeholder: "bg-gradient-to-br from-yellow-500 to-orange-500",
    image: "/images/Organizer.jpg",
  },
  {
    id: "term-paper-submission",
    title: "Academic Milestone: Term Paper Submission",
    location: "Department of Fisheries, University of Chittagong",
    category: "research",
    description: "Successfully submitting my research term paper on climate change impacts and fisheries livelihoods to my supervisor. This milestone represents the culmination of extensive field data collection and academic analysis.",
    placeholder: "bg-gradient-to-br from-blue-600 to-cyan-500",
    image: "/images/Term paper.jpg",
  },
  {
    id: "sotm",
    title: "State of the Map Asia (SOTM Asia)",
    location: "Cox's Bazar, Bangladesh",
    category: "research",
    description: "Participating in the SOTM Asia conference to discuss open-source mapping and GIS innovations.",
    placeholder: "bg-gradient-to-br from-teal-500 to-emerald-600",
    image: "/images/SOTM.jpg",
  },
  {
    id: "pgis",
    title: "Participatory GIS Session",
    location: "Radisson Blu, Chittagong, Bangladesh",
    category: "research",
    description: "Participating in an advanced PGIS Train-the-Trainer workshop led by Dr. Brent McCusker (West Virginia University). This collaboration between Bangladesh and Nepal YouthMappers focused on enhancing geospatial data collection and community mapping methodologies.",
    placeholder: "bg-gradient-to-br from-blue-500 to-indigo-600",
    image: "/images/PGIS.jpg",
  },
  {
    id: "cuss-general-secretary",
    title: "Leadership Milestone: General Secretary of CUSS",
    location: "Social Science Auditorium, University of Chittagong",
    category: "research",
    description: "Concluding my tenure as the General Secretary of Chittagong University Scientific Society. During my term, I oversaw organizational growth, mentored student researchers, and spearheaded multiple interdisciplinary scientific initiatives.",
    placeholder: "bg-gradient-to-br from-blue-300 to-indigo-400",
    image: "/images/GS.jpg",
  }
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
                    {photo.image ? (
                      <img src={photo.image} alt={photo.title} className="h-full w-full object-cover" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Camera className="h-12 w-12 text-white/50" />
                      </div>
                    )}
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
            Photography is one of my hobbies. High-quality images from my fieldwork and academic journey are featured here.
          </p>
        </div>

        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black/95 border-none">
            <DialogTitle className="sr-only">
              {selectedPhoto?.title || "Photo"}
            </DialogTitle>
            {selectedPhoto && (
              <div className="relative">
                <div className={`aspect-[16/10] ${selectedPhoto.placeholder} relative`}>
                  {selectedPhoto.image ? (
                    <img src={selectedPhoto.image} alt={selectedPhoto.title} className="h-full w-full object-contain" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Camera className="h-24 w-24 text-white/30" />
                    </div>
                  )}
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