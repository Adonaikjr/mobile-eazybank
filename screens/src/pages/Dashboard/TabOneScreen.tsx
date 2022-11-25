import { Image, ScrollView, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { RootTabScreenProps } from '../../../../types';
import { BackgroundIamge, ContainerDashboard, NewText, Cover, Title, NewContainerButton, ContainerContent, CoverOnline, NewTitle, ButtonText } from './styled';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <ContainerDashboard>
      <SafeAreaView>
        <ScrollView>
          <BackgroundIamge source={require('../../images/bg-intro-mobile.png')} />
          <Cover>
            <BackgroundIamge source={require('../../images/mask.png')} />
          </Cover>
          <Title>Next Generation digital banking</Title>
          <NewText>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</NewText>
          <NewContainerButton>
            <TouchableOpacity
              onPress={() => alert('Hello, world!')}>
              <ButtonText>Request Invite</ButtonText>
            </TouchableOpacity>
          </NewContainerButton>
          <ContainerContent>
            <Title>Why choose Easybank?</Title>
            <NewText>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</NewText>
            <CoverOnline>
              <Image source={require('../../images/icon-online.png')} style={styles.tinyLogo} />
              <NewTitle>Online Banking</NewTitle>
              <NewText>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world</NewText>
            </CoverOnline>
            <CoverOnline>
              <Image source={require('../../images/icon-budgeting.png')} style={styles.tinyLogo} />
              <NewTitle>Simple Budgeting</NewTitle>
              <NewText>See exactly your money goes each month. Receive notifications when you're close to your hitting limits.</NewText>
            </CoverOnline>
            <CoverOnline>
              <Image source={require('../../images/icon-onboarding.png')} style={styles.tinyLogo} />
              <NewTitle>Fast Onboarding</NewTitle>
              <NewText>We don't do branches. Open your accont in minutes online and start taking control of your finances right away</NewText>
            </CoverOnline>
            <CoverOnline>
              <Image source={require('../../images/icon-api.png')} style={styles.tinyLogo} />
              <NewTitle>Open API</NewTitle>
              <NewText>Manege your savings, investments, pension, and much more from one accont. Tracking your money has never been easier.</NewText>
            </CoverOnline>
          </ContainerContent>

        </ScrollView>
      </SafeAreaView>
    </ContainerDashboard >
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 130,
    height: 130,
  },
  subImage: {
    color: 'white',
    textAlign: 'left',
    width: 380,
    marginLeft: 10,
  }
});