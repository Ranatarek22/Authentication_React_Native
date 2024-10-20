import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
const profileImage = require('../images/user3.png');

const ProfileScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation<LoginScreenNavigationProp>();
  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem('userEmail');
        if (storedEmail) {
          setEmail(storedEmail);
        }
      } catch (error) {
        console.error('Error retrieving email:', error);
      }
    };

    fetchEmail();
  }, []);

  const handleFollow = () => {
    Alert.alert('Followed');
  };

  const handleMessage = () => {
    Alert.alert('Message sent');
  };
  type RootStackParamList = {
    Login: undefined;
    Profile: undefined;
    Users: undefined;
 
  };

  type LoginScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Login'
  >;
  const handleFriends = () => {
    navigation.navigate('Users');
  };
  const handleLogout = () => {
    navigation.navigate('Login');
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollContentContainer}>
      <View style={styles.profileContainer}>
        <View style={styles.containerHero}>
          <Image source={profileImage} style={styles.profileImage} />
          <Text style={styles.username}>Developer</Text>
          <Text style={styles.username}>{email}</Text>
        </View>
        <View style={styles.statsContainer}>
          <Text style={styles.stat}>80 Posts</Text>
          <Text style={styles.stat}>80 Followers</Text>
          <Text style={styles.stat}>80 Following</Text>
        </View>
        <View style={styles.buttonRow}>
          <ButtonComponent title="Follow" onPress={handleFollow} />
          <ButtonComponent title="Message" onPress={handleMessage} />
        </View>
      </View>
      <View>
        <ButtonComponent title="Friends" onPress={handleFriends} />
      </View>
      <View>
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
          <Image
            source={require('../images/user3.png')}
            style={styles.postImage}
          />
        </View>
      </View>
      <View>
        <ButtonComponent title="Log Out" onPress={handleLogout} />
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
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  containerHero: {
    margin: '20%',
    alignItems: 'center',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: '5%',
    color: '#ff9500',
    alignItems: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    width: '80%',
  },
  stat: {
    fontSize: 16,
    color: '#666',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },

  postsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    alignSelf: 'flex-start',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: '5%',
  },
  postsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    padding: '5%',
  },
  postImage: {
    width: '30%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default ProfileScreen;
