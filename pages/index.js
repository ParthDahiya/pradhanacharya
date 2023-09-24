"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import TeacherNavBar from "@/components/TeacherNavBar";

export default function Home() {
  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-center p-24 `}
      >
        <div >
          <form className="flex max-w-md flex-col gap-4">
            <div>
              <h1 className="text-lg font-bold" >
                  Enter your details to login
              </h1>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                required
                type="email"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput id="password1" required type="password" />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button gradientDuoTone="cyanToBlue" type="submit">Submit</Button>
          </form>
        </div>
      </main>
    </>
  );
}
