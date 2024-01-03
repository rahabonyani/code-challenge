"use client";
import { VStack } from "@chakra-ui/react";
import Header from "../common/header";
import AddOrEditUserModal from "../common/addOrEditUserModal";
import DataTable from "@/components/molecules/tables";
import { userHeadTable } from "@/constants/headTable";
import { userBodyTable } from "@/constants/bodyTable";
import { useGetWebsiteBlogs } from "@/api/queries/users";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/core/ReduxProvider/store";
import { save } from "@/actions/users";
import { useEffect } from "react";

const Users = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetWebsiteBlogs();
  const users = useSelector((state: RootState) => state.users.users);

  useEffect(() => {
    if (data) {
      dispatch(save(data));
    }
  }, [data]);

  return (
    <VStack>
      <Header title="Users">
        <AddOrEditUserModal />
      </Header>
      <DataTable
        headData={userHeadTable}
        bodyData={users}
        isLoading={isLoading}
      />
    </VStack>
  );
};

export default Users;
