import { StyleSheet, Text, View } from 'react-native';
import { Spacing } from '../constants/theme';

type StatProps = {
  label: string;
  value: string;
};

export function Stat({ label, value }: StatProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={styles.value}
      >
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.one,
    flex: 1,
    minWidth: 120,
  },
  label: {
    color: '#7f8a96',
    fontSize: 13,
  },
  value: {
    color: '#ffffff',
    fontSize: 24,
    lineHeight: 32,
  },
});
