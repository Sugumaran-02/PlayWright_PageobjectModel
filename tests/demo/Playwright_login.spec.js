import { test, expect } from '@playwright/test';
import { Loginpage, Loginpagee } from '../../pages/Login';

test('Valid login', async ({ page }) => {

const Loginn= new Loginpagee(page)

await Loginn.Loginpage();
await Loginn.login('tomsmith','SuperSecretPassword!');


});

test('Invalid login', async ({ page }) => {

  const Loginn= new Loginpagee(page)
  
  await Loginn.Loginpage();
  await Loginn.login('tomsmith','SuperSecret');
  
  });
