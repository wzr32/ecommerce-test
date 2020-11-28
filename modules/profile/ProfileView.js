import React, {useState} from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import ProfileUserData from "./components/ProfileUserData";
import ProfileShopHistory from "./components/ProfileShopHistory";
import ProfileSelectBar from './components/ProfileSelectBar';

const ProfileView = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <View>
      <ProfileSelectBar 
        toggle={toggle}
        setToggle={setToggle}
      />
      {toggle 
        ? <ProfileUserData />
        : <ProfileShopHistory />
      }

    </View>
  )
}

export default ProfileView

const styles = StyleSheet.create({})
