export const getUserById = async (id: number) => {
    const userJson = await fetch(`/api/user/${id}`)
        .then(response => response.json())
        .catch(err => {throw Error()})
        .then(userList => userList[0])
    return userJson
}