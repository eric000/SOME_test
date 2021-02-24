let flatten = (nestedList) => {
    return nestedList.reduce((item, cur) => {
        const arr = Array.isArray(cur) ? flatten(cur) : cur
        return item.concat(arr)
    }, [])
}