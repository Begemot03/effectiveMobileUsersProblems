# Ссылка на все части тестового задания
1. https://github.com/Begemot03/effectiveMobileRemainderTest
2. https://github.com/Begemot03/effectiveMobileHistoryTest
3. https://github.com/Begemot03/effectiveMobileUsersProblems


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

# Ендопоинт для фикса проблем, возращает количество зафикшенных проблем
```
POST http://localhost:<PORT>/users/fix
```