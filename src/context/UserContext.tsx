import React, {createContext, useContext, ReactNode} from 'react';
import useGetUsers from '../hooks/useGetUsers';

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
  users: Person[] | undefined;
  error: unknown;
  isLoading: boolean;
  refetch: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({children}) => {
  const {data: users, isLoading, error, refetch} = useGetUsers();

  return (
    <UserContext.Provider value={{users, error, isLoading, refetch}}>
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
