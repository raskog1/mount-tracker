// import axios from "axios";
import XIVAPI from "xivapi-js";

const BASEURL = "https://xivapi.com/search?string=";

// const XIVAPI = require("xivapi-js");
// const axios = require("axios");
const xiv = new XIVAPI();

// const getMount = async (query) => {
export default {
  // let res = await xiv.search("panda", { indexes: "Mount", limit: 5 });
  search: async function(query) {
    let res = await xiv.search(query, { indexes: "Mount" });
    console.log(res);
    return res;
  },
};

// const getMount = function(query) {
//   console.log(query);

//   axios({
//     url: BASEURL + query,
//     method: "GET",
//     dataType: "json",
//     success: function(data) {
//       console.log(data.Name_en);
//     },
//   });
// };

// export default getMount;
