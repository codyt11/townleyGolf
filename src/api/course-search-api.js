
import axios from "axios";

const fetchLocation = () => {
    return axios
      .get("http://ipwho.is/")
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => {
        console.error("error fetching data from api, err: ", err.message);
        return err;
      });
  };
  export default fetchLocation;