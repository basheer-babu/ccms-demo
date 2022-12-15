import axios from "axios";

let getRequest = async (url) => {
    try{
      await axios.get(url, {
      
    })
      .then((resp) => {
        console.log(resp);
       return resp
      })
      .catch(err => {
        console.log(err);
        return []
      });
    }catch (err) {
        console.info("failed getRequest:"+err);
        return []
    }
}

export {getRequest};