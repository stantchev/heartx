import { Button } from '@/components/ui/button'

export function CtaSection() {
  return (
    <section className="py-32 px-4 border-t border-border">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-balance">
          Готов ли си да подобриш съня, <br />
          стреса и <span className="text-primary">здравето си</span>?
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Присъедини се към хиляди доволни потребители, които вече подобриха качеството си на живот с HEARTX™
        </p>
        
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl px-12 py-8 rounded-full transition-all hover:scale-105"
          asChild
        >
          <a href="#price">КУПИ СЕГА</a>
        </Button>
        
        <p className="text-sm text-muted-foreground mt-8">
          Безплатна доставка • 30-дневна гаранция • Без риск
        </p>
      </div>
    </section>
  )
}
