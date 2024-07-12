import { createContext, useState, useContext, useCallback } from 'react';
import api from './api';
import PropTypes from 'prop-types';


const ApiContext = createContext();

export const useApi = () => {
  return useContext(ApiContext);
};

export const ApiProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const makeApiCall = useCallback(async (endpoint, method, requestData = null, headers = {}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api({
        method,
        url: endpoint,
        data: requestData,
        headers,
      });
      setData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <ApiContext.Provider value={{ loading, error, data, makeApiCall }}>
      {children}
    </ApiContext.Provider>
  );
};

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};