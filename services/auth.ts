import { user, password, urlAPI } from "../configs/config.json"

class Auth {

    mail: string
    token: string
    constructor(mail: string, token: string){
        this.mail = mail
        this.token = token

        console.log("MAIL, ", this.mail)
        console.log("TOKEN, ", this.token)
    }

    #getBasicAuth() {
        return btoa(`${user}:${password}`)
    }

    #getRequest() {
        let header = new Headers();
        const auth = this.#getBasicAuth()
        header.append("Authorization", `Basic ${auth}`);
        header.append("Content-Type", "application/json")

        const body = JSON.stringify({
            "email": this.mail,
            "token": this.token
        });
        console.log(body)
        const requestOptions = {
            method: 'POST',
            headers: header,
            body: body
        };
        console.log(requestOptions)
        return requestOptions
    }
    async execute() {
        console.log("EXECUTANDOOOOOOOOOOO")
        try {

            const requestOptions = this.#getRequest()
            console.log(requestOptions)
            const data = await fetch(`${urlAPI}/tokenAccess`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    return {
                        success: true,
                        ...result
                    }
                })
                .catch(error => {
                    return {
                        success: false,
                        ...error
                    }
                });


            return data
        } catch (error) {
            alert(error)
        }
    }
}

export default Auth