# TODO

## Backend
- [x] Usar express
- [x] Usar sequelize con SQlite
- [ ] Implementar endpoint `/login`
  - [ ] Recibe email/contraseña
  - [ ] Verifica password con tabla User
  - [ ] Crea token aleatorio si coincide password
  - [ ] Guarda token en tabla User
  - [ ] Retorna JSON con token
- [x] Crear fixture de 100 usuarios
- [x] Enpoint `/users`
  - [x] devuelve lista de usuarios
  - [x] página lista de usuarios

## Forntend
- [ ] Usar [material-ui](https://mui.com/)
- [ ] Consumir endpoint `/login`
- [ ] Usar react-redux (opcional)
- [ ] Si login Ok, mostrar lista de usuarios
- [ ] Fronend responsivo