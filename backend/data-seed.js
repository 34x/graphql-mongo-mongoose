import { Category, Item } from "./schemas.js";
import dataItems from "./data-items.js";

export default async () => {
	// await Category.deleteMany();
	// await Item.deleteMany();

	const categories = await seedCategories();
};

const seedCategories = async () => {
	const categories = await Category.find();
	if (categories.length > 0) {
		return;
	}
	console.log("Seeding categories");

	for (const category of dataItems) {
		const createdCategory = await new Category({
			name: category.name,
			slug: category.name.toLowerCase(),
		}).save();
		await Item.insertMany(
			category.items
				.filter((itemName) => itemName.trim()) // filter empty strings
				.map((itemName) => ({
					categoryId: createdCategory._id,
					name: itemName,
				}))
		);
	}

	return await Category.find();
};
