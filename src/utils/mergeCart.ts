import { ICartItem } from "../models/cartModel.js";

export const mergeCartItems = (
  existingItems: ICartItem[],
  newItems: ICartItem[]
): ICartItem[] => {
  const mergedItems = [...existingItems];

  newItems.forEach((newItem) => {
    const index = mergedItems.findIndex(
      (item) => item.productId.toString() === newItem.productId.toString()
    );

    if (index > -1) {
      // Only update amount or size if they exist in the new item
      if (newItem.amount !== undefined) {
        mergedItems[index].amount = newItem.amount;
      }
      if (newItem.size !== undefined) {
        mergedItems[index].size = newItem.size;
      }
    } else {
      mergedItems.push(newItem);
    }
  });

  return mergedItems;
};
