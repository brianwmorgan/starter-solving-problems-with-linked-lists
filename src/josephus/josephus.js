// PSEUDOCODE //

// function josephus
//   // Accepts: list the LinkedList of names
//               m the number to skip

//   declare variable node and initialize it to the head
//   declare variable tail and initialize it to the last node in the list
//   assign the next pointer of the tail to the head of the list

// while there are more than one nodes left do
//     move node to node.next m times
//     if the next pointer of the current node points to the head
//       set the head to the next node after the head
//     set node.next to node.next.next
//     set node to to node.next

// return node.value

// JAVASCRIPT IMPLEMENTATION //

function josephus(list, m) {
  let node = list.head;
  let tail = list.find((node) => !node.next);

  tail.next = list.head;

  while (node.next != node) {
    for (let i = 1; i < m; i++) {
      node = node.next;
    }
    if (node.next === list.head) {
      list.head = list.head.next;
    }
    node.next = node.next.next;
    node = node.next;
  }

  return node.value;
}

// EXPORT //

module.exports = josephus;
