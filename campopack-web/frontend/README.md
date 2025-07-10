# Campopack - Frontend

Sitio web de Campopack, empresa de empaques sostenibles para la agroindustria.

## 🚀 Características

- **Responsive Design**: Optimizado para móviles, tablets y desktop
- **Animaciones Suaves**: Framer Motion para micro-interacciones
- **SEO Optimizado**: Meta tags dinámicos y estructura semántica
- **Performance**: Lazy loading, code splitting y optimizaciones
- **Formulario Inteligente**: Validación en tiempo real y feedback visual
- **Error Handling**: Error boundary para manejo elegante de errores

## 🛠️ Tecnologías

- **React 18** con Vite
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones
- **React Router** para navegación
- **Lucide React** para iconos
- **Formspree** para formularios

## 📦 Instalación

```bash
npm install
```

## 🚀 Desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5174`

## 🏗️ Build para Producción

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`

## 🌐 Deploy

### Netlify (Recomendado)

1. Conecta tu repositorio a Netlify
2. Configura el build:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Configura tu dominio personalizado

### Vercel

1. Instala Vercel CLI: `npm i -g vercel`
2. Ejecuta: `vercel`
3. Sigue las instrucciones

### Otros Hostings

Cualquier hosting estático que soporte SPA:
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront

## 🔧 Configuración

### Variables de Entorno

Crea un archivo `.env`:

```env
VITE_SITE_URL=https://tudominio.com
VITE_FORMSPREE_ID=tu_formspree_id
```

### Dominio Personalizado

1. Configura los DNS de tu dominio
2. En Netlify/Vercel, agrega tu dominio
3. Configura HTTPS automático

## 📱 Características Responsive

- **Móvil**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+
- **Pantallas grandes**: 1280px+

## 🎨 Personalización

### Colores

Los colores están definidos en `tailwind.config.js`:

```js
primary: {
  500: '#234b1c', // Verde principal
  // ...
}
accent: {
  100: '#f7bfa0', // Naranja
  // ...
}
```

### Fuentes

- **Inter**: Fuente principal (Google Fonts)
- **Sans-serif**: Fallback

## 📊 Analytics

Para agregar Google Analytics:

1. Agrega el script en `index.html`
2. Configura `GA_MEASUREMENT_ID` en el componente Analytics

## 🔍 SEO

- Meta tags dinámicos por página
- Open Graph tags
- Twitter Cards
- Estructura semántica HTML
- Alt texts descriptivos

## 🐛 Troubleshooting

### Error de Build
```bash
npm run build --debug
```

### Problemas de Responsive
Verifica los breakpoints en `tailwind.config.js`

### Formulario no funciona
Verifica la configuración de Formspree en el componente Contacto

## 📞 Soporte

Para problemas técnicos, contacta al desarrollador.

---

**Campopack** - Soluciones que Conservan Más que Paltas 🥑
