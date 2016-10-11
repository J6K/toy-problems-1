var Tree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var one = new Tree(1);
var two = new Tree(2);
var three = new Tree(3);
var four = new Tree(4);
var five = new Tree(5);

one.left = two;
one.right = three;
two.left = four;
two.right = five;

function iterativeInOrder(tree) {
  var stack = [];

  pushLeftsToStack(tree);

  while(stack.length) {
    var current = stack.pop();
    console.log(current.value);
    pushLeftsToStack(current.right);
  }

  function pushLeftsToStack(node) {
    while (node !== null) {
      stack.push(node);
      node = node.left;
    }
  }
}