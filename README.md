# KINGBURGE

Sitio web frontend para un restaurante de hamburguesas. Está construido únicamente con HTML, CSS y JavaScript vanilla; no requiere instalación de dependencias ni servidor.

## Ejecución

Abre [index.html](index.html) directamente en el navegador. Para una experiencia de desarrollo más cómoda, también puedes abrir la carpeta con una extensión de servidor local (por ejemplo, Live Server de VS Code).

## Estructura

```text
kingburger/
├── index.html          # Página principal, menú, promociones y contacto
├── login.html          # Inicio de sesión
├── registro.html       # Creación de cuenta
├── carrito.html        # Carrito, resumen y confirmación de pedido
├── css/
│   └── style.css       # Diseño responsive y animaciones
├── js/
│   ├── main.js         # Estado global, header, sesión y avisos
│   ├── auth.js         # Registro e inicio de sesión
│   ├── menu.js         # Catálogo, buscador, filtros y agregar al carrito
│   └── carrito.js      # Cantidades, totales y confirmación
└── img/                # Carpetas preparadas para imágenes propias
```

## Funcionalidades destacadas

- Catálogo de 66 productos, filtrable por categoría y buscable por texto.
- Registro, login y logout con validaciones básicas.
- Carrito persistente: se pueden sumar, restar y eliminar productos.
- Cálculo automático de subtotal, impuesto del 10% y total.
- Confirmación de pedido con un número ficticio.
- Interfaz adaptable a escritorio, tablet y móvil.

## Datos locales

Usuarios, sesión y carrito se guardan solamente en `localStorage` del navegador bajo las claves `kb_users`, `kb_session` y `kb_cart`. Para reiniciar la demo, elimina esos datos desde las herramientas de desarrollo del navegador.

## Imágenes

Actualmente se usan fotografías gastronómicas externas de demostración. Las carpetas de `img/` están listas para reemplazarlas por imágenes locales; al hacerlo, actualiza las URLs del catálogo en `js/menu.js`.
