import products from './ProductsList.js';

const shop = document.getElementById('shop');

const storeItemsPrice1 = document.getElementById('store-items-price1');
const storeItemsPrice2 = document.getElementById('store-items-price2');
const storeItemsPrice3 = document.getElementById('store-items-price3');
const storeItemsPrice4 = document.getElementById('store-items-price4');
const storeItemsPrice5 = document.getElementById('store-items-price5');
const storeItemsPrice6 = document.getElementById('store-items-price6');

const storeItems1Name = document.getElementById('store-items1-name');
const storeItems2Name = document.getElementById('store-items2-name');
const storeItems3Name = document.getElementById('store-items3-name');
const storeItems4Name = document.getElementById('store-items4-name');
const storeItems5Name = document.getElementById('store-items5-name');
const storeItems6Name = document.getElementById('store-items6-name');

const priceValue1 = document.getElementById('price-value1');
const priceValue2 = document.getElementById('price-value2');
const priceValue3 = document.getElementById('price-value3');
const priceValue4 = document.getElementById('price-value4');
const priceValue5 = document.getElementById('price-value5');
const priceValue6 = document.getElementById('price-value6');


const storeItems1Button = document.getElementById('store-items1-button');
const storeItems2Button = document.getElementById('store-items2-button');
const storeItems3Button = document.getElementById('store-items3-button');
const storeItems4Button = document.getElementById('store-items4-button');
const storeItems5Button = document.getElementById('store-items5-button');
const storeItems6Button = document.getElementById('store-items6-button');


const removeFromCart1 = document.getElementById('remove-from-cart1');
const removeFromCart2 = document.getElementById('remove-from-cart2');
const removeFromCart3 = document.getElementById('remove-from-cart3');
const removeFromCart4 = document.getElementById('remove-from-cart4');
const removeFromCart5 = document.getElementById('remove-from-cart5');
const removeFromCart6 = document.getElementById('remove-from-cart6');

const checkOutDetails = document.getElementById('check-out--details');


const continueShoppingButton = document.getElementById('continue-shopping-button');

const cartIcon = document.getElementById('cart-icon');
const checkOut = document.getElementById('check-out');

const checkOutData1 = document.getElementById('check-out--data1');
const checkOutData2 = document.getElementById('check-out--data2');
const checkOutData3 = document.getElementById('check-out--data3');
const checkOutData4 = document.getElementById('check-out--data4');
const checkOutData5 = document.getElementById('check-out--data5');
const checkOutData6 = document.getElementById('check-out--data6');

const orderSummaryData1 = document.getElementById('order-summary--data1');
const orderSummaryData2 = document.getElementById('order-summary--data2');
const orderSummaryData3 = document.getElementById('order-summary--data3');
const orderSummaryData4 = document.getElementById('order-summary--data4');
const orderSummaryData5 = document.getElementById('order-summary--data5');
const orderSummaryData6 = document.getElementById('order-summary--data6');


const checkOutDataSerialNumber1 = document.getElementById('check-out--data--serial-number1');
const checkOutDataSerialNumber2 = document.getElementById('check-out--data--serial-number2');
const checkOutDataSerialNumber3 = document.getElementById('check-out--data--serial-number3');
const checkOutDataSerialNumber4 = document.getElementById('check-out--data--serial-number4');
const checkOutDataSerialNumber5 = document.getElementById('check-out--data--serial-number5');
const checkOutDataSerialNumber6 = document.getElementById('check-out--data--serial-number6');

const orderSummaryDataSerialNumber1 = document.getElementById('order-summary--data--serial-number1');
const orderSummaryDataSerialNumber2 = document.getElementById('order-summary--data--serial-number2');
const orderSummaryDataSerialNumber3 = document.getElementById('order-summary--data--serial-number3');
const orderSummaryDataSerialNumber4 = document.getElementById('order-summary--data--serial-number4');
const orderSummaryDataSerialNumber5 = document.getElementById('order-summary--data--serial-number5');
const orderSummaryDataSerialNumber6 = document.getElementById('order-summary--data--serial-number6');


