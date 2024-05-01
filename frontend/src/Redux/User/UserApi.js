import axios from "axios";
const UserUrl = `${import.meta.env.VITE_BACKEND_URL}/backend/node/v2/api/user`;


export const registerUser = async (data) => {
    try {
      return await axios.post(
        `${UserUrl}/createUser`,
        data
      );
    } catch (error) {
      console.log(error.message);
    }
  };