import { Button } from "@/components/ui/button";
import { trpc } from "@/trpc/server";
import React from "react";

const HomePage = async () => {
  const data = await trpc.users.getUsers();

  return <div>{JSON.stringify(data)} <Button>Click me</Button></div>;
};

export default HomePage;
