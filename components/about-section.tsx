import { Card, CardContent } from "@/components/ui/card"
import { Users, Factory, Award, Globe, Leaf, Shield, Target, Heart } from "lucide-react"

const stats = [
  { icon: Users, label: "Happy Customers", value: "10,000+", color: "brand-primary" },
  { icon: Factory, label: "Years Experience", value: "15+", color: "brand-accent" },
  { icon: Award, label: "Products", value: "50+", color: "brand-primary" },
  { icon: Globe, label: "States Served", value: "20+", color: "brand-accent" },
]

const features = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "All our products undergo rigorous testing to ensure the highest quality standards for agricultural use.",
    color: "brand-primary",
  },
  {
    icon: Target,
    title: "Research & Development",
    description:
      "Continuous innovation in agricultural science to develop effective and sustainable farming solutions.",
    color: "brand-accent",
  },
  {
    icon: Heart,
    title: "Expert Support",
    description: "Our team of agricultural experts provides guidance and support to help you achieve optimal results.",
    color: "brand-primary",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Committed to environmentally friendly solutions that promote sustainable agriculture practices.",
    color: "brand-accent",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-br from-white to-brand-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-64 h-64 border border-brand-primary rounded-full animate-spin-slow"></div>
        <div
          className="absolute bottom-20 left-10 w-48 h-48 border border-brand-accent rounded-full animate-spin-slow"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-brand-primary"></div>
            <Leaf className="h-8 w-8 text-brand-accent animate-float" />
            <div className="w-16 h-px bg-brand-primary"></div>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold font-sans mb-8 animate-fade-in-up">
            <span className="text-brand-primary">About</span>{" "}
            <span className="text-brand-accent">Shreyash Agro Industries</span>
          </h2>
          <p
            className="text-xl lg:text-2xl text-brand-neutral max-w-5xl mx-auto leading-relaxed font-medium animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            With over 15 years of experience in agricultural solutions, Shreyash Agro Industries has been at the
            forefront of providing innovative plant nutrients, pesticides, and growth promoters.
          </p>
          <p
            className="text-lg text-brand-neutral max-w-4xl mx-auto leading-relaxed mt-6 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            We are committed to empowering farmers with quality products that enhance crop productivity while
            maintaining environmental sustainability and fostering agricultural innovation.
          </p>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div
                  className={`bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-all duration-300 animate-pulse-glow`}
                >
                  <stat.icon className={`h-10 w-10 text-${stat.color} transition-all duration-300 hover:rotate-12`} />
                </div>
                <div
                  className={`text-4xl font-bold text-${stat.color} mb-3 hover:scale-105 transition-transform duration-300`}
                >
                  {stat.value}
                </div>
                <div className="text-brand-neutral font-semibold text-lg">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Features */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm hover-lift animate-slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-10">
                <div className="flex items-start gap-6">
                  <div
                    className={`bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transform hover:scale-110 transition-all duration-300 animate-pulse-glow`}
                  >
                    <feature.icon
                      className={`h-8 w-8 text-${feature.color} transition-all duration-300 hover:rotate-12`}
                    />
                  </div>
                  <div>
                    <h3
                      className={`text-2xl font-bold text-${feature.color} mb-4 hover:text-brand-accent transition-colors duration-300`}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-brand-neutral leading-relaxed text-lg">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-brand-primary to-brand-accent text-white animate-fade-in-up">
            <CardContent className="p-12">
              <Leaf className="h-16 w-16 mx-auto mb-6 animate-float" />
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                "To revolutionize agriculture through innovative, sustainable solutions that empower farmers to achieve
                exceptional yields while preserving our planet for future generations."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
