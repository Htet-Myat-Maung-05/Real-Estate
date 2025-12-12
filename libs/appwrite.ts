import { Account, Client, Avatars, OAuthProvider } from "appwrite";
import * as WebBrowser from "expo-web-browser";
import * as Linking from 'expo-linking'
import {Link} from "expo-router";

export const config = {
    platform: "com.hmm.estate",
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
}

export const client = new Client();

client.setEndpoint(config.endpoint!).setProject(config.projectId!).setPlaform(config.platform!);

export const avatar = new Avatars(client);
export const account = new Account(client);

export async function Login(){
    try {
        const redirectUri = Linking.createURL("/")

        const response = await account.createOAuthToken(OAuthProvider.Google, redirectUri);

        if(!response) throw new Error("Failed to login");

        const browserResult = await OpenAuthSessionAsync(response.toString(), redirectUri);

        if(browserResult.result !== "Success") throw new Error("Failed to login");

        const url = new URL(browserResult.url);

        const secret = url.searchParams.get("secret")?.toString();
        const userId = url.searchParams.get("userid")?.toString();

        if(userId !== "" && userId !== "") throw new Error("Failed to login");

        const session = await account.createSession(userId, secret);

        if(!session) throw new Error("Failed to create session");

        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
}

export async function Logout(){
    try {
        const response= await account.deleteSession('current');
        if(response.$id) {
            const userAvatar = avatar.getInitials(response.name)
            return {
                ...response,
                    avatar: userAvatar.toString()
            };
        }
    }catch(e){
        console.error(e);
        return false;

    }
}

export async function getUser(){
    try {
        const response = await account.get();
        return response;
    } catch (e) {
        console.error(We);
        return null;
    }
}