
# Composición de URLs para consultas del API

## Ruta base del API

- https://api.worldbank.org/v2/country

## Parámetros comunes

- ?per_page=1000&format=json

## Todos los países:

### country

> Ejemplo:

https://api.worldbank.org/v2/country?per_page=1000&format=json

## Países de una región:

### country?region=CODE3

> Ejemplo:

https://api.worldbank.org/v2/country?region=ECS&per_page=1000&format=json

## Países de un nivel de ingresos: country?incomeLevel=COD3

> Ejemplo:

https://api.worldbank.org/v2/country?incomeLevel=HIC&per_page=1000&format=json

## Países con un tipo de deuda:

### country?lendingType=COD3

> Ejemplo:

https://api.worldbank.org/v2/country?lendingType=LNX&per_page=1000&format=json


## Países según varios criterios:

### country?lendingType=COD3&incomeLevel=COD3&region=COD3

> Ejemplo:

https://api.worldbank.org/v2/country?lendingType=LNX&incomeLevel=HIC&region=ECS&per_page=1000&format=json

## Datos básicos de un país:

### country/COD3

> Ejemplo:

https://api.worldbank.org/v2/country/ESP?per_page=1000&format=json

## Listados maestros

### niveles de ingresos

https://api.worldbank.org/v2/incomeLevel/?format=json

```json
{
  id: "HIC",
  iso2code: "XD",
  value: "High income"
}
```
Para filtrar se usa el código de 3 letras del campo `id`

### tipos de deuda

https://api.worldbank.org/v2/lendingType/?format=json

```json
{
  id: "LNX",
  iso2code: "XX",
  value: "Not classified"
}
```
Para filtrar se usa el código de 3 letras del campo `id`

### regiones

https://api.worldbank.org/v2/region/?format=json


#### geográficas

> ejemplo:

```json
{
  id: "2",
  code: "ECS",
  iso2code: "Z7",
  name: "Europe & Central Asia"
}
```

> **Atención:**
> Mostrar sólo las que tenga `id` numérico
> Para filtrar se usa el código de 3 letras del campo `code`

Ejemplo de regiones que no se mostrarían:

```json
{
  id: "",
  code: "EUU",
  iso2code: "EU",
  name: "European Union"
}
```

#### todas

Usar todos los registros devueltos por el API. Incluyen grupos de países por otros criterios: económicos, políticos...

> Para filtrar se usa igualmente el código de 3 letras del campo `code`

## Indicadores avanzados de un país:

### countries/COD3/indicators/SP.POP.TOTL;NY.GDP.MKTP.CD/?source=2&date=2018

> Ejemplo: población y producto interior bruto

https://api.worldbank.org/v2/countries/ESP/indicators/SP.POP.TOTL;NY.GDP.MKTP.CD/?source=2&date=2018&per_page=1000&format=json
