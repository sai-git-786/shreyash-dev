"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu, Phone, Mail, Leaf, Truck, MapPin, Search, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useTranslation } from "@/contexts/translation-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t, changeLanguage, locale, isLoading } = useTranslation()
  
  if (isLoading) {
    return (
      <header className="bg-white shadow-lg border-b sticky top-0 z-50">
        {/* Top bar skeleton */}
        <div className="bg-brand-primary text-white py-2">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <div className="animate-pulse bg-white/20 h-4 w-24 rounded"></div>
              <div className="animate-pulse bg-white/20 h-4 w-32 rounded hidden sm:block"></div>
              <div className="animate-pulse bg-white/20 h-4 w-28 rounded hidden lg:block"></div>
            </div>
            <div className="animate-pulse bg-white/20 h-4 w-16 rounded"></div>
          </div>
        </div>
        
        {/* Main header skeleton */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="animate-pulse bg-gray-200 h-8 w-32 rounded"></div>
            
            {/* Desktop navigation skeleton */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="animate-pulse bg-gray-200 h-4 w-12 rounded"></div>
              <div className="animate-pulse bg-gray-200 h-4 w-16 rounded"></div>
              <div className="animate-pulse bg-gray-200 h-4 w-12 rounded"></div>
              <div className="animate-pulse bg-gray-200 h-4 w-16 rounded"></div>
            </div>

            {/* Right side buttons skeleton */}
            <div className="flex items-center gap-4">
              <div className="animate-pulse bg-gray-200 h-8 w-16 rounded"></div>
              <div className="animate-pulse bg-gray-200 h-8 w-8 rounded"></div>
              <div className="animate-pulse bg-gray-200 h-8 w-8 rounded lg:hidden"></div>
            </div>
          </div>
        </div>
      </header>
    )
  }
  return (
    <header className="bg-white shadow-lg border-b sticky top-0 z-50">
      {/* Top bar with new brand colors */}
      <div className="bg-brand-primary text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 hover:text-brand-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2 hover:text-brand-accent transition-colors">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">info@shreyashagro.com</span>
            </div>
            <div className="hidden lg:flex items-center gap-2 hover:text-brand-accent transition-colors">
              <MapPin className="h-4 w-4" />
              <span>Maharashtra, India</span>
            </div>
            <div className="md:hidden">
              <LanguageSwitcher />
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-brand-accent" />
              <span>Free Shipping on Orders Above ₹2000</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="h-4 w-4 text-brand-accent" />
              <span>100% Organic Certified</span>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main header with enhanced styling */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo.png"
              alt="Shreyash Agro Industries"
              width={180}
              height={60}
              className="h-12 w-auto hover:scale-105 transition-transform duration-300"
            />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-brand-neutral hover:text-brand-primary font-medium transition-colors duration-300 relative group"
            >
              {t('header.home')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/products"
              className="text-brand-neutral hover:text-brand-primary font-medium transition-colors duration-300 relative group"
            >
              {t('header.products')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/about"
              className="text-brand-neutral hover:text-brand-primary font-medium transition-colors duration-300 relative group"
            >
              {t('header.about')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="text-brand-neutral hover:text-brand-primary font-medium transition-colors duration-300 relative group"
            >
              {t('header.contact')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="hidden lg:flex text-brand-neutral hover:text-brand-primary hover:bg-brand-light transition-all duration-300"
            >
              <Search className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300 bg-transparent"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart (0)
            </Button>
            <Button className="bg-brand-accent hover:bg-brand-primary text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get Quote
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden hover:bg-brand-light"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block text-brand-neutral hover:text-brand-primary font-medium transition-colors duration-300 py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('header.home')}
            </Link>
            <Link
              href="/products"
              className="block text-brand-neutral hover:text-brand-primary font-medium transition-colors duration-300 py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('header.products')}
            </Link>
            <Link
              href="/about"
              className="block text-brand-neutral hover:text-brand-primary font-medium transition-colors duration-300 py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('header.about')}
            </Link>
            <Link
              href="/contact"
              className="block text-brand-neutral hover:text-brand-primary font-medium transition-colors duration-300 py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('header.contact')}
            </Link>
            <div className="pt-4 space-y-2">
              <Button className="w-full bg-brand-accent hover:bg-brand-primary text-white">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart (0)
              </Button>
              <Button className="w-full bg-brand-primary hover:bg-brand-accent text-white">
                Get Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
