import { model, Schema, ObjectId } from "mongoose";

const CategorySchema = new Schema({
	name: String,
	slug: String,
});

export const Category = model("Category", CategorySchema);

const ItemSchema = new Schema({
	name: String,
	categoryId: ObjectId,
});

export const Item = model("Item", ItemSchema);

const ShoppingCartItemSchema = new Schema({
	itemId: ObjectId,
	count: Number,
});

const ShoppingCartSchema = new Schema({
	items: [ShoppingCartItemSchema],
});
export const ShoppingCart = model("ShoppingCart", ShoppingCartSchema);