const checkOutDataName1 = document.getElementById('check-out--data--name1');
const checkOutDataName2 = document.getElementById('check-out--data--name2');
const checkOutDataName3 = document.getElementById('check-out--data--name3');
const checkOutDataName4 = document.getElementById('check-out--data--name4');
const checkOutDataName5 = document.getElementById('check-out--data--name5');
const checkOutDataName6 = document.getElementById('check-out--data--name6');


const orderSummaryDataName1 = document.getElementById('order-summary--data--name1');
const orderSummaryDataName2 = document.getElementById('order-summary--data--name2');
const orderSummaryDataName3 = document.getElementById('order-summary--data--name3');
const orderSummaryDataName4 = document.getElementById('order-summary--data--name4');
const orderSummaryDataName5 = document.getElementById('order-summary--data--name5');
const orderSummaryDataName6 = document.getElementById('order-summary--data--name6');


const checkOutDataPrice1 = document.getElementById('check-out--data--price1');
const checkOutDataPrice2 = document.getElementById('check-out--data--price2');
const checkOutDataPrice3 = document.getElementById('check-out--data--price3');
const checkOutDataPrice4 = document.getElementById('check-out--data--price4');
const checkOutDataPrice5 = document.getElementById('check-out--data--price5');
const checkOutDataPrice6 = document.getElementById('check-out--data--price6');


const quantityOfItems1 = document.getElementById('quantity-of-items1');
const quantityOfItems2 = document.getElementById('quantity-of-items2');
const quantityOfItems3 = document.getElementById('quantity-of-items3');
const quantityOfItems4 = document.getElementById('quantity-of-items4');
const quantityOfItems5 = document.getElementById('quantity-of-items5');
const quantityOfItems6 = document.getElementById('quantity-of-items6');


const orderSummaryQuantity1 = document.getElementById('order-summary--quantity1');
const orderSummaryQuantity2 = document.getElementById('order-summary--quantity2');
const orderSummaryQuantity3 = document.getElementById('order-summary--quantity3');
const orderSummaryQuantity4 = document.getElementById('order-summary--quantity4');
const orderSummaryQuantity5 = document.getElementById('order-summary--quantity5');
const orderSummaryQuantity6 = document.getElementById('order-summary--quantity6');


const checkOutQuantityChange1 = document.getElementById('check-out--quantity-change1');
const checkOutQuantityChange2 = document.getElementById('check-out--quantity-change2');
const checkOutQuantityChange3 = document.getElementById('check-out--quantity-change3');
const checkOutQuantityChange4 = document.getElementById('check-out--quantity-change4');
const checkOutQuantityChange5 = document.getElementById('check-out--quantity-change5');
const checkOutQuantityChange6 = document.getElementById('check-out--quantity-change6');

const totalPrice = document.getElementById('total-price');

const mainPage = document.getElementById('main-page');


let numberOfSelectedItems = document.getElementById('number-of-selected-items');

const storeItemImages = ['store-item-image1','store-item-image2','store-item-image3','store-item-image4','store-item-image5','store-item-image6'];

const orderSummary = document.getElementById('order-summary');
const summaryButton = document.getElementById('summary-button');

// Class for formatting the price to Nigerian naira with o decimal place
const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0
  });


storeItems1Name.textContent = products[0].name;
storeItems2Name.textContent = products[1].name;
storeItems3Name.textContent = products[2].name;
storeItems4Name.textContent = products[3].name;
storeItems5Name.textContent = products[4].name;
storeItems6Name.textContent = products[5].name;

// Formats the price to Nigerian naira with o decimal place

priceValue1.textContent = formatter.format(products[0].price);
priceValue2.textContent = formatter.format(products[1].price);
priceValue3.textContent = formatter.format(products[2].price);
priceValue4.textContent = formatter.format(products[3].price);
priceValue5.textContent = formatter.format(products[4].price);
priceValue6.textContent = formatter.format(products[5].price);

// Event Listeners
shop.addEventListener('mouseover', hoverOnProduct);
shop.addEventListener('mouseout', hoverOutOfProduct);
shop.addEventListener('click', inputOrRemoveDataFromCart);
shop.addEventListener('click', increaseNumberOfItemsInTheCart);
cartIcon.addEventListener('click', displayCheckOut);
checkOut.addEventListener('click', removeCheckOutModalFromThePage);
continueShoppingButton.addEventListener('click', continueShopping);

