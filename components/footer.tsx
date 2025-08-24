import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Leaf, Award, Shield } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-brand-primary to-brand-neutral text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-32 h-32 border border-white rounded-full animate-spin-slow"></div>
        <div
          className="absolute bottom-20 left-10 w-24 h-24 border border-white rounded-full animate-spin-slow"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Enhanced Company Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Shreyash Agro Industries"
                width={180}
                height={60}
                className="h-12 w-auto brightness-0 invert hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-white/90 leading-relaxed text-lg">
              Leading manufacturer of premium agricultural solutions, empowering farmers with quality products for
              sustainable and productive farming.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-brand-accent" />
                <span className="text-sm font-semibold">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-brand-accent" />
                <span className="text-sm font-semibold">Quality Assured</span>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-white/10 p-3 rounded-2xl hover:bg-brand-accent hover:scale-110 transition-all duration-300 cursor-pointer group">
                <Facebook className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="bg-white/10 p-3 rounded-2xl hover:bg-brand-accent hover:scale-110 transition-all duration-300 cursor-pointer group">
                <Twitter className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="bg-white/10 p-3 rounded-2xl hover:bg-brand-accent hover:scale-110 transition-all duration-300 cursor-pointer group">
                <Instagram className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="bg-white/10 p-3 rounded-2xl hover:bg-brand-accent hover:scale-110 transition-all duration-300 cursor-pointer group">
                <Linkedin className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Leaf className="h-6 w-6 text-brand-accent" />
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#home"
                  className="text-white/90 hover:text-brand-accent transition-all duration-300 text-lg font-medium hover:translate-x-2 inline-block"
                >
                  → Home
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-white/90 hover:text-brand-accent transition-all duration-300 text-lg font-medium hover:translate-x-2 inline-block"
                >
                  → Products
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/90 hover:text-brand-accent transition-all duration-300 text-lg font-medium hover:translate-x-2 inline-block"
                >
                  → About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/90 hover:text-brand-accent transition-all duration-300 text-lg font-medium hover:translate-x-2 inline-block"
                >
                  → Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/90 hover:text-brand-accent transition-all duration-300 text-lg font-medium hover:translate-x-2 inline-block"
                >
                  → Catalog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/90 hover:text-brand-accent transition-all duration-300 text-lg font-medium hover:translate-x-2 inline-block"
                >
                  → Support
                </a>
              </li>
            </ul>
          </div>

          {/* Enhanced Products */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Shield className="h-6 w-6 text-brand-accent" />
              Our Products
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-white/90 hover:text-brand-accent transition-all duration-300 text-lg font-medium hover:translate-x-2 inline-block"
                >
                  → Plant Nutrients
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/90 hover:text-brand-accent transition-all duration-300 text-lg font-medium hover:translate-x-2 inline-block"
                >
                  → Agricultural Pesticides
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/90 hover:text-brand-accent transition-all duration-300 text-lg font-medium hover:translate-x-2 inline-block"
                >
                  → Growth Promoters
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/90 hover:text-brand-accent transition-all duration-300 text-lg font-medium hover:translate-x-2 inline-block"
                >
                  → Organic Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/90 hover:text-brand-accent transition-all duration-300 text-lg font-medium hover:translate-x-2 inline-block"
                >
                  → Fertilizers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/90 hover:text-brand-accent transition-all duration-300 text-lg font-medium hover:translate-x-2 inline-block"
                >
                  → Soil Conditioners
                </a>
              </li>
            </ul>
          </div>

          {/* Enhanced Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Phone className="h-6 w-6 text-brand-accent" />
              Contact Info
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="bg-brand-accent/20 p-2 rounded-xl group-hover:bg-brand-accent transition-colors duration-300">
                  <MapPin className="h-6 w-6 text-brand-accent group-hover:text-white" />
                </div>
                <div>
                  <p className="text-white/90 leading-relaxed text-lg">
                    123 Agricultural Complex,
                    <br />
                    Industrial Area, Phase-2,
                    <br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="bg-brand-accent/20 p-2 rounded-xl group-hover:bg-brand-accent transition-colors duration-300">
                  <Phone className="h-6 w-6 text-brand-accent group-hover:text-white" />
                </div>
                <div>
                  <p className="text-white/90 text-lg font-semibold">+91 98765 43210</p>
                  <p className="text-white/70 text-sm">24/7 Support Available</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="bg-brand-accent/20 p-2 rounded-xl group-hover:bg-brand-accent transition-colors duration-300">
                  <Mail className="h-6 w-6 text-brand-accent group-hover:text-white" />
                </div>
                <div>
                  <p className="text-white/90 text-lg font-semibold">info@shreyashagro.com</p>
                  <p className="text-white/70 text-sm">Quick Response Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Newsletter Section */}
        <div className="mt-16 p-8 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
              <Leaf className="h-6 w-6 text-brand-accent animate-float" />
              Stay Updated with Agricultural Insights
            </h3>
            <p className="text-white/90">
              Get the latest tips, product updates, and farming techniques delivered to your inbox.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-brand-accent"
            />
            <button className="bg-brand-accent hover:bg-white hover:text-brand-primary text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>

        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/90 text-lg">© 2024 Shreyash Agro Industries. All rights reserved.</p>
            <div className="flex items-center gap-6 text-white/70">
              <a href="#" className="hover:text-brand-accent transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-brand-accent transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-brand-accent transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-white/70 flex items-center justify-center gap-2">
              <Leaf className="h-4 w-4 text-brand-accent" />
              Designed with care for sustainable agriculture
              <Leaf className="h-4 w-4 text-brand-accent" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
