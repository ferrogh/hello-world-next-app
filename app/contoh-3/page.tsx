"use client";
import { fetchUser } from "@/lib/features/users/userData";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { FC, useEffect, useCallback, memo } from "react";
import { Button } from "react-bootstrap";

const loadUserName = () => "Ferro";

const Container = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-max items-center justify-center">
      <Title title="Selamat Datang" />
    </div>
  );
};

const Title: FC<{ title: string }> = ({ title }) => {
  const dispatch = useAppDispatch();

  const userName = useAppSelector((state) => state.user.userName);
  const isUserLoaded = useAppSelector(
    (state) => state.user.status === "loaded"
  );

  console.log("render title");

  useEffect(() => {
    if (!isUserLoaded) dispatch(fetchUser());
  }, [isUserLoaded]);

  return (
    <p>
      {title} {userName}
    </p>
  );
};
export default Container;
