import { ToastError } from "../Components/ToastComponent/ToastContainer";

export const uploadMedia = async (media) => {
    const mediaType = media?.type?.split("/")[0];
    if (mediaType === "video" && Math.round(media?.size / 1024000) > 10){
        ToastError("Video size should be less than 10MB")
    }
    else if (Math.round(media?.size / 1024000) > 4){
        ToastError("Image size should be less than 4MB")
    }
    else {

        const formData = new FormData();
        formData.append("file", media);
        formData.append("upload_preset", "pfnc996n");

        return fetch('https://api.cloudinary.com/v1_1/ducuco7mq/auto/upload', {
            method: "POST",
            body: formData,
        }).then((response) => response.json())
            .then((data) => data)
            .catch((err) => console.error(err));



            
    }
}



