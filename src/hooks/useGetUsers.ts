import {useQuery} from 'react-query';
import {axiosInstance} from '../../axios';
import fetchUsers from "../api/fetchUsers"

const useGetUSers = () => {
  return useQuery('users', fetchUsers);
};

export default useGetUSers;
