import React, { useEffect, useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Main from "../pages/user/Main";
import Notes from "../pages/notes/";
import Cafes from "../pages/cafe/";
import Logout from "../pages/user/Logout";

const Tabs = createBottomTabNavigator();
//props에는 navigator 말고도 route가 있는데 우리가 어디에 있는지 알 수 있게 해준다.
//tabsnavigator에서 stack.navigator의 title을 바꿀수 잇다는 의미
const getHeaderName = (route) =>
  //?는 optional chaining이다. 만약 route라면, 만약 state라면, 이라는뜻
  route?.state?.routeNames[route.state.index] || "Main";

export default ({ navigation, route }) => {
  //layout변경이 다 끝난다음 실행된다.
  useLayoutEffect(() => {
    const name = getHeaderName(route);
    navigation.setOptions({
      title: name,
    });
  }, [route]);

  return (
    //component를 지정하면 자동으로 import된다.
    <Tabs.Navigator>
      <Tabs.Screen
        options={{
          tabBarLabel: "Main",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        name="Main"
        component={Main}
      />
      <Tabs.Screen
        options={{
          tabBarLabel: "Cafelist",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="tag" color={color} size={size} />
          ),
        }}
        name="Regionlist"
        component={Cafes}
      />
      <Tabs.Screen
        options={{
          tabBarLabel: "Notelist",
          title: "원두 리스트",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="notebook" color={color} size={size} />
          ),
        }}
        name="Notelist"
        component={Notes}
      />
      <Tabs.Screen
        options={{
          tabBarLabel: "Logout",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="export" color={color} size={size} />
          ),
        }}
        name="Logout"
        component={Logout}
      />
    </Tabs.Navigator>
  );
};
