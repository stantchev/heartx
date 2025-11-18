import { Truck, Shield, RotateCcw } from 'lucide-react'

export function DeliverySection() {
  const info = [
    { icon: Truck, title: 'Доставка', text: '7–12 дни' },
    { icon: Shield, title: 'Гаранция', text: '30-дневна гаранция' },
    { icon: RotateCcw, title: 'Връщане', text: 'Без въпроси при връщане' }
  ]

  return (
    <section className="py-20 px-4 border-t border-border">
      <div className="container max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {info.map((item, index) => {
            const Icon = item.icon
            return (
              <div 
                key={index}
                className="text-center p-6 bg-secondary/50 border border-border rounded-xl hover:border-primary/50 transition-all group"
              >
                <Icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
