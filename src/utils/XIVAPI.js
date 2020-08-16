import XIVAPI from "xivapi-js";

const xiv = new XIVAPI();

export default {

  search: async function (query) {
    let res = await xiv.search(query, { indexes: "mount" });
    return res;
  },
};