checkOutQuantityChange1.addEventListener('click', changeQuantityOfItems1);
checkOutQuantityChange2.addEventListener('click', changeQuantityOfItems2);
checkOutQuantityChange3.addEventListener('click', changeQuantityOfItems3);
checkOutQuantityChange4.addEventListener('click', changeQuantityOfItems4);
checkOutQuantityChange5.addEventListener('click', changeQuantityOfItems5);
checkOutQuantityChange6.addEventListener('click', changeQuantityOfItems6);

checkOutDetails.addEventListener('click', removeItemFromCheckOut);

mainPage.addEventListener('click', getTotalPriceOfSelectedItems);

summaryButton.addEventListener('click', reloadPage);


    var total1 = 0;
    var total2 = 0;
    var total3 = 0;
    var total4 = 0;
    var total5 = 0;
    var total6 = 0;
    var final = total1 +total2 + total3 + total4 + total5 + total6 ;

    var currentNumberOfSelectedItems1 = 0; 
    var currentNumberOfSelectedItems2 = 0;    
    var currentNumberOfSelectedItems3 = 0;    
    var currentNumberOfSelectedItems4 = 0;    
    var currentNumberOfSelectedItems5 = 0;    
    var currentNumberOfSelectedItems6 = 0;
    
    var amount1 = 0;
    var amount2 = 0;    
    var amount3 = 0;    
    var amount4 = 0;    
    var amount5 = 0;    
    var amount6 = 0;    

    //Functions

    //This function refreshes the page after the check out was successful
    function reloadPage(){
    window.location.reload();
    }


    //This function is used to get the total price of items that were added to the cart

    function getTotalPriceOfSelectedItems() {
       
        if ((event.target.id) != 'store-items1-button') {
            currentNumberOfSelectedItems1 = 0;
            amount1 = 0;
            total1 == 0;
            
        } 
        if ((event.target.id) == 'store-items1-button') {             
            currentNumberOfSelectedItems1= parseInt(quantityOfItems1.textContent);
            amount1 = parseInt(checkOutDataPrice1.textContent);
            total1 = parseInt(amount1 * currentNumberOfSelectedItems1);
            final = total1 +total2 + total3 + total4 + total5 + total6 ;
            
        }
        if ((event.target.id == 'increase-Quantity1') || (event.target.id == 'decrease-Quantity1')) {
            currentNumberOfSelectedItems1= parseInt(quantityOfItems1.textContent);
            amount1 = parseInt(checkOutDataPrice1.textContent);
            total1 = parseInt(amount1 * currentNumberOfSelectedItems1);
            final = total1 +total2 + total3 + total4 + total5 + total6;
        }
        
        if ((event.target.id) != 'store-items2-button') {
            currentNumberOfSelectedItems2 = 0;
            amount2 = 0;
            total2 == 0;
        }
        if ((event.target.id) == 'store-items2-button') {

            currentNumberOfSelectedItems2= parseInt(quantityOfItems2.textContent);
            amount2 = parseInt(checkOutDataPrice2.textContent);
            total2 = parseInt(amount2 * currentNumberOfSelectedItems2); 
            final = total1 +total2 + total3 + total4 + total5 + total6;
            
        }
         if ((event.target.id == 'increase-Quantity2') || (event.target.id == 'decrease-Quantity2')){
            currentNumberOfSelectedItems2= parseInt(quantityOfItems2.textContent);
            amount2 = parseInt(checkOutDataPrice2.textContent);
            total2 = parseInt(amount2 * currentNumberOfSelectedItems2); 
            final = total1 +total2 + total3 + total4 + total5 + total6; 
        }
            

        if ((event.target.id) != 'store-items3-button') {
            currentNumberOfSelectedItems3 = 0;
            amount3 = 0;
            total3 == 0;
        }
        
        if ((event.target.id) == 'store-items3-button') {
            currentNumberOfSelectedItems3= parseInt(quantityOfItems3.textContent);
            amount3 = parseInt(checkOutDataPrice3.textContent);
            total3 = parseInt(amount3 * currentNumberOfSelectedItems3); 
            final = total1 +total2 + total3 + total4 + total5 + total6; 
            
        }
        if ((event.target.id == 'increase-Quantity3') || (event.target.id == 'decrease-Quantity3')){
            currentNumberOfSelectedItems3= parseInt(quantityOfItems3.textContent);
            amount3 = parseInt(checkOutDataPrice3.textContent);
            total3 = parseInt(amount3 * currentNumberOfSelectedItems3); 
            final = total1 +total2 + total3 + total4 + total5 + total6; 
        }


        if ((event.target.id) != 'store-items4-button') {
            currentNumberOfSelectedItems4 = 0;
            amount4 = 0;
            total4 == 0;
        }
        if ((event.target.id) == 'store-items4-button') {
            currentNumberOfSelectedItems4= parseInt(quantityOfItems4.textContent);
            amount4 = parseInt(checkOutDataPrice4.textContent);
            total4 = parseInt(amount4 * currentNumberOfSelectedItems4); 
            final = total1 +total2 + total3 + total4 + total5 + total6; 

        }
        if ((event.target.id == 'increase-Quantity4') || (event.target.id == 'decrease-Quantity4')){
            currentNumberOfSelectedItems4= parseInt(quantityOfItems4.textContent);
            amount4 = parseInt(checkOutDataPrice4.textContent);
            total4 = parseInt(amount4 * currentNumberOfSelectedItems4); 
            final = total1 +total2 + total3 + total4 + total5 + total6; 
        }


        if ((event.target.id) != 'store-items5-button') {
            currentNumberOfSelectedItems5 = 0;
            amount5 = 0;
            total5 == 0;
        }
        if ((event.target.id) == 'store-items5-button') {
            currentNumberOfSelectedItems5= parseInt(quantityOfItems5.textContent);
            amount5 = parseInt(checkOutDataPrice5.textContent);
            total5 = parseInt(amount5 * currentNumberOfSelectedItems5); 
            final = total1 +total2 + total3 + total4 + total5 + total6; 

        }
        if ((event.target.id == 'increase-Quantity5') || (event.target.id == 'decrease-Quantity5')){
            currentNumberOfSelectedItems5= parseInt(quantityOfItems5.textContent);
            amount5 = parseInt(checkOutDataPrice5.textContent);
            total5 = parseInt(amount5 * currentNumberOfSelectedItems5); 
            final = total1 +total2 + total3 + total4 + total5 + total6; 
        }


        if ((event.target.id) != 'store-items6-button') {
            currentNumberOfSelectedItems6 = 0;
            amount6 = 0;
            total6 == 0;
        }
        if ((event.target.id) == 'store-items6-button') {
            currentNumberOfSelectedItems6= parseInt(quantityOfItems6.textContent);
            amount6 = parseInt(checkOutDataPrice6.textContent);
            total6 = parseInt(amount6 * currentNumberOfSelectedItems6); 
            final = total1 +total2 + total3 + total4 + total5 + total6;

        }
        if ((event.target.id == 'increase-Quantity6') || (event.target.id == 'decrease-Quantity6')){
            currentNumberOfSelectedItems6= parseInt(quantityOfItems6.textContent);
            amount6 = parseInt(checkOutDataPrice6.textContent);
            total6 = parseInt(amount6 * currentNumberOfSelectedItems6); 
            final = total1 +total2 + total3 + total4 + total5 + total6;
        }
        if ((event.target.id) == 'remove-item1') {
            total1 = 0 ;  
            final = total1 +total2 + total3 + total4 + total5 + total6;    
        }
        if ((event.target.id) == 'remove-item2') {
            total2 = 0 ;
            final = total1 +total2 + total3 + total4 + total5 + total6;  
    
        }
        if ((event.target.id) == 'remove-item3') {
            total3 = 0   ;
            final = total1 +total2 + total3 + total4 + total5 + total6;

        }
        if ((event.target.id) == 'remove-item4') {
            total4 = 0   ;
            final = total1 +total2 + total3 + total4 + total5 + total6;

        }
        if ((event.target.id) == 'remove-item5') {
            total5 = 0   ;
            final = total1 +total2 + total3 + total4 + total5 + total6;

        }
        if ((event.target.id) == 'remove-item6') {
            total6 = 0   ;
            final = total1 +total2 + total3 + total4 + total5 + total6;

        }
        totalPrice.textContent = formatter.format(final);
        console.log(final);
    }


