import { useState, useEffect } from 'react';

const useAPI = (API) => {
    const [dataList, setData] = useState([]);
    useEffect(() => {
        fetch(API)
          .then(response => response.json())
          .then(data => setData(data));
    }, []);
    return dataList;
};

export default useAPI;