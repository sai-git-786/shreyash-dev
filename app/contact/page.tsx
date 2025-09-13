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
import { useTranslation } from "@/contexts/translation-context"


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
  const { t, isLoading } = useTranslation()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  // Safety check to prevent rendering before translations are ready
  if (isLoading) {
    return (
      <main className="min-h-screen">
        {/* Header skeleton */}
        <header className="bg-white shadow-lg border-b sticky top-0 z-50">
          <div className="bg-brand-primary text-white py-2">
            <div className="container mx-auto px-4 flex justify-between items-center text-sm">
              <div className="flex items-center gap-4">
                <div className="animate-pulse bg-white/20 h-4 w-24 rounded"></div>
                <div className="animate-pulse bg-white/20 h-4 w-32 rounded hidden sm:block"></div>
              </div>
              <div className="animate-pulse bg-white/20 h-4 w-16 rounded"></div>
            </div>
          </div>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <div className="animate-pulse bg-gray-200 h-8 w-32 rounded"></div>
              <div className="flex items-center gap-4">
                <div className="animate-pulse bg-gray-200 h-8 w-8 rounded"></div>
                <div className="animate-pulse bg-gray-200 h-8 w-8 rounded lg:hidden"></div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Hero section skeleton */}
        <section className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-pulse bg-white/20 h-12 w-96 mx-auto mb-6 rounded lg:h-16"></div>
            <div className="animate-pulse bg-white/20 h-6 w-full max-w-3xl mx-auto rounded"></div>
          </div>
        </section>

        {/* Content skeleton */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="text-center border shadow-lg rounded-lg p-6">
                  <div className="animate-pulse bg-gray-200 w-16 h-16 rounded-full mx-auto mb-4"></div>
                  <div className="animate-pulse bg-gray-200 h-6 w-24 mx-auto mb-3 rounded"></div>
                  <div className="space-y-2">
                    <div className="animate-pulse bg-gray-200 h-4 w-full rounded"></div>
                    <div className="animate-pulse bg-gray-200 h-4 w-3/4 mx-auto rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    )
  }

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.phone'),
      details: ["+91 98765 43210", "+91 98765 43211"],
      description: t('contact.callUs')
    },
    {
      icon: Mail,
      title: t('contact.email'),
      details: ["info@shreyashagro.com", "support@shreyashagro.com"],
      description: t('contact.emailUs')
    },
    {
      icon: MapPin,
      title: t('contact.office'),
      details: ["123 Agro Street, Maharashtra", "India - 400001"],
      description: t('contact.visitUs')
    },
    {
      icon: Clock,
      title: t('contact.businessHours'),
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      description: t('contact.hereToHelp')
    }
  ]

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
      alert(t('contact.thankYou'))
    } catch (error) {
      console.error("Error submitting form:", error)
      alert(t('contact.errorMessage'))
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
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">{t('contact.title')}</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            {t('contact.subtitle')}
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
              <h2 className="text-3xl font-bold text-brand-primary mb-6">{t('contact.sendMessage')}</h2>
              <p className="text-gray-600 mb-8">
                {t('contact.formDescription')}
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.fullName')} *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.enterFullName')}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.emailAddress')} *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact.enterEmail')}
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.phoneNumber')}
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('contact.enterPhone')}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.subject')} *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t('contact.whatAbout')}
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.message')} *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.tellUsMore')}
                    rows={6}
                    className="w-full"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-brand-accent hover:bg-brand-primary text-white py-3">
                  <Send className="h-5 w-5 mr-2" />
                  {t('contact.sendMessageBtn')}
                </Button>
              </form>
            </div>

            {/* Map & Quick Contact */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-primary mb-4">{t('contact.visitOffice')}</h3>
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
                <h3 className="text-2xl font-bold text-brand-primary mb-4">{t('contact.quickContact')}</h3>
                <div className="space-y-4">
                  <Button className="w-full bg-brand-primary hover:bg-brand-accent text-white">
                    <Phone className="h-5 w-5 mr-2" />
                    {t('contact.callNow')}
                  </Button>
                  <Button variant="outline" className="w-full border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    {t('contact.whatsapp')}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-primary mb-4">{t('contact.officeLocations')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('contact.officeSubtitle')}
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
                      {t('contact.getDirections')}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-primary mb-4">{t('contact.faq')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('contact.faqSubtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-brand-primary mb-3">
                  {t('contact.howToOrder')}
                </h3>
                <p className="text-gray-600">
                  {t('contact.orderAnswer')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-brand-primary mb-3">
                  {t('contact.technicalSupport')}
                </h3>
                <p className="text-gray-600">
                  {t('contact.supportAnswer')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-brand-primary mb-3">
                  {t('contact.deliveryTime')}
                </h3>
                <p className="text-gray-600">
                  {t('contact.deliveryAnswer')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-brand-primary mb-3">
                  {t('contact.organicProducts')}
                </h3>
                <p className="text-gray-600">
                  {t('contact.organicAnswer')}
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
