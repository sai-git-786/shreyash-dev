# Google Maps Integration Setup

## Overview
Your Shreyash Agro application now includes Google Maps integration to display your business locations. The maps are interactive and show markers for your office addresses.

## Setup Instructions

### 1. Get a Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Maps JavaScript API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Maps JavaScript API"
   - Click on it and press "Enable"
4. Create credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy your API key

### 2. Configure Your API Key

1. Create a `.env.local` file in your project root:
```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

2. Update the Google Maps component:
   - Open `components/google-map.tsx`
   - Replace `YOUR_GOOGLE_MAPS_API_KEY` with `process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`

### 3. Security Best Practices

1. **Restrict your API key**:
   - Go to Google Cloud Console > Credentials
   - Click on your API key
   - Under "Application restrictions", select "HTTP referrers"
   - Add your domain (e.g., `localhost:3000/*` for development)
   - Under "API restrictions", select "Restrict key" and choose "Maps JavaScript API"

2. **Set up billing** (required for Google Maps API):
   - Google Maps API requires a billing account
   - You get $200 free credit monthly
   - Most small to medium websites stay within free tier

### 4. Features Included

- **Interactive Maps**: Users can zoom, pan, and interact with the maps
- **Location Markers**: Each office location has a custom marker
- **Info Windows**: Click markers to see business information
- **Responsive Design**: Maps work on all device sizes
- **Fallback Handling**: If geocoding fails, shows a default location

### 5. Customization Options

You can customize the maps by modifying `components/google-map.tsx`:

- **Map Styles**: Change colors and appearance
- **Marker Icons**: Use custom marker images
- **Zoom Levels**: Adjust default zoom
- **Info Window Content**: Customize the popup information

### 6. Addresses Currently Configured

- **Main Office**: 123 Agro Street, Maharashtra, India - 400001
- **Mumbai Office**: 123 Agro Street, Maharashtra, India - 400001
- **Pune Office**: 456 Farm Road, Maharashtra, India - 411001
- **Nagpur Office**: 789 Agriculture Lane, Maharashtra, India - 440001

### 7. Troubleshooting

- **Map not loading**: Check your API key and billing setup
- **Address not found**: Verify the address format and spelling
- **CORS errors**: Ensure your domain is added to API key restrictions
- **Billing issues**: Check your Google Cloud billing account

## Support

If you need help with the Google Maps integration, refer to:
- [Google Maps JavaScript API Documentation](https://developers.google.com/maps/documentation/javascript)
- [Google Cloud Console](https://console.cloud.google.com/)
- [Maps API Billing](https://developers.google.com/maps/billing)
