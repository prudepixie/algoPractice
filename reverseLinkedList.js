var reverseLinkedList = function(head) {
  let current = head;
  let prev = null;
  let next = null

  while(current) {
    next = current.next;
    current.next = prev;

    current = next;
    prev = current;
  }

  return prev;
}
