import { StyleSheet, Text, TouchableOpacity } from "react-native";

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
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});