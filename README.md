# 📱 CLA-Recordatorios

Una aplicación web progresiva (PWA) minimalista de recordatorios con diseño iOS, construida con HTML, Tailwind CSS y JavaScript vanilla.

![Version](https://img.shields.io/badge/version-1.0.0-purple)
![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ Características

- ✅ **Diseño iOS nativo**: Interfaz que replica el estilo de las apps nativas de Apple
- 🌓 **Modo oscuro automático**: Detecta y sincroniza con el tema del sistema
- 📱 **PWA completa**: Instalable en iPhone como app nativa
- 💾 **Persistencia local**: Datos guardados en localStorage
- 🔔 **Notificaciones**: Recordatorios en la fecha y hora configuradas
- 📵 **Funciona offline**: Service Worker para acceso sin conexión
- 🎨 **Animaciones fluidas**: Transiciones suaves tipo iOS
- 🧹 **Limpieza automática**: Elimina tareas completadas después de 7 días

## 🚀 Demo

[Ver Demo en vivo](https://todo.claangel.site)


## 🛠️ Tecnologías

- **HTML5**: Estructura semántica
- **Tailwind CSS**: Estilos utility-first via CDN
- **JavaScript Vanilla**: Sin frameworks, código puro
- **Service Worker**: Funcionalidad offline
- **Web Notifications API**: Sistema de notificaciones
- **LocalStorage API**: Persistencia de datos

## 📦 Instalación

### Opción 1: Clonar repositorio
```bash
# Clonar el repositorio
git clone https://github.com/AngelCLA/cla-recordatorios.git

# Entrar al directorio
cd cla-recordatorio

# Abrir con un servidor local (ejemplo con Python)
python -m http.server 8000

# O con Node.js
npx serve
```

### Opción 2: Desplegar directamente

Sube los archivos a cualquier hosting estático:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

## 📂 Estructura del proyecto
```
cla-recordatorios/
├── index.html          # Archivo principal de la app
├── sw.js              # Service Worker para funcionalidad offline
├── manifest.json      # Configuración de la PWA
├── favicon.svg        # Icono de la aplicación
└── README.md          # Este archivo
```

## 📱 Instalar en iPhone

1. Abre la app en **Safari** (debe ser Safari, no Chrome)
2. Toca el botón **Compartir** (□↑)
3. Desplázate y selecciona **"Añadir a pantalla de inicio"**
4. Toca **"Añadir"**

¡Listo! La app aparecerá en tu pantalla de inicio como una app nativa.

## 🎯 Uso

### Crear una tarea
1. Toca el botón **+** en la esquina inferior derecha
2. Completa el título (obligatorio)
3. Opcionalmente añade descripción, fecha y hora
4. Toca **"Añadir"**

### Completar una tarea
- Toca el círculo a la izquierda de la tarea
- La tarea se eliminará con una animación

### Notificaciones
- La primera vez que uses la app, se solicitará permiso para notificaciones
- Las notificaciones se envían cuando llega la fecha/hora configurada
- La app debe estar abierta o en segundo plano para recibir notificaciones

## ⚙️ Configuración

### Personalizar colores

Edita las variables en `index.html`:
```css
/* Color principal (purple-700) */
.text-purple-700 { color: #7E22CE; }

/* Color del tema */
"theme_color": "#7E22CE"
```

### Cambiar el nombre de la app

Edita `manifest.json`:
```json
{
  "name": "Tu App",
  "short_name": "App"
}
```

## 🔧 Características técnicas

### Service Worker
- Estrategia **Network First** para CDNs
- Estrategia **Cache First** para archivos locales
- Caché automático de recursos críticos

### Modo oscuro
- Detección automática con `prefers-color-scheme`
- Sincronización en tiempo real con cambios del sistema
- Sin botón manual, completamente automático

### Gestión de tareas
- Almacenamiento en `localStorage`
- Limpieza automática de tareas completadas (7 días)
- Validación de datos antes de guardar

### Notificaciones
- Verificación cada minuto de tareas pendientes
- Margen de 1 minuto para activación
- Vibración en dispositivos compatibles

## 🌐 Compatibilidad

| Navegador | Soporte |
|-----------|---------|
| Safari iOS | ✅ Completo |
| Chrome Android | ✅ Completo |
| Safari macOS | ✅ Completo |
| Chrome Desktop | ✅ Completo |
| Firefox | ⚠️ Limitado (notificaciones) |

## 🐛 Problemas conocidos

- **Notificaciones**: Requieren que la app esté abierta o en segundo plano
- **Service Worker**: En desarrollo local puede causar problemas de caché
- **Tailwind CDN**: Warning en consola (solo afecta desarrollo)

### Soluciones

**Limpiar caché del Service Worker:**
1. DevTools → Application → Service Workers
2. Click en "Unregister"
3. Recargar la página

## 🤝 Contribuir

Las contribuciones son bienvenidas:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Roadmap

- [ ] Categorías de tareas
- [ ] Filtros y búsqueda
- [ ] Recordatorios recurrentes
- [ ] Sincronización en la nube
- [ ] Widget de pantalla de inicio
- [ ] Compartir tareas
- [ ] Exportar/importar datos

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👤 Autor

**Angel Carrillo**
- GitHub: [@AngelCLA](https://github.com/AngelCLA)
- Instagram: [@cla__angel](https://instagram/cla__angel)

## 🙏 Agradecimientos

- Diseño inspirado en iOS de Apple
- Tailwind CSS por los estilos utility-first
- Iconos de Heroicons

## 📞 Soporte

Si tienes alguna pregunta o problema:
- Abre un [Issue](https://github.com/AngelCLA/cla-recordatorios/issues)
- Contacta por [email](mailto:claangeldev.gmail.com)

---

⭐ Si te gustó este proyecto, dale una estrella en GitHub!