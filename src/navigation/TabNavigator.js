import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import {ColorsConstant} from '../constants/Colors.constant';
import { fontFamily } from '../constants/font';
// import {Icons} from './constants/Icons.constant';
export default function TabsRenderer({state, descriptors, navigation}) {
  return (
    <View style={ls.tabsBox}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key],
          label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name,
          isFocused = state.index === index,
          onPress = () => {
            // console.log("route", route)
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          },
          onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
        return (
          <TouchableOpacity
            key={label}
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={isFocused ? ls.activeTab : ls.tab}>
            <View style={isFocused ? ls.activeTabButton : ls.tabButton}>
              {getScreenIcon(label, isFocused)}
              {isFocused ? (
                <Text style={isFocused ? ls.activeTabText : ls.tabText}>
                  {label}
                </Text>
              ) : (
                <></>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const getScreenIcon = (name, isFocused) => {
	let icon = ''
	switch (name) {
		case 'React':
			icon = isFocused ? <Image source={require('../asstes/Images/React-icon.png')} style={ls.activeTabIcon } />: <Image source={require('../asstes/Images/React-icon.png')} style={ls.tabIcon } />
			break
		case 'ReactNative':
			icon =  isFocused ? <Image source={require('../asstes/Images/React-icon.png')} style={ls.activeTabIcon } />: <Image source={require('../asstes/Images/React-icon.png')} style={ls.tabIcon } />
			break
		case 'Node':
			icon = isFocused  ? <Image source={require('../asstes/Images/node.png')} style={ls.activeTabIcon } />: <Image source={require('../asstes/Images/node.png')} style={ ls.tabIcon} />
			break
	}
	return icon
}
const c = ColorsConstant, ls = StyleSheet.create({
	tab: {
		height: 60,
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'transparent',
		flexDirection: 'row',
		alignItems: 'center'
	},
	activeTab: {
		height: 60,
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'transparent',
		flexDirection: 'row',
		alignItems: 'center'
	},
	tabButton: {
		height: 40,
		width: 40,
		borderRadius: 20
	},
	activeTabButton: {
		borderRadius: 10,
		// height: 40,
		padding:10,
		// paddingHorizontal: 8,
		backgroundColor: c.white,
		flexDirection: 'row',
		alignContent: 'center',
		alignItems: 'center'
	},
	tabText: {
		color: c.white
	},
	activeTabText: {
		color: c.black,
		marginLeft: 6,
		textTransform: 'uppercase',
		fontFamily:fontFamily.medium,
		fontSize: 12
	},
	tabIcon: {
		width: 20,
		height: 20,
		// alignSelf: 'center',
		marginTop: 8,
		resizeMode:'center'
	},
	activeTabIcon: {
		// alignSelf: 'center',
		width: 16,
		height: 16,
		resizeMode:'contain'
	},
	tabsBox: {
		flexDirection: 'row',
		borderTopColor: c.gray,
		borderTopWidth: 1,
		overflow: 'hidden',
		backgroundColor: c.btnColor
	}
})