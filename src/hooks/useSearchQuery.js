import React, { useState } from 'react';

const useSearchQuery = () => {
    const [query, setQuery] = useState('');
    return {query, setQuery};
}

export default useSearchQuery;