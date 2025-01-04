import { user, password, urlAPI } from "../configs/config.json"

class GetGroups {
    #getBasicAuth() {
        return btoa(`${user}:${password}`)
    }

    #getRequest() {
        let header = new Headers();
        const auth = this.#getBasicAuth()
        header.append("Authorization", `Basic ${auth}`);
        header.append("Content-Type", "application/json")

        const requestOptions = {
            method: 'GET',
            headers: header
        };
        return requestOptions
    }
    async execute() {
        try {
            const requestOptions = this.#getRequest()
            const data = await fetch(`${urlAPI}/getGruposAtendimento`, requestOptions)
                .then(response => response.json())
                .then(result => result)
                .catch(error => error);


            return data
        } catch (error) {
            alert(error)
        }
    }
}

export default GetGroups