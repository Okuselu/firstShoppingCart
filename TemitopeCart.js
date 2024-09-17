// Define the Items:

// Create an array of objects representing items in the shopping cart. Each object should have the following properties:
// name (string)
// price (number)
// quantity (number)

const cart = [
    {name: "Cornflakes", price: 5000.0, quantity: 10 },
    {name: "Jack Daniels", price: 13000.0, quantity: 4 },
    {name: "Partfait", price: 2000.0, quantity: 3 },

];


// Calculate Subtotal:
// Write a function calculateSubtotal that takes the array of items as an argument and returns the subtotal (sum of the price of each item multiplied by its quantity).

    function calculateSubTotal(arrayOfItems) {

        let subTotal = 0;

        for (i=0; i<= arrayOfItems.length - 1; i++) {

           subTotal = subTotal + arrayOfItems.price[i] * arrayOfItems.quantity[i] ;

        }
           return subTotal;
    }


// Apply Discount:
// Write a function applyDiscount that takes the subtotal and a discount percentage as arguments. It should return the subtotal after applying the discount.

    function applyDiscount(subTotal, discount) {
        return subTotal - (discount / 100) * subTotal;
    }



// Calculate Tax:
// Write a function calculateTax that takes the discounted total and a tax rate as arguments. It should return the total after applying tax.

    function calculateTax(discountedTotal, taxRate) {

        return discountedTotal + taxRate/100 * discountedTotal;
    }


// Calculate Final Total:

// Write a function calculateTotal that combines the previous functions to calculate the final total cost of the shopping cart.


    function calculateTotal (items, discount, tax) {

        let subTotal = calculateSubTotal(items)
        let discountedTotal = applyDiscount(subTotal, discount)
        let taxedTotal = calculateTax(discountedTotal, tax)

        return taxedTotal
    }




// Test the Functions:
// Test your code with different items, discounts, and tax rates to verify that your functions work correctly.
    

    calculateTotal(cart, 10, 7);


