const regions = [
    {short: "N", name: "Norte"},
    {short: "NE", name: "Nordeste"},
    {short: "CW", name: "Centroeste"},
    {short: "SE", name: "Sudeste"},
    {short: "S", name: "Sul"}
];

const cities = [
    {state: "AM", name: "Manaus", region: "N"},
    {state: "PA", name: "Belem", region: "N"},
    {state: "TO", name: "Porto Nacional", region: "N"},
    {state: "MG", name: "Lavras", region: "SE"},
    {state: "BA", name: "Feira de Santana", region: "NE"},
    {state: "PR", name: "Cascavel", region: "S"},
    {state: "SP", name: "Presidente Prudente", region: "SE"},
    {state: "RN", name: "Touros", region: "NE"},
    {state: "CE", name: "Jericoacoara", region: "NE"},
    {state: "TO", name: "Tres Pedras", region: "N"},
    {state: "MG", name: "Betim", region: "SE"}    
];

const states = [
    {short: "AM", name: "Amazonas"},
    {short: "PA", name: "Para"},
    {short: "TO", name: "Tocantins"},
    {short: "MG", name: "Minas Gerais"},
    {short: "BA", name: "Bahia"},
    {short: "PR", name: "Paraná"},
    {short: "SP", name: "São Paulo"},
    {short: "RN", name: "Rio Grande do Norte"},
    {short: "CE", name: "Ceará"}
];

//1. transforme o array de objetos cities em m array de strings com o seguinte formato? 
//a) "${nomeDaCidade} - ${siglaEstado}"

console.log("Formato: ${nomeDaCidade} - ${siglaDoEstado}");
const citiesAndStatesnitials = cities.map((city) => {
    return `${city.name} - ${city.state}`;
});
console.log(citiesAndStatesnitials);

//a.2) Usando forEach
let citiesAndStatesInitials2 = [];
cities.forEach((city) => {
    citiesAndStatesInitials2.push(`${city.name} - ${city.state}`);
})

//b) A vidade de ${nomeDaCidade} fca no estado de ${nomeDoEstado}
console.log("Formato: A cdade de ${nomeDaCidade} fica no estado ${nomeDoEstado");
const citiesAndStateNames = cities.map ((city) => {
    const stateInfo = states.find((state) => state.short === city.state);
    return `A cidade de ${city.name} fica no estado de ${stateInfo.name}`;

});
console.log(citiesAndStateNames);

//c) A cidade de ${nomeDaCidade} fica na regiao ${nomeDaRegiao}
console.log("Formato: A cidade de ${nomeDaCidade} fica na regiao ${nomeDaRegiao}");

//2. Transforma o array de objetocities em um array de objetos do seguinte formato: 
// {
//     state: "Amazonas"
//     city: "Manaus"
//     region: "Norte"
// }
const citiesInfo = cities.map((city) => {
    const stateInfo = states.find((state) => state.short === city.state);
    const regionInfo = regions.find((region) => region.short === city.region);
    return {
        "state": stateInfo.name,
        "city": city.name,
        "region": regions.name
    };
});
console.log(citiesInfo);
