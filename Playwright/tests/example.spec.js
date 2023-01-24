// @ts-check
const { test, expect } = require('@playwright/test');




// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });
const TODO_ITEMS = [
    '9045176456',
    'GayParade69',
  ];
  test.use({ 
    geolocation: { longitude: 48.858455, latitude: 2.294474 },
    permissions: ['geolocation'],
  });

test('get started link', async ({ page }) => {
  await page.goto('https://baltbet.ru/');

  // Click the get started link.getByPlaceholder('Телефон')
  const newTodo = page.getByPlaceholder('Телефон')
  await newTodo.fill(TODO_ITEMS[0])

  const newTodo2 = page.getByPlaceholder('Пароль')
  await newTodo2.fill(TODO_ITEMS[1])
 
 await page.getByRole('button').click({ timeout: 3000 })

 await page.goto('https://baltbet.ru/account/logout' ,{ timeout: 10000})
 await page.goto('https://iplocation.io/')

//  page.locator('.account-widget__personal-area-link').click()
//  page.getByRole('link', { name: 'Выйти' }).click()
//   page.getByRole('link', { name: 'Аделаида — Мельбурн Юнайтед' }).click()

});


// локация


test('my test with geolocation', async ({ page }) => {
    await page.goto('https://www.iplocation.net/');});

//     // Click the get started link.getByPlaceholder('Телефон')
//     page.getByPlaceholder('Телефон');
//     page.getByPlaceholder('Телефон')
//     page.getByRole('button')
// });


test('get started link scores', async ({ page }) => {
    await page.goto('https://scores24.live/ru');
  
    // Click the get started link.getByPlaceholder('Телефон')
    
    const newTodo = page.locator('.Modal__close')
    await newTodo.click()

    await page.getByRole('button', { name: 'OK' }).click()

    const newTodo2 = page.locator('.KeitaroHeaderRenderer__btn')
    await newTodo2.click()

    
    await page.keyboard.press('ArrowDown')
    const newTodo4 = page.locator('._2KbEl')
    await newTodo4.click()

    // const newTodo3 = await page.getByRole('link', { name: 'ФРИБЕТ ДО 10 000₽\nНОВЫМ ИГРОКАМ ЗАБРАТЬ' }).getByRole('button')
    // await newTodo3.click()
    


//     const newTodo2 = page.getByPlaceholder('Пароль')
//     await newTodo2.fill(TODO_ITEMS[1])
//    ;
//    await page.getByRole('button').click()
  
//    await page.goto('https://baltbet.ru/account/logout')
//    await page.goto('https://iplocation.io/')
  
  //  page.locator('.account-widget__personal-area-link').click()
  //  page.getByRole('link', { name: 'Выйти' }).click()
  //   page.getByRole('link', { name: 'Аделаида — Мельбурн Юнайтед' }).click()
  
  });
//   test('get started link scoresssss', async ({ page }) => {
//     await page.goto('https://scores24.live/ru/soccer/m-31-12-2022-liverpool-fc-leicester-city-prediction');
//     const newTodo0 = page.locator('.Modal__close')
//     await newTodo0.click()
//     const newTodo = page.getByPlaceholder('Ваше имя')
//     await newTodo.fill('TODO_ITEMS[0]')
  
//     const newTodo2 = page.getByPlaceholder('Ваше сообщение')
//     await newTodo2.fill('testtesttesttesttesttttt')
//     await page.getByRole('button', { name: 'Отправить' }).click()
// });
