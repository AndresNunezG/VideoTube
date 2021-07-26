const useSearchItem = (query, coversList) => {
    const result = coversList.filter((coverItem) => {
        return (
            `${coverItem.name} ${coverItem.status} ${coverItem.origin.name}`
            .toLowerCase()
            .includes(query.toLowerCase())
        )
    })
    if (query && result.length === 0)  {
        return null
    }
    return result;
}

export default useSearchItem;