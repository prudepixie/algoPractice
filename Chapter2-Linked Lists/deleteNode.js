const LinkedList = function(value) {
  this.value = value;
  this.next = null;
}


const deleteNode = function(head, int) {
  let n = head;
  // if int equals first head val
  if (n.value === int) {
    return head.next;
  }

  // takes care of int that is not 1st head value
  while(head.next !== null) {
    if (head.next.value === int) {
      head.next = head.next.next;
      return head;
    }
    n = n.next;
  }
  return head;
}


// test
var a = new LinkedList(4);
var b = new LinkedList(5);
var c = new LinkedList(1);
var d = new LinkedList(9);

a.next = b;
b.next = c;
c.next = d;

var printList = function(head) {
  while(head !== null) {
    console.log(head.value);
    head = head.next;
  }
  console.log('done printing');
};

printList(a);
deleteNode(a, 5);