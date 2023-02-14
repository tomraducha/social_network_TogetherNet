import React from 'react';
import { useUserData } from '../../atoms/UserData/index';
import Cookies from 'js-cookie';

import './index.scss';

export default function Profile() {
    const token = Cookies.get('token');
    const { data, isLoading, isError } = useUserData(token);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return (
            <div>Une erreur est survenue lors de la récupération des données utilisateur.</div>
        );
    }

    return (
        <>
            <div>Profile</div>
            <h1>Bonjour {data && data.username}</h1>
        </>
    );
}
