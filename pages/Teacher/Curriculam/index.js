import TeacherNavBar from "@/components/TeacherNavBar";
import React from "react";

import { Checkbox, Table } from "flowbite-react";
const index = () => {
  return (
    <>
      <TeacherNavBar />
      <div className="flex min-h-screen flex-row gap-5 items-baseline justify-center p-24 ">
        <div className="w-full">
        <h1 className=" w-full text-center text-3xl font-semibold p-10">
            Curriculam
        </h1>
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>S.No.</Table.HeadCell>
              <Table.HeadCell>Topic</Table.HeadCell>
              <Table.HeadCell>Duration</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell className="p-4">Completed</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>1.</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Physics
                </Table.Cell>
                <Table.Cell>20hrs</Table.Cell>
                <Table.Cell>Science</Table.Cell>
                <Table.Cell className="p-4">
                  <Checkbox />
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>2.</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Physics
                </Table.Cell>
                <Table.Cell>20hrs</Table.Cell>
                <Table.Cell>Science</Table.Cell>
                <Table.Cell className="p-4">
                  <Checkbox />
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>3.</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Physics
                </Table.Cell>
                <Table.Cell>20hrs</Table.Cell>
                <Table.Cell>Science</Table.Cell>
                <Table.Cell className="p-4">
                  <Checkbox />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </>
  );
};

export default index;
