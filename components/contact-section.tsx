import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, Leaf } from "lucide-react"

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-gradient-to-br from-brand-light to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-brand-primary rounded-full animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-32 h-32 border border-brand-accent rounded-full animate-float"
          style={{ animationDelay: "2s" }}
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
            <span className="text-brand-primary">Get In</span> <span className="text-brand-accent">Touch</span>
          </h2>
          <p
            className="text-xl lg:text-2xl text-brand-neutral max-w-4xl mx-auto leading-relaxed font-medium animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Ready to enhance your agricultural productivity? Contact us today for expert advice and premium agricultural
            solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Form */}
          <Card
            className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 animate-slide-in-left"
            style={{ animationDelay: "0.4s" }}
          >
            <CardHeader className="pb-8">
              <CardTitle className="text-3xl text-brand-primary font-bold flex items-center gap-3">
                <Send className="h-8 w-8 text-brand-accent" />
                Send us a Message
              </CardTitle>
              <p className="text-brand-neutral mt-2">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-primary mb-2 block">Full Name *</label>
                  <Input
                    placeholder="Your full name"
                    className="border-2 border-brand-primary/20 focus:border-brand-accent transition-colors duration-300 rounded-xl py-3"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-primary mb-2 block">Phone Number *</label>
                  <Input
                    placeholder="Your phone number"
                    className="border-2 border-brand-primary/20 focus:border-brand-accent transition-colors duration-300 rounded-xl py-3"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-primary mb-2 block">Email Address *</label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  className="border-2 border-brand-primary/20 focus:border-brand-accent transition-colors duration-300 rounded-xl py-3"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-primary mb-2 block">Subject</label>
                <Input
                  placeholder="How can we help you?"
                  className="border-2 border-brand-primary/20 focus:border-brand-accent transition-colors duration-300 rounded-xl py-3"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-primary mb-2 block">Message *</label>
                <Textarea
                  placeholder="Tell us about your requirements, crop type, farm size, or any specific challenges you're facing..."
                  className="min-h-[140px] border-2 border-brand-primary/20 focus:border-brand-accent transition-colors duration-300 rounded-xl resize-none"
                />
              </div>
              <Button className="w-full bg-brand-accent hover:bg-brand-primary text-white font-semibold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover-glow">
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Enhanced Contact Information */}
          <div className="space-y-8">
            <Card
              className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 p-4 rounded-2xl animate-pulse-glow">
                    <MapPin className="h-8 w-8 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-brand-primary mb-3">Our Location</h3>
                    <p className="text-brand-neutral leading-relaxed text-lg">
                      123 Agricultural Complex,
                      <br />
                      Industrial Area, Phase-2,
                      <br />
                      Mumbai, Maharashtra 400001
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-brand-accent/10 to-brand-primary/10 p-4 rounded-2xl animate-pulse-glow">
                    <Phone className="h-8 w-8 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-brand-primary mb-3">Call Us</h3>
                    <p className="text-brand-neutral leading-relaxed text-lg">
                      <span className="font-semibold">Sales:</span> +91 98765 43210
                      <br />
                      <span className="font-semibold">Support:</span> +91 87654 32109
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in-up"
              style={{ animationDelay: "1s" }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 p-4 rounded-2xl animate-pulse-glow">
                    <Mail className="h-8 w-8 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-brand-primary mb-3">Email Us</h3>
                    <p className="text-brand-neutral leading-relaxed text-lg">
                      <span className="font-semibold">General:</span> info@shreyashagro.com
                      <br />
                      <span className="font-semibold">Sales:</span> sales@shreyashagro.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in-up"
              style={{ animationDelay: "1.2s" }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-brand-accent/10 to-brand-primary/10 p-4 rounded-2xl animate-pulse-glow">
                    <Clock className="h-8 w-8 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-brand-primary mb-3">Business Hours</h3>
                    <p className="text-brand-neutral leading-relaxed text-lg">
                      <span className="font-semibold">Mon - Sat:</span> 9:00 AM - 6:00 PM
                      <br />
                      <span className="font-semibold">Sunday:</span> Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-brand-primary to-brand-accent text-white animate-fade-in-up">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Farm?</h3>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of satisfied farmers who trust Shreyash Agro Industries for their agricultural needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-brand-primary hover:bg-brand-light font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Request Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-brand-primary font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  Download Catalog
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
