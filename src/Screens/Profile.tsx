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
          <Text style={styles.username}>Developer</Text>
          <Text style={styles.username}>{email}</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>80</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>80</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>80</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>

        <View style={styles.buttonRow}>
          <ButtonComponent
            title="Change Photo"
            onPress={handleProfileGallery}
          />
          <ButtonComponent title="Take Photo" onPress={handleTakePhoto} />
        </View>
      </View>

      <Text style={styles.postsHeader}>Posts</Text>
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

      <ButtonComponent title="Log Out" onPress={handleLogout} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollContentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
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
