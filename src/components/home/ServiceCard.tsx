

import { ArrowRight, Badge } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import type { Service } from "../../api/services/services";
import { Button } from "../ui/button";


interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        {service.image ? (
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
            <span className="text-4xl font-bold text-primary/30">
              {service.name?.charAt(0) || 'S'}
            </span>
          </div>
        )}
        
        {/* Category badge */}
        {service.category && (
          <Badge className="absolute top-3 left-3 bg-background/90 text-foreground border-0">
            {service.category}
          </Badge>
        )}
      </div>

      <CardHeader className="pb-2">
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
          {service.name}
        </h3>
      </CardHeader>

      <CardContent className="pb-4">
        <p className="text-muted-foreground text-sm line-clamp-2">
          {service.description || 'Discover premium quality and exceptional value with this service.'}
        </p>
        
        {service.price && (
          <div className="mt-4">
            <span className="text-2xl font-bold text-foreground">
              ${typeof service.price === 'number' ? service.price.toFixed(2) : service.price}
            </span>
          </div>
        )}
      </CardContent>

      <CardFooter>
        <Button variant="ghost" className="w-full group/btn hover:bg-primary hover:text-primary-foreground">
          View Details
          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;