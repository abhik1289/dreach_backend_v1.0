import Verify from "@/components/page-components/Auth/Verify";
import React from "react";

const page = ({
  searchParams,
}: {
  searchParams: {
    phone: string;
  };
}) => {
  console.log(searchParams.phone);
  return (
    <div>
      <Verify phone={searchParams.phone} />
    </div>
  );
};

export default page;
