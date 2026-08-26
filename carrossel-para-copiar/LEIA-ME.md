# Carrossel de resultados

Cópia independente do componente usado na seção **O RESULTADO QUE VOCÊ VAI ENTREGAR**.

## Arquivos

- `results-gallery.tsx`: seção completa, incluindo título, instrução e lista de imagens.
- `card-carousel.tsx`: carrossel reutilizável baseado em Swiper, com autoplay, loop, navegação, paginação e arraste.

## Dependências

Instale ou mantenha estas dependências no projeto:

```bash
pnpm add swiper lucide-react
```

Também são necessários:

- React 19 ou compatível
- Tailwind CSS (as classes utilitárias usadas na seção)
- Next.js App Router, pois os componentes usam `"use client"`

## Uso

Mantenha os dois arquivos na mesma pasta e importe a seção:

```tsx
import { ResultsGallerySection } from "./carrossel-para-copiar/results-gallery"

export default function Page() {
  return <ResultsGallerySection />
}
```

O componente `CardCarousel` também pode ser importado diretamente para receber uma lista própria de imagens no formato `{ src: string; alt: string }[]`.

## Observação

Os arquivos nesta pasta são uma cópia para reutilização. O carrossel original do projeto não foi alterado.
