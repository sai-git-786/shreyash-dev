"use client"

import { useEffect, useRef } from 'react'

interface GoogleMapProps {
  address: string
  className?: string
}

declare global {
  interface Window {
    google: any
  }
}

export function GoogleMap({ address, className = "" }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)

  useEffect(() => {
    // Load Google Maps script if not already loaded
    if (!window.google) {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`
      script.async = true
      script.defer = true
      script.onload = initMap
      document.head.appendChild(script)
    } else {
      initMap()
    }

    function initMap() {
      if (!mapRef.current || !window.google) return

      const geocoder = new window.google.maps.Geocoder()
      
      geocoder.geocode({ address }, (results: any, status: any) => {
        if (status === 'OK' && results[0]) {
          const location = results[0].geometry.location
          
          const map = new window.google.maps.Map(mapRef.current, {
            center: location,
            zoom: 15,
            styles: [
              {
                featureType: "poi",
                elementType: "labels",
                stylers: [{ visibility: "off" }]
              }
            ]
          })

          // Add marker
          new window.google.maps.Marker({
            position: location,
            map: map,
            title: "Shreyash Agro",
            animation: window.google.maps.Animation.DROP
          })

          // Add info window
          const infoWindow = new window.google.maps.InfoWindow({
            content: `
              <div style="padding: 10px; max-width: 200px;">
                <h3 style="margin: 0 0 5px 0; color: #15803d; font-weight: bold;">Shreyash Agro</h3>
                <p style="margin: 0; color: #666; font-size: 14px;">${address}</p>
              </div>
            `
          })

          // Show info window on marker click
          const marker = new window.google.maps.Marker({
            position: location,
            map: map,
            title: "Shreyash Agro"
          })

          marker.addListener('click', () => {
            infoWindow.open(map, marker)
          })

          mapInstanceRef.current = map
        } else {
          console.error('Geocoding failed:', status)
          // Fallback to a default location (Mumbai, India)
          const defaultLocation = { lat: 19.0760, lng: 72.8777 }
          
          const map = new window.google.maps.Map(mapRef.current, {
            center: defaultLocation,
            zoom: 10
          })

          new window.google.maps.Marker({
            position: defaultLocation,
            map: map,
            title: "Shreyash Agro"
          })
        }
      })
    }

    return () => {
      // Cleanup
      if (mapInstanceRef.current) {
        // Google Maps doesn't have a direct destroy method, but we can clear the div
        if (mapRef.current) {
          mapRef.current.innerHTML = ''
        }
      }
    }
  }, [address])

  return (
    <div 
      ref={mapRef} 
      className={`w-full h-full min-h-[400px] rounded-lg ${className}`}
      style={{ minHeight: '400px' }}
    />
  )
}
