import { useState, useEffect } from 'react';

const useAPI = (API) => {
    const [dataList, setData] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(API)
          .then(response => response.json())
          .then(data => setData(data))
          .catch(err => setError(true));
    }, []);

    return [dataList, error];
};

export default useAPI;