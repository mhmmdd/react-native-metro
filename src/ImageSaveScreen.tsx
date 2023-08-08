import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Alert,
  Platform,
  Text,
  Button,
} from 'react-native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import RNFS from 'react-native-fs';
import {PERMISSIONS, request} from 'react-native-permissions';

const ImageSaveScreen = () => {
  const yourBase64String =
    '/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAqACEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9wKK8UzkevcUFufr3NZ853fU/M9rorxVsHn8RxQB/OjnD6n5ntVFeLY/ztoo5w+p+Z45+3F+0K/7MPwXTxOEv5I01GK2lSzaFJ2V1fG1pY5EHzBc5Q8AgY618oeLf+CtPiPwbqi2V74I+K0V1IF2RvLpylt3mbQP9A6kwzDHXMUg6owHc/wDBfr4n23we/wCCe17rl1by3ccGvWSLFGcF2bzABk9Bnqf0r8Evi1/wVK+J3xE+NbePNHl03wNr66nHrMNxocbrJDeLLJM04eVnO55ZGZhwnChVVRtq4bGeJlJTsmfqv4z/AODiq38O6dJJDoHjzzYypy+oaW6lQRuGPsI5K5AOeCQcHGD9df8ABI3/AIKFTf8ABRb4La34rksNQsItN1WTT0jvZIHmO0I+cwxxrja6jpnIY5wQB/Ol4k/bP0vxz4t8Ra1r3wh+H+pXviLWLzV3jjv9bsbSxFxO8wtbe3tr+OKK3iD+XGgXKoqgk4zX7L/8Gp8y3P7GHjB440gWTxXcMsSElYwYYCFBYk4HTkk+pon8IsPKTqK7Z+pu0/7P50VH5g/2fzaisD0z5m/4K2fsNat/wUQ/ZBuvhxo2tWug3kuq2moi6uIDOoWEsSu0MvJ3etflj/xCWfEMj/kqGgf+Ch//AI9X70RcyikB/e/h/jVqTRhOhGbuz8GT/wAGlfxBx/yVHQc9x/Y7/wDx6v0l/wCCN3/BOfXf+Ca/wL1rwfrmuWPiCXUdWfUUube3MCqGSNNpUs3TZ1z3r7Bf74objd/ntQ5N6BDDwi+ZBsT0b8v/AK9FTbB6D8qKg3P/2Q==';
  const base64Image = 'data:image/jpeg;base64,' + yourBase64String;
  const requestPermissionAndSave = async () => {
    try {
      const platform = Platform.OS;
      const permission =
        platform === 'ios'
          ? PERMISSIONS.IOS.PHOTO_LIBRARY
          : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE;

      const result = await request(permission);

      if (result === 'granted') {
        saveImage();
        Alert.alert('Success', 'Photo saved successfully!');
      } else {
        Alert.alert(
          'Permission Denied!',
          'Cannot save photo without permission.',
        );
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to save photo.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Test</Text>
      <Image source={{uri: base64Image}} style={styles.image}/>
      <Button title="Save to Photos" onPress={requestPermissionAndSave}/>
    </View>
  );
};

const saveImage = async () => {
  const yourBase64String =
    '/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAqACEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9wKK8UzkevcUFufr3NZ853fU/M9rorxVsHn8RxQB/OjnD6n5ntVFeLY/ztoo5w+p+Z45+3F+0K/7MPwXTxOEv5I01GK2lSzaFJ2V1fG1pY5EHzBc5Q8AgY618oeLf+CtPiPwbqi2V74I+K0V1IF2RvLpylt3mbQP9A6kwzDHXMUg6owHc/wDBfr4n23we/wCCe17rl1by3ccGvWSLFGcF2bzABk9Bnqf0r8Evi1/wVK+J3xE+NbePNHl03wNr66nHrMNxocbrJDeLLJM04eVnO55ZGZhwnChVVRtq4bGeJlJTsmfqv4z/AODiq38O6dJJDoHjzzYypy+oaW6lQRuGPsI5K5AOeCQcHGD9df8ABI3/AIKFTf8ABRb4La34rksNQsItN1WTT0jvZIHmO0I+cwxxrja6jpnIY5wQB/Ol4k/bP0vxz4t8Ra1r3wh+H+pXviLWLzV3jjv9bsbSxFxO8wtbe3tr+OKK3iD+XGgXKoqgk4zX7L/8Gp8y3P7GHjB440gWTxXcMsSElYwYYCFBYk4HTkk+pon8IsPKTqK7Z+pu0/7P50VH5g/2fzaisD0z5m/4K2fsNat/wUQ/ZBuvhxo2tWug3kuq2moi6uIDOoWEsSu0MvJ3etflj/xCWfEMj/kqGgf+Ch//AI9X70RcyikB/e/h/jVqTRhOhGbuz8GT/wAGlfxBx/yVHQc9x/Y7/wDx6v0l/wCCN3/BOfXf+Ca/wL1rwfrmuWPiCXUdWfUUube3MCqGSNNpUs3TZ1z3r7Bf74objd/ntQ5N6BDDwi+ZBsT0b8v/AK9FTbB6D8qKg3P/2Q==';

  const filePath = `${RNFS.CachesDirectoryPath}/${Math.round(
    Math.random() * 1000000,
  )}.jpeg`;

  await RNFS.writeFile(filePath, yourBase64String, 'base64');

  CameraRoll.save(filePath, {type: 'photo'})
    .then(res => console.log('Saved to camera roll:', res))
    .catch(err => console.error('Error saving to camera roll:', err));
};

export default ImageSaveScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});
