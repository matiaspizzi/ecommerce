export const getUser = () => {
    const user = localStorage.getItem('user');
    if (user) {
        return JSON.parse(user);
    }
    return null;
}

export const storeUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}

export const removeUser = () => {
    localStorage.removeItem('user');
}