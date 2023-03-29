import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../assets/svg_icons/OiiKii_Logo.svg';

const OiiKii_Logo = (props) => {
  return (
    <View>
      <Logo width={55} height={55} style={styles.mr7} />
      
    </View>
    
  )
}

export default OiiKii_Logo

const styles = StyleSheet.create({
    mr7: {
        marginRight: 7,
      }
});

