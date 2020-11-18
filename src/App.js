//import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Button from "./Button";
import Main from "./Main";

function App() {
  const [page, setPage] = useState(1);

  const changePage = (val) => {
    setPage(val);
  };

  const backTo = () => {
    setPage(0);
  };

  return (
    <div className="App">
      <nav>
        <Button addNew={changePage} btnName="Students" pageNumber={1} />
        <Button addNew={changePage} btnName="Attendance" pageNumber={2} />
        <Button addNew={changePage} btnName="EDU Homework" pageNumber={3} />
        <Button addNew={changePage} btnName="PD Skills" pageNumber={4} />
      </nav>
      {page === 1 && <Main backTo={backTo} />}
    </div>
  );
}

export default App;
