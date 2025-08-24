"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Heart, Eye, Leaf } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Shivastra",
    category: "Pesticides",
    priceRange: "₹450 - ₹1200",
    image: "/products/shivastra.png",
    description: "Powerful insecticide for effective pest control in various crops",
    features: ["Broad spectrum", "Long-lasting protection", "Safe application"],
    volumes: [
      { size: "250ml", price: "₹450" },
      { size: "500ml", price: "₹800" },
      { size: "1L", price: "₹1200" }
    ],
  },
  {
    id: 2,
    name: "Ronak",
    category: "Fertilizers",
    priceRange: "₹800 - ₹2000",
    image: "/products/ronak.png",
    description: "Premium fertilizer blend for enhanced crop growth and yield",
    features: ["Balanced nutrients", "Organic formula", "All crop types"],
    volumes: [
      { size: "25kg", price: "₹800" },
      { size: "50kg", price: "₹1500" },
      { size: "100kg", price: "₹2000" }
    ],
  },
  {
    id: 3,
    name: "Ronak Pouch",
    category: "Fertilizers",
    priceRange: "₹600 - ₹1500",
    image: "/products/ronakpouch.png",
    description: "Convenient pouch packaging of our premium Ronak fertilizer",
    features: ["Easy storage", "Portable", "Same quality"],
    volumes: [
      { size: "1kg", price: "₹600" },
      { size: "2kg", price: "₹1000" },
      { size: "5kg", price: "₹1500" }
    ],
  },
  {
    id: 4,
    name: "Rockstar",
    category: "Growth Promoters",
    priceRange: "₹1200 - ₹2800",
    image: "/products/rockstar.png",
    description: "Advanced growth promoter for maximum crop performance",
    features: ["High performance", "Fast results", "Premium quality"],
    badge: "Premium",
    volumes: [
      { size: "250ml", price: "₹1200" },
      { size: "500ml", price: "₹2000" },
      { size: "1L", price: "₹2800" }
    ],
  },
  {
    id: 5,
    name: "Nayak",
    category: "Pesticides",
    priceRange: "₹550 - ₹1400",
    image: "/products/nayak.png",
    description: "Effective pest control solution for healthy crop protection",
    features: ["Targeted action", "Environment friendly", "Quick effect"],
    volumes: [
      { size: "250ml", price: "₹550" },
      { size: "500ml", price: "₹900" },
      { size: "1L", price: "₹1400" }
    ],
  },
  {
    id: 6,
    name: "Multi Roots",
    category: "Growth Solutions",
    priceRange: "₹750 - ₹1800",
    image: "/products/multiroots.png",
    description: "Multi-purpose root development and growth enhancement solution",
    features: ["Root development", "Multi-purpose", "Enhanced growth"],
    volumes: [
      { size: "250ml", price: "₹750" },
      { size: "500ml", price: "₹1200" },
      { size: "1L", price: "₹1800" }
    ],
  },
  {
    id: 7,
    name: "Cocktell",
    category: "Fertilizers",
    priceRange: "₹400 - ₹1100",
    image: "/products/cocktell.png",
    description: "Specialized fertilizer blend for optimal plant nutrition",
    features: ["Balanced formula", "Easy absorption", "All seasons"],
    volumes: [
      { size: "25kg", price: "₹400" },
      { size: "50kg", price: "₹750" },
      { size: "100kg", price: "₹1100" }
    ],
  },
  {
    id: 8,
    name: "Bichhoo",
    category: "Pesticides",
    priceRange: "₹500 - ₹1300",
    image: "/products/bichhoo.png",
    description: "Potent insecticide for comprehensive pest management",
    features: ["Strong action", "Wide coverage", "Reliable protection"],
    volumes: [
      { size: "250ml", price: "₹500" },
      { size: "500ml", price: "₹800" },
      { size: "1L", price: "₹1300" }
    ],
  },
  {
    id: 9,
    name: "Blaster",
    category: "Growth Promoters",
    priceRange: "₹900 - ₹2200",
    image: "/products/blaster.png",
    description: "High-performance growth promoter for explosive crop development",
    features: ["Rapid growth", "High yield", "Premium results"],
    badge: "Best Seller",
    volumes: [
      { size: "250ml", price: "₹900" },
      { size: "500ml", price: "₹1500" },
      { size: "1L", price: "₹2200" }
    ],
  },
]

