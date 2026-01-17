import { useQuery } from "@tanstack/react-query";

import { ArrowRight, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { servicesService, type Service } from "../../api/services/services";
import { Skeleton } from "../ui/skeleton";
import ServiceCard from "./ServiceCard";
import { Button } from "../ui/button";

// Fallback mock services for demo when API is unavailable
const mockServices: Service[] = [
  {
    id: 1,
    name: "Web Development",
    description: "Professional web development services using modern technologies and best practices.",
    price: 999,
    category: "Development",
  },
  {
    id: 2,
    name: "Mobile App Design",
    description: "Beautiful and intuitive mobile app designs that engage users and drive conversions.",
    price: 799,
    category: "Design",
  },
  {
    id: 3,
    name: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions for your business needs.",
    price: 599,
    category: "Infrastructure",
  },
  {
    id: 4,
    name: "Digital Marketing",
    description: "Strategic digital marketing campaigns to grow your online presence and reach.",
    price: 449,
    category: "Marketing",
  },
  {
    id: 5,
    name: "UI/UX Consulting",
    description: "Expert UI/UX consulting to improve user experience and interface design.",
    price: 699,
    category: "Consulting",
  },
  {
    id: 6,
    name: "Data Analytics",
    description: "Advanced data analytics and insights to drive informed business decisions.",
    price: 899,
    category: "Analytics",
  },
];

const ServicesSection = () => {
  const { data: services, isLoading, isError } = useQuery({
    queryKey: ['services'],
    queryFn: servicesService.getServices,
    retry: 1,
  });

  // Use API data if available, otherwise fall back to mock data
  const displayServices = services && services.length > 0 ? services : mockServices;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Premium Services for Your Success
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our comprehensive range of services designed to meet your needs and exceed your expectations.
          </p>
        </div>

        {/* API error notice (subtle) */}
        {isError && (
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-8">
            <AlertCircle className="w-4 h-4" />
            <span>Showing sample services (API unavailable)</span>
          </div>
        )}

        {/* Services grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-48 w-full rounded-lg" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayServices.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}

        {/* View all button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="group" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;