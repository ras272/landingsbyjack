"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Palette,
  Building2,
  MessageCircle,
  Github,
  Twitter,
  Linkedin,
    Mail,
  Zap,
  Sparkles,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FreelanceLanding() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // WhatsApp contact function
  const openWhatsApp = (plan: string, price: string) => {
    const phoneNumber = "595986359862"
    let message = ""
    
    if (plan === "consulta general") {
      message = "¡Hola Jack! Estoy interesado en tus servicios de desarrollo web. ¿Podemos conversar?"
    } else if (plan === "consulta personalizada") {
      message = "¡Hola Jack! Necesito algo específico para mi proyecto. ¿Podemos hablar sobre una cotización personalizada?"
    } else {
      message = `¡Hola Jack! Me interesa el ${plan} (${price}) para mi landing page. ¿Podemos conversar sobre mi proyecto?`
    }
    
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Landings",
      description: "Landings que convierten visitantes en clientes",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Portfolios",
      description: "Portafolios únicos que destacan tu trabajo y personalidad",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Webs para negocios",
      description: "Sitios web profesionales para hacer crecer tu negocio",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Integración WhatsApp",
      description: "Conecta directamente con tus clientes mediante WhatsApp",
    },
  ]



  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-magenta-500/10" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-1 h-1 bg-magenta-400 rounded-full animate-pulse delay-1000" />
          <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse delay-2000" />
          <div className="absolute bottom-20 right-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-500" />
        </div>

        <div
          className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-6">
            <Badge variant="outline" className="border-cyan-400 text-cyan-400 mb-4 px-4 py-2 text-sm font-mono">
              <Zap className="w-4 h-4 mr-2" />
              FREELANCE DEVELOPER
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-mono leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-magenta-400 to-lime-400 bg-clip-text text-transparent">
              HAGO LANDINGS
            </span>
            <br />
            <span className="text-white">QUE CONVIERTEN</span>
            <span className="ml-4">💻✨</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Desarrollo sitios web modernos y funcionales que impulsan tu negocio al siguiente nivel
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-magenta-500 hover:from-cyan-600 hover:to-magenta-600 text-white font-bold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Pedir presupuesto
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black font-bold px-8 py-4 text-lg transition-all duration-300"
              onClick={() => document.getElementById('precios')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver precios
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">
              <span className="text-cyan-400">[</span>
              SERVICIOS
              <span className="text-cyan-400">]</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Soluciones digitales completas para hacer crecer tu presencia online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center group-hover:text-magenta-400 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-mono text-white">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-20 px-4 bg-gradient-to-br from-gray-900/30 to-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">
              <span className="text-lime-400">$</span>
              PLANES
              <span className="text-lime-400">$</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Invierte en tu presencia digital con precios justos y resultados garantizados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plan Básico */}
            <Card className="bg-gradient-to-br from-black/80 via-gray-900/90 to-cyan-900/30 border-cyan-400/30 hover:border-cyan-400 hover:shadow-cyan-400/20 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 bg-cyan-400 text-black px-4 py-1 text-sm font-bold font-mono transform rotate-12 translate-x-4 -translate-y-2">
                POPULAR
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold font-mono text-cyan-400 mb-2">PLAN BÁSICO</h3>
                  <div className="text-4xl font-bold font-mono text-white mb-2">
                    Gs. 250.000
                  </div>
                  <p className="text-gray-400 text-sm">Perfecto para empezar</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-3 font-mono">✓</span>
                    Landing de 3-4 secciones
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-3 font-mono">✓</span>
                    Diseño responsive
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-3 font-mono">✓</span>
                    Integración WhatsApp
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-3 font-mono">✓</span>
                    Hosting gratuito incluido
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-3 font-mono">✓</span>
                    Subdominio Vercel (.vercel.app)
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-3 font-mono">✓</span>
                    Entrega en 48 horas
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-3 font-mono">✓</span>
                    1 revisión incluida
                  </li>
                  <li className="flex items-center text-gray-400">
                    <span className="text-orange-400 mr-3 font-mono">+</span>
                    Dominio personalizado (extra)
                  </li>
                </ul>

                <Button 
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-bold py-3 text-lg transition-all duration-300 transform hover:scale-105"
                  onClick={() => openWhatsApp("Plan Básico", "Gs. 250.000")}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Elegir Plan Básico
                </Button>
              </CardContent>
            </Card>

            {/* Plan Full */}
            <Card className="bg-gradient-to-br from-black/80 via-gray-900/90 to-magenta-900/30 border-magenta-400/30 hover:border-magenta-400 hover:shadow-magenta-400/20 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-lime-400 to-yellow-400 text-black px-4 py-1 text-sm font-bold font-mono transform rotate-12 translate-x-4 -translate-y-2 shadow-lg">
                PREMIUM
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold font-mono text-magenta-400 mb-2">PLAN FULL</h3>
                  <div className="text-4xl font-bold font-mono text-white mb-2">
                    Gs. 400.000
                  </div>
                  <p className="text-gray-400 text-sm">La experiencia completa</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-magenta-400 mr-3 font-mono">✓</span>
                    Landing completa (5+ secciones)
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-magenta-400 mr-3 font-mono">✓</span>
                    Diseño 100% personalizado
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-magenta-400 mr-3 font-mono">✓</span>
                    Animaciones avanzadas
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-magenta-400 mr-3 font-mono">✓</span>
                    Integración completa WhatsApp
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-magenta-400 mr-3 font-mono">✓</span>
                    SEO avanzado + Analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-magenta-400 mr-3 font-mono">✓</span>
                    Hosting gratuito incluido
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-lime-400 mr-3 font-mono">★</span>
                    Dominio .com gratuito 1 año
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-magenta-400 mr-3 font-mono">✓</span>
                    Entrega en 4-6 días
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-magenta-400 mr-3 font-mono">✓</span>
                    3 revisiones incluidas
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-lime-400 mr-3 font-mono">★</span>
                    Soporte 30 días gratis
                  </li>
                </ul>

                <Button 
                  className="w-full bg-gradient-to-r from-magenta-500 via-magenta-600 to-lime-500 hover:from-magenta-600 hover:via-magenta-700 hover:to-lime-600 text-white font-bold py-3 text-lg transition-all duration-300 transform hover:scale-105"
                  onClick={() => openWhatsApp("Plan Full", "Gs. 400.000")}
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Elegir Plan Full
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 text-sm mb-4 font-mono">
              💡 Todos los planes incluyen código fuente, certificado SSL y hosting en Vercel
            </p>
            <div className="bg-gradient-to-r from-black/60 via-gray-900/80 to-black/60 border border-orange-400/40 rounded-lg p-4 mb-6 max-w-2xl mx-auto backdrop-blur-sm">
              <p className="text-orange-400 text-sm font-mono mb-2">
                🚀 EXTRAS DISPONIBLES:
              </p>
              <p className="text-gray-300 text-sm">
                • Dominio personalizado Plan Básico: <span className="text-cyan-400">+Gs. 100.000</span><br />
                • Secciones adicionales: <span className="text-cyan-400">+Gs. 30.000 c/u</span><br />
                • Revisiones extra: <span className="text-cyan-400">+Gs. 25.000 c/u</span>
              </p>
            </div>
            <p className="text-cyan-400 font-mono text-lg">
              ¿Necesitas algo específico?{" "}
              <Button 
                variant="link" 
                className="text-lime-400 hover:text-lime-300 p-0 h-auto font-mono"
                onClick={() => openWhatsApp("consulta personalizada", "")}
              >
                Hablemos por WhatsApp
              </Button>
            </p>
          </div>
        </div>
      </section>



      {/* About Section */}
      <section id="sobre-mi" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-mono">
                <span className="text-lime-400">{"{"}</span>
                SOBRE MÍ
                <span className="text-lime-400">{"}"}</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Soy un desarrollador freelance especializado en crear experiencias web que no solo se ven increíbles,
                  sino que también generan resultados reales para tu negocio.
                </p>
                <p>
                  Con más de 5 años de experiencia, he ayudado a decenas de empresas y emprendedores a establecer su
                  presencia digital con sitios web modernos, rápidos y optimizados para conversión.
                </p>
                <p>
                  Mi enfoque combina diseño pixel-perfect con código limpio y optimizado, asegurando que tu sitio web
                  funcione perfectamente en todos los dispositivos.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-400/30">React</Badge>
                <Badge className="bg-magenta-500/20 text-magenta-400 border-magenta-400/30">Next.js</Badge>
                <Badge className="bg-lime-500/20 text-lime-400 border-lime-400/30">TypeScript</Badge>
                <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-400/30">Tailwind</Badge>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-magenta-400 rounded-full blur-lg opacity-30 animate-pulse" />
                <Image
                  src="https://i.imgur.com/asOeaJo.jpeg"
                  alt="Developer Avatar"
                  width={300}
                  height={300}
                  className="relative rounded-full border-4 border-lime-400/50 object-cover aspect-square"
                />
                <div className="absolute -bottom-4 -right-4 bg-lime-400 text-black p-3 rounded-full">
                  <Sparkles className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-mono">
            <span className="text-cyan-400">CONTACTO</span>
            <span className="text-magenta-400">.exe</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            ¿Listo para llevar tu proyecto al siguiente nivel? Hablemos y hagamos realidad tu visión digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => openWhatsApp("consulta general", "")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold px-8 py-4 text-lg transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Link
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Github className="w-8 h-8" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-magenta-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Twitter className="w-8 h-8" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-lime-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 font-mono">
            © 2025 - Desarrollado con <span className="text-red-500">♥</span> y mucho{" "}
            <span className="text-cyan-400">código</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
