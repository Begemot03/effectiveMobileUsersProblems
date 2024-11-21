# Стек
NestJs + Ts + Typeorm + Faker-js + Postgres

# Для запуска
```
npm run start:dev - запуск сервера
npm run typeorm:generate < Путь к миграции (Например .\src\migrations\migration) > - создание миграции
npm run typeorm:run - запуск миграции
```

## ВАЖНО!!!
Настройте конфигурацию поключения к бд в файле .env

# Ендопнт для фикса проблем, возращает количество зафикшенных проблем
```
POST http://localhost:<PORT>/users/fix
```