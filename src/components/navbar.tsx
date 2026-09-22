import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function Navigation({title}: {title: string}) { 
    

    return(
        
        <SafeAreaView style={styles.box}>
            <Text style={styles.label}>{title}</Text>
        </SafeAreaView>
    ); 

}


const styles = StyleSheet.create({
   
    box:{ 
        height: 90,
        justifyContent: 'center',
        paddingHorizontal: 16,
            backgroundColor: '#0b0f14',
            borderBottomWidth: 1,
            borderBottomColor: '#26313d',
    },

    label:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    },
});