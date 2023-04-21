import React, { useState } from "react";

import { useQuery, gql } from "@apollo/client";

const GET_ITEMS = gql`
  query Query($categorySlug: String, $page: Int) {
    getItems(categorySlug: $categorySlug, page: $page) {
      name
    }
  }
`;

const SingleItem = ({ item }) => {
  return <div className="p-1 mx-4">{item.name}</div>;
};

const Items = ({ slug }) => {
  const [page, setPage] = useState(1);
  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page < 2) {
      return;
    }
    setPage(page - 1);
  };

  const { loading, error, data } = useQuery(GET_ITEMS, {
    variables: { categorySlug: slug, page },
  });

  if (loading) {
    return <div>Loading items</div>;
  }

  if (error) {
    return <div>Error loading items: {error}</div>;
  }

  return (
    <div>
      List of {slug}
      <div className="ms-4 my-2 flex flex-row ">
        <div className="bg-gray-100 px-1" onClick={prevPage}>
          Previous page
        </div>
        <div className="mx-4">{page}</div>
        <div className="bg-gray-100 px-1" onClick={nextPage}>
          Next page
        </div>
      </div>
      {data.getItems.map((item) => (
        <SingleItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Items;
