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
// 1. Encontre todas as cidades da regiao nordeste
console.log ("As cidades que ficam na regiao nordeste sao: ");
const citiesFromNorthEast = cities.find ((city) => {
    return city.region === "NE";
});
console.table(citiesFromNorthEast);

//2. encontre todas as cidades do estado de Tocantins
console.log("As cidades do estado de Tocantins São: ");
const tocantinsCities = cities.filter ((city) => {
    return city.state ==="TO"
});
console.table (tocantinsCities);

//3. Cidades que comecam com a letra B
console.log ("As cidades que comecam com a letra B são: ")
const citiesThatStartWithB = cities.filter ((city) => {
    return city.name.startsWith("B"); // ou city.name[0] === "B"
});
console.table(citiesThatStartWithB);