export function HowItWorksSection() {
  const steps = [
    'Носиш пръстена през деня и нощта',
    'Сензорите следят пулс, стрес, движение',
    'Данните се изпращат към приложението',
    'Получаваш анализ за стрес, сън, активност и wellness score'
  ]

  return (
    <section className="py-20 px-4 border-t border-border">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
          Как <span className="text-primary">работи</span>?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative p-8 bg-secondary/50 border border-border rounded-xl hover:border-primary/50 transition-all"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                {index + 1}
              </div>
              <p className="text-foreground text-lg leading-relaxed pt-2">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
