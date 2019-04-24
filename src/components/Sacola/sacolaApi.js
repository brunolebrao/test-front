import axios from 'axios';



class SacolaApi {
    static getProducts(token, lang) {
        return new Promise((resolve, reject) => {
            axios.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07', {
            })
            .then((res) => {
                resolve({...res.data})
            })
            .catch((er) => {
                reject({...er.response})
            })
        })
    }
}

export default SacolaApi;
