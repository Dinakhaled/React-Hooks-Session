import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Home = () => {
  const [counter, setCounter] = useState(0);

  const inputRef = useRef(null);

  return (
    <div className="container my-5">
      <h1>{counter}</h1>
      <Button onClick={() => setCounter((c) => c + 1)} />
      <Link to="aboutus">about</Link>
    </div>
  );
};

export default Home;
