import axios from "axios";

let URL_API_SERVER = "http://localhost:8080"

export const getComic = async (id) => {

    const config = {
        method: 'get',
        url: `${URL_API_SERVER}/comic?id_comic=${id}`,
        headers: { }
    };

    let res = await axios(config)
    .then( (res) => {
        return res.data;
    }).catch( (error) => {
        console.error(error)
        return error;
    });

    return res;
}

export const singIn = async (data) => {
    const config = {
        method: 'post',
        url: `${URL_API_SERVER}/singin`,
        headers: { },
        data: data
    };

    let res = await axios(config)
    .then( (res) => {
        return res.data;
    }).catch( (error) => {
        console.error(error)
        return error;
    });

    return res;
}

export const singUp = async (data) => {
    const config = {
        method: 'post',
        url: `${URL_API_SERVER}/singup`,
        headers: { },
        data: data
    };

    let res = await axios(config)
    .then( (res) => {
        return res.data;
    }).catch( (error) => {
        console.error(error)
        return error;
    });

    return res;
}