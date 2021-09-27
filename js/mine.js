var inputProductName = document.getElementById("productName");
var inputProductPrice = document.getElementById("productPrice");
var inputProductCatagry = document.getElementById("productCatagary");
var inputProductDesc = document.getElementById("productDesc");
var myStore ;
// var mydeletedProduct ;

if( localStorage.getItem("myStoreStorage") == null)
{
    myStore  = [];
}
else
{
    myStore = JSON.parse(localStorage.getItem("myStoreStorage"))
    displayProducts();
}
// if( localStorage.getItem("deleted") == null )
// {
//     mydeletedProduct=[];

// }
// else
// {
//     mydeletedProduct = JSON.parse( localStorage.getItem("deleted")  )
// }

function addProduct()
{
    var inputPNameValue = inputProductName.value;
    var inputPPriceValue = inputProductPrice.value;
    var inputPCatagryValue = inputProductCatagry.value;
    var inputPDescValue = inputProductDesc.value;

    var oneProduct = {name : inputPNameValue , price : inputPPriceValue , cat : inputPCatagryValue , Desc : inputPDescValue }
    myStore.push(oneProduct);
    
    localStorage.setItem("myStoreStorage" , JSON.stringify(myStore));

    clearInput();
    displayProducts();
}
function clearInput()
{
    inputProductName.value = "";
    inputProductPrice.value = "";
    inputProductCatagry.value ="";
    inputProductDesc.value = "";
}
function displayProducts()
{
    var Alltr = ``;
    for(var i = 0; i< myStore.length ; i++)
    {
        Alltr += `<tr>
                    <td>` + myStore[i].name +`</td>
                    <td>`+ myStore[i].price +`</td>
                    <td>`+ myStore[i].cat +`</td>
                    <td>`+ myStore[i].Desc +`</td>
                    <td>
                        <button class=" btn btn-outline-warning" onclick ="">Up Date</button>
                    </td>
                    <td><button class=" btn btn-outline-danger" onclick ="deleteProduct(` +i+`)">Delete</button></td>
                    
                </tr>`
    }
    document.getElementById("tBody").innerHTML = Alltr;
}

function deleteProduct( productIndex)
{
    var x = myStore.splice(productIndex , 1);
    // mydeletedProduct.push(x);
    displayProducts();
    localStorage.setItem("myStoreStorage" , JSON.stringify(myStore));
    // localStorage.setItem("deleted" , JSON.stringify(mydeletedProduct));
}
// function searchProducts(term) {
//     var cartoona = ``;
//     for (var i = 0; i < productsContainer.length; i++) {

//         if (productsContainer[i].name.toLowerCase().includes(term.toLowerCase()) == true) {
//             cartoona += `<tr>
//             <td>${i}</td>
//             <td>${productsContainer[i].name}</td>
//             <td>${productsContainer[i].price}</td>
//             <td>${productsContainer[i].category}</td>
//             <td>${productsContainer[i].desc}</td>
//             <td> <button class="btn btn-outline-warning">update</button></td>
//             <td> <button  onclick="deleteProducts(${i})" class="btn btn-outline-danger">delete</button></td>
//         </tr>`;
//         }
//     }
//     document.getElementById("tableBody").innerHTML = cartoona;
// }
// function undoProducts()
// {
//     console.log(      JSON.parse(localStorage.getItem("deleted"))         )
//     var inputPNameValue = inputProductName.value;
//     var inputPPriceValue = inputProductPrice.value;
//     var inputPCatagryValue = inputProductCatagry.value;
//     var inputPDescValue = inputProductDesc.value;

//     var oneProduct = {name : inputPNameValue , price : inputPPriceValue , cat : inputPCatagryValue , Desc : inputPDescValue }
   
//     var Alltr2 = ``;
//     for(var i = 0; i< mydeletedProduct.length ; i++)
//     {
//         Alltr2 += `<tr>
//                     <td>` + mydeletedProduct[i].name +`</td>
//                     <td>`+ mydeletedProduct[i].price +`</td>
//                     <td>`+ mydeletedProduct[i].cat +`</td>
//                     <td>`+ mydeletedProduct[i].Desc +`</td>
                                    
//                 </tr>`
//     }
//     document.getElementById("tBody").innerHTML = Alltr2;
// }