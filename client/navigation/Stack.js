import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Notelist from "../pages/notes/Notelist";
import Noteinfo from "../pages/notes/Noteinfo";
import Modifynote from "../pages/notes/Modifynote";
import Signin from "../pages/user/Signin";
import Signup from "../pages/user/Signup";
import Main from "../pages/user/Main";
import Tabs from "./Tabs";
import UserInfo from "../pages/user/UserInfo";
import Addnote from "../pages/notes/Addnote";
import Regionlist from "../pages/cafe/Regionlist";
import Region from "../pages/cafe/Region";
import Cafeinfo from "../pages/cafe/Cafeinfo";
import Addreview from "../pages/cafe/Addreview";
import addcafeScreen from "../pages/cafe/Addcafe";
import Addcafe from "../pages/cafe/Addcafe";
import Bookmark from "../pages/cafe/Bookmark";

const Stack = createStackNavigator();

export default function Stacks() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {},
        headerTintColor: "#fff",
        headerBackTitleVisible: false,
        headerShown: false,
      }}
    >
      <Stack.Screen name="UserInfo" component={UserInfo} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Tab" component={Tabs} />
      {/* 
    
    <Stack.Screen name="Regionlist" component={Regionlist} />
    <Stack.Screen name="Region" component={Region} />
    <Stack.Screen name="Cafeinfo" component={Cafeinfo} />
    <Stack.Screen name="Addreview" component={Addreview} />
    <Stack.Screen name="addcafeScreen" component={addcafeScreen} />
    <Stack.Screen name="Addcafe" component={Addcafe} />
    <Stack.Screen name="Bookmark" component={Bookmark} /> */}
    </Stack.Navigator>
  );
}
//screen은 컴포넌트가 필요하다. 꼭 이름을 주어야한다.
//Stack.Navigator가 항상 하위 Stack.Screen에게 prop(navigation)을 준다.
//Navigator의 모든 screen 들은 navigation이란 prop에 접근권을 가지고 있다.
//component는 불려지고 screen은 props를 보낸다.
//stack안에 tabs들이 있도록 해주었다.
//screenOptions는 모든 screen에 대한 style을 정할 수있다.
