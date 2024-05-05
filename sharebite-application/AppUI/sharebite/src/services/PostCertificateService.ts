// post certificate service
export const NewCertificate = async (name: String, amount: number, userId: String ) => {
    const response = await fetch('http://localhost:3008/certificates/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, amount, date: new Date(), userId})
    });
    const data = await response.json();
    console.log(data);
    return data;
    
}
