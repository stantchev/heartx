export function BenefitsSection() {
  const benefits = [
    { emoji: '🔥', text: 'Следене на стреса в реално време' },
    { emoji: '💤', text: 'Анализ на съня' },
    { emoji: '❤️', text: 'Сърдечен пулс 24/7' },
    { emoji: '🏃', text: 'Track на тренировки' },
    { emoji: '🔋', text: 'До 7 дни батерия' },
    { emoji: '🌧', text: 'IP68 водоустойчив' }
  ]

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-all group"
            >
              <span className="text-4xl group-hover:scale-110 transition-transform">{benefit.emoji}</span>
              <p className="text-foreground font-medium leading-relaxed">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
