# MM Advogados — Website

Site institucional da Milagrosa Macuácua Advogados, construído com React, Vite e Tailwind. Otimizado para performance com lazy-loading, `srcset/sizes` e melhorias de navegação em SPA.

## Stack

- Vite + React (TypeScript)
- Tailwind CSS
- shadcn-ui
- Framer Motion

## Requisitos

- Node.js 18+ (recomendado)
- npm ou pnpm instalados

## Instalação e desenvolvimento

```sh
# Dentro de MMA/MMAdvogados
npm i                # ou: pnpm i

# Ambiente de desenvolvimento (porta 8080, abre automaticamente)
npm run dev          # ou: pnpm dev

# Build de produção
npm run build        # ou: pnpm build

# Preview de produção (Vite Preview)
npm run preview      # ou: pnpm preview
```

> Nota: o projeto usa Vite configurado para `port: 8080` (ver `vite.config.ts`).

## Scripts úteis

- `resize:images`: gera variantes WebP para imagens em `public/images`.
  ```sh
  npm run resize:images     # ou: pnpm run resize:images
  ```

## Otimização de imagens

- Componente `LazyImage` aceita `srcSet` e `sizes` para servir imagens responsivas.
- Usa `IntersectionObserver` para carregar imagens apenas quando visíveis (lazy) e respeita `priority` para heróis/elementos críticos.
- Define `width`/`height` para reduzir CLS.
- O script `tools/resize-images.js` gera variantes `-400/-800/-1200/-1600.webp` evitando reprocessar arquivos já gerados.

Exemplo em cards:

```tsx
<LazyImage
  src="/images/legal-team.webp"
  srcSet="/images/legal-team-400.webp 400w, /images/legal-team-800.webp 800w, /images/legal-team-1200.webp 1200w"
  sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
  alt="Equipe jurídica"
  width={1200}
  height={675}
  className="w-full h-full object-cover"
  fallbackSrc="/images/legal-team.webp"
/>
```

Mais detalhes em `docs/IMAGES.md`.

## Navegação SPA aprimorada (ScrollToTop)

- Componente `src/components/ScrollToTop.tsx` garante que:
  - Ao mudar de rota, o scroll volta ao topo instantaneamente;
  - Remove qualquer `overflow: hidden` do `body/html` deixado pelo menu mobile;
  - Dá suporte a URLs com hash `#id`, rolando suavemente até o elemento alvo;
  - Foca programaticamente o `<main id="conteudo">` (se existir) para acessibilidade.

Integração em `App.tsx`:

```tsx
<BrowserRouter>
  <ScrollToTop />
  <AppRoutes />
  <WhatsAppButton />
</BrowserRouter>
```

Recomendação de acessibilidade: envolver o conteúdo principal de cada página com `<main id="conteudo">` para foco consistente.

## Estrutura principal

```
MMAdvogados/
├─ public/
│  └─ images/           # imagens base (WebP)
├─ src/
│  ├─ components/
│  │  ├─ LazyImage.tsx
│  │  ├─ ScrollToTop.tsx
│  │  ├─ HeroSection.tsx, TeamSection.tsx, AboutSection.tsx
│  │  └─ Navigation.tsx, Footer.tsx
│  ├─ pages/
│  │  └─ Index.tsx, Sobre.tsx, Servicos.tsx, Equipe.tsx, Contactos.tsx
│  └─ lib/
├─ tools/
│  └─ resize-images.js
└─ vite.config.ts
```

## Boas práticas de performance

- Evitar apontar `src` para variantes que não existem; usar arquivo original como `src` e variantes em `srcSet`.
- Manter `width`/`height` nas imagens para estabilidade de layout (reduz CLS).
- Usar `priority` apenas em imagens críticas (como hero) para não impactar LCP.

## Deploy

- Gerar build com `npm run build` e servir `dist/` em qualquer host estático (Vercel, Netlify, etc.).

## Suporte

Em caso de dúvidas sobre otimização de imagens ou navegação SPA, ver `docs/IMAGES.md` e o componente `ScrollToTop.tsx`.
