import React, {useContext, useState, useTransition} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  LocalizationContext,
  uselanguageContext,
} from '../context/LocalizationContext';
import ButtonComponent from '../components/ButtonComponent';

const Welcome = require('../images/welcome.png');

type RootStackParamList = {
  Auth: undefined;
  Profile: undefined;
  Users: undefined;
  Welcome: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Auth'
>;

const WelcomeScreen = () => {
  const {t} = useTranslation();
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const profileNav = () => {
    navigation.navigate('Auth');
  };

  const {changeLanguage} = uselanguageContext();
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const handleLanguageChange = (lang: string) => {
    changeLanguage(lang);
    closeModal();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{t('welcomeHeader')}</Text>
      <View>
        <Image source={Welcome}></Image>
      </View>
      <View style={styles.containerBox}>
        <Text style={styles.title}>{t('welcomeTitle')}</Text>
        <Text style={styles.content}>{t('welcomeContent')}</Text>
      </View>
      <View style={styles.buttonRow}>
        <ButtonComponent title={t('letsStartButton')} onPress={profileNav} />
        <ButtonComponent
          title={t('changeLanguageButton')}
          onPress={openModal}
        />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{t('chooseLanguage')}</Text>
            <TouchableOpacity
              style={styles.languageButton}
              onPress={() => handleLanguageChange('en')}>
              <Text style={styles.languageText}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.languageButton}
              onPress={() => handleLanguageChange('ar')}>
              <Text style={styles.languageText}>عربي</Text>
            </TouchableOpacity>
            <Button  title={t("close")} onPress={closeModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    margin: '10%',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ff9500',
  },
  containerBox: {
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  content: {
    color: '#A6A6A6',
    paddingHorizontal: '10%',
    marginTop: 10,
  },
  buttonRow: {
    alignItems: 'center',
    width: '80%',
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  languageButton: {
    padding: 10,
    backgroundColor: '#ff9500',
    marginVertical: 10,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
  },
  languageText: {
    color: 'white',
    fontSize: 18,
  },

});

export default WelcomeScreen;
