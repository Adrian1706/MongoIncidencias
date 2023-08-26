# Mongo Incidencias

Este repositorio ofrece una solución para gestionar y realizar peticiones controladas (GET, POST, PUT, DELETE) utilizando middleware para manejar diferentes tipos de datos, limitar la cantidad de datos y establecer un límite de peticiones por token.

## Guía de Uso

Sigue estos pasos para configurar y utilizar la aplicación:

### Paso 1: Clonar el Repositorio

Clona este repositorio en tu máquina local.

### Paso 2: Instalación

Asegúrate de tener Node.js instalado en tu sistema. Luego, instala las dependencias ejecutando el siguiente comando en la terminal:

``npm i``

### Paso 3: Configuración de Variables de Entorno

1. Copia el archivo `.env.example` y renómbralo como `.env`.
2. En el archivo `.env`, configura las siguientes variables de entorno:

```My_server={
My_server={"hostname":"127.10.10.10", "port":"5000"}
ATLAS_USER="nombreusuario"
ATLAS_PASSWORD="contraseña"
ATLAS_DB="Citas"
```

### Paso 4: Conexión a la Base de Datos

1. Instala la extensión **MongoDB for VS Code** en Visual Studio Code si aún no lo has hecho.
2. Abre la extensión y selecciona "Connect" en la parte superior izquierda.
3. Ingresa el link de conexión de la base de datos, el cual puedes encontrar en tu cuenta de Atlas. El formato es similar a:

```
mongodb+srv://nombreusuario:<password>@cluster0.cof7srf.mongodb.net/

```

4. Una vez conectado, ejecuta el archivo `db/base_datos.mongodb` haciendo clic en el icono de "Mongo Run" en la esquina superior derecha.

### Paso 5: Ejecutar el Servidor

En la terminal, ejecuta el siguiente comando para iniciar el servidor:

`npm run dev`

El servidor se ejecutará en un puerto que se mostrará en la terminal.

### Paso 6: Elección de versión

En este proyecto, se emplearon distintas versiones que afectan a los routers: **incidencia** y  **trainer** , cada uno con dos versiones disponibles. En la primera versión de ambos routers, se incluyen los métodos **GET** y  **POST** . En contraste, en la segunda versión se amplían las opciones a  **GET** ,  **GET por ID** ,  **POST** , **PUT** y  **DELETE** .

Para utilizar estas versiones, sigue estos pasos en  **Thunder Client** :

1. Abre Thunder Client y accede a la sección de  **Headers** .
2. En el campo de  **Header** , introduce: `Accept-version`.
3. En el campo de  **Value** , ingresa la versión del router que deseas emplear. Puedes elegir entre dos versiones: `1.0.0` y `2.0.0`.

Esta estructura te permite seleccionar y aprovechar las funcionalidades específicas de cada versión de los routers de manera sencilla y eficiente. Asegúrate de especificar la versión correcta en la solicitud para acceder a las características deseadas.

### Paso 7: Realizar Peticiones

## Url

## Uso de Tokens y Acceso a Colecciones

Antes de comenzar, asegúrate de obtener un token de acceso correspondiente al rol que deseas utilizar. Aquí están las URLs para obtener tokens según el rol:

