import axios from 'axios'

const apiGet = async (url: string) => {
    axios.get(url)
    .then(response => {

        // console.log(response)
        return response
    })
    .catch(error => {
        console.error(error)
        return error
    });
}

