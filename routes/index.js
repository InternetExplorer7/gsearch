var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const BADNODEMSG = "startNode is bad or endNode is bad or both are bad";
const mockRes = {send: (output) => {}}

testFindPath();

function testFindPath() {
  let tests = []
  tests.push(
      {
        q: findPath("https://fb.com/kkhorram", "https://fb.com/aryankhorram", mockRes),
        a: 200
      }
    )
  tests.push(
      {
        q: findPath("https://fb.com/kkhorram", "", mockRes),
        a: "startNode is bad or endNode is bad or both are bad"
      }
    )
  tests.push(
      {
        q: findPath("", "https://fb.com/aryankhorram", mockRes),
        a: "startNode is bad or endNode is bad or both are bad"
      }
    )

  for (let i = 0; i < tests.length; i++) {
    // Check if q=a
    if (tests[i].q !== tests[i].a) {
      console.log("ERROR IN TEST: " + tests)
    }
  }
}


// input: {startNode: String, endNode: String}
// startNode: full FB URL
// endNode: full FB URL
// res: if null, return. Otherwise, use res object.
// output: path ([{name: String, email: String, social_media: String}])
function findPath(startNode, endNode, res) {
  // First, ensure input is valid.
  if (startNode.length < 1 || endNode.length < 1) {
    res.send("startNode is bad or endNode is bad or both are bad");
    return "startNode is bad or endNode is bad or both are bad";
  }

  // Next, build graph. (hard)
  // Represent as an adj. list.

  // Step 1: recursively add all friend lists of all people.
  // Step 2: graph is built.
  // Step 3: search for paths from startNode to endNode in graph. (unweighted)
  res.send(200);
  return 200;
}


// test findFriends
function findFriends(startNode, endNode) {
  
}

router.post('/findPath', findPath);

module.exports = router;
