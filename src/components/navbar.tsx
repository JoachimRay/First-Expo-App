import {View, Text, StyleSheet} from 'react-native';
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
        backgroundColor: '#f8f8f8',
    },

    label:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
});