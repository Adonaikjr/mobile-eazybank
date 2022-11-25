import { SafeAreaView, ScrollView, Image, Text, StyleSheet } from 'react-native';
import { MyThemeType } from '../../../../themes/MyTheme';

import { ContainerModal, NewText, NewTitle, Title, Content } from './styled';
export default function ModalScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <ContainerModal>
          <Content style={[styles.shadowProp]} >
            <Title>Latest Articles</Title>
            <Image style={styles.containerImage} source={require('../../images/image-currency.jpg')} />
            <Text style={styles.containerText} >By Clarire Robinson</Text>
            <NewTitle>Receive money in any current with no fees</NewTitle>
            <NewText>The world is getting smaller and we're becoming more mobile. So why should you be forced to onlu receive money in a single...</NewText>
          </Content>
          <Content style={[styles.shadowProp]}>
            <Image style={styles.containerImage} source={require('../../images/image-restaurant.jpg')} />
            <Text style={styles.containerText} >By Wilson Hutton</Text>
            <NewTitle>Treat yourself without worrying about money</NewTitle>
            <NewText>The world is getting smaller and we're becoming more mobile. So why should you be forced to onlu receive money in a single...</NewText>
          </Content>

          <Content style={[styles.shadowProp]}>
            <Image style={styles.containerImage} source={require('../../images/image-plane.jpg')} />
            <Text style={styles.containerText} >By Wilson Hutton</Text>
            <NewTitle>Take your Easybank card wherever you go</NewTitle>
            <NewText>We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...</NewText>
          </Content>

          <Content style={[styles.shadowProp]}>
            <Image style={styles.containerImage} source={require('../../images/image-confetti.jpg')} />
            <Text style={styles.containerText} >By Clarie Robinson</Text>
            <NewTitle>Our invite-only Beta acconts are now live</NewTitle>
            <NewText>After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...</NewText>
          </Content>
        </ContainerModal>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  containerImage: {
    width: 380,
    marginLeft: 8,
    borderRadius: 5,
  },
  containerText: {
    marginLeft: 10,
    color: '#fff',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },


});

