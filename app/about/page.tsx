import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Award, 
  Users, 
  Target, 
  Leaf, 
  Shield, 
  TrendingUp, 
  MapPin, 
  Phone, 
  Mail,
  Clock,
  CheckCircle
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const stats = [
  { label: "Years of Experience", value: "15+", icon: Clock },
  { label: "Products in Portfolio", value: "50+", icon: Leaf },
  { label: "Happy Farmers", value: "10,000+", icon: Users },
  { label: "States Covered", value: "25+", icon: MapPin },
]

const values = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "We maintain the highest standards of quality in all our products, ensuring they meet international standards and farmer expectations."
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Our products are designed to promote sustainable farming practices while protecting the environment for future generations."
  },
  {
    icon: Target,
    title: "Farmer Success",
    description: "We are committed to the success of farmers, providing them with innovative solutions that maximize their crop yields and profits."
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "We continuously invest in research and development to bring cutting-edge agricultural solutions to the market."
  }
]

const milestones = [
  { year: "2008", title: "Company Founded", description: "Started with a vision to revolutionize Indian agriculture" },
  { year: "2012", title: "First Product Launch", description: "Introduced our flagship fertilizer product" },
  { year: "2015", title: "Expansion", description: "Expanded operations to 10 states across India" },
  { year: "2018", title: "Quality Certification", description: "Achieved ISO 9001:2015 certification" },
  { year: "2021", title: "Digital Transformation", description: "Launched online platform for farmers" },
  { year: "2024", title: "Market Leader", description: "Became one of the leading agricultural solution providers" }
]

const team = [
  {
    name: "Rajesh Kumar",
    position: "Founder & CEO",
    image: "/placeholder-user.jpg",
    description: "Agricultural expert with 20+ years of experience in the industry."
  },
  {
    name: "Priya Sharma",
    position: "Head of R&D",
    image: "/placeholder-user.jpg",
    description: "Ph.D. in Agricultural Sciences, leading our innovation initiatives."
  },
  {
    name: "Amit Patel",
    position: "Sales Director",
    image: "/placeholder-user.jpg",
    description: "Expert in farmer relations and market development."
  },
  {
    name: "Meena Singh",
    position: "Quality Manager",
    image: "/placeholder-user.jpg",
    description: "Ensuring all products meet the highest quality standards."
  }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Shreyash Agro</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Leading the agricultural revolution with innovative solutions and sustainable practices
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-primary mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2008, Shreyash Agro Industries has been at the forefront of agricultural innovation in India. 
                What started as a small family business has grown into one of the most trusted names in agricultural solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our journey began with a simple mission: to help Indian farmers increase their yields while maintaining 
                sustainable farming practices. Today, we serve thousands of farmers across 25+ states with our comprehensive 
                range of fertilizers, pesticides, and growth promoters.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that the success of our nation lies in the prosperity of our farmers, and we are committed 
                to providing them with the best agricultural solutions backed by science and innovation.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 rounded-2xl p-8">
                <Image
                  src="/images/brand-bg.png"
                  alt="Shreyash Agro Industries"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-brand-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-brand-primary/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-primary mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower Indian farmers with innovative, sustainable, and effective agricultural solutions that 
                  maximize crop yields while preserving the environment for future generations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-accent/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-accent mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become the most trusted partner for Indian farmers, leading the agricultural revolution through 
                  innovation, quality, and sustainable practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-primary mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape our relationships with farmers, partners, and communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-primary mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A timeline of our growth and achievements over the years
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-brand-primary/20"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 px-8">
                    <div className={`bg-white p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-2xl font-bold text-brand-primary mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-brand-primary rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2 px-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-primary mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the passionate individuals who drive our mission forward
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary mb-1">{member.name}</h3>
                  <p className="text-brand-accent font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-primary to-brand-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Farming?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of successful farmers who trust Shreyash Agro for their agricultural needs
          </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/products">
               <Button className="bg-white text-brand-primary hover:bg-gray-100 px-8 py-3 text-lg">
                 View Our Products
               </Button>
             </Link>
             <Link href="/contact">
               <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary px-8 py-3 text-lg">
                 Contact Us
               </Button>
             </Link>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
