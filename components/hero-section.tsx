"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Sprout, Droplets, TrendingUp } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-brand-light to-white"
    >
      <div className="absolute inset-0 gradient-brand opacity-5"></div>
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-brand-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold font-sans leading-tight">
                <span className="text-brand-primary inline-block animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  Nurturing
                </span>{" "}
                <span className="text-brand-accent inline-block animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                  Growth,
                </span>{" "}
                <span className="text-brand-primary inline-block animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                  Cultivating
                </span>{" "}
                <span className="text-brand-accent inline-block animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                  Trust
                </span>
              </h1>
              <p
                className="text-xl lg:text-2xl text-brand-neutral leading-relaxed animate-fade-in-up font-medium"
                style={{ animationDelay: "1s" }}
              >
                Premium Plant Nutrients, Pesticides, and Growth Promoters for a Sustainable Future
              </p>
              <p
                className="text-lg text-gray-600 leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "1.2s" }}
              >
                Empowering farmers with innovative agricultural solutions that boost yield by up to 30% while
                maintaining environmental sustainability.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "1.4s" }}>
              <Button
                size="lg"
                className="bg-brand-accent hover:bg-brand-primary text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover-glow"
              >
                Explore Our Products
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white bg-transparent font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Download Catalog
              </Button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {[
                { icon: Sprout, title: "Growth", subtitle: "Enhanced Yield", color: "brand-accent", delay: "1.6s" },
                { icon: Shield, title: "Protection", subtitle: "Pest Control", color: "brand-primary", delay: "1.7s" },
                { icon: Droplets, title: "Nutrition", subtitle: "Soil Health", color: "brand-accent", delay: "1.8s" },
                { icon: TrendingUp, title: "Results", subtitle: "30% Increase", color: "brand-primary", delay: "1.9s" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`text-center group cursor-pointer animate-fade-in-up hover-lift`}
                  style={{ animationDelay: item.delay }}
                >
                  <div
                    className={`bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 transform group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg animate-pulse-glow`}
                  >
                    <item.icon
                      className={`h-8 w-8 text-brand-primary transition-all duration-300 group-hover:rotate-12 group-hover:text-brand-accent`}
                    />
                  </div>
                  <h3 className="font-bold text-brand-primary group-hover:text-brand-accent transition-colors duration-300 text-sm">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brand-neutral font-medium">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <div className="relative z-10 transform hover:scale-105 transition-all duration-500">
              <Image
                src="/images/brand-bg.png"
                alt="Shreyash Agro Industries - Agricultural Solutions"
                width={600}
                height={400}
                className="w-full h-auto rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
              />
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-brand-accent/20 rounded-full blur-2xl animate-pulse"></div>
              <div
                className="absolute -bottom-8 -left-8 w-40 h-40 bg-brand-primary/20 rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 -right-6 w-20 h-20 bg-brand-accent/30 rounded-full blur-xl animate-bounce"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-primary rounded-full flex justify-center hover:border-brand-accent transition-colors duration-300">
          <div className="w-1 h-3 bg-brand-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
