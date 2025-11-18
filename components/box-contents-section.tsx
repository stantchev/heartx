import { Package, Zap, Book } from 'lucide-react'

export function BoxContentsSection() {
  const contents = [
    { icon: Package, text: 'HEARTX™ смарт пръстен' },
    { icon: Zap, text: 'Зарядна док-станция' },
    { icon: Zap, text: 'USB кабел' },
    { icon: Book, text: 'Ръководство' }
  ]

  return (
    <section className="py-20 px-4 border-t border-border">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
          Какво <span className="text-primary">получаваш</span>?
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {contents.map((item, index) => {
            const Icon = item.icon
            return (
              <div 
                key={index}
                className="flex items-center gap-4 p-6 bg-secondary/50 border border-border rounded-xl hover:border-primary/50 transition-all group"
              >
                <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                <p className="text-foreground font-medium leading-relaxed">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
