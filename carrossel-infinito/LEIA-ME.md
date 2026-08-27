# Carrossel infinito de depoimentos

Pacote independente do carrossel da seção **O QUE ELAS ESTÃO DIZENDO**.

## Arquivos

- `testimonials.tsx`: seção completa, dados dos depoimentos, cards e duas linhas do carrossel.
- `styles.css`: animações `marquee` e `marquee-reverse`, incluindo suporte a `prefers-reduced-motion`.

## Dependências

- React 19+
- Tailwind CSS (as classes utilitárias usadas no componente)
- Lucide React não é necessário para este carrossel
- As imagens dos depoimentos devem existir em `/public/depoimentos/` ou ter seus caminhos atualizados no array `DEPOIMENTOS`.

## Como reutilizar

1. Copie `testimonials.tsx` e `styles.css` para o projeto de destino.
2. Importe o CSS no stylesheet global ou no ponto de entrada de estilos:

```css
@import "./carrossel-infinito/styles.css";
```

3. Importe o componente:

```tsx
import { TestimonialsSection } from "./carrossel-infinito/testimonials"

export default function Page() {
  return <TestimonialsSection />
}
```

O componente usa `animate-marquee` e `animate-marquee-reverse` para manter duas linhas em movimento contínuo. Ajuste as durações no `styles.css` se quiser alterar a velocidade.
