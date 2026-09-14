
    import {FlatList,TextInput, StyleSheet, Text} from 'react-native';
    import {SafeAreaView} from 'react-native-safe-area-context';
    import {CustomerRow} from '../components/customer-row';
    import {SEED} from '../data/customer';
    import {Button} from 'react-native';
    import { useState } from 'react';

    export default function Customer() {

        const [query, setQuery] = useState('');

        const [customer, setCustomers] = useState(SEED);

        const shown = customer.filter((customer) => customer.name.toLowerCase().includes(query.toLowerCase()));

        const total = shown.reduce((sum, customer) => sum + customer.balance, 0);


        function addWalkIn(){ 
            const id = String(Date.now());
            const newCustomer = {id, name: 'Walk-in', balance: 0, lastPaid: 'Never'};
            setCustomers([...customer, newCustomer]);
        }

    return ( 



        <SafeAreaView style={styles.container}>
        <TextInput style = {styles.TextInput}
        value = {query}
        onChangeText={setQuery}
        placeholder="Search customers..."
        />

        <Text>Total owed: ${total.toFixed(2)}</Text>

        <Button title = "Add Walk-in Customer" onPress={addWalkIn} />

        <FlatList
        data={shown}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <CustomerRow name={item.name} balance={item.balance} lastPaid={item.lastPaid} />
        )}
        ListEmptyComponent={<Text>No customers found.</Text>}
        />
    </SafeAreaView>
    );    
    }



    const styles = StyleSheet.create({ 
        container: {
            flex: 1,
            padding: 18,
            gap: 12
        },

        TextInput: {
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            paddingHorizontal: 8,
            borderRadius: 4,
        }
    })
