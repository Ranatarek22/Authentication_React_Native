import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface ButtonComponentProps {
  title: string;
  onPress: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
export default ButtonComponent;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#ff9500',
    padding: 15,
    borderRadius: 5,
    width: '55%', // Adjusted width to fit two buttons side by side
    alignItems: 'center',
    // borderBottomWidth: 4,
    // borderBottomColor: 'white',
    marginHorizontal: 5,
    // Shadow properties for iOS
    shadowColor: '#fff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.7,
    shadowRadius: 6,
    // Shadow property for Android
    elevation: 4,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
