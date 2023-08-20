function kAccessoriesAddToCartOne(){
    const kAccessoriesOne = document.getElementById('kAccessoriesOne');
    const kAccessoriesOnePriceString = kAccessoriesOne.innerText;
    const kAccessoriesOnePrice = parseFloat(kAccessoriesOnePriceString);
    // console.log(kAccessoriesOnePrice);


    const price = document.getElementById('calculation-entry');
    // price.innerText = kAccessoriesOnePrice;

    addToCalculationEntry('kAccessories',kAccessoriesOnePrice);
}


function kAccessoriesAddToCartTwo(){
    const kAccessoriesTwo = document.getElementById('kAccessoriesTwo');
    const kAccessoriesTwoPriceString = kAccessoriesTwo.innerText;
    const kAccessoriesTwoPrice = parseFloat(kAccessoriesTwoPriceString);
    // console.log(kAccessoriesTwoPrice);


    const price = document.getElementById('calculation-entry');
    // price.innerText = kAccessoriesTwoPrice;

    addToCalculationEntry('kAccessories',kAccessoriesTwoPrice);
}


function kAccessoriesAddToCartThree(){
    const kAccessoriesTwo = document.getElementById('kAccessoriesThree');
    const kAccessoriesTwoPriceString = kAccessoriesTwo.innerText;
    const kAccessoriesTwoPrice = parseFloat(kAccessoriesTwoPriceString);
    // console.log(kAccessoriesTwoPrice);


    const price = document.getElementById('calculation-entry');
    // price.innerText = kAccessoriesTwoPrice;

    addToCalculationEntry('kAccessories',kAccessoriesTwoPrice);
}



const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

   const newBalanceTotal = previousBalanceTotalAmount + kAccessoriesOnePrice;
   balanceTotalElement.innerText = newBalanceTotal;


function addToCalculationEntry(areaType, area){
    console.log(areaType+ ' ' + area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    
    const p = document.createElement('p');
    // p.innerHTML =areaType + ' ' + area;
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area}`;

    calculationEntry.appendChild(p);
}

