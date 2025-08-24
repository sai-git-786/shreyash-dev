"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingCart, Heart, Star, Truck, Shield, Leaf, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useState } from "react"
import Image from "next/image"

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
    detailedDescription: "Shivastra is a highly effective insecticide designed to provide comprehensive pest control for a wide range of agricultural crops. This advanced formulation offers long-lasting protection while ensuring safety for both crops and the environment.",
    specifications: {
      "Active Ingredient": "Imidacloprid 17.8% SL",
      "Packaging": "500ml, 1L, 5L bottles",
      "Application Rate": "1-2 ml per liter of water",
      "Waiting Period": "3-7 days",
      "Target Pests": "Aphids, Whiteflies, Thrips, Jassids",
      "Compatible Crops": "Cotton, Vegetables, Fruits, Cereals"
    },
    benefits: [
      "Broad spectrum pest control",
      "Long-lasting residual effect",
      "Safe for beneficial insects",
      "Rainfast after 2 hours",
      "Compatible with most pesticides",
      "Cost-effective solution"
    ],
    usage: [
      "Mix 1-2 ml of Shivastra in 1 liter of water",
      "Apply as foliar spray during early morning or evening",
      "Ensure thorough coverage of plant surfaces",
      "Repeat application if necessary after 7-10 days",
      "Store in cool, dry place away from direct sunlight"
    ],
    reviews: [
      { rating: 5, comment: "Excellent pest control, highly recommended!", author: "Farmer Rajesh" },
      { rating: 4, comment: "Good results on cotton crops", author: "Farmer Priya" },
      { rating: 5, comment: "Effective and safe for my vegetables", author: "Farmer Amit" }
    ]
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
      { size: "250ml", price: "₹800" },
      { size: "500ml", price: "₹1500" },
      { size: "1L", price: "₹2000" }
    ],
    detailedDescription: "Ronak is a premium organic fertilizer that provides balanced nutrition for all types of crops. This specially formulated blend enhances soil fertility and promotes healthy plant growth for maximum yield.",
    specifications: {
      "NPK Ratio": "12:12:12",
      "Packaging": "250ml, 500ml, 1L bottles",
      "Application Rate": "2-3 ml per liter of water",
      "Application Method": "Foliar spray or soil drench",
      "Organic Content": "60% organic matter",
      "Micronutrients": "Zinc, Iron, Manganese, Copper"
    },
    benefits: [
      "Balanced nutrient supply",
      "Improves soil structure",
      "Enhances water retention",
      "Promotes root development",
      "Safe for all crops",
      "Environmentally friendly"
    ],
    usage: [
      "Mix 2-3 ml of Ronak in 1 liter of water",
      "Apply as foliar spray during early morning or evening",
      "Can be applied as soil drench for root feeding",
      "Apply every 15-20 days during growing season",
      "Store in cool, dry place away from direct sunlight"
    ],
    reviews: [
      { rating: 5, comment: "Best fertilizer I've used!", author: "Farmer Suresh" },
      { rating: 4, comment: "Good results on wheat crop", author: "Farmer Meena" },
      { rating: 5, comment: "Organic and effective", author: "Farmer Ramesh" }
    ]
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
      { size: "4kg", price: "₹1200" }
    ],
     detailedDescription: "Ronak Pouch offers the same premium quality as our flagship Ronak fertilizer but in convenient pouch packaging for easier storage and portability.",
         specifications: {
      "NPK Ratio": "12:12:12",
      "Packaging": "1kg, 4kg pouches",
      "Application Rate": "250-500 kg per hectare",
      "Application Method": "Broadcast or band placement",
      "Organic Content": "60% organic matter",
      "Micronutrients": "Zinc, Iron, Manganese, Copper"
    },
     benefits: [
       "Same quality as Ronak",
       "Easy to store and carry",
       "Convenient packaging",
       "Cost-effective",
       "Environmentally friendly",
       "All crop types"
     ],
     usage: [
       "Apply 250-500 kg per hectare before sowing",
       "Mix well with soil during land preparation",
       "Can be applied as top dressing",
       "Water thoroughly after application",
       "Store in dry, cool place"
     ],
     reviews: [
       { rating: 5, comment: "Great packaging, same quality!", author: "Farmer Deepak" },
       { rating: 4, comment: "Easy to handle and store", author: "Farmer Sunita" },
       { rating: 5, comment: "Perfect for small farms", author: "Farmer Ravi" }
     ]
   },
       {
      id: 4,
             name: "Rockstar (Combo Pack)",
      category: "Growth Promoters",
      priceRange: "₹1200 - ₹2800",
      image: "/products/rockstar.png",
      description: "Advanced growth promoter for maximum crop performance",
      features: ["High performance", "Fast results", "Premium quality"],
          volumes: [
      { size: "250ml (2 bottles)", price: "₹1200" }
    ],
           detailedDescription: "Rockstar is our premium growth promoter combo pack containing two bottles of 250ml each, designed to deliver exceptional results for maximum crop performance and yield enhancement.",
         specifications: {
      "Active Ingredients": "Gibberellic Acid, Cytokinins, Auxins",
      "Packaging": "250ml (2 bottles combo)",
      "Application Rate": "2-3 ml per liter of water",
      "Application Method": "Foliar spray",
      "Waiting Period": "7-10 days",
      "Compatible Crops": "All crops"
    },
     benefits: [
       "Enhanced growth and development",
       "Improved flowering and fruiting",
       "Better stress tolerance",
       "Increased yield potential",
       "Premium quality formulation",
       "Fast visible results"
     ],
     usage: [
       "Mix 2-3 ml of Rockstar in 1 liter of water",
       "Apply as foliar spray during vegetative stage",
       "Repeat application during flowering stage",
       "Apply early morning or evening",
       "Store in cool, dry place"
     ],
     reviews: [
       { rating: 5, comment: "Amazing results on my crops!", author: "Farmer Vijay" },
       { rating: 5, comment: "Premium quality, worth every penny", author: "Farmer Anita" },
       { rating: 4, comment: "Great growth promoter", author: "Farmer Sanjay" }
     ]
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
     detailedDescription: "Nayak is an effective pest control solution that provides targeted action against common agricultural pests while being environmentally friendly.",
     specifications: {
       "Active Ingredient": "Lambda-cyhalothrin 5% EC",
       "Packaging": "500ml, 1L bottles",
       "Application Rate": "1-1.5 ml per liter of water",
       "Waiting Period": "3-5 days",
       "Target Pests": "Bollworms, Pod borers, Leaf miners",
       "Compatible Crops": "Cotton, Pulses, Vegetables"
     },
     benefits: [
       "Targeted pest control",
       "Environmentally friendly",
       "Quick knockdown effect",
       "Long-lasting protection",
       "Safe for beneficial insects",
       "Cost-effective solution"
     ],
     usage: [
       "Mix 1-1.5 ml of Nayak in 1 liter of water",
       "Apply as foliar spray during early morning",
       "Ensure thorough coverage of plant surfaces",
       "Repeat application if necessary after 7 days",
       "Store in cool, dry place"
     ],
     reviews: [
       { rating: 4, comment: "Good pest control", author: "Farmer Mohan" },
       { rating: 5, comment: "Effective and safe", author: "Farmer Kavita" },
       { rating: 4, comment: "Works well on cotton", author: "Farmer Prakash" }
     ]
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
     detailedDescription: "Multi Roots is a comprehensive solution designed to enhance root development and overall plant growth for better nutrient uptake and stress tolerance.",
     specifications: {
       "Active Ingredients": "Humic Acid, Fulvic Acid, Seaweed Extract",
       "Packaging": "500ml, 1L bottles",
       "Application Rate": "2-3 ml per liter of water",
       "Application Method": "Soil drench or foliar spray",
       "Frequency": "Every 15-20 days",
       "Compatible Crops": "All crops"
     },
     benefits: [
       "Enhanced root development",
       "Improved nutrient uptake",
       "Better stress tolerance",
       "Multi-purpose solution",
       "Organic formulation",
       "Safe for all crops"
     ],
     usage: [
       "Mix 2-3 ml of Multi Roots in 1 liter of water",
       "Apply as soil drench or foliar spray",
       "Apply every 15-20 days during growing season",
       "Best applied during early morning or evening",
       "Store in cool, dry place"
     ],
     reviews: [
       { rating: 5, comment: "Great root development", author: "Farmer Rajesh" },
       { rating: 4, comment: "Good multi-purpose solution", author: "Farmer Priya" },
       { rating: 5, comment: "Enhanced my crop growth", author: "Farmer Amit" }
     ]
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
      { size: "250ml", price: "₹400" },
      { size: "500ml", price: "₹750" },
      { size: "1L", price: "₹1100" }
    ],
     detailedDescription: "Cocktell is a specialized fertilizer blend formulated for optimal plant nutrition with balanced nutrients that are easily absorbed by plants.",
         specifications: {
      "NPK Ratio": "15:15:15",
      "Packaging": "250ml, 500ml, 1L bottles",
      "Application Rate": "2-3 ml per liter of water",
      "Application Method": "Foliar spray or soil drench",
      "Organic Content": "40% organic matter",
      "Micronutrients": "Zinc, Iron, Boron, Manganese"
    },
     benefits: [
       "Balanced nutrient supply",
       "Easy absorption by plants",
       "Suitable for all seasons",
       "Improves soil fertility",
       "Cost-effective solution",
       "All crop types"
     ],
         usage: [
      "Mix 2-3 ml of Cocktell in 1 liter of water",
      "Apply as foliar spray during early morning or evening",
      "Can be applied as soil drench for root feeding",
      "Apply every 15-20 days during growing season",
      "Store in cool, dry place away from direct sunlight"
    ],
     reviews: [
       { rating: 4, comment: "Good balanced fertilizer", author: "Farmer Suresh" },
       { rating: 5, comment: "Easy to use and effective", author: "Farmer Meena" },
       { rating: 4, comment: "Works well in all seasons", author: "Farmer Ramesh" }
     ]
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
      { size: "100ml", price: "₹300" },
      { size: "250ml", price: "₹500" },
      { size: "500ml", price: "₹800" }
    ],
     detailedDescription: "Bichhoo is a potent insecticide that provides comprehensive pest management with strong action against a wide range of agricultural pests.",
         specifications: {
      "Active Ingredient": "Cypermethrin 10% EC",
      "Packaging": "100ml, 250ml, 500ml bottles",
      "Application Rate": "1-2 ml per liter of water",
      "Waiting Period": "5-7 days",
      "Target Pests": "Aphids, Jassids, Thrips, Whiteflies",
      "Compatible Crops": "Cotton, Vegetables, Fruits"
    },
     benefits: [
       "Strong pest control action",
       "Wide coverage of pests",
       "Reliable protection",
       "Long-lasting effect",
       "Cost-effective solution",
       "Easy to apply"
     ],
     usage: [
       "Mix 1-2 ml of Bichhoo in 1 liter of water",
       "Apply as foliar spray during early morning",
       "Ensure thorough coverage of plant surfaces",
       "Repeat application if necessary after 7-10 days",
       "Store in cool, dry place"
     ],
     reviews: [
       { rating: 5, comment: "Strong and effective", author: "Farmer Kumar" },
       { rating: 4, comment: "Good coverage of pests", author: "Farmer Lakshmi" },
       { rating: 5, comment: "Reliable protection", author: "Farmer Ganesh" }
     ]
   },
       {
      id: 9,
      name: "Blaster",
      category: "Growth Promoters",
      priceRange: "₹900 - ₹2200",
      image: "/products/blaster.png",
      description: "High-performance growth promoter for explosive crop development",
      features: ["Rapid growth", "High yield", "Premium results"],
      volumes: [
        { size: "250ml", price: "₹900" },
        { size: "500ml", price: "₹1500" },
        { size: "1L", price: "₹2200" }
      ],
     detailedDescription: "Blaster is our high-performance growth promoter designed to deliver explosive crop development and maximum yield potential for serious farmers.",
     specifications: {
       "Active Ingredients": "Amino Acids, Vitamins, Growth Hormones",
       "Packaging": "250ml, 500ml, 1L bottles",
       "Application Rate": "3-4 ml per liter of water",
       "Application Method": "Foliar spray",
       "Frequency": "Every 10-15 days",
       "Compatible Crops": "All high-value crops"
     },
     benefits: [
       "Explosive crop development",
       "Maximum yield potential",
       "Premium quality results",
       "Fast visible effects",
       "High-value crop focus",
       "Professional grade"
     ],
     usage: [
       "Mix 3-4 ml of Blaster in 1 liter of water",
       "Apply as foliar spray every 10-15 days",
       "Start application from vegetative stage",
       "Apply during early morning or evening",
       "Store in cool, dry place"
     ],
     reviews: [
       { rating: 5, comment: "Explosive growth results!", author: "Farmer Singh" },
       { rating: 5, comment: "Best growth promoter ever", author: "Farmer Patel" },
       { rating: 5, comment: "Premium results for premium crops", author: "Farmer Sharma" }
     ]
   }
 ]

