"use client";
import { FC, useState, useCallback, memo } from "react";
import { Button } from "react-bootstrap";

const Container = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    console.log("button is clicked!");
    setCounter((counter) => counter + 1);
  };

  console.log("render container");

  return (
    <div className="flex flex-col min-h-screen min-w-max items-center justify-center">
      <Title title="Ini judul" />
      <Button onClick={increment}>Increment counter</Button>
      <Counter counter={counter} />
    </div>
  );
};

const Title: FC<{ title: string }> = ({ title }) => {
  console.log("render title");
  return <p>{title}</p>;
};

const Counter: FC<{ counter: number }> = ({ counter }) => {
  console.log("render counter");
  return <p>{counter}</p>;
};

export default Container;
