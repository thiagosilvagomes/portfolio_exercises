function techList(tecnologias,name) {
    // seu código aqui
    let array=[];
    tecnologias.sort();
    if (tecnologias.length == 0)
    {
      return("Vazio!");
    }
    else
    {
      for (let key in tecnologias)
      {
        let info = {
          tech: tecnologias[key],
          name: name
        };
        array.push(info);
      }
    }
    return(array);
  }

  module.exports = {
      techList,
  }