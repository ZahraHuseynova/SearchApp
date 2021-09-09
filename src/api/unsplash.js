import axios from "axios";

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization:"Client-ID 0LRrynTZASKo-WEMXSz_LnTTxGbmOfL8M4CO6SHqRC8"
    },
});