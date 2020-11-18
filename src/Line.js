import React from "react";

const Line = ({ item, ind }) => {
  //   const [selected, setSelected] = useState("");
  //   const selectLine = e =>
  //     !e.target.name && setSelected(selected ? "" : "selected");
  //   const showProfile = () => {
  //     chooseProfile(item.id);
  //   };
  console.log(ind);
  return (
    <tr>
      {/* onClick={selectLine} className={selected}> */}
      <th scope="row">{ind + 1}</th>
      <td>{item.name}</td>
      <td>{item.class}</td>
      <td>{item.photos && "yes"}</td>
      <td>{item.githubId}</td>
      {/* <td>{item.roomId}</td>
      <td>{item.checkInDate}</td>
      <td>{item.checkOutDate}</td>
      <td>
        {Moment(item.checkOutDate).diff(Moment(item.checkInDate), "days")}
      </td>
      <td>
        <button name="rowBtn" className="btn btn-primary" onClick={showProfile}>
          Show profile
        </button>
      </td> */}
    </tr>
  );
};

export default Line;