export default function ProductDetailPage() {
  const params = useParams()
  const productId = parseInt(params.id as string)
  const product = products.find(p => p.id === productId)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVolume, setSelectedVolume] = useState(0)

  // Handle invalid product ID
  if (isNaN(productId) || !product) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-600 mb-4">Product not found</h1>
          <p className="text-gray-500 mb-6">The product you're looking for doesn't exist.</p>
          <Link href="/products">
            <Button className="bg-brand-primary hover:bg-brand-accent">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Button>
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const averageRating = product.reviews.length > 0 
    ? product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length 
    : 0

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-brand-primary">Home</Link>
            <span>/</span>
            <Link href="/products" className="text-gray-500 hover:text-brand-primary">Products</Link>
            <span>/</span>
            <span className="text-brand-primary">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
                         <div className="space-y-4">
               <div className="aspect-square bg-white rounded-xl shadow-lg overflow-hidden">
                 <Image
                   src={product.image}
                   alt={product.name}
                   width={500}
                   height={500}
                   className="w-full h-full object-contain bg-white"
                 />
               </div>
             </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-2 bg-brand-accent text-white">
                  {product.category}
                </Badge>
                <h1 className="text-4xl font-bold text-brand-primary mb-4">
                  {product.name}
                </h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${
                          star <= averageRating ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">({product.reviews.length} reviews)</span>
                </div>
                {/* Volume Selection and Pricing */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Select Volume</h3>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {product.volumes.map((volume, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedVolume(index)}
                        className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                          selectedVolume === index
                            ? 'border-brand-primary bg-brand-primary text-white'
                            : 'border-gray-300 hover:border-brand-primary hover:bg-gray-50'
                        }`}
                      >
                        <div className="text-sm font-medium">{volume.size}</div>
                        <div className="text-lg font-bold">{volume.price}</div>
                      </button>
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-brand-primary">
                    Selected: {product.volumes[selectedVolume].size} - {product.volumes[selectedVolume].price}
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {product.detailedDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button className="flex-1 bg-brand-accent hover:bg-brand-primary text-white">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart - {product.volumes[selectedVolume].size} ({product.volumes[selectedVolume].price})
                </Button>
                <Button variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Truck className="h-8 w-8 mx-auto mb-2 text-brand-primary" />
                  <p className="text-sm font-medium">Free Shipping</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Shield className="h-8 w-8 mx-auto mb-2 text-brand-primary" />
                  <p className="text-sm font-medium">Quality Assured</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Leaf className="h-8 w-8 mx-auto mb-2 text-brand-primary" />
                  <p className="text-sm font-medium">Organic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="specifications" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="specifications" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b">
                        <span className="font-medium text-gray-700">{key}</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="benefits" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="usage" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {product.usage.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <p className="text-gray-700">{step}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {product.reviews.map((review, index) => (
                      <div key={index} className="border-b pb-4 last:border-b-0">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${
                                  star <= review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">by {review.author}</span>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </main>
  )
}