//This function removes an item from the check out when the remove button is clicked, it also updates the number of items remaining in the check out

function removeItemFromCheckOut() {
    if ((event.target.id) == 'remove-item1') {
        checkOutData1.style.display = 'none';
        numberOfSelectedItems.textContent =  --numberOfSelectedItems.textContent;
        removeFromCart1.style.display = 'none';
        storeItems1Button.style.display = 'block';


    }
    if ((event.target.id) == 'remove-item2') {
        checkOutData2.style.display = 'none';
        numberOfSelectedItems.textContent =  --numberOfSelectedItems.textContent;
        removeFromCart2.style.display = 'none';
        storeItems2Button.style.display = 'block';

    }
    if ((event.target.id) == 'remove-item3') {
        checkOutData3.style.display = 'none';
        numberOfSelectedItems.textContent =  --numberOfSelectedItems.textContent;
        removeFromCart3.style.display = 'none';
        storeItems3Button.style.display = 'block';

    }
    if ((event.target.id) == 'remove-item4') {
        checkOutData4.style.display = 'none';
        numberOfSelectedItems.textContent =  --numberOfSelectedItems.textContent;
        removeFromCart4.style.display = 'none';
        storeItems4Button.style.display = 'block';

    }
    if ((event.target.id) == 'remove-item5') {
        checkOutData5.style.display = 'none';
        numberOfSelectedItems.textContent =  --numberOfSelectedItems.textContent;
        removeFromCart5.style.display = 'none';
        storeItems5Button.style.display = 'block';

    }
    if ((event.target.id) == 'remove-item6') {
        checkOutData6.style.display = 'none';
        numberOfSelectedItems.textContent =  --numberOfSelectedItems.textContent;
        removeFromCart6.style.display = 'none';
        storeItems6Button.style.display = 'block';

    }
}

