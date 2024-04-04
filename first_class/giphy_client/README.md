## Proyecto Clase uno:

  - Crear una aplicacion web que represente una comunidad dedicada a compartir información con el resto del mundo (puede ser sobre cualquier topico que elija el estudiante)  
  - Tiene que tener una pagina Root que hable sobre la plataforma web
  - tiene que haber un Navbar que este presente en todas las rutas de la aplicación y que redirija como minimo a 3 rutas diferentes (Root incluida)
  - Tratar de traer imagenes y recursos desde el internet (hardcodearlo en el codigo y assets locales como ultima opción)
  - Tratar de proporcionarle un diseño estilístico coherente a la aplicación 
  - No utilizar elementos `<a>` de HTML para el routing puesto que no proporcionan una experiencia de SPA al usuario.

## Restricciones tecnológicas:

- Si o si se debe utilizar React (bootstrapeado con Vite,o create react app )
- No crear un servidor externo a la aplicación

## Restricciones de trabajo: 

- Tiene que ser realizado individualmente.

<br>

## Tecnologías utilizadas:

  - React
  - Typescript
  - Tailwindcss

## API GIPHY:

Para cumplir los objetivos de este proyecto utilice la API de Giphy la cual provee una enorme cantidad de recursos en forma de stickers, gifs, etc.

## Rutas de GIPHY utilizadas:

  - GET all gifs: api.giphy.com/v1/gifs/trending
  - GET all stickers: api.giphy.com/v1/stickers/trending
  - GET search gif: api.giphy.com/v1/gifs/search?q=coffe
  - GET search stickers: api.giphy.com/v1/stickers/search?q=coffe
  - GET your own gif: api.giphy.com/v1/gifs/translate?s=coffe
  - GET your own stickers: api.giphy.com/v1/translate/search?s=coffe
  - GET random gifs: api.giphy.com/v1/gifs/random
  - GET random stickers: api.giphy.com/v1/stickers/random