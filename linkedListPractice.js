#!/usr/bin/env node

class LinkedList {
    constructor(head = null, tail = null, size = 0) {
        this.head = head;
        this.tail = tail;
        this.size = size;
    }



    append(value) {
        const newNode = new Node(value);
        this.size += 1;
        if (this.tail === null) {
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
        if (this.head === null) {
            this.head = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value);
        this.size += 1;
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
    }

    size() {
        return this.size;
    }

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }

    at(index) {
        if (index > this.size) {
            return null;
        }
        if (index === 0) {
            return this.head;
        }
        let ptr = this.head;
        for (let i = 1; i <= index; i++) {
            ptr = ptr.nextNode;
        }
        return ptr;
    }

    pop() {
        if (this.tail && this.size > 1) {
            
            let ptr = this.head;
            for (let i = 1; i < (this.size - 1); i++) {
                ptr = ptr.nextNode;
            }
            this.tail = ptr;
            this.tail.nextNode = null;
        } else if (this.tail) {
            this.tail.nextNode = null;
            this.tail = null;
            this.head = null;
        }

        this.size -= 1;
    }

    contains(value) {
        if (this.size === 0) {
            return false;
        }
        let ptr = this.head;
        for (let i = 1; i <= this.size; i++) {
            if (ptr.value === value) {
                return true;
            }
            ptr = ptr.nextNode;
        }
        return false;
    }

    find(value) {
        if (this.size === 0) {
            return null;
        }
        let ptr = this.head;
        for (let i = 0; i < this.size; i++) {
            if (ptr.value === value) {
                return i;
            }
        }
        return null;
    }

    toString() {
        if (this.size === 0) {
            console.log('Empty List');
        }
        let string = ``;
        let ptr = this.head;
        for (let i = 1; i <= this.size; i++) {
            string = string.concat(`( ${ptr.value} )`, " -> ");
            ptr = ptr.nextNode;
        }
        string = string.concat("null");
        console.log(string);
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

const list = new LinkedList;

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.toString();


list.pop()
list.toString();


list.append(100);
list.toString();
console.log(list.at(2).value);