//This function increases or decreases the quantity of items added to the check out for each of the products listed in the store

function changeQuantityOfItems1() {
    if (((event.target.textContent) == '+') && ((event.target.id) == 'increase-Quantity1')) {
        quantityOfItems1.textContent++;
        
    } 
    if ((event.target.textContent) == '-') {
        quantityOfItems1.textContent--;

        console.log(quantityOfItems1.textContent);
        if (quantityOfItems1.textContent == '0') {
            alert('You cannot have less than 1 item. If you wish to remove the item,click \'remove\' ');
            quantityOfItems1.textContent =+ '1';

        }
    }
}

function changeQuantityOfItems2() {
    if (((event.target.textContent) == '+') && ((event.target.id) == 'increase-Quantity2')) {
        quantityOfItems2.textContent++;
        
    } 
    if ((event.target.textContent) == '-') {
        quantityOfItems2.textContent--;

        console.log(quantityOfItems1.textContent);
        if (quantityOfItems2.textContent == '0') {
            alert('You cannot have less than 1 item. If you wish to remove the item,click \'remove\' ');
            console.log(quantityOfItems2.textContent);
            quantityOfItems2.textContent =+ '1';

        }
    }
}

function changeQuantityOfItems3() {
    if (((event.target.textContent) == '+') && ((event.target.id) == 'increase-Quantity3')) {
        quantityOfItems3.textContent++;
    } 
    if ((event.target.textContent) == '-') {
        quantityOfItems3.textContent--;

        console.log(quantityOfItems1.textContent);
        if (quantityOfItems3.textContent == '0') {
            alert('You cannot have less than 1 item. If you wish to remove the item,click \'remove\' ');
            quantityOfItems3.textContent =+ '1';

        }
    }
}

function changeQuantityOfItems4() {
    if (((event.target.textContent) == '+') && ((event.target.id) == 'increase-Quantity4')) {
        quantityOfItems4.textContent++;
       
    } 
    if ((event.target.textContent) == '-') {
        quantityOfItems4.textContent--;

        console.log(quantityOfItems4.textContent);
        if (quantityOfItems4.textContent == '0') {
            alert('You cannot have less than 1 item. If you wish to remove the item,click \'remove\' ');
            quantityOfItems4.textContent =+ '1';

        }
    }
}

