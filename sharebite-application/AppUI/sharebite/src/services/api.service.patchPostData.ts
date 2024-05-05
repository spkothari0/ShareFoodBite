export const patchPostData = async (data:any, id:any) => {
    const response = await fetch(`http://localhost:3008/medias/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const res = await response.json();
    console.log('patch res:'+res);
    return res;
}
export default patchPostData;