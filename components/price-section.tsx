import { Button } from '@/components/ui/button'

export function PriceSection() {
  return (
    <section id="price" className="py-20 px-4 bg-secondary/30 scroll-mt-20">
      <div className="container max-w-4xl mx-auto">
        <div className="bg-background border border-border rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Специална <span className="text-primary">промоция</span>
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-5xl md:text-7xl font-bold text-primary">69 лв</span>
            <div className="text-left">
              <span className="block text-2xl text-muted-foreground line-through">139 лв</span>
              <span className="block text-sm text-primary font-semibold">СПЕСТИ 50%</span>
            </div>
          </div>
          
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
            Ограничена оферта – само докато има наличност
          </p>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl px-12 py-8 rounded-full transition-all hover:scale-105 w-full sm:w-auto"
            asChild
          >
            <a href="https://buy.stripe.com/test_PLACEHOLDER" target="_blank" rel="noopener noreferrer">
              КУПИ СЕГА
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
