import axios from "axios";
import { ENV_VARS } from "../config/env.js";

export const fetchfromTMBD = async (url) => {
    const options = {
        headers: {
           accept:"application/json",
           Authorization: `Bearer ${ENV_VARS.TMBD_API}`,
        },
    };

    const response = await axios.get(url, options);

    // Check if the response status is outside the 2xx range
    if (response.status < 200 || response.status >= 300) {
        throw new Error(`Error: ${response.statusText}`);
    }
    return response.data;
};
