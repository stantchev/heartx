export function FeaturesSection() {
  const features = [
    'Advanced HR sensor',
    'SpO₂ Oxygen Sensor',
    'Sleep Analysis Engine',
    'Stress Tracking Algorithm',
    'Step & Motion Tracking',
    'Smart App Sync (iOS & Android)',
    'Ultra Lightweight Titanium Body',
    'Hypoallergenic coating',
    'Bluetooth Low Energy'
  ]

  return (
    <section id="features" className="py-20 px-4 scroll-mt-20">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
          Технически <span className="text-primary">характеристики</span>
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-secondary/50 border border-border rounded-lg hover:bg-secondary transition-all text-center"
            >
              <p className="text-foreground leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
