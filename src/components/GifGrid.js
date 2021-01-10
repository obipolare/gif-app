import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  return (
    <section className="card-grid">
      <h3 className="card--one vov fade-in-left">{category}</h3>
      {loading && <p className="vov flash">Loading</p>}
      {data.map((el) => {
        return <GifGridItem key={el.id} {...el} />;
      })}
    </section>
  );
};

export default GifGrid;
