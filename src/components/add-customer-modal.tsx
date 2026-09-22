import { useState } from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import { addCustomer } from '../data/customer';
import { problemFor } from '../data/problem';

type AddCustomerModalProps = {
  visible: boolean;
  onClose: () => void;
  onAdded: () => void;
};

export function AddCustomerModal({ visible, onClose, onAdded }: AddCustomerModalProps) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [saving, setSaving] = useState(false);
  const [problem, setProblem] = useState('');
  const balance = Number(amount);
  const valid = name.trim() !== '' && amount !== '' && !Number.isNaN(balance) && balance >= 0;

  function close() {
    setName('');
    setAmount('');
    setProblem('');
    onClose();
  }

  function save() {
    if (!valid || saving) return;
    setSaving(true);
    setProblem('');
    addCustomer(name.trim(), balance)
      .then(() => {
        setSaving(false);
        close();
        onAdded();
      })
      .catch((error) => {
        setProblem(problemFor(error));
        setSaving(false);
      });
  }

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={close}>
      <View style={styles.backdrop}>
        <View style={styles.card}>
          <Text style={styles.title}>Add customer</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Name"
            placeholderTextColor="#7f8a96"
            editable={!saving}
            style={styles.input}
          />
          <TextInput
            value={amount}
            onChangeText={setAmount}
            placeholder="Amount owed"
            placeholderTextColor="#7f8a96"
            keyboardType="decimal-pad"
            editable={!saving}
            style={styles.input}
          />
          {problem !== '' && <Text style={styles.problem}>{problem}</Text>}
          <View style={styles.actions}>
            <Button title="Cancel" onPress={close} disabled={saving} />
            <Button title={saving ? 'Saving' : 'Add'} onPress={save} disabled={!valid || saving} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'center',
    padding: 18,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  card: {
    gap: 14,
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#111820',
    borderWidth: 1,
    borderColor: '#26313d',
  },
  title: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '700',
  },
  input: {
    height: 44,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#3a4a5a',
    backgroundColor: '#000000',
    color: '#ffffff',
  },
  problem: {
    color: '#ff8f8f',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },
});
