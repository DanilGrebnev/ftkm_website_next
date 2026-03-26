# FTKM Frontend (Next.js)

## Требования

- Docker и Docker Compose
- Файл `.env` в корне `frontend_next/` (пример — `.env.local.example`)

## Переменные окружения (.env)

```env
MONGO_PORT=27017
FRONTEND_PORT=3000
MONGODB_URI=mongodb://mongo:27017/ftkm
SECRET_JWT=ваш-секретный-ключ
ADMIN_LOGIN=admin
ADMIN_PASSWORD=admin123
```

> При первом запуске в базе автоматически создаётся пользователь с указанными `ADMIN_LOGIN` / `ADMIN_PASSWORD`.

---

## Режимы запуска

### 1. Разработка (dev)

Hot-reload, исходный код монтируется в контейнер.

```bash
docker-compose -f docker-compose.dev.yml up --build
```

Пересборка без кэша:

```bash
docker-compose -f docker-compose.dev.yml build --no-cache
docker-compose -f docker-compose.dev.yml up
```

Приложение доступно по адресу `http://localhost:3000` (или порт из `FRONTEND_PORT`).

---

### 2. Продакшен (полная сборка в Docker)

Многоэтапная сборка — билдит приложение внутри контейнера.

```bash
docker-compose up --build
```

Подходит для серверов с достаточными ресурсами для сборки Next.js.

---

### 3. Продакшен (предварительно собранное приложение)

Для слабых серверов: сборка выполняется **локально**, в контейнер копируется уже готовый билд.

**Шаг 1** — собрать проект локально:

```bash
yarn install
yarn build
```

**Шаг 2** — запустить контейнер:

```bash
docker-compose -f docker-compose.prebuilt.yml up --build
```

---

## Остановка контейнеров

```bash
# Dev
docker-compose -f docker-compose.dev.yml down

# Продакшен
docker-compose down

# Предсобранный продакшен
docker-compose -f docker-compose.prebuilt.yml down
```

Удалить контейнеры вместе с данными (MongoDB, uploads):

```bash
docker-compose -f docker-compose.dev.yml down -v
```

---

## Запуск без Docker

```bash
yarn install
yarn dev
```

> В этом случае MongoDB должна быть запущена отдельно, а в `.env` нужно указать `MONGODB_URI=mongodb://localhost:27017/ftkm`.

---

## Структура Docker-файлов

| Файл | Назначение |
|---|---|
| `Dockerfile.dev` | Dev-режим с hot-reload |
| `Dockerfile` | Продакшен (многоэтапная сборка) |
| `Dockerfile.prebuilt` | Продакшен (запуск предсобранного билда) |
| `docker-compose.dev.yml` | Compose для разработки |
| `docker-compose.yml` | Compose для продакшена |
| `docker-compose.prebuilt.yml` | Compose для предсобранного продакшена |
| `.env` | Переменные окружения |
