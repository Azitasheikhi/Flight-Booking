let countrySelectBox = document.querySelector('.countrySelect');

let countriesData = {
    Iran : ['Tabriz','Tehran','Shiraz','Esfahan','Mashhad'],
    Canada : ['Toronto','Vancouver','Ottawa'],
    USA : ['Washington','California','New York','Ohio']
};

countrySelectBox.addEventListener('change',function(){
    let mainCountryName = countrySelectBox.value;
    console.log(countriesData[mainCountryName]);
})