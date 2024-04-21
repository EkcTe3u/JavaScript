# Auto JavaScript Tests

## Подготовка к запуску тестов

- Скачать репориторий локально;
- Установить последнюю версию фреймворка ```npm install -D @playwright/test@latest```
- Скачать и бновить браузеры ```npx playwright install --with-deps```

## Запуск тестов

- Запустить тесты командой 
    `npx playwright test`

## Просмотр результатов
- Есть два варианта:
    - встроенный отчет playwright ```npx playwright show-report```
    - стронний отчет monocart ```npx monocart show-report test-results/index.html```


Дополнительная информация по [Playwright](https://playwright.dev/)