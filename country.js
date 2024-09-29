const flagimg =document.querySelector('.country-data-img img') 
const countryHeadh1 =document.querySelector('.country-info-head h2')
const nativeName =document.querySelector('.nativeName')
const country_Name = (new URLSearchParams(window.location.search).get('name'))
const population =document.querySelector('.population');
const region = document.querySelector('.region');
const sub_region = document.querySelector('.sub-region');
const capital = document.querySelector('.capital');
const top_level_domain = document.querySelector('.top-level-domain');
const currencies = document.querySelector('.currencies')
const Language  = document.querySelector('.Language')
const border_link =document.querySelector('.borders')




fetch(`https://restcountries.com/v3.1/name/${country_Name}/?fullText=true`)
.then((res) => res.json())
.then(([country])=>{
     let country_code = country.altSpellings[0];
    if(country.name.nativeName){
        nativeName.innerText=Object.values(country.name.nativeName)[0].common}
    else{country.name.common}

    if(country.population){
    population.innerText=country.population.toLocaleString('en-IN');
    }
    else{ population.innerText="empty"}

    flagimg.src= country.flags.svg;  
    countryHeadh1.innerText=country.name.common;
    region.innerText=country.region;
    sub_region.innerText=country.subregion;
    top_level_domain.innerText=country.tld.join(', ');

    if(country.currencies){
        currencies.innerText=Object.values(country.currencies).map((currencies)=>currencies.name)
    }
    else{currencies.innerText="Empty"}

    if(country.capital){
        capital.innerText=country.capital.join(', ');
    }
    else{currencies.innerText="Empty"}
    Language.innerText=Object.values(country.languages).join(", ");

    if(country.borders){
      country.borders.forEach((border)=>{
      fetch(`https://restcountries.com/v3.1/alpha/${border}`)
      .then((res)=>res.json())
      .then(([border_data])=>{
         let Border_tag =document.createElement("a");
         Border_tag.innerText=border_data.name.common;
         Border_tag.classList.add('link');
         border_link.append(Border_tag);
         Border_tag.href=`country.html?name=${border_data.name.common}`
      })
      })
    
    }
})