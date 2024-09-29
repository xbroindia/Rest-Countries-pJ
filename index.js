const Container = document.querySelector('.countries-container');
const drop_menue= document.querySelector('.drop-menue')
let search_pol=document.querySelector('.search-pol')
let Dark_mode =document.querySelector('#btn1');
let country =document.querySelector('.country');

let body =document.querySelector("#body");
let whole_data;
 fetch('https://restcountries.com/v3.1/all')
 .then((res)=> res.json())
 .then((data)=>{
      Render_Content(data);
       whole_data = data;
 })

drop_menue.addEventListener("change",(e)=>{
      let region = e.target.value;
      fetch(`https://restcountries.com/v3.1/region/${region}`)
 .then((res)=> res.json())
 .then((data)=>{
      Container.innerHTML='';
       data.forEach(
        (country)=>{
            const  country_content= document.createElement('div');
            const country_Card = document.createElement('a');
country_Card.classList.add("country");
country_Card.href=`./country.html?name=${country.name.common}`
country_Card.append(country_content);

const CountryHTML = `
                <img src="${country.flags.svg}">
                <h3>${country.name.common}</h3>
                <p><b>Population :</b>${country.population.toLocaleString('en-IN')}</p>
                <p><b>Region :</b>${country.region}c</p>
                <p><b>Capital :</b>${country.capital?.[0]}</p>
`
country_content.innerHTML=CountryHTML;

Container.append(country_Card);

        }
       )
 })

      });

function Render_Content(data){
    Container.innerHTML='';
       data.forEach(
        (country)=>{
            const  country_content= document.createElement('div');
            const country_Card = document.createElement('a');

country_Card.classList.add("country");
country_Card.href=`./country.html?name=${country.name.common}`
country_Card.append(country_content);

const CountryHTML = `
                <img src="${country.flags.svg}">
                <h3>${country.name.common}</h3>
                <p><b>Population :</b>${country.population.toLocaleString('en-IN')}</p>
                <p><b>Region :</b>${country.region}c</p>
                <p><b>Capital :</b>${country.capital?.[0]}</p>
`
country_content.innerHTML=CountryHTML;

Container.append(country_Card);

        })
}

search_pol.addEventListener("input",(e)=>{
      let filterd=whole_data.filter((country)=>
      country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
      Render_Content(filterd)
})

// btn1.addEventListener('click',()=>{
//   document.body.classList.toggle("dark")
// })