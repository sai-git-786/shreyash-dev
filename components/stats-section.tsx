"use client"

import { useEffect, useState } from "react"
import { Users, Package, Calendar, Heart } from "lucide-react"

const stats = [
  { number: 10000, suffix: "+", label: "Happy Farmers", duration: 2000, icon: Users },
  { number: 50, suffix: "+", label: "Products", duration: 1500, icon: Package },
  { number: 15, suffix: "+", label: "Years Experience", duration: 1800, icon: Calendar },
  { number: 98, suffix: "%", label: "Customer Satisfaction", duration: 2200, icon: Heart },
]

function AnimatedCounter({ end, duration, suffix }: { end: number; duration: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span className="text-4xl lg:text-5xl font-bold text-brand-accent">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-16 bg-brand-primary relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-brand-accent/20 p-3 rounded-full group-hover:bg-brand-accent/30 transition-all duration-300">
                    <stat.icon className="h-8 w-8 text-brand-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <AnimatedCounter end={stat.number} duration={stat.duration} suffix={stat.suffix} />
                <p className="text-white/90 text-lg mt-2 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