- **Rol Trainer**: [Obtener Token Trainer](http://127.10.10.10:5060/token/trainer)
- **Rol Administrador**: [Obtener Token Administrador](http://127.10.10.10:5060/token/administrador)

### Rol Trainer - Versión 1.0.0

- **Método GET Incidencia**:

  - [http://127.10.10.10:5060/incidencia/incidencia](http://127.10.10.10:5060/incidencia/incidencia)
- **Método POST Incidencia**:

  - [http://127.10.10.10:5060/incidencia/incidencia](http://127.10.10.10:5060/incidencia/incidencia)

### Rol Trainer - Versión 2.0.0

- **Método GET Incidencia**:

  - [http://127.10.10.10:5060/incidencia/incidencia](http://127.10.10.10:5060/incidencia/incidencia)
  - [http://127.10.10.10:5060/incidencia/incidencia/2](http://127.10.10.10:5060/incidencia/incidencia/2)
- **Método POST Incidencia**:

  - [http://127.10.10.10:5060/incidencia/incidencia](http://127.10.10.10:5060/incidencia/incidencia)
  - **Body**:

    ```json
    {
      "Id_incidencia": 17,
      "tipo_incidencia": "leve",
      "area": "training",
      "lugar": "Apolo",
      "fecha": "2023-08-25T00:00:00.000Z",
      "categoria": "hardware",
      "equipo": {
        "Id_Equipo": 25564125,
        "tipo_Equipo": "teclado"
      },
      "descripcion_incidencia": "Daño en el cable",
      "reportó_trainer": "Miguel"
    }
    ```
- **Método PUT Incidencia**:

  - [http://127.10.10.10:5060/incidencia/incidencia/17](http://127.10.10.10:5060/incidencia/incidencia/17)
  - **Body**:

    ```json
    {
      "Id_incidencia": 17,
      "tipo_incidencia": "leve",
      "area": "training",
      "lugar": "sputnik",
      "fecha": "2023-08-25T00:00:00.000Z",
      "categoria": "hardware",
      "equipo": {
        "Id_Equipo": 25564125,
        "tipo_Equipo": "teclado"
      },
      "descripcion_incidencia": "Daño en el cable",
      "reportó_trainer": "Miguel"
    }
    ```
- **Método DELETE Incidencia**:

  - [http://127.10.10.10:5060/incidencia/incidencia/17](http://127.10.10.10:5060/incidencia/incidencia/17)

### Rol Administrador - Versión 1.0.0

- **Método GET Incidencia**:

  - [http://127.10.10.10:5060/incidencia/incidencia](http://127.10.10.10:5060/incidencia/incidencia)
- **Método POST Incidencia**:

  - [http://127.10.10.10:5060/incidencia/incidencia](http://127.10.10.10:5060/incidencia/incidencia)
- **Método GET Trainer**:

  - [http://127.10.10.10:5060/trainer/trainer](http://127.10.10.10:5060/trainer/trainer)
- **Método POST Trainer**:

  - [http://127.10.10.10:5060/trainer/trainer](http://127.10.10.10:5060/trainer/trainer)

### Rol Administrador - Versión 2.0.0

- **Método GET Incidencia**:

  - [http://127.10.10.10:5060/incidencia/incidencia](http://127.10.10.10:5060/incidencia/incidencia)
  - [http://127.10.10.10:5060/incidencia/incidencia/2](http://127.10.10.10:5060/incidencia/incidencia/2)
- **Método POST Incidencia**:

  - [http://127.10.10.10:5060/incidencia/incidencia](http://127.10.10.10:5060/incidencia/incidencia)
  - **Body**:

    ```json
    {
      "Id_incidencia": 1,
      "tipo_incidencia": "leve",
      "area": "training",
      "lugar": "Apolo",
      "fecha": "2023-08-25T00:00:00.000Z",
      "categoria": "hardware",
      "equipo": {
        "Id_Equipo": 25564125,
        "tipo_Equipo": "teclado"
      },
      "descripcion_incidencia": "Daño en el cable",
      "reportó_trainer": "Miguel"
    }
    ```
- **Método PUT Incidencia**:

  - [http://127.10.10.10:5060/incidencia/incidencia/17](http://127.10.10.10:5060/incidencia/incidencia/17)
- **Método DELETE Incidencia**:

  - [http://127.10.10.10:5060/incidencia/incidencia/17](http://127.10.10.10:5060/incidencia/incidencia/17)
- **Método GET Trainer**:

  - [http://127.10.10.10:5060/trainer/trainer](http://127.10.10.10:5060/trainer/trainer)
  - [http://127.10.10.10:5060/trainer/trainer/1](http://127.10.10.10:5060/trainer/trainer/1)
- **Método POST Trainer**:

  - [http://127.10.10.10:5060/trainer/trainer](http://127.10.10.10:5060/trainer/trainer)
  - **Body**:

    ```json
    {
      "Id_trainer": 17,
      "nombre_trainer": "Miguel",
      "Emails": {
        "Email_personal": "entrenador@example.com",
        "Email_corporativo": "entrenador1@empresa.com"
      },
      "telefonos": {
        "telefono_movil": "1234567890",
        "telefono_residencia": "9876543210",
        "telefono_empresa": "5555555555",
        "telefono_mobil_empresa": "6666666666"
      }
    }
    ```
- **Método PUT Trainer**:

  - [http://127.10.10.10:5060/trainer/trainer/17](http://127.10.10.10:5060/trainer/trainer/17)
  - **Body**:

    ```json
    {
      "Id_trainer": 17,
      "nombre_trainer": "Miguel",
      "Emails": {
        "Email_personal": "entrenador@example.com",
        "Email_corporativo": "entrenador1@empresa.com"
      },
      "telefonos": {
        "telefono_movil": "1234567890",
        "telefono_residencia": "9876543210",
        "telefono_empresa": "5555555555",
        "telefono_mobil_empresa": "6666666666"
      }
    }
    ```
- **Método DELETE Trainer**:

  - [http://127.10.10.10:5060/trainer/trainer/17](http://127.10.10.10:5060/trainer/trainer/17)
