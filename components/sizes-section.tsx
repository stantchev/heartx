export function SizesSection() {
  const sizes = [
    { range: '54–56 мм', size: 'Size 7' },
    { range: '57–59 мм', size: 'Size 8' },
    { range: '60–62 мм', size: 'Size 9' },
    { range: '63–65 мм', size: 'Size 10' }
  ]

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-balance">
          Избери правилния <span className="text-primary">размер</span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Измерете обиколката на пръста си с конец или лента и използвайте таблицата по-долу
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {sizes.map((size, index) => (
            <div 
              key={index}
              className="p-6 bg-background border border-border rounded-xl hover:border-primary transition-all text-center"
            >
              <p className="text-2xl font-bold text-primary mb-2">{size.size}</p>
              <p className="text-muted-foreground">{size.range}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
