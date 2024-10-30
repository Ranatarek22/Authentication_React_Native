// src/screens/Users.tsx
import React, {useEffect} from 'react';
import {FlatList, StyleSheet, SafeAreaView, Text} from 'react-native';
import PersonCard from './PersonCard';
import {useUserContext} from '../context/UserContext';

const Users = () => {
  const {users, error, fetchUsers} = useUserContext();
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {error && <Text style={styles.error}>{error}</Text>}
      {users.length === 0 && !error && <Text>loading..</Text>}
      <FlatList
        data={users}
        renderItem={({item}) => {
          console.log('Rendering user:', item);
          return (
            <PersonCard
              id={item.id}
              name={item.name}
              company={item.company}
              username={item.username}
              email={item.email}
              address={item.address}
              zip={item.zip}
              state={item.state}
              country={item.country}
              phone={item.phone}
              photo={item.photo}
            />
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default Users;
