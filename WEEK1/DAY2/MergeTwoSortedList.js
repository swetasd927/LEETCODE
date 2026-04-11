//easy: linked list problem
//It is a classic linked list problem, idea is to merge two sorted lists
//by comparing nodes one by one

//using dummy nodes to avoid edge cases(empty list, head handling)
//always move the pointer from the list with a smaller value

var mergeTwoLists = (list1, list2) => {
    //ListNode is a class or constructor used to create a node in a singly linked list
    let dummy = new ListNode(-1)//dummy value to handle edge casees, -1 does not matter is just a placeholder
    let current = dummy;

    //traverse both nodes
    while(list1 && list2) {
        if(list1.val < list2.val){
            //val: actual data stored in that node
            current.next = list1;//link smaller node to our new list
            list1 = list1.next;//move list1 pointer to its next node
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;//move finger to the next end
    }
    //attaching the remaining nodes
    //if list1 not empty attach rest of list 1 otherwise whats remaining
    current.next = list1 ? list1: list2;
    return dummy.next;
    //sorted list is dummy.next , dummy is just a placeholder
}

