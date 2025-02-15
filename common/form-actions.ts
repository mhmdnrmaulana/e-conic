"use server";
import { signIn } from "./libs/auth";

export const handleSignIn = async () => {
  await signIn("github");
};
