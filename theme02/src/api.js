import axios from 'axios';
import { apiUrl } from "@/settings";

export default {
    getWorkingTimes: async (userId) => {
        const response = await axios.get(`${apiUrl}/workingtimes`);
        const data = await response.data.data;
        return data.filter((wt) => wt.user_id.toString() === userId);
    },
    getUserClocks: async (userId) => {
        const response = await axios.get(`${apiUrl}/clocks/${userId}`);
        const data = await response.data.data;
        return data;
    }
};