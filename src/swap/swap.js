/**
 * Given a list and two nodes, swap the position of the two nodes
 * @param {LinkedList} list
 * @param {Node} x
 * @param {Node} y
 */

// PSEUDOCODE //

// function swap
//   // accepts list - a linked list
//              x - a node in the linked list
//              y - a node in the linked list

//   if the list is empty then
//     return  the list

//   declare a variable x_next and initialize it to the next pointer of x
//   declare a variable x_prev and initialize it to the previous node to x, null if x is the head
//   declare a variable y_prev and initialize it to the previous node to y, null if y is the head

//   set the next pointer of x to the next pointer of y
//   set the next pointer of y to x_next

//   if x is not the head  of the list then
//     set next pointer of x_prev to y
//   else
//     set head to y

//   if y is not the head  of the list then
//     set next pointer of y_prev to x
//   else
//     set head to x

//   return the list

// JAVASCRIPT IMPLEMENTATION //

function swap(list, x, y) {
  if (!list.head) {
    return list;
  }

  let x_next = x.next;
  let x_prev = list.findWithPrevious((node) => node === x)[1];
  let y_prev = list.findWithPrevious((node) => node === y)[1];

  x.next = y.next;
  y.next = x_next;

  if (x_prev) {
    x_prev.next = y;
  } else {
    list.head = y;
  }

  if (y_prev) {
    y_prev.next = x;
  } else {
    list.head = x;
  }

  return list;
}

// EXPORT //

module.exports = swap;
