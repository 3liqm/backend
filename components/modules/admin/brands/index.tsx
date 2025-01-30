"use client";
import React from "react";
import { Brand, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import useSWR, { Fetcher } from "swr";
import axios from "axios";
import Loading from "@/components/custom/Loading";
import { useAuth } from "@clerk/nextjs";

export default function Brands() {
  const { getToken } = useAuth();
  // fecthing client
  const fetcher: Fetcher<Brand[], string> = async (url) => {
    const token = await getToken();
    return await axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data.data)
      .catch((err) => console.log(err))
      .finally(() => {});
  };

  const { data, isLoading } = useSWR<Brand[]>(
    process.env.NEXT_PUBLIC_API_URL + "/api/admin/brands",
    fetcher
  );
  if (isLoading) return <Loading loading={true} />;
  return (
    <DataTable searchKey="name" columns={columns} data={data ? data : []} />
  );
}
