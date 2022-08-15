const LinkedList = require("../lib/linkedList");

//////////////////////////////////////////////////////////////////////////////////////////////

// ITERATIVE SOLUTION //

/**
 * Iteratively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */

// PSEUDOCODE //

//  function reverseIterative(list)
//  // accepts list - a linked list, potentially empty, to be reversed

//  declare a variable named reversedList and initialize it to an empty LinkedList
//  declare a variable node initialized to the head of the list
//  while the node pointer is not null do
//    insert the node value at the head of the reversedList
//    move the node pointer along to the next node
// return the reversedList

// JAVASCRIPT IMPLEMENTATION //

function reverseIterative(list) {
  const reversedList = new LinkedList();
  let node = list.head;
  while (node) {
    reversedList.insertAtHead(node.value);
    node = node.next;
  }
  return reversedList;
}

//////////////////////////////////////////////////////////////////////////////////////////////

// RECURSIVE SOLUTION //

/**
 * Recursively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
function reverseRecursive(list) {
  if (list.length <= 1) {
    return list;
  }

  const head = list.head.value;
  list.remove((node, index) => index === 0);
  const reversedList = reverseRecursive(list);
  reversedList.insert(head);
  return reversedList;
}

//////////////////////////////////////////////////////////////////////////////////////////////

// EXPORT //

module.exports = { reverseIterative, reverseRecursive };
