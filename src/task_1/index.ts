function validEmail(target: object, key: string) {
    let emailValue : string;
    Object.defineProperty(target,key, {
        get: () => emailValue,
        set: (newEmailValue: string) =>{
            const re = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
            if (!re.test(newEmailValue)) {
                throw new Error("email invalid");
            }
            emailValue = newEmailValue;
            console.log("email valid");
        }
    })
}

class Example {
    @validEmail
    public email: string ;
}

const exampleInstance = new Example();
exampleInstance.email = "fkkldfjg";// генерирует эксепшен
exampleInstance.email = "misha@mail.com"; // выводит в консоль e-mail valid