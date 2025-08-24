"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare,
  Building,
  Users
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { GoogleMap } from "@/components/google-map"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 98765 43210", "+91 98765 43211"],
    description: "Call us for immediate assistance"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@shreyashagro.com", "support@shreyashagro.com"],
    description: "Send us an email anytime"
  },
  {
    icon: MapPin,
    title: "Office",
    details: ["123 Agro Street, Maharashtra", "India - 400001"],
    description: "Visit our headquarters"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
    description: "We're here to help you"
  }
]

const offices = [
  {
    city: "Mumbai",
    address: "123 Agro Street, Maharashtra, India - 400001",
    phone: "+91 98765 43210",
    email: "mumbai@shreyashagro.com",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM"
  },
  {
    city: "Pune",
    address: "456 Farm Road, Maharashtra, India - 411001",
    phone: "+91 98765 43212",
    email: "pune@shreyashagro.com",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM"
  },
  {
    city: "Nagpur",
    address: "789 Agriculture Lane, Maharashtra, India - 440001",
    phone: "+91 98765 43213",
    email: "nagpur@shreyashagro.com",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM"
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Handle form submission here
      console.log("Form submitted:", formData)
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      })
      // You can add a success message here
      alert("Thank you for your message! We'll get back to you soon.")
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your message. Please try again.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Get in touch with our team for any questions, support, or partnership opportunities
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-brand-primary mb-6">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. 
                We're here to help with all your agricultural needs.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className="w-full"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-brand-accent hover:bg-brand-primary text-white py-3">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map & Quick Contact */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-primary mb-4">Visit Our Office</h3>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="mb-4">
                    <GoogleMap 
                      address="123 Agro Street, Maharashtra, India - 400001"
                      className="w-full h-64 rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4 text-brand-primary" />
                      <span>123 Agro Street, Maharashtra, India - 400001</span>
                    </p>
                    <p className="flex items-center gap-2 text-gray-600">
                      <Phone className="h-4 w-4 text-brand-primary" />
                      <span>+91 98765 43210</span>
                    </p>
                    <p className="flex items-center gap-2 text-gray-600">
                      <Mail className="h-4 w-4 text-brand-primary" />
                      <span>info@shreyashagro.com</span>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-primary mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <Button className="w-full bg-brand-primary hover:bg-brand-accent text-white">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="outline" className="w-full border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-primary mb-4">Our Office Locations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We have offices across Maharashtra to serve you better. Find the location nearest to you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Building className="h-6 w-6 text-brand-primary" />
                    <h3 className="text-xl font-bold text-brand-primary">{office.city}</h3>
                  </div>
                  <div className="space-y-3">
                    <p className="flex items-start gap-2 text-gray-600">
                      <MapPin className="h-4 w-4 text-brand-primary mt-1 flex-shrink-0" />
                      <span>{office.address}</span>
                    </p>
                    <p className="flex items-center gap-2 text-gray-600">
                      <Phone className="h-4 w-4 text-brand-primary" />
                      <span>{office.phone}</span>
                    </p>
                    <p className="flex items-center gap-2 text-gray-600">
                      <Mail className="h-4 w-4 text-brand-primary" />
                      <span>{office.email}</span>
                    </p>
                    <p className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4 text-brand-primary" />
                      <span>{office.hours}</span>
                    </p>
                  </div>
                  <div className="mt-4 space-y-2">
                    <Button className="w-full bg-brand-accent hover:bg-brand-primary text-white">
                      Get Directions
                    </Button>
                    <div className="h-32 rounded-lg overflow-hidden">
                      <GoogleMap 
                        address={office.address}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our products and services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-brand-primary mb-3">
                  How can I place an order?
                </h3>
                <p className="text-gray-600">
                  You can place an order by calling our sales team, visiting our office, or through our authorized dealers.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-brand-primary mb-3">
                  Do you provide technical support?
                </h3>
                <p className="text-gray-600">
                  Yes, we provide comprehensive technical support and guidance for all our products.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-brand-primary mb-3">
                  What is your delivery time?
                </h3>
                <p className="text-gray-600">
                  Delivery time varies by location. We typically deliver within 2-5 business days.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-brand-primary mb-3">
                  Are your products organic?
                </h3>
                <p className="text-gray-600">
                  We offer both organic and conventional products. All our organic products are certified.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
