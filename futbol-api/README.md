# AWER – Prueba Técnica – Jesús Abregú

## 📦 Tecnologías utilizadas

- ✅ Java 17 + Spring Boot
- ✅ Maven
- ✅ JWT (Json Web Token) para autenticación
- ✅ H2 Database en memoria
- ✅ Docker (configurado)
- ✅ Swagger (pendiente de integración)
- ✅ React (frontend a desarrollar)

---

## 🔐 Usuario por defecto

- **Username:** `test`
- **Password:** `12345`

## 📂 Endpoints principales

| Método | Endpoint         | Autenticado | Descripción                         |
|--------|------------------|-------------|-------------------------------------|
| POST   | `/auth/login`    | ❌          | Devuelve un token JWT               |
| GET    | `/equipos`       | ❌          | Lista todos los equipos             |
| POST   | `/equipos`       | ✅          | Crea un nuevo equipo                |
| PUT    | `/equipos/{id}`  | ✅          | Actualiza un equipo                 |
| DELETE | `/equipos/{id}`  | ✅          | Elimina un equipo                   |
| GET    | `/equipos/buscar?nombre=X` | ❌ | Busca por nombre                   |

---

## ▶️ Cómo ejecutar el proyecto

```bash
mvn clean install
mvn spring-boot:run
