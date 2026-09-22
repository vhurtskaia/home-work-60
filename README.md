# RESTful API з використанням Express.js

RESTful API сервер, розроблений на Node.js з використанням Express.js фреймворку, з застосуванням MVC паттерну архітектури.

## 📋 Зміст

- [Опис проекту](#опис-проекту)
- [Технологія](#технологія)
- [Структура проекту](#структура-проекту)
- [Встановлення](#встановлення)
- [Запуск сервера](#запуск-сервера)
- [API Маршрути](#api-маршрути)
- [Примери запитів](#примери-запитів)

## 🎯 Опис проекту

Цей проект реалізує простий RESTful API сервер для управління користувачами та статтями. Сервер слухає на порту 3000 та надає текстові відповіді для спрощення інтеграції та відладки.

**Основні характеристики:**
- ✅ Модульна структура проекту
- ✅ Застосування MVC паттерну
- ✅ Окремі модулі для маршрутів та контролерів
- ✅ Підготовлені моделі для інтеграції з БД
- ✅ Обробка помилок та валідація
- ✅ RESTful конвенції

## 🛠 Технологія

- **Node.js** - середовище виконання JavaScript
- **Express.js** - мінімалістичний веб-фреймворк для Node.js
- **npm** - менеджер пакетів Node.js

## 📁 Структура проекту

```
project/
├── controllers/
│   ├── userController.js       # Контролер для обробки запитів користувачів
│   └── articleController.js    # Контролер для обробки запитів статей
├── routes/
│   ├── userRoutes.js           # Маршрути для користувачів
│   └── articleRoutes.js        # Маршрути для статей
├── src/
│   └── server.js               # Головний файл сервера  
├── package.json                # Конфігурація проекту
└── README.md                   # Документація проекту
```

## ⚙️ Встановлення

### Вимоги
- Node.js (версія 14.x або новіша)
- npm (зазвичай йде в комплекті з Node.js)

### Кроки встановлення

1. **Встановіть залежності:**
   ```bash
   npm install
   ```

## 🚀 Запуск сервера

### Режим виробництва
```bash
npm start
```

### Режим розробки з автоперезавантаженням
```bash
npm run dev
```

После запуску ви побачите повідомлення:
```
Server is running on http://localhost:3000
Press Ctrl+C to stop the server
```

Сервер готовий приймати запити!

## 📡 API Маршрути

### Root Route

#### GET `/`
Повертає привітальне повідомлення

**Відповідь:**
```
Get root route
```

---

### Users Resource

#### GET `/users`
Отримання всіх користувачів

**Відповідь:**
```
Get users route
```

---

#### POST `/users`
Створення нового користувача

**Тіло запиту (приклад):**
```json
{
  "name": "Іван Петренко",
  "email": "ivan@example.com"
}
```

**Відповідь:**
```
Post users route
```

---

#### GET `/users/:userId`
Отримання користувача за ID

**Параметри:**
- `userId` (string) - ідентифікатор користувача

**Приклад запиту:** `GET /users/123`

**Відповідь:**
```
Get user by Id route: 123
```

---

#### PUT `/users/:userId`
Оновлення користувача за ID

**Параметри:**
- `userId` (string) - ідентифікатор користувача

**Тіло запиту (приклад):**
```json
{
  "name": "Петро Іванов",
  "email": "petro@example.com"
}
```

**Приклад запиту:** `PUT /users/123`

**Відповідь:**
```
Put user by Id route: 123
```

---

#### DELETE `/users/:userId`
Видалення користувача за ID

**Параметри:**
- `userId` (string) - ідентифікатор користувача

**Приклад запиту:** `DELETE /users/123`

**Відповідь:**
```
Delete user by Id route: 123
```

---

### Articles Resource

#### GET `/articles`
Отримання всіх статей

**Відповідь:**
```
Get articles route
```

---

#### POST `/articles`
Створення нової статті

**Тіло запиту (приклад):**
```json
{
  "title": "Як використовувати Express.js",
  "content": "Express.js це мінімалістичний веб-фреймворк...",
  "author": "Іван Петренко"
}
```

**Відповідь:**
```
Post articles route
```

---

#### GET `/articles/:articleId`
Отримання статті за ID

**Параметри:**
- `articleId` (string) - ідентифікатор статті

**Приклад запиту:** `GET /articles/456`

**Відповідь:**
```
Get article by Id route: 456
```

---

#### PUT `/articles/:articleId`
Оновлення статті за ID

**Параметри:**
- `articleId` (string) - ідентифікатор статті

**Тіло запиту (приклад):**
```json
{
  "title": "Оновлений заголовок",
  "content": "Оновлений контент статті...",
  "author": "Петро Іванов"
}
```

**Приклад запиту:** `PUT /articles/456`

**Відповідь:**
```
Put article by Id route: 456
```

---

#### DELETE `/articles/:articleId`
Видалення статті за ID

**Параметри:**
- `articleId` (string) - ідентифікатор статті

**Приклад запиту:** `DELETE /articles/456`

**Відповідь:**
```
Delete article by Id route: 456
```

---

## 💻 Примери запитів

### Використання cURL

```bash
# GET root route
curl http://localhost:3000/

# GET all users
curl http://localhost:3000/users

# GET specific user
curl http://localhost:3000/users/123

# POST new user
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Іван","email":"ivan@example.com"}'

# PUT update user
curl -X PUT http://localhost:3000/users/123 \
  -H "Content-Type: application/json" \
  -d '{"name":"Петро","email":"petro@example.com"}'

# DELETE user
curl -X DELETE http://localhost:3000/users/123

# GET all articles
curl http://localhost:3000/articles

# GET specific article
curl http://localhost:3000/articles/456

# POST new article
curl -X POST http://localhost:3000/articles \
  -H "Content-Type: application/json" \
  -d '{"title":"Заголовок","content":"Контент","author":"Автор"}'
```
