import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import ListingEditScreen from "../screens/ListingEdit.screen";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
import expoPushTokenApi from "../api/expoPushToken";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  // const registerForPushNotifications = async () => {
  //   try {
  //     const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  //     if (!permission.granted) return;

  //     const token = await Notifications.getExpoPushTokenAsync();
  //     expoPushTokenApi.register(token);
  //   } catch (error) {
  //     console.log("Error getting push token", error);
  //   }
  // };

  // useEffect(() => {
  //   registerForPushNotifications();
  // }, []);

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
