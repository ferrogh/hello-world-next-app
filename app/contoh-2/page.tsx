"use client";
import { fetchUser } from "@/lib/features/users/userData";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useQuery } from "@tanstack/react-query";
import { FC, useEffect, useCallback, memo } from "react";
import { Button } from "react-bootstrap";

const loadUserName = async () => {
  const response = await new Promise((resolve) =>
    setTimeout(() => resolve("Ferro"), 3000)
  );
  return response as string;
};

const Container = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-max items-center justify-center">
      <Title title="Selamat Datang" />
    </div>
  );
};

const Title: FC<{ title: string }> = ({ title }) => {
  const { data: userName, isSuccess } = useQuery({
    queryKey: ["user"],
    queryFn: loadUserName,
  });

  console.log("render title");

  return (
    <p>
      {title} {!isSuccess ? "default" : userName}
    </p>
  );
};
export default Container;
