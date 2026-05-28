import { defineBlogConfig } from 'astro-blog-kit';

export default defineBlogConfig({
  wpUrl: import.meta.env.WP_API_URL || 'http://paneldetecho.local',
  postsPerPage: 5,
  defaultLayout: 'cards',
  locale: 'en',
  theme: {
    accent: '#f97316',
    background: '#ffffff',
    surface: '#f8f8f8',
    text: '#1e3a8a',
    muted: '#6b7280',
    mutedLight: '#4b5563',
    border: '#e5e7eb',
    black: '#0a0a0a',
    white: '#ffffff',
    fontHeading: 'Poppins, sans-serif',
    fontBody: 'Inter, sans-serif',
    fontMono: 'monospace',
    fontDisplay: 'Georgia, serif',
    containerMax: '1200px',
  },
});