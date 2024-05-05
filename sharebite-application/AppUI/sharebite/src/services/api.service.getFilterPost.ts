export const apiServiceGetFilterPost = async (filter: string) => {
    const response = await fetch('http://localhost:3008/medias/filters?searchText='+filter);
    const data = await response.json();
    return data;
}