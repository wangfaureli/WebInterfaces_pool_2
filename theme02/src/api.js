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
        return await response.data.data;
    },
    CreateClock: async (time, status, userId) => {
        const response = await axios.post(`${apiUrl}/clocks/${userId}`, {
            clock: {
                time: time,
                status: status,
                userid: userId
            }
        });
        // return await response.data.data;
        console.log(response.data);
    }
};