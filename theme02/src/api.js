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
    },
    getUsers: async () => {
        const response = await axios.get(`${apiUrl}/users/`);
        return await response.data.data;
    },
    getUser: async (userId) => {
        const response = await axios.get(`${apiUrl}/users/${userId}`);
        return await response.data.data;
    },
    deleteUser: async (userId) => {
        const response = await axios.delete(`${apiUrl}/users/${userId}`);
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