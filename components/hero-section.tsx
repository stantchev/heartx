import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container max-w-6xl mx-auto text-center relative z-10">
        {/* Hero content */}
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-foreground mb-4">
            📦 HEARTX™ вече е наличен – ограничени бройки.
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
            HEARTX™ <br />
            <span className="text-primary">Smart Ring</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Технология, която подобрява живота ти. <br />
            Без стрес. Без шум. Само резултати.
          </p>
          
          {/* Hero Image */}
          <div className="relative w-full max-w-md mx-auto my-12">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <img
              src="/sleek-black-smart-ring-on-dark-background-futurist.jpg"
              alt="HEARTX Smart Ring"
              className="relative z-10 w-full h-auto rounded-2xl"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-full transition-all hover:scale-105"
              asChild
            >
              <a href="#price">КУПИ СЕГА</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border hover:bg-secondary text-lg px-8 py-6 rounded-full transition-all"
              asChild
            >
              <a href="#features">Научи повече</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