function changeQuantityOfItems5() {
    if (((event.target.textContent) == '+') && ((event.target.id) == 'increase-Quantity5')) {
        quantityOfItems5.textContent++;
     
    } 
    if ((event.target.textContent) == '-') {
        quantityOfItems5.textContent--;

        console.log(quantityOfItems5.textContent);
        if (quantityOfItems5.textContent == '0') {
            alert('You cannot have less than 1 item. If you wish to remove the item,click \'remove\' ');
            quantityOfItems5.textContent =+ '1';

        }
    }
}

function changeQuantityOfItems6() {
    if (((event.target.textContent) == '+') && ((event.target.id) == 'increase-Quantity6')) {
        quantityOfItems6.textContent++;
        
    } 
    if ((event.target.textContent) == '-') {
        quantityOfItems6.textContent--;

        console.log(quantityOfItems6.textContent);
        if (quantityOfItems6.textContent == '0') {
            alert('You cannot have less than 1 item. If you wish to remove the item,click \'remove\' ');
            quantityOfItems6.textContent =+ '1';

        }
    }
}

//This function hides the check out to enable the customer add more items to the check out

function continueShopping() {
    checkOut.style.display = 'none';

}


//This function removes the check out modal from the page
function removeCheckOutModalFromThePage() {
    if (event.target.id == 'check-out') {
        checkOut.style.display = 'none';
    }
}

//This function displays the check out 
function displayCheckOut() {
    if (numberOfSelectedItems.textContent >= 1) {
        checkOut.style.display = 'block';
    }else {
        checkOut.style.display = 'none';
        alert("You haven't added any item to the cart");
    }
}

//This function increases or decreases the number of items in the cart
function increaseNumberOfItemsInTheCart() {

    if ((event.target.textContent) == 'ADD TO CART') {
        numberOfSelectedItems.textContent =  ++numberOfSelectedItems.textContent;
    } 
    if((event.target.textContent) == 'REMOVE FROM CART'){
        numberOfSelectedItems.textContent =  --numberOfSelectedItems.textContent;
    }
}

//This function displays the prices when there is a hover on a product
function hoverOnProduct() {
    if (event.target.id == storeItemImages[0] ) {
        storeItemsPrice1.style.display = 'block';
    }
    if (event.target.id == storeItemImages[1] ) {
        storeItemsPrice2.style.display = 'block';
    }
    if (event.target.id == storeItemImages[2] ) {
        storeItemsPrice3.style.display = 'block';
    }
    if (event.target.id == storeItemImages[3] ) {
        storeItemsPrice4.style.display = 'block';
    }
    if (event.target.id == storeItemImages[4] ) {
        storeItemsPrice5.style.display = 'block';
    }
    if (event.target.id == storeItemImages[5] ) {
        storeItemsPrice6.style.display = 'block';
    }

}

//This function hides the prices when there is a hover out of a product

function hoverOutOfProduct() {
    if (event.target.id == storeItemImages[0] ) {
        storeItemsPrice1.style.display = 'none';
    }
    if (event.target.id == storeItemImages[1] ) {
        storeItemsPrice2.style.display = 'none';
    }
    if (event.target.id == storeItemImages[2] ) {
        storeItemsPrice3.style.display = 'none';
    }
    if (event.target.id == storeItemImages[3] ) {
        storeItemsPrice4.style.display = 'none';
    }
    if (event.target.id == storeItemImages[4] ) {
        storeItemsPrice5.style.display = 'none';
    }
    if (event.target.id == storeItemImages[5] ) {
        storeItemsPrice6.style.display = 'none';
    }
}

//This function inputs or removes data about a product from the  (e.g name, serial number)

