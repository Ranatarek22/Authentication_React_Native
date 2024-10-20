import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export type Person = {
  id: number;
  name: string;
  company: string;
  username: string;
  email: string;
  address: any;
  zip: any;
  state: any;
  country: any;
  phone: any;
  photo: any;
};

const PersonCard: React.FC<Person> = ({
  name,
  company,
  username,
  email,
  address,
  zip,
  state,
  country,
  phone,
  photo,
}) => {
  const fullAddress = `${address || 'Unknown address'}, ${
    state || 'Unknown state'
  }, ${zip || 'Unknown zip'}, ${country || 'Unknown country'}`;

  return (
    <View style={styles.container}>
      <Image source={{uri: photo}} style={styles.image} />
      <View style={styles.userInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text>Username: {String(username)}</Text>
        <Text>Company: {String(company)}</Text>
        <Text>Email: {String(email)}</Text>
        <Text>Phone: {String(phone)}</Text>
        <Text>Address: {fullAddress}</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PersonCard;
