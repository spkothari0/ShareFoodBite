import e from 'express';
import Swal from 'sweetalert2';
export const postDelete = async (id:any) => {
    const response = await fetch(`http://localhost:3008/medias/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => {
        if (response.ok) {
            Swal.fire({
                title: "Post deleted successfully!",
                icon: "success"
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload();
                }
            });
        }
        else {
            throw new Error('Failed to delete post.');
        }
    }
    ).catch((error) => {
        console.error('Error deleting post:', error);
        Swal.fire({
            title: "An error occurred while deleting the post. Please try again later.",
            icon: "error"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
        });
    });
}
export default postDelete;