import { user, password, urlAPI } from "../configs/config.json"

class Auth {

    matricula: string

    constructor(matricula: string) {
        this.matricula = matricula
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
            "matricula": this.matricula
        });
        const requestOptions = {
            method: 'POST',
            headers: header,
            body: body
        };
        return requestOptions
    }
    async execute() {
        try {
            const requestOptions = this.#getRequest();

            const response = await fetch(`${urlAPI}/process`, requestOptions);

            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
            }

            const result = await response.json();
            const data = {
                success: true,
                ...result
            };

            console.log(data)
            return data;
        } catch (error) {
            console.error("Erro na execução:", error);
            return {
                success: false,
                error: error
            };
        }
    }
}

export default Auth