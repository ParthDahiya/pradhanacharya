import AdminNavbar from "@/components/AdminNavbar";
import { Card } from "flowbite-react";
import Link from "next/link";

const index = () => {
  return (
    <>
      <AdminNavbar />
      <div
        className={`flex min-h-screen flex-col items-center justify-center p-24 bg-zinc-200`}
      >
        {" "}
        <h1 className=" w-full text-center text-3xl font-semibold p-10">
          Teachers Information
        </h1>
        <div className="grid grid-cols-4 gap-5">
          <Link href='/Admin/TeachersInfo/StudentsInfo'>
            <Card
              imgAlt="Teacher image"
              imgSrc="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Teacher Name
              </h5>
              <ul className="list-disc pl-10">
                <li>Batch</li>
                <li>Age</li>
                <li>community</li>
              </ul>
            </Card>
          </Link>
          <Link href='/Admin/TeachersInfo/StudentsInfo'>
            <Card
              imgAlt="Teacher image"
              imgSrc="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Teacher Name
              </h5>
              <ul className="list-disc pl-10">
                <li>Batch</li>
                <li>Age</li>
                <li>community</li>
              </ul>
            </Card>
          </Link>
          <Link href='/Admin/TeachersInfo/StudentsInfo'>
            <Card
              imgAlt="Teacher image"
              imgSrc="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Teacher Name
              </h5>
              <ul className="list-disc pl-10">
                <li>Batch</li>
                <li>Age</li>
                <li>community</li>
              </ul>
            </Card>
          </Link>
          <Link href='/Admin/TeachersInfo/StudentsInfo'>
            <Card
              imgAlt="Teacher image"
              imgSrc="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Teacher Name
              </h5>
              <ul className="list-disc pl-10">
                <li>Batch</li>
                <li>Age</li>
                <li>community</li>
              </ul>
            </Card>
          </Link>
          <Link href='/Admin/TeachersInfo/StudentsInfo'>
            <Card
              imgAlt="Teacher image"
              imgSrc="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Teacher Name
              </h5>
              <ul className="list-disc pl-10">
                <li>Batch</li>
                <li>Age</li>
                <li>community</li>
              </ul>
            </Card>
          </Link>
        </div>
      </div>
    </>
  );
};

export default index;
