const nome = "Rebeca";
const concatenacao = 'Olá ' + nome + '!';
const templateString = `
    Olá
    ${nome}!`;

console.log(concatenacao, templateString);
console.log(`1 + 1 = ${1 + 1}`);

const up = text => text.toUpperCase();
console.log(`Ei...${up('cuidado')}!`);