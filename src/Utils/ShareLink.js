import { ToastSuccess } from "../Components/ToastComponent/ToastContainer";

export const sharePost = async (postId) => {
   
      navigator.clipboard.writeText(
        `http://localhost:3000/post/${postId}`
      );
      ToastSuccess("Post link copied successfully !")
    
  };