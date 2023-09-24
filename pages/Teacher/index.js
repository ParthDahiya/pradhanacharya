import { Button } from "flowbite-react";
import TeacherNavBar from "@/components/TeacherNavBar";
import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <>
      <TeacherNavBar />
      <div className="flex min-h-screen flex-row gap-5 items-center justify-center p-24 ">
        {/* <Button gradientDuoTone="cyanToBlue" outline>
          <p>View Curriculum</p>
        </Button>
        <Button gradientDuoTone="cyanToBlue" outline>
          <p>View Students</p>
        </Button> */}

        <section class="text-gray-700 body-font overflow-hidden bg-white">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
              />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-sm title-font text-gray-500 tracking-widest">
                  TRIBE NAME
                </h2>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                  Teacher Name
                </h1>

                <p class="leading-relaxed">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <div class="flex border-t-2 pt-5 mt-5">
                  
                  <Link href="/Teacher/Curriculam" >
                    <Button gradientDuoTone="cyanToBlue" outline>
                      <p>View Curriculam</p>
                    </Button>
                  </Link>
                  <Link href="/Teacher/Students" className="ml-auto">
                    <Button gradientDuoTone="cyanToBlue" outline>
                      <p>View Students</p>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
