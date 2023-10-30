# Lol

O Lavanderia Online é um sistema web para gerenciamento de serviços de uma lavanderia, permitindo que os clientes solicitem e acompanhem o andamento de serviços de lavagem e passadoria de forma online.

| Inicar o Servidor | Inicar o Json-Server |
| ----------------- | -------------------- |
| `ng server`       | `npm run db`         |

| Request | URL        | Detalhes                |
| ------- | ---------- | ----------------------- |
| GET     | /cliente   | Busca todos os Clientes |
| GET     | /cliente/1 | Busca um Cliente        |
| POST    | /pedido/1  | Salva um pedido         |
| PUT     | /pedido/1  | Atualiza um pedido      |
| DELETE  | /pedido/1  | Remove um Pedido        |
