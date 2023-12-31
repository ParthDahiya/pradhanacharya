"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
const TeacherNavBar = () => {
  return (
    <Navbar fluid rounded className="absolute w-full">
      <Navbar.Brand href="/">
        <img alt="Logo" className="mr-3 h-6 sm:h-9" src="/favicon.svg" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Pradhanacharaya
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Teacher Name</span>
            <span className="block truncate text-sm font-medium">
              Teacher ID
            </span>
          </Dropdown.Header>
          {/* <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider /> */}
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="/Teacher/Curriculam">Curriculam</Navbar.Link>
        <Navbar.Link href="/Teacher/Students">Students</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TeacherNavBar;
