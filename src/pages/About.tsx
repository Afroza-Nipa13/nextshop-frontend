
import { Users, Target, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import MainLayout from "../components/layout/MainLayout";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "50+", label: "Team Members" },
  { value: "98%", label: "Client Satisfaction" },
];

const values = [
  {
    icon: Target,
    title: "Mission Driven",
    description: "We're committed to delivering solutions that make a real difference for our clients.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Every decision we make is guided by what's best for our customers.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from code to customer service.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We're passionate about technology and love what we do every single day.",
  },
];

const About = () => {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About NextShop
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're a team of passionate innovators dedicated to helping businesses 
              thrive in the digital age. Our mission is to deliver exceptional services 
              that drive growth and success.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Building the Future, Together
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a vision to transform how businesses operate in the digital world, 
                  NextShop has grown from a small startup to a trusted partner for companies worldwide.
                </p>
                <p>
                  Our journey began with a simple belief: that technology should empower, not complicate. 
                  This principle guides everything we do, from the services we offer to the way we 
                  interact with our clients.
                </p>
                <p>
                  Today, we're proud to have helped hundreds of businesses achieve their goals, 
                  and we're just getting started.
                </p>
              </div>
              <Button className="mt-8" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-primary mb-4">NS</div>
                  <div className="text-muted-foreground">NextShop Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;