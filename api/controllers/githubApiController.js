const axios = require("axios");
global.atob = require("atob");

const githubApiController = {};

//get challenge number randomly
const getrandomChallenge = (obj) => {
  const randomChallange = Math.floor(
    Math.random() * Math.floor(Object.keys(obj).length + 1)
  );
  return randomChallange;
};

githubApiController.getChallenge = (req, res, next) => {
  //   console.log("inside githubApi");
  const githubData = {
    0: {
      //PolynomialHash
      readme:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/7355d6649b116471699d7654a717aa7f810f59eb",
      solution:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/ba066c31388e42f5ee93dbf5109d375326d891aa",
    },
    1: {
      // graph challenge 1: breadth-first-search read-me
      readme:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/32ec3e815cc1416c4cbf4272570ba28116df9f72",
      // graph challenge 1: breadth-first-search solution
      solution:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/d4b955ece6fb939ba319d15c80962612c9aa655b",
    },
    2: {
      // graph challenge 2: depth-first-search read-me
      readme:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/b22a8aa9c893434f8dc92e289937563bcdf2de35",
      // graph challenge 2: depth-first-search solution
      soution:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/a77c672f19f692d9770c856bc0e1ee29bf9ce5f0",
    },
    3: {
      // * linked list challenge 1: traversal read-me *
      readme:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/25609518f8cb2327bf7584c546effba890c5d2ff",
      // * linked list challenge 1: traversal solution *
      solution:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/cfbfe4fb59c6e0e0b90d44dd667f1096776a5309",
    },
    4: {
      // * linked list challenge 2: reverse traversal read-me *
      readme:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/89187e4f88d2cec8444d9919e9406a3018c0f74f",
      // * linked list challenge 2: reverse traversal solution *
      solution:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/d39260aab2106bf9a0c5d82e64b5f80172bbf509",
    },
    5: {
      // * sorting challenge 1: bubble sort read-me *
      readme:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/ca784fade6dcd50868ac6ca81cf14798801002e1",
      // * sorting challenge 1: bubble sort solution *
      solution:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/d78ebcbdc1e07d9b5a024880d1bdd87a97e66d66",
    },
    6: {
      // * sorting challenge 2: selection sort read-me *
      readme:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/6a708d2579d08dcb22ea83ee3554a842696ae227",
      // * sorting challenge 2: selection sort solution *
      solution:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/fa4a720b2f2fb6617cf113f6f6d4183fed17f015",
    },
    7: {
      // * sorting challenge 3: merge sort read-me *
      readme:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/f4ed837a22fcc02469132300216daf44154f0a15",
      // * sorting challenge 3: merge sort solution *
      solution:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/6a2f8a843cd25f547d4b700f412ce238bee89096",
    },
    8: {
      // * search challenge 1: binary search read-me *
      readme:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/2259b94406253b3976b04bd7705781b430959a35",
      // * search challenge 1: binary search solution *
      solution:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/b9e18aab7b68ccbe498310059078922e2929b803",
    },
    9: {
      // * search challenge 2: linear search read-me *
      readme:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/942058785f76f008557a11068ce94c9cbe4c5c10",
      // * search challenge 2: linear search solution *
      solution:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/c5fb67c7952dfe92c3c58ed33e0f3444b3e0ad9c",
    },
    10: {
      // * strings challenge 1: longest common substring read-me *
      readme:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/9e63294f049ee857ea0fbf46e985ae33d4b4372f",
      // * strings challenge 1: longest common substring solution *
      solution:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/1d68ede9e38e660dda3f5f61204a619c89400828",
    },
  };
  const randomNum = getrandomChallenge(githubData);
  //get randomly selected Readme.md
  const url = githubData[randomNum].readme;
  axios
    .get(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then(({ data: { content } }) => {
      // handle success
      const data = content;
      //decode the content and send it to the front end
      // send the number of the challenge to the front end
      res.locals.challenge = global.atob(data);
      res.locals.challengeNumber = randomNum;
      //   console.log(res.locals.challange);
      next();
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

githubApiController.getSolution = (req, res, next) => {
  //   console.log("inside githubApi");
  const githubData = {
    0: {
      //PolynomialHash
      readme:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/7355d6649b116471699d7654a717aa7f810f59eb",
      solution:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/ba066c31388e42f5ee93dbf5109d375326d891aa",
    },
    1: {
      // graph challenge 1: breadth-first-search read-me
      readme:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/32ec3e815cc1416c4cbf4272570ba28116df9f72",
      // graph challenge 1: breadth-first-search solution
      solution:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/d4b955ece6fb939ba319d15c80962612c9aa655b",
    },
    2: {
      // graph challenge 2: depth-first-search read-me
      readme:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/b22a8aa9c893434f8dc92e289937563bcdf2de35",
      // graph challenge 2: depth-first-search solution
      soution:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/a77c672f19f692d9770c856bc0e1ee29bf9ce5f0",
    },
    3: {
      // * linked list challenge 1: traversal read-me *
      readme:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/25609518f8cb2327bf7584c546effba890c5d2ff",
      // * linked list challenge 1: traversal solution *
      solution:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/cfbfe4fb59c6e0e0b90d44dd667f1096776a5309",
    },
    4: {
      // * linked list challenge 2: reverse traversal read-me *
      readme:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/89187e4f88d2cec8444d9919e9406a3018c0f74f",
      // * linked list challenge 2: reverse traversal solution *
      solution:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/d39260aab2106bf9a0c5d82e64b5f80172bbf509",
    },
    5: {
      // * sorting challenge 1: bubble sort read-me *
      readme:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/ca784fade6dcd50868ac6ca81cf14798801002e1",
      // * sorting challenge 1: bubble sort solution *
      solution:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/d78ebcbdc1e07d9b5a024880d1bdd87a97e66d66",
    },
    6: {
      // * sorting challenge 2: selection sort read-me *
      readme:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/6a708d2579d08dcb22ea83ee3554a842696ae227",
      // * sorting challenge 2: selection sort solution *
      solution:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/fa4a720b2f2fb6617cf113f6f6d4183fed17f015",
    },
    7: {
      // * sorting challenge 3: merge sort read-me *
      readme:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/f4ed837a22fcc02469132300216daf44154f0a15",
      // * sorting challenge 3: merge sort solution *
      solution:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/6a2f8a843cd25f547d4b700f412ce238bee89096",
    },
    8: {
      // * search challenge 1: binary search read-me *
      readme:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/2259b94406253b3976b04bd7705781b430959a35",
      // * search challenge 1: binary search solution *
      solution:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/b9e18aab7b68ccbe498310059078922e2929b803",
    },
    9: {
      // * search challenge 2: linear search read-me *
      readme:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/942058785f76f008557a11068ce94c9cbe4c5c10",
      // * search challenge 2: linear search solution *
      solution:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/c5fb67c7952dfe92c3c58ed33e0f3444b3e0ad9c",
    },
    10: {
      // * strings challenge 1: longest common substring read-me *
      readme:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/9e63294f049ee857ea0fbf46e985ae33d4b4372f",
      // * strings challenge 1: longest common substring solution *
      solution:
        "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs/1d68ede9e38e660dda3f5f61204a619c89400828",
    },
  };

  const url = githubData[req.body.challengeNumber].solution;
  axios
    .get(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then(({ data: { content } }) => {
      // handle success
      const data = content;
      res.locals.solution = global.atob(data);
      // console.log(res.locals.solution);
      next();
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

module.exports = githubApiController;
