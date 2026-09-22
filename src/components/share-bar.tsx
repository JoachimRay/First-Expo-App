import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../hooks/use-theme';

type ShareBarProps = {
  name: string;
  balance: number;
  share: number;
};

export function ShareBar({ name, balance, share }: ShareBarProps) {
  const theme = useTheme();
  const percentage = Math.max(share * 100, 2);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.amount}>
          ₱ {balance.toFixed(2)} · {Math.round(share * 100)}%
        </Text>
      </View>
      <View style={[styles.track, { backgroundColor: theme.backgroundSelected }]}>
        <View style={[styles.fill, { width: `${percentage}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  name: {
    color: '#ffffff',
    fontSize: 14,
    flexShrink: 1,
  },
  amount: {
    color: '#7f8a96',
    fontSize: 14,
    flexShrink: 1,
    textAlign: 'right',
  },
  track: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  fill: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#62e6ff',
  },
});
