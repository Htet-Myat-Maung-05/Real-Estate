import {View, Text, ScrollView, Image, TouchableOpacity, Platform, ImageSourcePropType} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import icons from "@/constants/icons";
import images from "@/constants/images";
import {settings} from "@/constants/data";
import {router} from "expo-router";

interface SettingsItemProps {
    icon: ImageSourcePropType;
    title: string;
    onPress?: () => void;
    textStyle?: string;
    showArrow?: boolean
}

const SettingItems = ({icon, title, onPress, textStyle = "", showArrow = true}: SettingsItemProps) => (
    <TouchableOpacity className="flex flex-row justify-between items-center py-3">
        <View className="flex flex-row items-center gap-3">
            <Image source={icon} className="size-6"/>
            <Text className="font-rubik-medium text-lg text-black-300">{title}</Text>
        </View>
        {showArrow && <Image source={icons.rightArrow} className="size-5"/>}
    </TouchableOpacity>
)

const Profile = () => {
    const handleLogout = async () => {
        router.replace("/sign-in")
    }

    return (
        <SafeAreaView className="h-full bg-white">
            <ScrollView showsVerticalScrollIndicator={false}
                        contentContainerClassName="pb-32 px-7">
                <View className="flex flex-row items-center justify-between mt-5">
                    <Text className="text-xl font-rubik-bold">Profile</Text>
                    <Image source={icons.bell} className="size-5"/>
                </View>

                <View className="flex-row justify-center flex mt-5">
                    <View className="flex flex-col items-center relative mt-5">
                        <Image source={images.avatar} className="size-44"/>
                        <TouchableOpacity className={`absolute bottom-11 ${
                            Platform.OS === "ios" ? "right-9" : "right-2"
                        }`}>
                            <Image source={icons.edit} className="size-9"/>
                        </TouchableOpacity>
                        <Text className="font-rubik-bold text-2xl mt-2">HTET MYAT MAUNG</Text>
                    </View>
                </View>
                <View className="flex flex-col mt-10">
                    <SettingItems icon={icons.calendar} title="My Bookings"/>
                    <SettingItems icon={icons.wallet} title="My Wallet"/>
                </View>
                <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
                    {settings.slice(2).map((item, index) => (
                        <SettingItems key={index} {...item}/>
                    ))}
                </View>

                <View className="mt-5 border-t pt-5 border-primary-200 ">
                    <TouchableOpacity className="flex flex-row gap-3 items-center " onPress={handleLogout}>
                        <Image source={icons.logout} className="size-6"/>
                        <Text className="font-rubik-medium text-lg text-red-500">Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Profile
