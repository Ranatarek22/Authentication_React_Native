import React, {createContext, useState, useContext, ReactNode} from 'react';
import {Alert, PermissionsAndroid, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-crop-picker';

interface ImageContextType {
  image: string;
  handleProfileGallery: () => Promise<void>;
  handleTakePhoto: () => Promise<void>;
  fetchImage: () => Promise<void>;
  fetchEmail: () => Promise<void>;
  email: string;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [image, setImage] = useState<string>(
    'https://i.ytimg.com/vi/vmjGZbsuIGM/maxresdefault.jpg',
  );
  const [email, setEmail] = useState('');


  const requestCameraPermission = async (): Promise<boolean> => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'This app needs access to your camera to take pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };

  const handleProfileGallery = async () => {
    try {
      const image = await ImagePicker.openPicker({
        compressImageMaxHeight: 300,
        compressImageMaxWidth: 400,
        cropping: true,
        compressImageQuality: 0.7,
      });
      setImage(image.path);
      await AsyncStorage.setItem('profileImage', image.path);
    } catch (error) {
      console.error('Picker error: ', error);
    }
  };

  const handleTakePhoto = async () => {
    const hasPermission = await requestCameraPermission();
    if (hasPermission) {
      try {
        const image = await ImagePicker.openCamera({
          compressImageMaxHeight: 300,
          compressImageMaxWidth: 400,
          cropping: true,
          compressImageQuality: 0.7,
        });
        setImage(image.path);
        await AsyncStorage.setItem('profileImage', image.path);
      } catch (error) {
        console.error('Camera error: ', error);
      }
    } else {
      Alert.alert(
        'Permission Denied',
        'You need to give camera permission to use this feature.',
      );
    }
  };

  const fetchImage = async () => {
    try {
      const storedImage = await AsyncStorage.getItem('profileImage');
      if (storedImage) {
        setImage(storedImage);
      }
    } catch (error) {
      console.error('Error retrieving image:', error);
    }
  };
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
  return (
    <ImageContext.Provider
      value={{
        image,
        handleProfileGallery,
        handleTakePhoto,
        fetchImage,
        fetchEmail,
        email,
      }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = (): ImageContextType => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImageContext must be used within an ImageProvider');
  }
  return context;
};
