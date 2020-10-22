import axios from 'axios';
import { apiUrl } from "@/settings";

export default {
    getWorkingTimes: async (userId) => {
        const response = await axios.get(`${apiUrl}/workingtimes/${userId}`);
        return await response.data.data;
    },
    getUserClocks: async (userId) => {
        const response = await axios.get(`${apiUrl}/clocks/${userId}`);
        return await response.data.data;
    }
};