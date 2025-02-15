"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { DiGithub } from "react-icons/di";

export default function GithubSignIn() {
  return (
    <button
      onClick={() => signIn("github")}
      className="bg-gray-500 max-w-max text-white flex gap-10"
    >
      <DiGithub size={24} />
      SignIn with github
    </button>
  );
}
