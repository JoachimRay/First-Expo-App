import { Pressable, StyleSheet, Text } from 'react-native';

type CustomerRowProps = {
    name: string;
    balance: number;
    lastPaid: string;
    onPress: () => void;
};

export function CustomerRow({ name, balance, lastPaid, onPress }: CustomerRowProps) {
    return (
        <Pressable style={styles.row} onPress={onPress}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>Balance: ₱ {balance.toFixed(2)}</Text>
            <Text style={styles.text}>Last Paid: {lastPaid}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({

    row: { 
        paddingVertical: 14, 
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
    },

    text: { 
        fontSize: 18,
        color: '#ffffff',
    }

});