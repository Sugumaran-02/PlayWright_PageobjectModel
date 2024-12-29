import { test, expect } from '@playwright/test';
import { Loginpage, Loginpagee } from '../../pages/Login';

test('Valid login', async ({ page }) => {

const Loginn= new Loginpagee(page)

await Loginn.Loginpage();
await Loginn.login('tomsmith','SuperSecretPassword!');



  // await page.goto('https://the-internet.herokuapp.com/login');
  // await page.getByLabel('Username').click();
  // await page.getByLabel('Username').fill('tomsmith');
  // await page.getByLabel('Password').click();
  // await page.getByLabel('Password').fill('SuperSecretPassword!');
  // await page.getByRole('button', { name: ' Login' }).click();
});

test('Invalid login', async ({ page }) => {

  const Loginn= new Loginpagee(page)
  
  await Loginn.Loginpage();
  await Loginn.login('tomsmith','SuperSecret');
  
  });
