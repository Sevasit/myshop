import React from "react";
import Card from "./Card";
import useFetch from "@/hooks/useFetch";

const List = ({ selectCat, price }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][price][$lte]=${price}${selectCat.map(
      (item) => `&[filters][categories][id][$eq]=${item}`
    )}`
  );

  return (
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 flex-wrap">
      {error
        ? "Something went wrong"
        : loading
        ? "Loading"
        : data?.map((item) => <Card key={item.id} item={item} />)}
    </div>
  );
};

export default List;
