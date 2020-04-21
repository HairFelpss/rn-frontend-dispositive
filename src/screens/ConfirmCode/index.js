import React, {useContext} from 'react';
import {ImageBackground, StatusBar, View} from 'react-native';
import {NavigationContext} from 'react-navigation';

import Title from '~/components/Title';
import Logo from '~/components/Logo';
import Button from '~/components/Button';
import Input from '~/components/Input';
import Instruction from '~/components/Instruction';

import styles from './styles';
import bg from '~/assets/background/bg.png';
import logo from '~/assets/logo/logo.png';

const ConfirmCode = () => {
  const navigation = useContext(NavigationContext);

  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <Title title="Confirm Code" Icon="goBack" />

      <Logo img={logo} />

      <Instruction content="Enter the verification code sent to your email address to reset your password." />
      <Input content="Enter code" />
      <View style={styles.bottomView}>
        <Button
          title="Confirm"
          onPress={() => navigation.navigate('ChangePassword')}
        />
      </View>
    </ImageBackground>
  );
};

export default ConfirmCode;
