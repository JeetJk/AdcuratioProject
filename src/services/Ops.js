
import * as axios from 'axios';

const getData = async (url = '',  token=false) => {
    if(token){
        token = 'Bearer '+token;
    }
    var header={ headers: { "Authorization": token }}
    let response = await axios.get(url, header);
    return response.data;
}

export {
    getData,
}