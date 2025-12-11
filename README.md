# Studio VIP Nails — Landing Page

Landing page React/TypeScript construída com Vite + Tailwind para o funil “15% OFF + bônus” da Polly Caixeta. Inclui timer persistente, CTA fixo, seções animadas e testes automatizados para os hooks críticos.

## Pré‑requisitos

- Node 20.19.0 já está empacotado em `node-v20.19.0-darwin-arm64/`. Não é necessário instalar globalmente.
- npm (vem com o Node local).

## Scripts principais

| Comando | Descrição |
| --- | --- |
| `npm run dev:local` | Sobe o Vite usando o Node local (recomendado). |
| `npm run dev` | Usa o Vite com o Node presente no PATH global. |
| `npm run build` | Gera o bundle de produção (`dist/`). |
| `npm run test` | Executa os testes do Vitest uma vez. |
| `npm run test:watch` | Mantém o Vitest observando alterações. |

## Como rodar localmente

1. Abra o terminal no diretório do projeto.
2. Rode `npm install` (já feito na primeira configuração).
3. Execute `npm run dev:local`.
4. Acesse o link indicado no terminal (ex.: `http://localhost:5173/`).

## Estrutura de pastas

```
src/
 ├─ components/    # UI reutilizável, features e layout
 ├─ sections/      # Seções da landing e subcomponentes
 ├─ hooks/         # Lógica de timer, CTA, bookings
 ├─ data/          # Conteúdos tipados (bônus, FAQ, etc.)
 ├─ styles/        # CSS global + Tailwind
 └─ tests          # (mesmos diretórios com __tests__)
```

## Testes

- **Vitest + React Testing Library** cobrem:
  - `usePersistentCountdown`, `useDailyBookings`, `useStickyCTA`
  - Comportamento do `FAQItem`
- Execute `npm run test` para garantir estabilidade antes de deploy.

## Acessibilidade & Performance

- Timer expõe `role="timer"` com `aria-live`.
- FAQ usa `aria-expanded`/`aria-controls`.
- Imagens otimizadas (`polly-hero.webp` com lazy loading).
- Components puros usam `React.memo` para evitar re-renders desnecessários.

## Deploy

1. Rode `npm run build`.
2. Sirva o conteúdo de `dist/` (Netlify, Vercel, S3, etc.).
