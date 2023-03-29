import { StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react';
import Checkbox from 'expo-checkbox';

const TandC_comp = () => {
    const [isChecked, setChecked] = useState(false);
  return (
    
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={()=>setChecked(!isChecked)} />
        <Text style={styles.paragraph}>Terms and conditions</Text>
      
      
    </View>
  )
}

{/* <View style={styles.container}>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Normal checkbox</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Text style={styles.paragraph}>Custom colored checkbox</Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} disabled value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Disabled checkbox</Text>
      </View>
    </View> */}

export default TandC_comp

const styles = StyleSheet.create({
    
      section: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      paragraph: {
        fontSize: 15,
      },
      checkbox: {
        margin: 8,
      },
})