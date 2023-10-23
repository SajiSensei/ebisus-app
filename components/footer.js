import react from "react";
import { View } from 'react-native';
import ebisus from "../../ebisus-app/assets/ebisus.png"

const footer = (Image) => {
    return(
        <View style={styles.footer}>
          <Image source={ebisus} style={{ width: 20, height: 20, left: 20 }} />
          <Text style={styles.footerText}>Your Footer Content Here</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default footer;