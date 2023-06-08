# Nectia CRUD con REACT

Este proyecto fue creado con la herramienta de compilacion Vite 4.3.9, usando REACT y JavasCript; además se utilizó Firebase 9.21.1 para la gestión del registro y logeo de usuarios.
El objetivo final fue crear un gestor de personas para poder realizar las operaciones básicas de CRUD.
Además se añadió un campo de busqueda para filtrar las personas listadas en la tabla principal.

## Servidor de Desarrollo

Una vez que el proyecto fue clonado, es necesario instalar todas las dependencias:

- Abrir la consola y tipear `npm install`.
- Después de esto, levantar el servidor local de desarrollo con la intrucción `npm run dev`
- Dirijirse a `http://localhost:5173/`.

## Build

Ejectutar la instrucción `npm run build` para realizar el build del proyecto.

## Uso

- Una vez que se ejecuta la aplicación se muestra la pagina Home con un saludo de bienvenida y un botón para dirigirse al inicio de sesión o registro.

- Estando en la pagina de Log In, si ya se posee una cuenta, se puede proceder a iniciar sesión y acceder a la página donde ser realizan las acciones de `Create`, `Read`, `Update`, `Delete`. Esta es la única manera de acceder ya que esta página se encuentra en una ruta protegida.

- Si no se posee una cuenta, es posible crear una brindando una dirección de email válida y una contraseña de 6 caracteres como mínimo.

- Para fines de pruebas se brindan las siguientes credenciales: `pepe@pepe.com` | `123456` .

## Comentarios

Puesto que esta aplicación fue desarrollada usando Firebase para los propósitos de autenticación, no fue posible retornar el header `Authorization` con el correspondiente `token`.
