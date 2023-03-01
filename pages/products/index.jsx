import List from "@/components/List";
import React, { useState } from "react";
import useFetch from "@/hooks/useFetch";

const products = () => {
  const [price, setPrice] = useState(500);
  const { data, loading, error } = useFetch(`/categories`);
  const [selectCat, setSelectCat] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectCat(
      isChecked
        ? [...selectCat, value]
        : selectCat.filter((item) => item !== value)
    );
  };

  return (
    <>
      <div className="p-3 flex md:justify-around">
        <div className="h-[400px] sticky top-10 capitalize p-2 rounded-lg shadow-lg">
          <div className="flex flex-col gap-2 mb-2">
            <h2 className=" font-bold text-base">product categories</h2>
            {error
              ? "Something went wrong"
              : loading
              ? "Loading"
              : data?.map((item) => (
                  <div className="flex flex-row gap-2" key={item.id}>
                    <input
                      className="accent-rose-600"
                      type="checkbox"
                      id={item.id}
                      value={item.id}
                      onChange={handleChange}
                    />
                    <label htmlFor={item.id}>{item.attributes.title}</label>
                  </div>
                ))}
          </div>
          <div className="flex flex-col gap-2 mb-2">
            <h2 className=" font-bold text-base">filter by price</h2>
            <input
              className="accent-rose-600"
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setPrice(e.target.value)}
            />
            <span>${price}</span>
          </div>
        </div>
        <div className="mx-3 md:flex md:flex-col w-[1000px]">
          <img
            src="https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="w-[100%] h-[400px]"
          />
          <List selectCat={selectCat} price={price} />
        </div>
      </div>
    </>
  );
};

export default products;
