import axios from "axios";

// create axios request with default properties (customizable) and export it
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID aVCApSrAS13NQmEtcZ0v9Msrs2cf2XALfdO_rsYBBiQ",
  },
});
