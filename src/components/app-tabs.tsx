import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function BottomTab() {
  return (
    <NativeTabs backgroundColor="#f8f8f8" tintColor="#65ffff" >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon src={require('@/assets/images/tabIcons/home.png')} />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="Customer">
        <NativeTabs.Trigger.Label>Customer</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon src={require('@/assets/images/tabIcons/explore.png')} />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}