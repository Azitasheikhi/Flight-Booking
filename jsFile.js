let countrySelectBox = document.querySelector('.countrySelect');
let citySelect = document.querySelector('.citySelect');

let countriesData = {
    Iran : ['Tabriz','Tehran','Shiraz','Esfahan','Mashhad'],
    Canada : ['Toronto','Vancouver','Ottawa'],
    USA : ['Washington','California','New York','Ohio']
};

countrySelectBox.addEventListener('change',function(){
    let mainCountryName = countrySelectBox.value;
    let mainCountryCities = countriesData[mainCountryName];
    citySelect.innerHTML = '';

    if(countrySelectBox.value === "Please Select"){
        citySelect.innerHTML += '<option>Select City</option>';

    }
    else{
        mainCountryCities.forEach(function(city){
            citySelect.innerHTML += '<option>' + city +'</option>';
        })
    }
    
})