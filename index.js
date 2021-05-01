
const list = {
  length: 0,
  first: null,
  last: null,
}

function addValueToList(list, newValue) {
  const newNode = {
    prev: list.last,
    val: newValue,
    next: null,
  }
  list.last = newNode
  if(list.length == 0) {
    list.first = newNode
  } else {
    newNode.prev.next = newNode
  }
  list.length++
}

function printList(list) {
  console.log(`length: ${list.length}`)
  let current = list.first
  let i = 0
  while(current != null){
    console.log(`[${i}] ${current.val}`)
    current = current.next
    i++
  }
}
printList(list)
addValueToList(list, 3)
printList(list)
addValueToList(list, 4)
printList(list)
addValueToList(list, 5)
printList(list)
