# TecnoStore Argentina - Plataforma de Catálogo de Productos
## Visita el sitio web de TecnoStore Argentina haciendo click [AQUÍ](https://www.tecnostorearg.com/). 🚀
---
## Descripción del Proyecto
### TecnoStore es un e-commerce de electrónica con una trayectoria de más de 15 años y una sólida presencia en redes sociales (+120.000 seguidores en [Instagram](https://www.instagram.com/tecnostorearg/)). Este proyecto busca potenciar sus ventas al establecer una robusta presencia web, captando un nuevo segmento de clientes online.
### La plataforma fue diseñada para ofrecer una experiencia de usuario intuitiva, destacando las siguientes funcionalidades clave:
* **Página Principal Dinámica:** Muestra información destacada de TecnoStore, productos en tendencia, marcas relevantes (especialmente para smartphones) y los últimos videos de colaboraciones con sponsors.
* **Catálogo de Productos Avanzado:** Incluye filtros accesibles y de fácil comprensión, lo que agiliza la exploración y búsqueda de productos por diversas categorías y marcas.
* **Información Esencial:** Dispone de una sección de preguntas frecuentes para resolver dudas comunes y una página de contacto con acceso directo a las redes sociales de TecnoStore y la ubicación de sus oficinas.
* **Panel de Administración Seguro:** La gestión y actualización del catálogo de productos se realiza a través de una interfaz de administración, cuyo acceso está restringido por contraseña para los responsables del contenido.
### Como único desarrollador asignado, asumí la responsabilidad integral del ciclo de vida del proyecto. Esto abarcó desde la selección del stack tecnológico y el diseño completo (backend y frontend), hasta el despliegue, configuración y la carga inicial de datos y multimedia.
---
## Stack tecnológico ⚙️
<details>
  <summary><h3>Next.js (framework frontend)</h3></summary>
  <h4>Por su capacidad de renderizado del lado del servidor, optimizando el rendimiento y SEO del sitio, asegurando una carga rápida de páginas y datos.</h4>
</details>
<details>
  <summary><h3>React (librería UI)</h3></summary>
  <h4>Por su arquitectura de componentes reutilizables, agilizando el desarrollo y favoreciendo la reutilización de bloques, mejorando la estructura del código.</h4>
</details>
<details>
  <summary><h3>ShadCN (componentes UI)</h3></summary>
  <h4>Por su atractivo visual y fácil configuración, además de la flexible personalización y uso de sus componentes.</h4>
</details>
<details>
  <summary><h3>Tailwind CSS (framework CSS)</h3></summary>
  <h4>Por su facilidad de uso y personalización de variables reutilizables, agilizando el diseño responsivo y moderno para cada parte del sitio.</h4>
</details>
<details>
  <summary><h3>Supabase (Base de Datos & Backend como Servicio)</h3></summary>
  <h4>Por su capacidad de ofrecer base de datos relacional con APIs en tiempo real, permitiéndome enfocarme en la presentación y rendimiento del frontend.</h4>
</details>
<details>
  <summary><h3>Cloudinary (gestión de imágenes)</h3></summary>
  <h4>Por su gestión y optimización de imágenes, además de la facilidad de uso de los archivos a través de enlaces, permitiendo una fácil integración con los componentes Image de Next.js.</h4>
</details>
<details>
  <summary><h3>Vercel (plataforma de despliegue)</h3></summary>
  <h4>Por su integración nativa con Next.js, garantizando un despliegue rápido que me permitió facilitar la entrega y garantizar el mantenimiento contínuo del sitio.</h4>
</details>

---
### Para ejecutar el proyecto localmente, necesitas configurar tus variables de entorno de Supabase.
### Crea un archivo .env.local en la raíz del proyecto y añade:
### NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
### NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key_de_supabase
### Luego ejecutar en consola:
```bash
git clone https://github.com/TadekDuran/TecnoStoreArgentina.git
npm install
npm run dev
```
