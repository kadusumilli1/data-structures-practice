class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        
class LinkedList:
    def __init__(self, value):
        new_node = Node(value)
        self.head = new_node
        self.tail = self.head
        self.length = 1
        
    def append(self, value):
        new_node = Node(value)
        self.tail.next = new_node
        self.tail = new_node
        self.length += 1
    
    def prepend(self, value):
        new_node = Node(value)
        new_node.next = self.head
        self.head = new_node
        self.length += 1
    
    def print(self):
        current = self.head
        values = []
        while current:
            values.append(str(current.value))
            current = current.next
        print(" --> ".join(values))
    
    def remove(self, value):
        prev = None
        current = self.head
        
        while current:
            if current.value == value:
                
                if prev is None:
                    self.head = current.next
                else:
                    prev.next = current.next
                
                if current is self.tail:
                    self.tail = prev
                
                self.length -= 1
                
                print("removed:", value)
                return

            prev = current
            current = current.next

        print("value not found!")
    
myLinkedList = LinkedList(10)
myLinkedList.append(15)
myLinkedList.append(20)
myLinkedList.prepend(5)
myLinkedList.print()
print("length:", myLinkedList.length)
myLinkedList.remove(10)
myLinkedList.print()
print("head:", myLinkedList.head.value)
print("head->next:", myLinkedList.head.next.value)
print("tail:", myLinkedList.tail.value)
print("tail->next:", myLinkedList.tail.next)
myLinkedList.print()
myLinkedList.remove(533)
myLinkedList.remove(20)
myLinkedList.print()
print("head:", myLinkedList.head.value)
print("head->next:", myLinkedList.head.next.value)
print("tail:", myLinkedList.tail.value)
print("tail->next:", myLinkedList.tail.next)
myLinkedList.print()
myLinkedList.remove(15)
myLinkedList.print()
print("head:", myLinkedList.head.value)
print("head->next:", myLinkedList.head.next)
print("tail:", myLinkedList.tail.value)
print("tail->next:", myLinkedList.tail.next)
myLinkedList.print()
print("length:", myLinkedList.length)
print(myLinkedList.length)
