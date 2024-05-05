// get certificate by user id
export const getCertificate = async (userId: String) => {
    const response = await fetch(`http://localhost:3008/certificates/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const data = await response.json();
    console.log(data);
    return data;
    
}