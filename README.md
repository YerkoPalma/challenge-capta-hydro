# TODO

## Backend
- [x] Usar express
- [x] Usar sequelize con SQlite
- [x] Implementar endpoint `/login`
  - [x] Recibe email/contraseña
  - [x] Verifica password con tabla User
  - [x] Crea token aleatorio si coincide password
  - [x] Guarda token en tabla User
  - [x] Retorna JSON con token
- [x] Crear fixture de 100 usuarios
- [x] Enpoint `/users`
  - [x] devuelve lista de usuarios
  - [x] página lista de usuarios

## Forntend
- [x] Usar [material-ui](https://mui.com/)
- [x] Consumir endpoint `/login`
- [ ] Usar react-redux (opcional)
- [x] Si login Ok, mostrar lista de usuarios
- [x] Fronend responsivo

## Uso

1. Descargar el repositorio

```bash
$ git clone https://github.com/YerkoPalma/challenge-capta-hydro.git
```

2. Instalar dependencias

```bash
$ npm install
```

3. Ejecutar en modo de desarrollo

```bash
$ npm run dev
```

4. Ejecutar en producción
```bash
$ npm start
```