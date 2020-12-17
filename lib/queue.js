// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    enqueue(value){
        let node = new Node(value);

        if(this.length === 0){
            this.front = node;
            this.back = node;
            this.length++;
        }else{
            let oldBack = this.back;
            oldBack.next = node;
            this.back = node;
            this.length++;
        }
    return this.length;
    }
}

exports.Node = Node;
exports.Queue = Queue;