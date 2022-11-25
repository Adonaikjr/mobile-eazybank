import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import { ContainerAbout } from './styled';

export default function TabTwoScreen() {
  function handleHelpPress() {
    WebBrowser.openBrowserAsync(
      'https:/fastpopstore.com.br'
    );
  }

  return (
    <ContainerAbout>
      <TouchableOpacity onPress={handleHelpPress}>
        <Text>Fast Pop Store</Text>
      </TouchableOpacity>
    </ContainerAbout>
  );
}
