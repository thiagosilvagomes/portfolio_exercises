const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        };
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  };
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name)
    .catch(userID => console.log(`O ID ${userID} não foi encontrado`));
  };

//console.log(getUserName(1));

module.exports = {
    getUserName,
}

getUserName('5');

  