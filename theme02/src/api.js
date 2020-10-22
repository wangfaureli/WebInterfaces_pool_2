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
    getUser: async (userId) => {
        const response = await axios.get(`${apiUrl}/users/${userId}`);
        return await response.data.data;
    },
    createUser: async (username, email) => {
        const response = await axios.post(`${apiUrl}/users`, {
            user: {
                username: username,
                email: email
            }
        });
        // return await response.data.data;
        console.log(response.data);
    }
};