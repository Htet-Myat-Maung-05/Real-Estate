import {View, Text, ScrollView, Image, TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import {Redirect, router} from "expo-router";

const SignIn = () => {
    const handleLogin = async () => {
        router.replace("/(root)/(tabs)")
    }

    return (
        <SafeAreaView className={"h-full bg-white"}>
            <ScrollView contentContainerClassName={"h-full"}>
                <Image source={images.onboarding} resizeMode="contain" className={"w-full h-4/6"}/>
                <View className={"px-10"}>
                    <Text className={"text-base text-center uppercase font-rubik text-black-200"}>Welcome to
                        Estate</Text>
                    <Text className={"text-3xl text-center mt-2 font-rubik-bold text-black-300"}>
                        Let Get You Closer To {"\n"}
                        <Text className="text-primary-300">
                            Your Ideal Home
                        </Text>
                    </Text>
                    <Text className={"text-lg font-rubik text-black-200 text-center mt-12"}>
                        Login Estate With Google
                    </Text>
                    <TouchableOpacity onPress={handleLogin}
                                      className={"bg-white rounded-full shadow-md shadow-zinc-300 w-full py-4 mt-5 elevation-2xl"}>
                        <View className={"flex flex-row items-center justify-center"}>
                            <Image source={icons.google} className={"w-5 h-5"} resizeMode="contain"/>
                            <Text className={"text-lg font-rubik-medium text-black-20 ml-2"}>Continue With Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SignIn
