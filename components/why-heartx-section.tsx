export function WhyHeartxSection() {
  const reasons = [
    'Да следят стреса си',
    'Да подобрят съня си',
    'Да оптимизират тренировките си',
    'Да водят по-здравословен и балансиран живот'
  ]

  return (
    <section className="py-20 px-4 border-t border-border">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-balance">
          Защо <span className="text-primary">HEARTX™</span>?
        </h2>
        
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          HEARTX™ е създаден за хора, които искат да подобрят качеството на живота си чрез 
          технология – без сложност, без шум. Само умни данни и ясни резултати.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 bg-secondary/50 border border-border rounded-xl hover:border-primary/50 transition-all"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold">
                {index + 1}
              </div>
              <p className="text-foreground leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
