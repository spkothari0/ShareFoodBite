export const apiServiceGetFilterEvent = async (filter: string) => {
    const response = await fetch('http://localhost:3008/getEventFilterData?searchText='+filter);
    const data = await response.json();
    return data;
}