function inputOrRemoveDataFromCart() {
     if ((event.target.id) == 'store-items1-button') {
        storeItems1Button.style.display = 'none';
        removeFromCart1.style.display = 'block';
        checkOutData1.style.display = 'flex';
        checkOutDataSerialNumber1.textContent = products[0].index;
        checkOutDataName1.textContent = products[0].name;
        checkOutDataPrice1.textContent = products[0].price;        

    } else if((event.target.id) == 'remove-from-cart1'){
        storeItems1Button.style.display = 'block';
        removeFromCart1.style.display = 'none';
        checkOutData1.style.display = 'none';

    }

    if ((event.target.id) == 'store-items2-button') {
        storeItems2Button.style.display = 'none';
        removeFromCart2.style.display = 'block';
        checkOutData2.style.display = 'flex';
        checkOutDataSerialNumber2.textContent = products[1].index;
        checkOutDataName2.textContent = products[1].name;
        checkOutDataPrice2.textContent = products[1].price;



    } else if((event.target.id) == 'remove-from-cart2'){
        storeItems2Button.style.display = 'block';
        removeFromCart2.style.display = 'none';
        checkOutData2.style.display = 'none';

    }

    if ((event.target.id) == 'store-items3-button') {
        storeItems3Button.style.display = 'none';
        removeFromCart3.style.display = 'block';
        checkOutData3.style.display = 'flex';
        checkOutDataSerialNumber3.textContent = products[2].index;
        checkOutDataName3.textContent = products[2].name;
        checkOutDataPrice3.textContent = products[2].price;

    } else if((event.target.id) == 'remove-from-cart3'){
        storeItems3Button.style.display = 'block';
        removeFromCart3.style.display = 'none';
        checkOutData3.style.display = 'none';
    }

    if ((event.target.id) == 'store-items4-button') {
        storeItems4Button.style.display = 'none';
        removeFromCart4.style.display = 'block';
        checkOutData4.style.display = 'flex';
        checkOutDataSerialNumber4.textContent = products[3].index;
        checkOutDataName4.textContent = products[3].name;
        checkOutDataPrice4.textContent = products[3].price;

    } else if((event.target.id) == 'remove-from-cart4'){
        storeItems4Button.style.display = 'block';
        removeFromCart4.style.display = 'none';
        checkOutData4.style.display = 'none';

    }

    if ((event.target.id) == 'store-items5-button') {
        storeItems5Button.style.display = 'none';
        removeFromCart5.style.display = 'block';
        checkOutData5.style.display = 'flex';
        checkOutDataSerialNumber5.textContent = products[4].index;
        checkOutDataName5.textContent = products[4].name;
        checkOutDataPrice5.textContent = products[4].price;


    } else if((event.target.id) == 'remove-from-cart5'){
        storeItems5Button.style.display = 'block';
        removeFromCart5.style.display = 'none';
        checkOutData5.style.display = 'none';

    }

    if ((event.target.id) == 'store-items6-button') {
        storeItems6Button.style.display = 'none';
        removeFromCart6.style.display = 'block';
        checkOutData6.style.display = 'flex';
        checkOutDataSerialNumber6.textContent = products[5].index;
        checkOutDataName6.textContent = products[5].name;
        checkOutDataPrice6.textContent = products[5].price;


    } else if((event.target.id) == 'remove-from-cart6'){
        storeItems6Button.style.display = 'block';
        removeFromCart6.style.display = 'none';
        checkOutData6.style.display = 'none';

    }

}



const checkOutButton = document.getElementById('check-out--button');

checkOutButton.addEventListener('click', upDateOrderSummary);
checkOutButton.addEventListener('click', payWithPaystack);

const paymentForm = document.getElementById('payment-form');
paymentForm.addEventListener("submit", payWithPaystack, false);


//This function handles the paystack test payment

function payWithPaystack() {
  let handler = PaystackPop.setup({
    key: 'pk_test_84811b77d7026d47cf5f7ef61758a7084fb87f46', 
    email: document.getElementById("email-address").value,
    amount: final * 100,
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(){
      orderSummary.style.display = 'block';
    }
  });
  handler.openIframe();
}

//This function updates the items displayed in the order summary

function upDateOrderSummary(){
    checkOut.style.display = 'none';
    orderSummaryDataSerialNumber1.textContent = checkOutDataSerialNumber1.textContent;
    orderSummaryDataName1.textContent = checkOutDataName1.textContent;
    orderSummaryQuantity1.textContent = quantityOfItems1.textContent;

    orderSummaryDataSerialNumber2.textContent = checkOutDataSerialNumber2.textContent;
    orderSummaryDataName2.textContent = checkOutDataName2.textContent;
    orderSummaryQuantity2.textContent = quantityOfItems2.textContent;

    orderSummaryDataSerialNumber3.textContent = checkOutDataSerialNumber3.textContent;
    orderSummaryDataName3.textContent = checkOutDataName3.textContent;
    orderSummaryQuantity3.textContent = quantityOfItems3.textContent;

    orderSummaryDataSerialNumber4.textContent = checkOutDataSerialNumber4.textContent;
    orderSummaryDataName4.textContent = checkOutDataName4.textContent;
    orderSummaryQuantity4.textContent = quantityOfItems4.textContent;

    orderSummaryDataSerialNumber5.textContent = checkOutDataSerialNumber5.textContent;
    orderSummaryDataName5.textContent = checkOutDataName5.textContent;
    orderSummaryQuantity5.textContent = quantityOfItems5.textContent;

    orderSummaryDataSerialNumber6.textContent = checkOutDataSerialNumber6.textContent;
    orderSummaryDataName6.textContent = checkOutDataName6.textContent;
    orderSummaryQuantity6.textContent = quantityOfItems6.textContent;

}

