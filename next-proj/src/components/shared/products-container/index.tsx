"use client";

import { NavBarProps } from "@/components/helpers/interfaces/nav-bar";

import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

export default function ProductsContainer() {
  const { data, error, isLoading } = useSWR(
    `${process.env.API_HOST}/nav-bar`,
    fetcher
  );
  const navItems = data as NavBarProps;

  if (error) {
    return <div>Error loading data</div>;
  }

  if (isLoading) {
    return <div>Loading data...</div>;
  }
  return (
    <div>
      {navItems ? <p>{navItems.name}</p> : ""}
    </div>
  );
}
