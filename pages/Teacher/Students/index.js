import TeacherNavBar from "@/components/TeacherNavBar";
import fetchPokemon from "@/pages/api/hello";
import axios from "axios";
import { Button, Checkbox, Table } from "flowbite-react";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";

const index = () => {
  const [pokemon, setPokemon] = useState();


  // useEffect(() => {
  //   const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
  //   axios
  //     .get(url)
  //     .then((response) => {
  //       setPokemon(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((err) => {
  //       console.log("====================================");
  //       console.log(err);
  //       console.log("====================================");
  //     });
  // }, []);

  useEffect(() => {
    // Make a GET request to your API route
    axios.get('/api/hello')
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <TeacherNavBar />
      <div className="flex min-h-screen flex-row gap-5 items-baseline justify-center p-24 bg-zinc-200">
        <div className="w-full">
          <h1 className=" w-full text-center text-3xl font-semibold p-10">
            {pokemon?.name}
          </h1>
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>S.No.</Table.HeadCell>
              <Table.HeadCell>Student</Table.HeadCell>
              <Table.HeadCell>Mark Attendence</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>1.</Table.Cell>
                <Table.Cell className=" font-medium text-gray-900 dark:text-white ">
                  <Card
                    horizontal
                    imgSrc="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                    className="w-full"
                  >
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Name: Student Name
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 w-full">
                      Age: 12
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400 w-full">
                      Date of birth: 12-12-1212
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400 w-full">
                      Attendence Record: 12/12
                    </p>
                  </Card>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    className="h-full"
                    gradientDuoTone="cyanToBlue"
                    outline
                  >
                    <p>Click to mark Attendence</p>
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>2.</Table.Cell>
                <Table.Cell className=" font-medium text-gray-900 dark:text-white ">
                  <Card
                    horizontal
                    imgSrc="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                    className="w-full"
                  >
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Name: Student Name
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 w-full">
                      Age: 30
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400 w-full">
                      Date of birth: 30-03-5482
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400 w-full">
                      Attendence Record: 12/12
                    </p>
                  </Card>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    className="h-full"
                    gradientDuoTone="cyanToBlue"
                    outline
                  >
                    <p>Click to mark Attendence</p>
                  </Button>
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
