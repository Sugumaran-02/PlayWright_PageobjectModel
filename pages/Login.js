exports.Loginpagee= class Loginpage{

    constructor(page){

        this.page=page;
        this.username=page.getByLabel('Username');
        this.password=page.getByLabel('Password');
        this.login_button=page.getByRole('button', { name: ' Login' });
    }

    async Loginpage(){
       await  this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(uname, pword){

        await this.username.fill(uname);
        await this.password.fill(pword);
        await this.login_button.click();
    }


}
