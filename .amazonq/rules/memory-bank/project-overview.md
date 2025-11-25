# Project Overview Memory Bank

## 🎯 Web Automation Testing Sandbox

Este proyecto es un sandbox completo para aprender testing moderno de aplicaciones web usando React, TypeScript, Playwright y Vitest.

## 📱 Páginas Disponibles

### 🏠 Home (`/`)
- Página de inicio con introducción al proyecto
- Enlaces a todas las demás páginas
- Información sobre el propósito del sandbox

### ✅ Todo List (`/todos`)
**Funcionalidades:**
- Agregar nuevos todos
- Marcar como completado/pendiente
- Eliminar todos
- Contador de completados
- Estado vacío
- Validación de entrada

**Tests disponibles:**
- ✅ 2 ejemplos implementados
- 🔄 7 TODOs para implementar
- Funcionalidades: agregar, completar, eliminar, validaciones

### 🛒 Shopping Cart (`/cart`)
**Funcionalidades:**
- Lista de productos disponibles para agregar
- Agregar productos al carrito
- Incrementar/decrementar cantidades
- Eliminar productos del carrito
- Cálculo automático de totales
- Estado de carrito vacío
- Botón de checkout

**Tests disponibles:**
- ✅ 1 ejemplo implementado
- 🔄 12 TODOs para implementar
- Funcionalidades: carrito, productos, cantidades, totales

### ⚙️ Settings (`/settings`)
**Funcionalidades:**
- Modo de edición de perfil
- Cambio de información personal (nombre, email)
- Selección de tema (light/dark/auto)
- Configuración de idioma
- Toggle de notificaciones
- Guardado con simulación de API
- Cancelar cambios

**Tests disponibles:**
- ✅ 1 ejemplo implementado
- 🔄 10 TODOs para implementar
- Funcionalidades: perfil, configuraciones, validaciones

### 🌤️ Weather (`/weather`)
**Funcionalidades:**
- Selección de ciudades (New York, London, Tokyo, Sydney, Paris)
- Datos del clima actual (temperatura, humedad, viento)
- Pronóstico de 3 días
- Estados de loading y error
- Botón de reintentar en caso de error
- Iconos del clima según condición

**Tests disponibles:**
- ✅ 1 ejemplo implementado
- 🔄 10 TODOs para implementar
- Funcionalidades: clima, ciudades, estados de carga

### 📊 Dashboard (`/dashboard`)
**Funcionalidades:**
- 4 tarjetas de métricas con indicadores de cambio
- Gráfico de barras interactivo
- 3 tipos de datos (Sales, Users, Revenue)
- Selector de período (Week, Month, Year)
- Pestañas para cambiar tipo de gráfico
- Sección de resumen con estadísticas
- Colores diferenciados por tipo de dato

**Tests disponibles:**
- ✅ 1 ejemplo implementado
- 🔄 11 TODOs para implementar
- Funcionalidades: gráficos, métricas, interactividad

## 🧪 Estrategia de Testing

### Estructura de Tests
Cada página tiene su archivo de test correspondiente con:
- **Ejemplos implementados**: Muestran el patrón correcto
- **TODOs con .skip**: Tests listos para implementar
- **Comentarios detallados**: Explican qué debe testear cada caso
- **Hints de implementación**: Código de ejemplo comentado

### Patrón de TODOs
```typescript
/* TODO: Implementar test case para [funcionalidad]
 * Debe verificar que [comportamiento esperado]
 * y [validaciones adicionales]
 */
test.skip('descriptive test name', async () => {
  // const user = userEvent.setup()
  // Implementar test aquí
})
```

### Test IDs Strategy
Todos los elementos interactivos tienen `data-testid` para testing confiable:
```tsx
<button data-testid="add-todo-btn" onClick={addTodo}>
  Add Todo
</button>
```

## 🎓 Orden de Implementación Recomendado

1. **TodoList** (empezar aquí - 2 ejemplos implementados)
2. **ShoppingCart** (interacciones de usuario y carrito)
3. **UserSettings** (formularios y validación)
4. **WeatherDashboard** (operaciones async y estados)
5. **Dashboard** (gráficos y visualización de datos)

## 📊 Estado Actual de Tests

### Resumen Total
- **Ejemplos implementados**: 6 tests
- **TODOs pendientes**: 52 tests
- **Archivos de test**: 5 archivos
- **Cobertura objetivo**: 90%+

### Por Componente
- **TodoList**: 2 ejemplos + 7 TODOs
- **ShoppingCart**: 1 ejemplo + 12 TODOs  
- **UserSettings**: 1 ejemplo + 10 TODOs
- **WeatherDashboard**: 1 ejemplo + 10 TODOs
- **Dashboard**: 1 ejemplo + 11 TODOs

## 🛠️ Tecnologías Utilizadas

### Frontend
- React 18 con TypeScript
- Vite para desarrollo rápido
- Tailwind CSS para estilos
- React Router DOM para navegación
- Lucide React para iconos

### Testing
- Vitest para unit tests
- React Testing Library para testing de componentes
- Playwright para E2E tests
- Jest DOM para assertions adicionales

### Herramientas de Calidad
- ESLint para linting
- Prettier para formateo
- TypeScript en modo strict
- Husky para pre-commit hooks (opcional)

## 🎯 Objetivos de Aprendizaje

### Principiantes
- Entender la estructura de un test
- Implementar 5 TODOs de cualquier archivo
- Aprender React Testing Library básico

### Intermedios
- Completar todos los TODOs de 2 archivos de test
- Entender patrones de testing avanzados
- Manejar async operations y estados

### Avanzados
- Implementar todos los 50+ TODOs
- Agregar casos de test adicionales
- Optimizar performance de tests

## 🚀 Comandos Principales

```bash
# Desarrollo
npm run dev              # Servidor de desarrollo
npm run build           # Build para producción

# Testing
npm test                # Unit tests
npm run test:ui         # Tests con interfaz
npm run test:coverage   # Tests con cobertura
npm run e2e             # E2E tests
npm run e2e:ui          # E2E tests con interfaz

# Calidad de código
npm run lint            # Verificar código
npm run lint:fix        # Corregir automáticamente
npm run format          # Formatear código
npm run type-check      # Verificar tipos
```

## 🎨 Características Visuales

### Diseño
- Interfaz limpia y moderna con Tailwind CSS
- Navegación consistente entre páginas
- Estados de loading y error bien definidos
- Responsive design para móviles

### Interactividad
- Transiciones suaves con CSS
- Feedback visual inmediato
- Estados hover y focus claros
- Iconos consistentes con Lucide React

### Accesibilidad
- Elementos semánticamente correctos
- Atributos ARIA donde es necesario
- Navegación por teclado funcional
- Contraste de colores adecuado