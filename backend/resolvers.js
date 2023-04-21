import { ShoppingCart, Category, Item } from "./schemas.js";

const getCurrentShoppingCart = async () => {
  const cart = await ShoppingCart.findOne();
  if (cart) {
    return cart;
  }

  const newCart = new ShoppingCart({ items: [] });
  await newCart.save();

  return newCart;
};

export default {
  Query: {
    async categories() {
      return await Category.find();
    },
    async getItems(_, { categorySlug, page = 1 }) {
      const cat = await Category.findOne({ slug: categorySlug });
      if (!cat) {
        return [];
      }

      return await Item.find({ categoryId: cat._id })
        .sort({ name: 1 })
        .limit(5)
        .skip((page - 1) * 5);
    },
    async getShoppingCart() {
      return await getCurrentShoppingCart();
    },
  },
  Mutation: {
    async shoppingCartAddItem(_, { itemId, count }) {
      const cart = await getCurrentShoppingCart();

      for (let item in cart.items) {
        if (item.itemId == itemId) {
          item.count += count;
          await cart.save();
          return cart;
        }
      }

      cart.items.push({
        itemId,
        count,
      });

      await cart.save();

      return cart;
    },
  },
};