export function ProductsSection() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  return (
    <section
      id="products"
      className="py-20 lg:py-32 bg-gradient-to-br from-brand-light via-white to-brand-light relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 border-2 border-brand-primary rounded-full animate-spin-slow"></div>
        <div
          className="absolute bottom-20 right-10 w-32 h-32 border-2 border-brand-accent rounded-full animate-spin-slow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Leaf className="h-8 w-8 text-brand-accent animate-float" />
            <h2 className="text-4xl lg:text-6xl font-bold font-sans animate-fade-in-up">
              <span className="text-brand-primary">Our Premium</span>{" "}
              <span className="text-brand-accent">Products</span>
            </h2>
            <Leaf className="h-8 w-8 text-brand-primary animate-float" style={{ animationDelay: "0.5s" }} />
          </div>
          <p
            className="text-xl lg:text-2xl text-brand-neutral max-w-4xl mx-auto leading-relaxed animate-fade-in-up font-medium"
            style={{ animationDelay: "0.2s" }}
          >
            Empower Your Crops with innovative agricultural solutions designed to maximize yields and promote
            sustainable farming practices.
          </p>
          <div
            className="mt-8 flex items-center justify-center gap-8 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary">30%</div>
              <div className="text-sm text-brand-neutral">Yield Increase</div>
            </div>
            <div className="w-px h-12 bg-brand-primary/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-accent">100%</div>
              <div className="text-sm text-brand-neutral">Organic</div>
            </div>
            <div className="w-px h-12 bg-brand-primary/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary">500+</div>
              <div className="text-sm text-brand-neutral">Happy Farmers</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-xl transform hover:-translate-y-4 animate-fade-in-up bg-white/80 backdrop-blur-sm hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <CardHeader className="p-0 relative">
                <Badge className="absolute -top-3 left-6 bg-brand-accent text-white font-semibold px-4 py-2 rounded-full text-sm">
                  {product.category}
                </Badge>

                <div className="relative overflow-hidden rounded-t-xl">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={300}
                    className="w-full h-72 object-contain bg-white group-hover:scale-110 transition-transform duration-700"
                  />
                  {product.badge && (
                    <Badge className="absolute top-4 right-4 bg-brand-primary text-white font-semibold px-3 py-1 rounded-full animate-pulse">
                      {product.badge}
                    </Badge>
                  )}

                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent flex items-center justify-center gap-4 transition-all duration-500 ${hoveredProduct === product.id ? "opacity-100" : "opacity-0"}`}
                  >
                    <Button
                      size="sm"
                      className="rounded-full w-12 h-12 p-0 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-brand-accent hover:scale-110 transition-all duration-300"
                    >
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button
                      size="sm"
                      className="rounded-full w-12 h-12 p-0 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-brand-accent hover:scale-110 transition-all duration-300"
                    >
                      <Eye className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-4">
                <CardTitle className="text-xl font-bold text-brand-primary group-hover:text-brand-accent transition-colors duration-300">
                  {product.name}
                </CardTitle>

                <p className="text-brand-neutral leading-relaxed">{product.description}</p>

                <div className="flex items-center gap-2">
                  {product.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="text-sm text-brand-neutral flex items-center group-hover:text-brand-primary transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-brand-accent rounded-full mr-3 transform group-hover:scale-150 transition-transform duration-300 animate-pulse"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <span className="text-3xl font-bold text-brand-primary group-hover:scale-105 transition-transform duration-300">
                    {product.priceRange}
                  </span>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Link href={`/products/${product.id}`} className="w-full">
                  <Button className="w-full bg-brand-accent hover:bg-brand-primary text-white font-semibold py-3 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover-glow">
                    <Eye className="h-5 w-5 mr-2 transition-transform group-hover:rotate-12" />
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white bg-transparent font-semibold px-10 py-4 text-lg rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
