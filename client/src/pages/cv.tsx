import { useRef } from "react";
import { ArrowLeft, Download, Printer, Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const personalInfo = {
  name: "Abdul Muhaimen Jamil Washi",
  title: "Fisheries Science Researcher & GIS Specialist",
  email: "amjwashi@gmail.com",
  phone: "+880 1735 910849",
  location: "Road No 3, Rahman Nagar A Block, Chittagong-4203, Bangladesh",
  linkedin: "linkedin.com/in/muhaimenwashi",
  nationality: "Bangladeshi",
  dob: "June 7, 2000",
};

const summary = `I am a fisheries science student with interests in aquatic ecology, climate-ecosystem interactions, and biodiversity restoration. I have practical experience in GIS, programming, and research within fisheries and climate studies. I aim to use data-driven and spatial approaches to support ecosystem recovery and biodiversity outcomes, especially in coastal environments.`;

const education = [
  {
    degree: "Master of Science in Fisheries Management",
    institution: "University of Chittagong",
    location: "Hathazari, Chittagong-4331",
    period: "May 2025 - Current",
    details: "CGPA: Appeared (36 Credits)",
    courses: ["Applied Fisheries Technology", "Fisheries Resources Systems", "Community Based Fisheries Management", "Fisheries Genetics and Molecular Biology", "Blue Economy and Sustainable Development", "Fisheries Project Formulation, Evaluation & Management"],
  },
  {
    degree: "Bachelor of Science in Fisheries (Honours)",
    institution: "University of Chittagong",
    location: "Hathazari, Chittagong-4331",
    period: "January 2019 - May 2025",
    details: "CGPA: 3.65/4.00 (160 Credits)",
    courses: ["Bio-statistics", "Fisheries Economics", "Environmental Management", "Remote Sensing and GIS in Fisheries", "Climate Change and Fisheries", "Aquaculture Planning and Engineering", "Computer Application", "Fisheries Resources Management", "Environmental Impact Assessment", "Fish and Shellfish Disease and Management", "Fish Pharmacology", "Post-Harvest Technology", "Hatchery Operation and Management", "Fish Population Dynamics"],
  },
];

const researchInterests = [
  "Climate change and fisheries productivity",
  "Ecosystem-based conservation and global change biodiversity dynamics",
  "GIS and remote sensing in fisheries",
  "Coastal and estuarine ecosystem restoration",
  "Community-based fisheries and livelihood resilience",
];

const researchExperience = [
  {
    title: "Climate-Driven Shifts in Inland Fisheries Productivity in Northern Bangladesh: A Spatio-Temporal Analysis",
    role: "Thesis Research Student",
    period: "May 2025 - Current",
    supervisor: "Dr. Md. Rashed-Un-Nabi, Professor, Department of Fisheries, University of Chittagong",
    summary: "Conducting an integrated GIS and statistical analysis to examine how climate variability influences inland fisheries productivity in northern Bangladesh.",
  },
  {
    title: "Impacts of Climate Change on Fishery-Dependent Livelihoods in the Hakaluki Haor Wetland of Bangladesh",
    role: "Term Paper Research Student",
    period: "May 2024 - April 2025",
    supervisor: "Dr. Md. Rashed-Un-Nabi, Professor, Department of Fisheries, University of Chittagong",
    summary: "Analyzed impacts of climate change on fishery-dependent livelihoods using Sustainable Livelihood Framework (SLF).",
    techniques: ["Sustainable Livelihood Framework", "Mixed-Methods Approach", "QGIS", "ArcGIS", "Google Earth Pro"],
  },
  {
    title: "Basic Programming with Python - EDGE Project",
    role: "Trainee at Bangladesh Computer Council, ICT Division",
    period: "May 2024 - December 2024",
    summary: "60-hour, 6-month training program covering fundamental Python topics with capstone project.",
  },
  {
    title: "Qualitative Data Analysis with NVivo",
    role: "Trainee at Datascape Research & Consultancy Ltd",
    period: "December 2023",
    summary: "Five-day training on NVivo focusing on qualitative data analysis, coding, and thematic analysis.",
  },
  {
    title: "Participatory GIS Train the Trainer Workshop",
    role: "Trainee - West Virginia University YouthMappers Program",
    period: "January 2023",
    summary: "Eight-hour training on Participatory GIS led by Dr. Brent McCusker.",
  },
  {
    title: "Sanitation & Hygiene Mapping Fieldwork",
    role: "Research Team Member",
    period: "August 2022 - December 2022",
    summary: "Field survey design and QGIS-based spatial analysis for WASH condition evaluation. Funded by YouthMappers and US Department of State's MapGive program.",
  },
];

const publications = [
  {
    title: "Bridging the gap: enhancing socio-ecological resilience by breaking the debt cycle among small-scale hilsa fishers in Bangladesh",
    journal: "Maritime Studies",
    year: "2024",
    link: "https://link.springer.com/article/10.1007/s40152-024-00355-3",
  },
];

const skills = {
  geospatial: ["QGIS", "ArcGIS Pro", "KoboToolbox", "NVivo"],
  technical: ["Python", "R/RStudio (TropFishR, DBI, ggplot2, JABBA, LBSPR, LBB)", "Microsoft Office"],
  design: ["Adobe Illustrator", "Adobe Photoshop (Basic)", "Adobe Lightroom"],
  research: ["Data Collection", "Data Processing", "Data Analysis", "Data Visualization", "Organizational and planning skills", "Good listener and communicator"],
};

const leadership = [
  { position: "President", organization: "CUSS YouthMappers", period: "October 2025 - Current", location: "Chittagong, Bangladesh" },
  { position: "Student Member", organization: "South Asian Meteorological Association (SAMA)", period: "June 2025 - Current", location: "New Delhi, India" },
  { position: "General Member", organization: "National Oceanographic And Maritime Institute (NOAMI)", period: "May 2025 - Current", location: "Dhaka, Bangladesh" },
  { position: "Convener", organization: "Chittagong Science Carnival 4.0", period: "February 2025", location: "Chittagong, Bangladesh" },
  { position: "Vice President", organization: "Chapainawabganj District Students' Association, University of Chittagong", period: "February 2024 - March 2025", location: "Chittagong, Bangladesh" },
  { position: "Convener", organization: "Chittagong Science Carnival 3.0", period: "June 2023", location: "Chittagong, Bangladesh" },
  { position: "General Secretary", organization: "Chittagong University Scientific Society", period: "January 2023 - February 2024", location: "Chittagong, Bangladesh" },
];

const ielts = { overall: 7.0, listening: 7.5, reading: 8.5, writing: 6.0, speaking: 6.5, date: "September 2025" };

export default function CVPage() {
  const cvRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border print:hidden">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm" data-testid="button-back-home">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handlePrint} data-testid="button-print-cv">
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
            <Button size="sm" onClick={handlePrint} data-testid="button-download-cv">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </div>

      <div ref={cvRef} className="max-w-4xl mx-auto px-4 py-8 print:py-0 print:px-0 print:max-w-none">
        <div className="bg-card border border-card-border rounded-lg print:border-0 print:rounded-none print:bg-white">
          <div className="p-8 print:p-6 space-y-6 print:space-y-4">
            <header className="text-center border-b border-border pb-6 print:pb-4">
              <h1 className="text-3xl font-serif font-bold text-foreground print:text-2xl print:text-black">
                {personalInfo.name}
              </h1>
              <p className="text-lg text-primary font-medium mt-1 print:text-gray-700">
                {personalInfo.title}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-sm text-muted-foreground print:text-gray-600 print:gap-3">
                <span className="flex items-center gap-1">
                  <Mail className="h-3.5 w-3.5" />
                  {personalInfo.email}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="h-3.5 w-3.5" />
                  {personalInfo.phone}
                </span>
                <span className="flex items-center gap-1">
                  <Linkedin className="h-3.5 w-3.5" />
                  {personalInfo.linkedin}
                </span>
              </div>
              <div className="flex items-center justify-center gap-1 mt-2 text-sm text-muted-foreground print:text-gray-600">
                <MapPin className="h-3.5 w-3.5" />
                {personalInfo.location}
              </div>
            </header>

            <section>
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-1 mb-3 print:text-black">
                Summary
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed print:text-gray-700">
                {summary}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-1 mb-3 print:text-black">
                Research Interests
              </h2>
              <p className="text-sm text-muted-foreground print:text-gray-700">
                {researchInterests.join(" • ")}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-1 mb-3 print:text-black">
                Education
              </h2>
              <div className="space-y-4 print:space-y-3">
                {education.map((edu, idx) => (
                  <div key={idx}>
                    <div className="flex flex-wrap justify-between gap-2">
                      <h3 className="font-medium text-foreground print:text-black">{edu.degree}</h3>
                      <span className="text-sm text-muted-foreground print:text-gray-600">{edu.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground print:text-gray-600">
                      {edu.institution}, {edu.location}
                    </p>
                    <p className="text-sm text-muted-foreground print:text-gray-600">{edu.details}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-1 mb-3 print:text-black">
                Research Experience
              </h2>
              <div className="space-y-4 print:space-y-3">
                {researchExperience.map((exp, idx) => (
                  <div key={idx}>
                    <div className="flex flex-wrap justify-between gap-2">
                      <h3 className="font-medium text-foreground print:text-black text-sm">{exp.title}</h3>
                      <span className="text-xs text-muted-foreground print:text-gray-600">{exp.period}</span>
                    </div>
                    <p className="text-sm text-primary print:text-gray-700">{exp.role}</p>
                    {exp.supervisor && (
                      <p className="text-xs text-muted-foreground print:text-gray-600">Supervisor: {exp.supervisor}</p>
                    )}
                    <p className="text-sm text-muted-foreground mt-1 print:text-gray-700">{exp.summary}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-1 mb-3 print:text-black">
                Publications
              </h2>
              {publications.map((pub, idx) => (
                <div key={idx} className="text-sm">
                  <p className="text-muted-foreground print:text-gray-700">
                    <span className="font-medium text-foreground print:text-black">{pub.title}</span>
                    {" "}({pub.year}). <em>{pub.journal}</em>.
                  </p>
                </div>
              ))}
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-1 mb-3 print:text-black">
                Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm print:gap-2">
                <div>
                  <h4 className="font-medium text-foreground print:text-black">Geospatial Tools</h4>
                  <p className="text-muted-foreground print:text-gray-700">{skills.geospatial.join(", ")}</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground print:text-black">Technical & Programming</h4>
                  <p className="text-muted-foreground print:text-gray-700">{skills.technical.join(", ")}</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground print:text-black">Design & Visualization</h4>
                  <p className="text-muted-foreground print:text-gray-700">{skills.design.join(", ")}</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground print:text-black">Research & Soft Skills</h4>
                  <p className="text-muted-foreground print:text-gray-700">{skills.research.join(", ")}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-1 mb-3 print:text-black">
                Leadership & Volunteering
              </h2>
              <div className="space-y-2 text-sm">
                {leadership.slice(0, 5).map((role, idx) => (
                  <div key={idx} className="flex flex-wrap justify-between gap-2">
                    <div>
                      <span className="font-medium text-foreground print:text-black">{role.position}</span>
                      <span className="text-muted-foreground print:text-gray-700"> - {role.organization}</span>
                    </div>
                    <span className="text-muted-foreground print:text-gray-600">{role.period}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-1 mb-3 print:text-black">
                Test Scores
              </h2>
              <div className="text-sm">
                <p className="text-muted-foreground print:text-gray-700">
                  <span className="font-medium text-foreground print:text-black">IELTS:</span> Overall {ielts.overall}/9.0 
                  (L: {ielts.listening}, R: {ielts.reading}, W: {ielts.writing}, S: {ielts.speaking}) - {ielts.date}
                </p>
              </div>
            </section>

            <footer className="text-center text-xs text-muted-foreground pt-4 border-t border-border print:text-gray-600">
              <p>References available upon request</p>
            </footer>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          body { 
            background: white !important; 
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .print\\:hidden { display: none !important; }
          @page { margin: 0.5in; size: A4; }
        }
      `}</style>
    </div>
  );
}
