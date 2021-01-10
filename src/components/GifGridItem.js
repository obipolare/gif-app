import React from "react";

const GifGridItem = ({ title, url }) => {
  return (
    <article className="card vov fade-in-down">
      <figure className="figure ">
        <img className="figure__img" src={url} alt={title} />
      </figure>
      <p className="card_p">{title}</p>
    </article>
  );
};

export default GifGridItem;
