import { Shield, Zap, Clock, Headphones, Award, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Your data is protected with enterprise-grade security and 99.9% uptime guarantee.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance ensures quick loading times and seamless experiences.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Access our services anytime, anywhere with round-the-clock availability.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Dedicated support team ready to help you with any questions or concerns.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Every service meets our high standards of quality and excellence.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Solutions that grow with your business needs and requirements.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Built for Excellence
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine innovation, expertise, and dedication to deliver outstanding results.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;