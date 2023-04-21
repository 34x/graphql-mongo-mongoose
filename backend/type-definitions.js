// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export default `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Category {
    id: String
    name: String
    slug: String
  }

  input CategoryInput {
    name: String
  }

  type Item {
    name: String
    categoryId: String
  }

  type ShoppingCartItem {
    itemId: String
    count: Int
  }

  type ShoppingCart {
    id: String
    items: [ShoppingCartItem]
  }

  input ItemInput {
    name: String
  }

  type Query {
    categories: [Category]
    getItems(categorySlug: String, page: Int): [Item]
    getShoppingCart: ShoppingCart
  }

  type Mutation {
    shoppingCartAddItem(itemId: String, count: Int): ShoppingCart
    shoppingCartRemoveItem(itemId: String, count: Int): ShoppingCart
    buy: ShoppingCart
  }
`;
