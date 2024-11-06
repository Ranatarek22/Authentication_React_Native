import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Button,
} from 'react-native';
import {useImageContext} from '../context/ImageContext';
import Feather from 'react-native-vector-icons/Feather';
import ButtonComponent from '../components/ButtonComponent';
import {useTranslation} from 'react-i18next';
import {uselanguageContext} from '../context/LocalizationContext';
import {useNavigation} from '@react-navigation/native';

const SettingsScreen = () => {
  const {t} = useTranslation();
  const {image, handleProfileGallery, handleTakePhoto, email} =
    useImageContext();
  const {changeLanguage} = uselanguageContext();
  const navigation = useNavigation();
  const [isModalVisibleImage, setIsModalVisibleImage] = useState(false);
  const [isModalVisibleLang, setModalVisibleLang] = useState(false);

  const openModalImage = () => {
    setIsModalVisibleImage(true);
  };

  const closeModalImage = () => {
    setIsModalVisibleImage(false);
  };

  const openModalLang = () => {
    setModalVisibleLang(true);
  };

  const closeModalLang = () => {
    setModalVisibleLang(false);
  };

  const handleLanguageChange = (lang: string) => {
    changeLanguage(lang);
    closeModalLang();
  };
  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('settings')}</Text>
      <View style={styles.containerHero}>
        <View style={styles.profileImageWrapper}>
          <Image source={{uri: image}} style={styles.profileImage} />
          <TouchableOpacity style={styles.editButton} onPress={openModalImage}>
            <Feather name="edit-3" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.username}>{email}</Text>
      </View>

      <View style={styles.settingRow}>
        <Text style={styles.settingLabel} onPress={openModalLang}>
          {t('changeLanguage')}
        </Text>
      </View>
      <View style={styles.settingRow}>
        <Text style={styles.logout} onPress={handleLogout}>
          {t('logout')}
        </Text>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisibleLang}
        onRequestClose={closeModalLang}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{t('chooseLanguage')}</Text>
            <TouchableOpacity
              style={styles.languageButton}
              onPress={() => handleLanguageChange('en')}>
              <Text style={styles.languageText}>{t('english')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.languageButton}
              onPress={() => handleLanguageChange('ar')}>
              <Text style={styles.languageText}>{t('arabic')}</Text>
            </TouchableOpacity>
            <Button title={t('close')} onPress={closeModalLang} />
          </View>
        </View>
      </Modal>

      <Modal
        transparent={true}
        visible={isModalVisibleImage}
        animationType="slide"
        onRequestClose={closeModalImage}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{t('editProfilePicture')}</Text>

            <ButtonComponent
              title={t('changePhoto')}
              onPress={handleProfileGallery}
            />
            <ButtonComponent title={t('takePhoto')} onPress={handleTakePhoto} />

            <ButtonComponent title={t('close')} onPress={closeModalImage} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff9500',
    marginTop: '5%',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  containerHero: {
    marginTop: '10%',
    marginBottom: '10%',
    alignItems: 'center',
  },
  profileImageWrapper: {
    position: 'relative',
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
  buttonRow: {
    alignItems: 'center',
    width: '80%',
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#ff9500',
    borderRadius: 20,
    padding: 5,
  },

  settingRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingLabel: {
    fontSize: 18,
  },
  logout: {
    fontSize: 18,
    color: 'red',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default SettingsScreen;
