// src/screens/Users.tsx
import React, {useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  Text,
  ActivityIndicator,
} from 'react-native';
import PersonCard from './PersonCard';
import {useUserContext} from '../context/UserContext';
import useGetUSers from '../hooks/useGetUsers';
import {View} from 'react-native';

const Users = () => {
  const {users, isLoading, error, refetch} = useUserContext();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading users</Text>;

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View>
          {' '}
          <ActivityIndicator />
        </View>
      ) : (
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
      )}
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
