import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { Link, router } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSignUp } from '@clerk/clerk-expo'
import { icons, images } from "@/constants";
import { Modal } from "react-native";

const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp()
  const [showSuccessModal, setShowSuccessModal] = useState(false);


const [form ,setForm] = useState( {
  name:"",
  email:"",
  password:"",
});

const [verification, setVerification]  = useState({
state: "default",
eror: "",
code: "",
});




const onSignUpPress = async () => {
  if (!isLoaded) {
    return
  }

  try {
    await signUp.create({
      emailAddress: form.email,
      password: form.password,
    })

    await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

    setVerification({
      ...verification,

      state: 'pending'
    })
  } catch (err: any) {
  Alert.alert('Error', err.errors[0].longMessage);
  }
}

const onPressVerify = async () => {
  if (!isLoaded) {
    return
  }

  try {
    const completeSignUp = await signUp.attemptEmailAddressVerification({
      code: verification.code,
    })

    if (completeSignUp.status === 'complete') {
      await setActive({ session: completeSignUp.createdSessionId })
      setVerification({...verification, state: "succes"});
    } else {
      setVerification({...verification, eror:"Verification failed.",
        state: "failed",
      });
    }
  } catch (err: any) {
    setVerification({
      ...verification,
      eror: err.errors[0].longMessage,
      state: "failed",
    });
  }
}


  return (
    <ScrollView  className="flex-1 bg-white ">
      <View className="flex-1 bg-white">
    <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">Create Your Account</Text>
      </View>

<TouchableOpacity onPress={onSignUpPress} className="p-5">
<InputField
label="Name"
placeholder="Enter Your Name"
value={form.name}
onChangeText= {(value) => setForm({...form,
name: value,
})

}
/>
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

<CustomButton title="Sign Up" onPress={onSignUpPress} className="mt-6"/>

<OAuth/>

</TouchableOpacity>

<Link href="/(auth)/sign-in" className="text-lg text-center text-general-200 mt-10">
<Text>Already have an account?</Text>
<Text className="text-primary-500"> Log In</Text>
</Link>

<Modal
          visible={verification.state === "pending"}
          // onBackdropPress={() =>
          //   setVerification({ ...verification, state: "default" })
          // }
          onRequestClose={() => {
            if (verification.state === "success") {
              setShowSuccessModal(true);
            }
          }}
        >
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Text className="font-JakartaExtraBold text-2xl mb-2">
              Verification
            </Text>
            <Text className="font-Jakarta mb-5">
              We've sent a verification code to {form.email}.
            </Text>
            <InputField
              label={"Code"}
              icon={icons.lock}
              placeholder={"12345"}
              value={verification.code}
              keyboardType="numeric"
              onChangeText={(code) =>
                setVerification({ ...verification, code })
              }
            />
            {verification.eror && (
              <Text className="text-red-500 text-sm mt-1">
                {verification.eror}
              </Text>
            )}
            <CustomButton
              title="Verify Email"
              onPress={onPressVerify}
              className="mt-5 bg-success-500"
            />
          </View>
        </Modal>
        <Modal visible={showSuccessModal}>
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Image
              source={images.check1}
              className="w-[110px] h-[110px] mx-auto my-5"
            />
            <Text className="text-3xl font-JakartaBold text-center">
              Verified
            </Text>
            <Text className="text-base text-gray-400 font-Jakarta text-center mt-2">
              You have successfully verified your account.
            </Text>
            <CustomButton
              title="Browse Home"
              onPress={() => router.push("/(root)/(tabs)/home")}
              className="mt-5"
            />
          </View>
        </Modal>

    </ScrollView>
  );
};



