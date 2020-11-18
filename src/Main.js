import React, { useState } from "react";
import Button from "./Button";
import Line from "./Line";
import NewStudent from "./NewStudent";
import TableHead from "./TableHead";

const Main = ({ backTo }) => {
  const [addNewStudent, setAddNewStudent] = useState(false);
  const students = [
    {
      id: "1",
      name: "Donald Trump",
      class: "West Midlands 1",
      photos: true,
      githubId: "DTrump",
      laptop: { os: "Windows", ram: "16 Gb", webCam: true },
    },
    {
      id: "2",
      name: "Joe Biden",
      class: "West Midlands 1",
      photos: false,
      githubId: "JellyFish",
      laptop: { os: "Linux", ram: "8 Gb", webCam: false },
    },
    {
      id: "3",
      name: "Boris Johnson",
      class: "West Midlands 1",
      photos: true,
      githubId: "HereIsBoris",
      laptop: { os: "iMac", ram: "32 Gb", webCam: true },
    },
  ];
  const addNew = () => {
    setAddNewStudent(!addNewStudent);
  };

  return (
    <div className="container">
      {addNewStudent && <NewStudent addNew={addNew} />}

      {!addNewStudent && (
        <div className="btn-add">
          <Button addNew={addNew} btnName="Add new" />
          <br />
          <Button addNew={backTo} btnName="Back" />
        </div>
      )}
      <table className="table">
        <TableHead />
        {students.map((item, ind) => (
          <Line item={item} key={ind} ind={ind} />
        ))}
      </table>
    </div>
  );
};

export default Main;
