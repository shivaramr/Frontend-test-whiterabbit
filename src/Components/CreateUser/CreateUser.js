import React from "react";
import TopNav from "../TopNav/TopNav";
import CreateForm from "./Form/CreateForm";

function CreateUser() {
  return (
    <div>
      <TopNav />
      Here you create a new user!
      <CreateForm />
    </div>
  );
}

export default CreateUser;
