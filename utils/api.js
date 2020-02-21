const api = {
  getUser(username) {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Enter your GitHub username:",
          name: "username"
        },
        {
          type: "input",
          message: "What is the name of your repo?",
          name: "reponame"
        }
      ])

      .then(function (response) {

        const queryUrl = `https://api.github.com/users/${response.username}/${response.reponame}/?per_page=100`;

        axios.get(queryUrl).then(function (res) {

          // const repoDetails = res.data.filter(function (res) {
          //   return res.name === response.reponame;
          console.log(res);
          // });
          // console.log(repoDetails);
        });
      });


  }
};

module.exports = api;
