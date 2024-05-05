import Swal from 'sweetalert2';
export const saveEventData=(eventData: any)=>{
    console.log('eventDataServiceFile:', JSON.stringify(eventData));

    fetch('http://localhost:3008/eventData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
    })
    .then((response) => {
        if (response.ok) {
            Swal.fire({
                title: "Event saved successfully!",
                icon: "success"
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload();
                }
            });
        } else {
            throw new Error('Failed to save event.');
        }
    })
    .catch((error) => {
        console.error('Error saving event:', error);
        Swal.fire({
            title: "An error occurred while saving the event. Please try again later.",
            icon: "error"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
        });
    });
}