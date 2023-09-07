import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

//Screens
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Homepage from './screens/Homepage';
import YourRecipes from './screens/YourRecipes';
import AddRecipe from './screens/AddRecipe';
import RecipeInfo from './screens/RecipeInfo';
import EditYourRecipe from './screens/EditYourRecipe';
import Profile from './screens/Profile';
import EditProfile from './screens/EditProfile';
import SearchPage from './screens/SearchPage';

//Screen Name
// const WelcomePage = "Welcome";
// const loginPage = "Login";
// const signUpPage = "SignUp";
const homeName = "Home";
const yourRecipesName = "Your Recipes";
const addRecipeName = "Add Recipe";
// const recipeInfoName = "Recipe Info";
// const editYourRecipeName = "Edit Your Recipe";
// const profileName = "Profile";
// const editProfileName = "Edit Profile";
// const searchRecipeName = "Search Recipe";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={LoginStackScreen} />
        <Stack.Screen name="HomeScreen" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigator() {
  return (
  <Tab.Navigator screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      let routeName = route.name;
      if (routeName === homeName) {
        iconName = focused ? 'home' : 'home-outline';
        size = 35;
      }
      else if (routeName === yourRecipesName) {
        iconName = focused ? 'albums' : 'albums-outline';
        size = 35;
      }
      else if (routeName === addRecipeName) {
        iconName = 'add-circle';
        color = '#FFD74A';
        size = 50;
      }

      return <Icon name={iconName} size={size} color={color} />
    },
    headerShown: false,
    tabBarStyle: {
      height: 75,
      borderTopWidth: 0,
    },
    tabBarLabelStyle: {
      fontSize: 14,
      marginBottom: 5,
    },
  })}>

    <Tab.Screen name={homeName} component={HomeStackScreen} />
    <Tab.Screen name={addRecipeName} component={AddRecipe} />
    <Tab.Screen name={yourRecipesName} component={YourRecipesStackScreen} />
  </Tab.Navigator>
  );
}

function LoginStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

function HomeStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomePage" component={Homepage} />
      <Stack.Screen name="Recipe Info" component={RecipeInfo} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Edit Profile" component={EditProfile} />
      <Stack.Screen name="Search Recipe" component={SearchPage} />
    </Stack.Navigator>
  );
}

function YourRecipesStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="YourRecipes" component={YourRecipes} />
      <Stack.Screen name="Edit Your Recipe" component={EditYourRecipe} />
    </Stack.Navigator>
  );
}

