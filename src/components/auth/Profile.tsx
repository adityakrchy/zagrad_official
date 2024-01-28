import React from "react";
import Link from "next/link";
import UserAddresses from "../user/UserAddresses";
import Sidebar from "../layout/Sidebar";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
// import { useSession, signOut } from "next-auth/react";
import { getServerSession } from "next-auth";
import { Options } from "@/app/api/auth/[...nextauth]/route";
const Profile = async () => {
  const session = await getServerSession(Options);


  return (
    <>
      <section className="py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row -mx-4">
            <Sidebar />
            <main className="md:w-2/3 lg:w-3/4 px-4">
              <figure className="flex items-start sm:items-center">
                <div className="relative">
                  {/* <Image
                    className=" rounded-[100%] mr-4"
                    src={"/assets/t1.png"}
                    width={64}
                    height={64}
                    alt={"user name"}
                  /> */}
                  <Avatar className="w-16 h-16 mr-4">
                    <AvatarImage src="/assets/t1.png" alt="avatar" />
                    {/* <AvatarFallback>CN</AvatarFallback> */}
                  </Avatar>
                </div>
                <figcaption>
                  <h5 className="font-semibold text-lg">{session?.user?.name}</h5>
                  <p>
                    <b>Phone:</b> +91-9999999999
                  </p>
                  <p>
                    <b>Email:</b> {session?.user?.email} | <b>Joined On:</b>
                    2023-12-24
                  </p>
                </figcaption>
              </figure>

              <hr className="my-4" />

              <UserAddresses />

              <Link className="bg-indigo-500 px-4 py-2 text-white font-bold rounded-lg" href="/newAddress">
                <button className="px-4 py-2 inline-block ">
                  <p className="mr-1 fa fa-plus "> Add new address</p>
                </button>
              </Link>

              <hr className="my-4" />
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
