import * as React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HelpScreen from '../HelpScreen';
import Welcome from '../Welcome';
import { styles } from './styles';
import images from 'images';

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tab.Screen name="home" component={Welcome} />
      <Tab.Screen name="noti" component={Welcome} />
      <Tab.Screen name="card" component={Welcome} />
      <Tab.Screen name="profile" component={Welcome} />
    </Tab.Navigator>
  );
}
function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.flex}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.center}>
            {!!isFocused && <View style={styles.dot} />}
            <Image source={images[`${label}Icon`]} resizeMode="contain" style={styles.image} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function App() {
  const ref = React.useRef(null);

  return (
    <NavigationContainer ref={ref}>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;
