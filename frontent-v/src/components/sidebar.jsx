import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const GET_CATEGORIES = gql`
	query getCategories {
		categories {
			id
			name
			slug
		}
	}
`;

const CategoryLink = ({ name, slug }) => {
	return (
		<Link to={`/${slug}`} className="ps-4 py-4">
			{name}
		</Link>
	);
};

const Data = () => {
	const { loading, error, data } = useQuery(GET_CATEGORIES);

	if (loading) {
		return <div>Loading categories</div>;
	}

	if (error) {
		return <div>Loading categories error: {error}</div>;
	}

	return (
		<div className="flex flex-col">
			{data.categories.map((c) => (
				<CategoryLink
					key={c.id}
					id={c.id}
					name={c.name}
					slug={c.slug}
				/>
			))}
		</div>
	);
};

export default () => {
	return (
		<div className="bg-gray-300 h-100 h-screen">
			<Data />
		</div>
	);
};
