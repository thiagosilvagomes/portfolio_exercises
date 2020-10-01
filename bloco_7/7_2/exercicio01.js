const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

function showContent(student)
{
    let arrayKey = Object.keys(student);
    for (index in arrayKey)
    {
        console.log (`${arrayKey[index]}, Nivel: ${student[arrayKey[index]]}`)
    }
}

console.log("Estudante 1");
showContent(student1);

console.log("Estudante 2");
showContent(student2);
