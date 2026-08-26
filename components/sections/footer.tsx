export function Footer() {
  return (
    <footer className="py-12 bg-[#0a0514] text-center px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <img
          src="/logo-footer.webp"
          alt="Método Personalizados por Encomenda"
          className="h-16 w-auto object-contain mx-auto mb-8"
        />
        <p className="text-slate-600 text-[10px] font-bold leading-relaxed max-w-xl mx-auto uppercase tracking-widest mb-10 opacity-60">
          Resultados podem variar. Este site não faz parte do Facebook Inc ou Google Inc. Toda informação é de nossa
          responsabilidade.
        </p>
        <div className="h-px w-16 bg-slate-800 mx-auto mb-10" />
        <p className="text-[10px] font-black text-slate-800 uppercase tracking-[0.4em] mb-8">
          © 2026 PERSONALIZADOS POR ENCOMENDA • TODOS OS DIREITOS RESERVADOS
        </p>
        <div className="pt-8 border-t border-white/5">
          <p className="text-slate-600 text-[9px] font-black uppercase tracking-widest mb-4">
            © 2026 • Todos os direitos reservados.
          </p>
          <p className="text-slate-700 text-[9px] font-bold uppercase tracking-widest opacity-40 leading-relaxed max-w-2xl mx-auto mb-4">
            Todo o conteúdo presente nesta página, incluindo textos, imagens, design, estrutura, vídeos, materiais e
            quaisquer outros elementos, é protegido por leis de direitos autorais e propriedade intelectual.
          </p>
          <p className="text-[#4b3c66] text-[9px] font-bold uppercase tracking-widest opacity-40 leading-relaxed max-w-2xl mx-auto">
            É proibida a reprodução, cópia, distribuição ou modificação, total ou parcial, sem autorização prévia por
            escrito do responsável. O uso indevido do conteúdo poderá resultar em medidas legais conforme a legislação
            vigente.
          </p>
        </div>
      </div>
    </footer>
  )
}
