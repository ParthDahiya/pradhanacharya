import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const index = () => {
  return (
    <>
      <div
        className={`flex min-h-screen flex-col items-center justify-center p-24 bg-zinc-200`}
      >
        <div >
          <form className="flex flex-col gap-4">
            <div>
              <h1 className="text-lg font-bold" >
                  Admin Login
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
      </div>
    </>
  )
}

export default index