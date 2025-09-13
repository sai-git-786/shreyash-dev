"use client"

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
import { useTranslation } from "@/contexts/translation-context"

export default function AboutPage() {
  const { t, isLoading } = useTranslation()

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
                <div className="animate-pulse bg-white/20 h-4 w-28 rounded hidden lg:block"></div>
              </div>
              <div className="animate-pulse bg-gray-200 h-8 w-16 rounded"></div>
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="animate-pulse bg-gray-200 h-8 w-48 mb-6 rounded"></div>
                <div className="space-y-4">
                  <div className="animate-pulse bg-gray-200 h-4 w-full rounded"></div>
                  <div className="animate-pulse bg-gray-200 h-4 w-full rounded"></div>
                  <div className="animate-pulse bg-gray-200 h-4 w-3/4 rounded"></div>
                </div>
              </div>
              <div className="animate-pulse bg-gray-200 aspect-square rounded-2xl"></div>
            </div>
          </div>
        </section>
      </main>
    )
  }

  const stats = [
    { label: t('about.yearsExperience'), value: "15+", icon: Clock },
    { label: t('about.productsPortfolio'), value: "50+", icon: Leaf },
    { label: t('about.happyFarmers'), value: "10,000+", icon: Users },
    { label: t('about.statesCovered'), value: "25+", icon: MapPin },
  ]

  const values = [
    {
      icon: Shield,
      title: t('about.qualityAssurance'),
      description: t('about.qualityDescription')
    },
    {
      icon: Leaf,
      title: t('about.sustainability'),
      description: t('about.sustainabilityDescription')
    },
    {
      icon: Target,
      title: t('about.farmerSuccess'),
      description: t('about.farmerSuccessDescription')
    },
    {
      icon: TrendingUp,
      title: t('about.innovation'),
      description: t('about.innovationDescription')
    }
  ]

  const milestones = [
    { year: "2008", title: t('about.companyFounded'), description: t('about.companyFoundedDesc') },
    { year: "2012", title: t('about.firstProductLaunch'), description: t('about.firstProductDesc') },
    { year: "2015", title: t('about.expansion'), description: t('about.expansionDesc') },
    { year: "2018", title: t('about.qualityCertification'), description: t('about.qualityCertDesc') },
    { year: "2021", title: t('about.digitalTransformation'), description: t('about.digitalTransformDesc') },
    { year: "2024", title: t('about.marketLeader'), description: t('about.marketLeaderDesc') }
  ]

  const team = [
    {
      name: "Rajesh Kumar",
      position: t('about.founderCEO'),
      image: "/placeholder-user.jpg",
      description: t('about.founderDesc')
    },
    {
      name: "Priya Sharma",
      position: t('about.headR&D'),
      image: "/placeholder-user.jpg",
      description: t('about.headR&DDesc')
    },
    {
      name: "Amit Patel",
      position: t('about.salesDirector'),
      image: "/placeholder-user.jpg",
      description: t('about.salesDirectorDesc')
    },
    {
      name: "Meena Singh",
      position: t('about.qualityManager'),
      image: "/placeholder-user.jpg",
      description: t('about.qualityManagerDesc')
    }
  ]
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">{t('about.title')}</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-primary mb-6">
                {t('about.ourStory')}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('about.storyText1')}
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('about.storyText2')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('about.storyText3')}
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
                <h3 className="text-2xl font-bold text-brand-primary mb-4">{t('about.ourMission')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('about.missionText')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-accent/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-accent mb-4">{t('about.ourVision')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('about.visionText')}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-primary mb-4">{t('about.ourValues')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('about.valuesSubtitle')}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-primary mb-4">{t('about.ourJourney')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('about.journeySubtitle')}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-primary mb-4">{t('about.ourLeadershipTeam')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('about.teamSubtitle')}
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t('about.readyToTransform')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('about.joinThousands')}
          </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/products">
               <Button className="bg-white text-brand-primary hover:bg-gray-100 px-8 py-3 text-lg">
                 {t('about.viewProducts')}
               </Button>
             </Link>
             <Link href="/contact">
               <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary px-8 py-3 text-lg">
                 {t('about.contactUs')}
               </Button>
             </Link>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