mainPage.addEventListener('click', displaySummaryOfSelectedItems);

//This function displays the summary of selected items

function displaySummaryOfSelectedItems() {
    
    if ((event.target.id) == 'store-items1-button') {
        orderSummaryData1.style.display = 'flex';    
    }
    if ((event.target.id) == 'store-items2-button') {
        orderSummaryData2.style.display = 'flex';       
    }
    if ((event.target.id) == 'store-items3-button') {
        orderSummaryData3.style.display = 'flex';       
    }
    if ((event.target.id) == 'store-items4-button') {
        orderSummaryData4.style.display = 'flex';       
    }
    if ((event.target.id) == 'store-items5-button') {
        orderSummaryData5.style.display = 'flex';       
    }
    if ((event.target.id) == 'store-items6-button') {
        orderSummaryData6.style.display = 'flex';       
    }
}




const nameErrorMessage = document.getElementById('name--error-message');
const emailErrorMessage = document.getElementById('email--error-message');
const phoneErrorMessage = document.getElementById('phone--error-message');

const name = document.getElementById('name');
const emailAddress = document.getElementById('email-address');
const phoneNumber = document.getElementById('phone-number');


name.addEventListener('blur', formValidation);
emailAddress.addEventListener('blur', formValidation);
phoneNumber.addEventListener('blur', formValidation);

//This function validates the form in the check out

function formValidation() {
    
    const regex = new RegExp(/[^0-9]/, 'g');
    
    if(name.value == '' || name.value == null )  {
        nameErrorMessage.textContent = 'Please enter your name';
        name.style.border = '2px solid red';
        checkOutButton.disabled = true;

                
    }else{
        nameErrorMessage.textContent ='';
        name.style.border = '2px solid green';
        checkOutButton.disabled = false;
        let customerName = document.getElementById('customer-name');
        customerName.textContent = name.value;

                
    }
    
    if (emailAddress.value=='' || emailAddress.value == null) {  
        emailErrorMessage.textContent = 'Please enter your email address';
        emailAddress.style.border = '2px solid red'; 
        checkOutButton.disabled = true;

                
    }else if((emailAddress.value.indexOf('@') == -1) && (emailAddress.value !== '')){
        emailErrorMessage.textContent = 'Invalid email';
        emailAddress.style.border = '2px solid red'; 
        checkOutButton.disabled = true;


    }
    else{
        emailErrorMessage.textContent = '';
        emailAddress.style.border = '2px solid green'; 
        checkOutButton.disabled = false;
                
    }

    if (phoneNumber.value == '' || phoneNumber.value == null) { 
        phoneErrorMessage.textContent = 'Please enter your phone number';
        phoneNumber.style.border = '2px solid red';  
        checkOutButton.disabled = true;
 
                
    }
    else if ((phoneNumber.value.match(regex))) { 
        phoneErrorMessage.textContent = 'Phone number can only be numbers';
        phoneNumber.style.border = '2px solid red';
        checkOutButton.disabled = true;

                
    }
    else if(phoneNumber.value.length < 11) { 
        phoneNumber.style.border = '2px solid red';
        phoneErrorMessage.textContent = 'Phone number cannot be less than 11 characters';
        checkOutButton.disabled = true;


              
    }else {
        phoneErrorMessage.textContent = '';
        phoneNumber.style.border = '2px solid green';   

    }
    
    
}

//This displays the name of the customer in the order summary


let customerName = document.getElementById('customer-name');
console.log(name.value);
customerName.textContent = name.value;
