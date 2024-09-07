import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { Link } from "expo-router";
import { useCallback, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const SignIn = () => {


const [form ,setForm] = useState( {
  email:"",
  password:"",
})

  




const onSignInPress = async () => {};


  return (
    <ScrollView  className="flex-1 bg-white ">
      <View className="flex-1 bg-white">
    <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">Welcome</Text>
      </View>

<TouchableOpacity onPress={onSignInPress} className="p-5">

<InputField
label="Email"
placeholder="Enter Your Email"
value={form.email}
onChangeText= {(value) => setForm({...form,
email: value,
})

}
/>
<InputField
label="Password"
placeholder="Enter Your Password"
secureTextEntry={true}
value={form.password}
onChangeText= {(value) => setForm({...form,
password: value,
})

}
/>

<CustomButton title="Login" onPress={onSignInPress} className="mt-6"/>

<OAuth/>

</TouchableOpacity>

<Link href="/(auth)/sign-up" className="text-lg text-center text-general-200 mt-10">
<Text>Don't have an accoutn</Text>
<Text className="text-primary-500"> Sign Up</Text>
</Link>
    </ScrollView>
  );
};

export default SignIn;
function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}

