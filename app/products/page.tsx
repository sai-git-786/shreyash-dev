"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Grid, List } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
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

const categories = ["All", "Fertilizers", "Pesticides", "Growth Promoters", "Growth Solutions"]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredProducts = products.filter(product => {
    const searchLower = searchTerm.toLowerCase()
    const matchesSearch = product.name.toLowerCase().includes(searchLower) ||
                         product.description.toLowerCase().includes(searchLower)
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Discover our comprehensive range of agricultural solutions designed to maximize your crop yields
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-80"
                />
              </div>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`cursor-pointer ${
                      selectedCategory === category 
                        ? "bg-brand-primary text-white" 
                        : "hover:bg-brand-primary hover:text-white"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-brand-primary" : ""}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "bg-brand-primary" : ""}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-gray-600 mb-4">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className={`grid gap-8 ${
              viewMode === "grid" 
                ? "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                : "grid-cols-1"
            }`}>
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                    viewMode === "list" ? "flex" : ""
                  }`}
                >
                                     <div className={`relative ${viewMode === "list" ? "w-1/3" : ""}`}>
                                           <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        className={`w-full object-contain bg-white ${
                          viewMode === "list" ? "h-48" : "h-64"
                        }`}
                      />
                     {product.badge && (
                       <Badge className="absolute top-4 right-4 bg-brand-accent text-white">
                         {product.badge}
                       </Badge>
                     )}
                   </div>
                  <div className={`p-6 ${viewMode === "list" ? "w-2/3" : ""}`}>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {product.category}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-brand-primary mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {product.description}
                    </p>
                                         <div className="flex items-center justify-between">
                       <span className="text-2xl font-bold text-brand-primary">
                         {product.priceRange}
                       </span>
                       <Link href={`/products/${product.id}`}>
                         <Button className="bg-brand-accent hover:bg-brand-primary">
                           View Details
                         </Button>
                       </Link>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
