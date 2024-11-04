import { axiosInstance } from "../../axios";


      const fetchUsers = async () => {
        const data = await axiosInstance.get('/users');
        return data.data;
      };

export default fetchUsers;