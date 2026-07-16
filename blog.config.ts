import { defineBlogConfig } from 'astro-blog-kit';

export default defineBlogConfig({
  wpUrl: import.meta.env.WP_API_URL || 'http://paneldetecho.local/',
  postsPerPage: 6,
  defaultLayout: 'cards',
  locale: 'en',

  theme: {
    accent: '#f97316',     // Naranja vibrante (--color-accent)
    background: '#f8fafc', // Fondo slate muy claro (--color-slate-50)
    surface: '#ffffff',    // Fondo blanco puro para las tarjetas de contenido
    text: '#1e293b',       // Gris slate oscuro para legibilidad general (--color-slate-800)
    muted: '#475569',      // Gris intermedio para los textos descriptivos (--color-slate-600)
    mutedLight: '#64748b', // Gris medio para metadatos, tags y fechas (--color-slate-500)
    border: '#e2e8f0',     // Bordes finos de tarjetas (--color-slate-200)
    black: '#0f172a',      // Slate profundo para títulos fuertes (--color-slate-900)
    white: '#ffffff',
    fontHeading: '"Poppins", sans-serif', // Mapeado a la fuente de títulos (--font-heading)
    fontBody: '"Inter", sans-serif',       // Mapeado a la fuente base (--font-sans)
    fontMono: 'monospace',
    fontDisplay: '"Poppins", sans-serif',
    containerMax: '1280px', // Correspondiente a las 80rem de --container-max
  },

  // ── Hero ──────────────────────────────────────────────────────
  hero: {
    en: {
      tagline: 'Our Blog',
      titleLine1: 'Latest',
      titleLine2: 'Articles',
      description: 'Welcome to our blog.',
    },
    es: {
      tagline: 'Nuestro Blog',
      titleLine1: 'Últimos',
      titleLine2: 'Artículos',
      description: 'Bienvenido a nuestro blog.',
    },
  },

  // ── UI labels ────────────────────────────────────────────────
  ui: {
    en: {
      readMoreLabel: 'Read more →',
      btnPrev: 'Previous',
      btnNext: 'Next',
      commentButtonColor: 'var(--bk-accent)',
      commentButtonTextColor: 'var(--bk-white)',
      paginationStyle: 'minimal',
      // Paginación interactiva usando el azul marino corporativo y naranja de acento
      paginationBtnBg: '#ffffff',          // Superficie de botón limpia
      paginationBtnText: '#1e3a8a',        // Azul marino de marca (--color-primary)
      paginationBtnHoverBg: '#1e3a8a',     // Hover sólido en azul oscuro
      paginationBtnHoverText: '#ffffff',   // Texto blanco al pasar el mouse
      paginationActiveBg: '#f97316',       // Indicador de página activa en naranja
      paginationActiveText: '#ffffff',     // Contraste blanco
    },
    es: {
      readMoreLabel: 'Leer más →',
      btnPrev: 'Anterior',
      btnNext: 'Siguiente',
    },
  },
});