import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import {axiosInstance} from '../../axios';
import axios from 'axios';


export interface Person {
  id: number;
  name: string;
  company: string;
  username: string;
  email: string;
  address: string;
  zip: string;
  state: string;
  country: string;
  phone: string;
  photo: string;
}


interface UserContextType {
  users: Person[];
  error: string | null;
  fetchUsers: ()=>Promise<void>;
}


const UserContext = createContext<UserContextType | undefined>(undefined);


interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({children}) => {
  const [users, setUsers] = useState<Person[]>([]);
  const [error, setError] = useState<string | null>(null);


    const fetchUsers = async () => {
      try {
        const res = await axiosInstance.get('/users');
        console.log('Fetched users:', res.data);
        setUsers(res.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log('Axios error:', error.message, error.response?.data);
          setError('Error fetching users. Please try again later.');
        } else {
          console.log('Unexpected error:', error);
          setError('An unexpected error occurred.');
        }
      }
    };
    


  return (
    <UserContext.Provider value={{users, error, fetchUsers}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
