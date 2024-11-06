// ProfileScreen.tsx
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useImageContext} from '../context/ImageContext';
import {useTranslation} from 'react-i18next';
type RootStackParamList = {
  Login: undefined;
  Profile: undefined;
  Users: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;
const ProfileScreen = () => {
  const {t} = useTranslation();
  const {
    image,
    fetchImage,
    handleProfileGallery,
    handleTakePhoto,
    fetchName,
    email,
  } = useImageContext();
  const navigation = useNavigation<LoginScreenNavigationProp>();
  useEffect(() => {
    fetchImage();
    fetchName();
  }, []);

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContentContainer}>
      <View style={styles.profileContainer}>
        <View style={styles.containerHero}>
          <Image source={{uri: image}} style={styles.profileImage} />
          <Text style={styles.username}>{t('developer')}</Text>
          <Text style={styles.username}>{email}</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{t('eighty')}</Text>
            <Text style={styles.statLabel}>{t('posts')}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{t('eighty')}</Text>
            <Text style={styles.statLabel}>{t('followers')}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{t('eighty')}</Text>
            <Text style={styles.statLabel}>{t('following')}</Text>
          </View>
        </View>

        <View style={styles.buttonRow}>
          <View style={styles.widthBtn}>
            <ButtonComponent title={t('follow')} onPress={() => {}} />
          </View>
          <View style={styles.widthBtn}>
            <ButtonComponent title={t('msg')} onPress={() => {}} />
          </View>
        </View>
      </View>

      <Text style={styles.postsHeader}>{t('posts')}</Text>
      <View style={styles.postsContainer}>
        <Image
          source={require('../images/user2.png')}
          style={styles.postImage}
        />
        <Image
          source={require('../images/user6.png')}
          style={styles.postImage}
        />
        <Image
          source={require('../images/user1.png')}
          style={styles.postImage}
        />
        <Image
          source={require('../images/user7.png')}
          style={styles.postImage}
        />
        <Image
          source={require('../images/user5.png')}
          style={styles.postImage}
        />
        <Image
          source={require('../images/user6.png')}
          style={styles.postImage}
        />
        <Image
          source={require('../images/user4.png')}
          style={styles.postImage}
        />
        <Image
          source={require('../images/user2.png')}
          style={styles.postImage}
        />
        <Image
          source={require('../images/user3.png')}
          style={styles.postImage}
        />
      </View>
 
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollContentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  widthBtn: {
    width: '65%',
    paddingHorizontal: 15,

    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  containerHero: {
    marginTop: '10%',
    marginBottom: '10%',
    alignItems: 'center',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff9500',
    marginTop: '5%',
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 15,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff9500',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  postsHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'grey',
    alignSelf: 'flex-start',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: '6%',
  },
  postsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '90%',
  },
  postImage: {
    width: '30%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default ProfileScreen;
