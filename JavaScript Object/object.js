var userOne = {
    email: 'moysesray@yahoo.com',
    name:  'Moises',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};


console.log(userOne.name);