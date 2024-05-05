export const getpost = async () => {
    const response = await fetch('http://localhost:3008/medias');
    const data = await response.json();
    return data;
};

export default getpost;