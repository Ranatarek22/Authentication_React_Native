import React from 'react';
import {useTranslation} from 'react-i18next';
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
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Image source={{uri: photo}} style={styles.image} />
      <View style={styles.userInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text>
          {t('username')} : {String(username)}
        </Text>
        <Text>
          {t('company')} : {String(company)}
        </Text>
        <Text>
          {t('email')} : {String(email)}
        </Text>
        <Text>
          {t('phone')} : {String(phone)}
        </Text>
        <Text>
          {t('address')} :{fullAddress}
        </Text>
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
