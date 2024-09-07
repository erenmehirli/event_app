import { Image, Text, View } from "react-native";
import CustomButton from "./CustomButton";
import { icons, images } from "@/constants";

const OAuth = () => {

const handleGoogleSignIn = async () => {};

    return(
    <View>
        <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px] bg-general-100"/>
        <Text className="text-lg">Or</Text>
        <View className="flex-1 h-[1px] bg-general-100"/>

        </View>

  <CustomButton title="Log In With Google" className="mt-5 w-full shadow-none " bgVariant="outline" textVariant="primary"
  onPress={handleGoogleSignIn}
  IconLeft={() => (
    <Image
      source={icons.googleIco}
      resizeMode="contain"
      className="w-5 h-5 mx-2"
    />
  )}
  />

    </View>
    )
};

export default OAuth;