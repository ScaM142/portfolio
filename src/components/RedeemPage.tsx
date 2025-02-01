import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const RedeemPage = () => {
    let query = useQuery();
    let code = query.get('code');

    return (
        <div>
            {code ? (
                <h1>Redeem code: {code}</h1>
            ) : (
                <h1>No code provided</h1>
            )}
        </div>
    );
};

export default RedeemPage;