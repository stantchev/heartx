import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FaqSection() {
  const faqs = [
    {
      question: 'Колко време държи батерията?',
      answer: '5–7 дни при нормална употреба.'
    },
    {
      question: 'Работи ли с iPhone?',
      answer: 'Да, и с Android. Приложението е налично за iOS и Android.'
    },
    {
      question: 'Нужно ли е приложение?',
      answer: 'Да, безплатното приложение HEARTX е необходимо за пълен достъп до данните и анализите.'
    },
    {
      question: 'Водоустойчив ли е?',
      answer: 'Да, IP68 – можете да го носите при измиване на ръце, душ и плуване.'
    },
    {
      question: 'Мога ли да тренирам с него?',
      answer: 'Да, проектиран е специално за спорт и физическа активност.'
    }
  ]

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
          Често задавани <span className="text-primary">въпроси</span>
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
