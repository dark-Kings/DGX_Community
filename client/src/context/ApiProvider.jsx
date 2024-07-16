// src/context/ApiProvider.js
// import { useState } from 'react';
import ApiContext from './ApiContext.jsx';
import apiRequest from '../api/api.jsx';
import PropTypes from 'prop-types';

const ApiProvider = ({ children }) => {
    // const [data, setLoa] = useState(null);

    const fetchData = async (endpoint, method, body, headers) => {
        try {
            const result = await apiRequest(endpoint, method, body, headers);
            return result
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <ApiContext.Provider value={{ fetchData }}>
            {children}
        </ApiContext.Provider>
    );
};

export default ApiProvider;

ApiProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
