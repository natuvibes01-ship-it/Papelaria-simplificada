// Prints reais de depoimentos das alunas (conversas de WhatsApp / Instagram).
const DEPOIMENTOS = [
  { src: "/depoimentos/rafaela.webp", alt: "Depoimento da aluna Rafaela no WhatsApp" },
  { src: "/depoimentos/janaina.webp", alt: "Depoimento da aluna Janaina no WhatsApp" },
  { src: "/depoimentos/luana.webp", alt: "Depoimento da aluna Luana Mendes no WhatsApp" },
  { src: "/depoimentos/stefany.webp", alt: "Depoimento da aluna Stefany no WhatsApp" },
  { src: "/depoimentos/malu.webp", alt: "Depoimento da aluna Malu no WhatsApp" },
  { src: "/depoimentos/joice.webp", alt: "Depoimento da aluna Joice no Instagram" },
  { src: "/depoimentos/ana.webp", alt: "Depoimento da aluna Ana Barbosa no Instagram" },
  { src: "/depoimentos/miriam.webp", alt: "Depoimento da aluna Miriam Nunes no Instagram" },
  { src: "/depoimentos/jordana.webp", alt: "Depoimento da aluna Jordana no Instagram" },
]

const ROW_ONE = DEPOIMENTOS.filter((_, i) => i % 2 === 0)
const ROW_TWO = DEPOIMENTOS.filter((_, i) => i % 2 === 1)

type Depoimento = (typeof DEPOIMENTOS)[number]

function DepoimentoCard({ item }: { item: Depoimento }) {
  return (
    <div className="shrink-0 h-[380px] w-[260px] rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-md">
      <img
        src={item.src || "/placeholder.svg"}
        alt={item.alt}
        className="h-full w-full object-cover object-top select-none pointer-events-none"
        loading="lazy"
        draggable={false}
      />
    </div>
  )
}

function MarqueeRow({
  items,
  animation,
}: {
  items: Depoimento[]
  animation: string
}) {
  return (
    <div className="flex overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className={`flex gap-4 pr-4 ${animation}`}>
        {/* Sequência original + réplica para loop contínuo sem cortes */}
        {[...items, ...items].map((item, i) => (
          <DepoimentoCard key={i} item={item} />
        ))}
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-[#F8F8F8] px-6 border-b border-slate-200 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#5B2A86] font-black text-[12px] uppercase tracking-[0.4em] mb-3">RESULTADOS REAIS</p>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter italic">
            O QUE ELAS ESTÃO DIZENDO
          </h2>
          <div className="w-16 h-1 bg-[#5B2A86] mx-auto rounded-full" />
        </div>
      </div>

      <div className="flex flex-col gap-4 -mx-6">
        <MarqueeRow items={ROW_ONE} animation="animate-marquee" />
        <MarqueeRow items={ROW_TWO} animation="animate-marquee-reverse" />
      </div>
    </section>
  )
}
