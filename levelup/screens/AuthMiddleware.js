import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {APIs} from '../config/APIs';
import Utils from '../Utils/utils';

function AuthMiddleware() {
  const navigation = useNavigation();
  useEffect(() => {
    Utils.get(APIs.profile).then(response => {
      if (response.status >= 400 && response.status < 500) {
        navigation.navigate('Start');
        return;
      }
      if (response.status >= 200 && response.status < 300) {
        navigation.navigate('PersonalInfo');
      }
    });
  }, []);
  return <></>;
}
export default AuthMiddleware;
