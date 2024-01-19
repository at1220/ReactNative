import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {ArchiveTick} from 'iconsax-react-native';
import React from 'react';
import {color} from '../constant';
function UIButton(props) {
  const {onPresss, title, isSelected} = props;
  return (
    <TouchableOpacity onPress={onPresss} style={styles.buttonContainer}>
      {isSelected == true && (
        <ArchiveTick
          color="#0b5394"
          size={30}
          variant={'Bold'}
          style={styles.iconsaxContainer}></ArchiveTick>
      )}

      <Text
        style={{
          fontSize: 20,
          color: isSelected == true ? color.primary : 'white',
          fontWeight: 'bold',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
export default UIButton;
const styles = StyleSheet.create({
  buttonContainer: {
    borderColor: 'white',
    borderWidth: 1,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 40,
    marginVertical: 30,
    backgroundColor: '#9ce9a0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconsaxContainer: {
    position: 'absolute',
    left: 10,
    top: 4,
  },
});
