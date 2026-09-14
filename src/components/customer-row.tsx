import {Text, View, StyleSheet, Pressable} from 'react-native';
import { useState } from 'react';


type CustomerRowProps = {name: string, balance: number, lastPaid: string};

export function CustomerRow({ name, balance, lastPaid }: CustomerRowProps) {

    const [expanded, setExpanded] = useState(false);

    return(
        
        <Pressable style = {styles.row}
        onPress={() => setExpanded(!expanded)}
        > 
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>Balance: ${balance.toFixed(2)}</Text>
            {expanded && <Text style={styles.text}>Last Paid: {lastPaid}</Text>}
        </Pressable>

    )    

}


const styles = StyleSheet.create({

    row: { 
        paddingVertical: 14, 
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },

    text: { 
        fontSize: 18,
    }

});