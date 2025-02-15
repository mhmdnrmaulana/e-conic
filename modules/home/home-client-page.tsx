"use client";
import { auth } from "@/common/libs/auth";
import { redirect } from "next/navigation";

type Props = {
  params: { locale: string };
};

export default async function HomeClientPage({ params }: Props) {
  const session = await auth();
  if (!session) {
    redirect(`/${params.locale}/sign-in`);
  }
  return (
    <div className="mt-28">
      <h1>home</h1>
    </div>
  );
}
