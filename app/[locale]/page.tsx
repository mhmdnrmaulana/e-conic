import { auth } from "@/common/libs/auth";
import LayoutsPage from "@/components/layouts";
import Layout from "@/components/layouts";
import Navbar from "@/components/layouts/navbar";
import Topbar from "@/components/layouts/topbar";
import { routing } from "@/i18n/routing";
import { div } from "framer-motion/client";
import { redirect } from "next/navigation";

type Props = {
  params: { locale: string };
};

export default async function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  // const { locale } = await params;
  // console.log(locale);
  // const session = await auth();
  // if (!session) {
  //   redirect(`/${locale}/sign-in`);
  // }
  return (
    <>
      <LayoutsPage>
        <h1>Home Page</h1>
      </LayoutsPage>
    </>
  );
}
