# LivingPet — Site institucional

Landing page do app LivingPet, feita em **React + Vite (JavaScript)**.
Inspirada na estrutura do ЗооЛайф, com a identidade da marca (verde + roxo).

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build de produção (pasta deployável)

```bash
npm run build    # gera dist/
npm run preview  # testa o build localmente
```

A pasta `dist/` é estática — publique em **Vercel, Netlify ou GitHub Pages**.

## Estrutura

```
index.html                 # HTML raiz + fontes (Nunito/Poppins)
src/
  main.jsx                 # bootstrap React
  App.jsx                  # todas as seções da página
  index.css                # design system (tokens verde+roxo) e estilos
  components/
    Phones.jsx             # mockups de celular (menu, atividades, ficha)
    Icons.jsx              # ícones SVG (sem emoji estrutural)
public/img/
  hero.png                 # hero cinematográfico (casal + São Bernardo + Siamês)
  familia.png              # seção de confiança (família + corgi)
  pet-menu.png             # arte do pet dentro dos mockups
```

## Seções

Header fixo · Hero cinematográfico · Recursos (4 cards) · Confiança + stats ·
**Mockups do app** (menu principal, atividades, ficha do pet) · Como funciona ·
Depoimentos · CTA de download · Footer com disclaimer veterinário e LGPD.

## Trocar imagens

Basta substituir os arquivos em `public/img/` mantendo os nomes. O hero é
`background-image` (definido em `App.jsx`); a família e o pet são `<img>`.
