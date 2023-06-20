# Propuesta TP DSW

## Grupo
### Integrantes
* 47999 - Paolini, Alessandro
* 47844 - Vivas, Facundo Ignacio
* 47800 - Guerra, Bautista

### Repositorios
* [fullstack app](https://github.com/AlessandroPaolini7/TTADS-2023.git)


## Aplicación de streaming de música
### Descripción
El negocio de esta aplicación de streaming de música se centra en ofrecer a los usuarios una plataforma para descubrir, reproducir y gestionar música de forma conveniente y personalizada. La aplicación permite a los usuarios registrarse y acceder a una amplia biblioteca de canciones de diversos géneros y artistas. Los usuarios pueden crear y administrar listas de reproducción personalizadas, así como explorar recomendaciones basadas en su historial de escucha.

### Modelo

```mermaid
classDiagram
Usuario "1" -- "*" Playlist: 
Playlist *-- Cancion
Cancion "1..*" -- "1..*" Artista
Artista "1" --  "0..*" Album
Album *-- Cancion 
Usuario "1" -- "0..*" Suscripcion
Usuario "1" -- "0..*" Recomendacion
Recomendacion "0..*" -- "1..*" Cancion 
Recomendacion "0..*" -- "1" Playlist 
Usuario "1" -- "0..*" Historial
Historial "0..*" -- "1" Cancion
Usuario : str nombre
Usuario : str email
Usuario : str password
Usuario : str telefono
Playlist: str titulo
Playlist: str descripcion
Playlist: date fecha_creacion
Cancion: str titulo
Cancion: int anio_lanzamiento
Cancion: str genero
Cancion: float duracion
Cancion: link audio
Artista: str nombre
Artista: str nacionalidad
Artista: int nro_seguidores
Album: str titulo
Album: link portada
Suscripcion: str tipo
Suscripcion: float precio
Suscripcion: date fecha_expiracion
Recomendacion: date fecha_recomendacion
Historial: date fecha_reproduccion
```  

## Alcance Funcional 
|Req|Detalle|
|:-|:-|
|CRUD |1. CRUD Usuario<br>2. CRUD Playlist<br>3. CRUD Suscripcion<br>4. CRUD Cancion<br>5. CRUD Artista<br>6. CRUD Album<br>|
|CUU|1. Crear una nueva playlist<br>2. Realizar la busqueda de una canción para escuchar<br>3. Agregar una canción a playlist existente<br>4. Suscribirse al servicio<br>5. Realizar la mejora de suscripción<br>6. Crear una cuenta de usuario<br>7. Realizar busqueda de canciones por género<br>8. Descargar una lista de reproducción para escuchar sin conexión|

