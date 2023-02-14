import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUserData = async ({ queryKey }) => {
    const [, { token }] = queryKey;
    const response = await axios.get('http://localhost:1337/users/me', {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

export const useUserData = (token) => {
    return useQuery(['userData', { token }], fetchUserData, {
        enabled: !!token, // permet de ne pas exécuter la requête si le token est null
    });
};
