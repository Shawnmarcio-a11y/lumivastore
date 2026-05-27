# Plano — Landing Page LUMIVÁ™

Construir uma landing page premium estilo Apple para a marca de clareamento dental LUMIVÁ™, com página secundária de formulário de pedido.

## Stack
- TanStack Start (template padrão web_app) + Tailwind CSS
- Framer Motion para animações (fade-up, scroll, hover, glow)
- React Router interno: `/` (landing) e `/pedido` (formulário)
- Sem backend nesta fase — o formulário envia para WhatsApp via link `wa.me` (ou guarda em estado local). Posso integrar Lovable Cloud depois se quiseres persistir pedidos.

## Sistema de design
Tokens em `index.css` + `tailwind.config.ts`:
- `--white: #FFFFFF`
- `--green: #6BE675` (accent / glow)
- `--green-deep: #0F3D2E` (seção oferta)
- `--ink: #0B0B0B`
- Tipografia: Inter (UI) + Fraunces ou Instrument Serif para headlines grandes — estética Apple/skincare premium
- Espaçamento generoso, radius suave (12–20px), sombras leves, glassmorphism nos cards de prova social
- Glow verde nos CTAs via `box-shadow` animado

## Estrutura da landing (`/`)
1. **Header** — transparente, fica sólido com `backdrop-blur` ao scroll. Logo "LUMIVÁ™" + botão "Comprar Agora"
2. **Hero** — produto flutuante central (animação float infinita), partículas verdes suaves no fundo, headline "Volte a Sorrir Sem Vergonha.", subheadline, 4 bullets, preço 1499MT riscado → 997MT verde, CTA gigante com glow → navega para `/pedido`
3. **Dor emocional** — imagem (pessoa negra escondendo sorriso) + texto
4. **Transformação** — antes/depois com slider ou split image
5. **Benefícios** — grid 4 cards minimalistas com ícones
6. **Como funciona** — 4 passos em layout horizontal com scroll/stagger
7. **Prova social** — 3 cards glassmorphism com depoimentos + avatares
8. **Quebra de crença** — bloco minimalista branco
9. **Oferta** — fundo verde escuro `#0F3D2E`, preço destacado, lista do que recebe, CTA gigante
10. **Garantia** — ícone escudo + "Risco Zero"
11. **FAQ** — accordion animado (Radix Accordion + motion)
12. **Footer** — minimalista com texto final

CTA flutuante sticky no mobile (sempre visível).

## Página de pedido (`/pedido`)
Formulário simples premium, validação com zod:
- Nome completo, Telefone, Endereço, Pontos de referência, Província (select com províncias de Moçambique), Quantidade
- Botão "FINALIZAR PEDIDO" — abre WhatsApp com mensagem pré-formatada do pedido

## Imagens (geradas via imagegen)
Todas com pessoas negras africanas/moçambicanas, iluminação cinematográfica, premium:
- Hero: placeholder para o produto (vais enviar depois) — uso um mockup neutro de frasco de pó branco enquanto isso
- Bloco dor: mulher negra escondendo sorriso com a mão
- Bloco transformação: antes/depois sorriso (2 imagens) ou um par homem/mulher
- 3 retratos para prova social (avatares)
- Detalhe natural (folhas/produto) para textura de fundo se necessário

Modelo: `premium` para hero e antes/depois, `standard` para retratos.

## Animações
- Fade-up on scroll com `whileInView` (Framer Motion) — stagger nos filhos
- Hover scale + glow nos CTAs
- Float infinito no produto hero
- Parallax leve no fundo do hero
- Accordion FAQ com height animate
- Scroll suave global (`scroll-behavior: smooth`)

## Performance & SEO
- Imagens em `.jpg` (exceto produto se transparente), lazy loading
- `<title>` "LUMIVÁ™ — Whitening Powder Natural" (<60 chars)
- Meta description <160 chars focada em conversão
- H1 único no hero, semantic HTML, alt text em todas as imagens
- JSON-LD `Product` com preço 997 MZN
- Viewport responsivo, mobile-first

## Detalhes técnicos
- Criar artifact `web_app:lumiva` (TanStack Start padrão)
- Componentes em `src/components/landing/` (Header, Hero, EmotionalPain, Transformation, Benefits, HowItWorks, Testimonials, BeliefBreaker, Offer, Guarantee, FAQ, Footer, StickyMobileCTA)
- Rota `/pedido` com componente `OrderForm`
- Hook `useScrolled` para o header
- Util `formatPrice` para "997 MT"

## Fora de escopo (posso fazer depois)
- Persistência de pedidos (precisa Lovable Cloud)
- Upload real da imagem do produto (vais enviar — substituo o placeholder)
- Pagamento online (atual: pagamento na entrega + WhatsApp)

Confirma e eu construo.
