MAIMEZ — Digital Craft Studio ⚡
Maimez es un portfolio boutique de alto impacto diseñado para reflejar una identidad visual disruptiva. El proyecto se aleja de los diseños genéricos para adoptar una estética Brutalista-Editorial, combinando una tipografía masiva con una paleta de colores profunda y transiciones fluidas.

🎨 Identidad Visual
Primary Green: #32592b (Deep Forest)
Accent Magenta: #aa0664 (Vibrant Craft)
Typography: Brutalist heavy weights con espaciado compacto (tracking-tighter).

🛠️ Tech Stack
Framework: Next.js 14/15 (App Router)
Styling: Tailwind CSS
Animations: Framer Motion
Forms: Formspree (Integración AJAX/JSON)
Icons: Lucide React / Custom SVG

✨ Key Features
Brutalist Hero: Tipografía responsiva de gran escala (vw units) con efectos de stroke.
Editorial Services: Grilla de servicios con jerarquía numérica y diseño de cuadrícula minimalista.
Interactive Contact: Formulario sincronizado vía API para evitar redirecciones externas, manteniendo al usuario en la experiencia de marca.
Responsive Design: Adaptabilidad total desde dispositivos móviles hasta pantallas Ultra-Wide.
Custom Selection: Experiencia de usuario pulida con personalización del resaltado de texto (::selection).

🚀 Instalación y Uso
Clonar el repositorio:

Bash
git clone https://github.com/tu-usuario/portfolio-maimez.git
Instalar dependencias:

Bash
npm install
# o
yarn install
Configurar variables de entorno:
Crea un archivo .env.local y añade tu ID de Formspree (o cámbialo directamente en el componente Contact.tsx):

Fragmento de código
NEXT_PUBLIC_FORMSPREE_ID=tu_id_aqui
Correr en modo desarrollo:
Bash
npm run dev

📂 Estructura del Proyecto
/app: Rutas y Layouts de Next.js.

/components: Componentes modulares (Hero, Navbar, About, Services, Contact).

/public: Assets, logos y tipografías.

Desarrollado con ❤️ por Maimez Studio.
"Transformando ideas en experiencias digitales de alto impacto."
