# Estructura y funcionalidad esperadas

## Rutas y requisitos funcionales

> Mínimo

### `/`

La página `/` correspondiente al _Home_ muestra un listado de todos los países con su nombre.

Desde cada fila se puede navegar a la página paramétrica con datos básicos de un país. `/country/:COD3`

### `/country/:COD3`

Mostrar una ficha del país con los datos básicos

> Completo

### `/search`

Página de filtros con dos componentes. Una sección debe contener selectores y en otra un listado de países que cumplan los criterios seleccionados.

- Filtro por niveles de ingreso

- Filtro por tipo de deuda

- Filtro por región geográfica

- Listado con los países que cumplen los criterios anteriores

> Extra

### `/regions`

- Una página especial para todas las posibles regiones (son muchas, no sólo la geográficas) que permita seleccionar una e ir a ver su detalle y países.

### `/regions/:COD3`

- Datos básicos de una región y listado de sus países. En dos components separados.

### `/country/:COD3`

- Mejorar la ficha de cada país mostrando indicadores avanzados como la población y el producto interior bruto.


## Estructura de módulos y componentes

> Mínimo

### Layout

- Un módulo `Layout` con el `Nav-Shell` principal de la aplicación

- Un menú de navegación que permita ir y volver a la página de filtros, a la de las regiones y a la home.

### Módulos lazy

Aplicar el patrón _container/presenters_

#### Home

#### Country

> Completo

#### Search

**Importante:** Usar dos componentes presentadores: uno para el filtro y otro para la lista de países

> Extra

#### Regions

**Importante:** En la página `/regions/:COD3`; usar dos componentes presentadores: uno para los datos de la región y otro para la lista de países

#### Shared

Un módulo `Shared` con un componente reutilizable para presentar un listado concreto de países que se usará en distintas páginas. (`/`, `/search`, `/regions/:COD3` ).