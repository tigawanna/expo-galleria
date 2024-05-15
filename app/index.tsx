import { Link } from "expo-router";
import { View,Text } from "react-native";

export default function HomeScreen(){
return (
 <View className='w-full h-full flex flex-col items-center justify-center  text-white'>
    <Text className="text-3xl font-bold text-white">Root screen</Text>
    <View  className="text-white">
      <Link className="text-white" href={"/home"}>Home</Link>
      <Link className="text-white" href={"/profile"}>Profile</Link>
    </View>
 </View>
);
}
