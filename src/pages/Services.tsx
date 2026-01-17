import { useQuery } from "@tanstack/react-query";

import { Search, AlertCircle } from "lucide-react";
import { useState } from "react";
import { servicesService, type Service } from "../api/services/services";
import MainLayout from "../components/layout/MainLayout";
import { Input } from "../components/ui/input";
import { Skeleton } from "../components/ui/skeleton";
import ServiceCard from "../components/home/ServiceCard";

// Fallback mock services
const mockServices: Service[] = [
  { id: 1, name: "Web Development", description: "Professional web development services using modern technologies.", price: 999, category: "Development" },
  { id: 2, name: "Mobile App Design", description: "Beautiful and intuitive mobile app designs.", price: 799, category: "Design" },
  { id: 3, name: "Cloud Solutions", description: "Scalable cloud infrastructure and deployment solutions.", price: 599, category: "Infrastructure" },
  { id: 4, name: "Digital Marketing", description: "Strategic digital marketing campaigns.", price: 449, category: "Marketing" },
  { id: 5, name: "UI/UX Consulting", description: "Expert UI/UX consulting services.", price: 699, category: "Consulting" },
  { id: 6, name: "Data Analytics", description: "Advanced data analytics and insights.", price: 899, category: "Analytics" },
  { id: 7, name: "SEO Optimization", description: "Improve your search engine rankings.", price: 349, category: "Marketing" },
  { id: 8, name: "Brand Identity", description: "Complete brand identity design packages.", price: 1299, category: "Design" },
  { id: 9, name: "E-commerce Solutions", description: "Full-featured online store development.", price: 1499, category: "Development" },
];

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const { data: services, isLoading, isError } = useQuery({
    queryKey: ['services'],
    queryFn: servicesService.getServices,
    retry: 1,
  });

  const displayServices = services && services.length > 0 ? services : mockServices;
  
  const filteredServices = displayServices.filter((service) =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.category?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MainLayout>
      {/* Hero */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our comprehensive range of professional services designed to help your business grow.
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {isError && (
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-8">
              <AlertCircle className="w-4 h-4" />
              <span>Showing sample services (API unavailable)</span>
            </div>
          )}

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-48 w-full rounded-lg" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          ) : filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No services found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default Services;