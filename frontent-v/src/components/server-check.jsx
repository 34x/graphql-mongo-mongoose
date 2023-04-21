import React from "react";

import { useQuery, gql } from "@apollo/client";

const GET_BOOKS = gql`
	query GetBooks {
		books {
			title
			author
		}
	}
`;

function ServerCheck() {
	const { loading, error, data } = useQuery(GET_BOOKS);

	return (
		<div>
			{loading && <p>Loading server data...</p>}
			{error && <p>Server data loading error: {error.message}</p>}

			{data && (
				<p>
					Server check passed, here you can see some data:
					<br />
					{data.books.map((b) => b.title).join(", ")}
				</p>
			)}
		</div>
	);
}

export default ServerCheck;
