   const shoppingList = [
      {produсtName: "Хліб", amount: 1, purchased: true, price: 25, totalPrice:" "},
      {produсtName: "Яйця", amount: 10, purchased: true, price: 6, totalPrice:" "},
      {produсtName: "Молоко", amount: 1, purchased: true, price: 40, totalPrice:" "},
      {produсtName: "М'ясна вирізка", amount: 1, purchased: false, price: 160, totalPrice:" "}
   ];


   const printShoppingList = () => {
      let purchasedList = [];
      let notPurchasedList = [];
   
      for (let i = 0; i < shoppingList.length; i++) {
      let item = shoppingList[i];
   
      item.totalPrice = item.amount * item.price;
   
      if (item.purchased) {
         purchasedList.push(item);
      } else {
         notPurchasedList.push(item);
      }
      }
   
      let sortedList = notPurchasedList.concat(purchasedList);
   
      console.log("Список покупок:");
   
      for (let i = 0; i < sortedList.length; i++) {
      let item = sortedList[i];
   
      console.log(
         `${item.produсtName} - ${item.amount} шт. за ${item.price} грн. за шт. (${item.totalPrice} грн.) ${
            item.purchased ? "ПРИДБАНО" : ""}`
      );
      }
   }
   
   const purchaseItem = (produсtName) => {
      for (let i = 0; i < shoppingList.length; i++) {
      let item = shoppingList[i];
   
      if (item.produсtName === produсtName) {
         item.purchased = true;
         console.log(`Продукт "${produсtName}" придбано.`);
         return;
      }
      }
   
      console.log(`Продукт "${produсtName}" не знайдено у списку.`);
   }
   printShoppingList(shoppingList);
   purchaseItem("М'ясна вирізка");
   purchaseItem("мед");
   purchaseItem("Хліб")
   printShoppingList(shoppingList);