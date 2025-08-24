"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function TestPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-brand-primary mb-8">Routing Test Page</h1>
        
        <div className="space-y-4">
          <p className="text-lg text-gray-600">This page is used to test if routing is working properly.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <Link href="/" className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-brand-primary">Home</h3>
              <p className="text-sm text-gray-600">Go to home page</p>
            </Link>
            
            <Link href="/products" className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-brand-primary">Products</h3>
              <p className="text-sm text-gray-600">Go to products page</p>
            </Link>
            
            <Link href="/about" className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-brand-primary">About</h3>
              <p className="text-sm text-gray-600">Go to about page</p>
            </Link>
            
            <Link href="/contact" className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-brand-primary">Contact</h3>
              <p className="text-sm text-gray-600">Go to contact page</p>
            </Link>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-brand-primary mb-4">Product Detail Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/products/1" className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-brand-primary">Product 1</h3>
                <p className="text-sm text-gray-600">Shivastra</p>
              </Link>
              
              <Link href="/products/2" className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-brand-primary">Product 2</h3>
                <p className="text-sm text-gray-600">Ronak</p>
              </Link>
              
              <Link href="/products/3" className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-brand-primary">Product 3</h3>
                <p className="text-sm text-gray-600">Ronak Pouch</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
