
class Node:

    def __init__(self, data):
        self.data = data
        self.next = None 


class SLL:

    def __init__(self):
        self.head = Node(10)  


    def add_node_to_end(self, num):
        newnode  = self.head
        while ( newnode.next != None):
            newnode = newnode.next 

        my_node = Node(num)

        newnode.next = my_node 
        print("Successfully Added")

    def delete_node_from_middle(self, num):
        newnode = self.head

        while ( newnode.next.data != num ):

            newnode = newnode.next 

        newnode.next = newnode.next.next

        print("Deleted")

    def travers_ll(self):
        newnode = self.head

        while ( newnode.next != None):
            print(newnode.data,"->")
            newnode = newnode.next 
            
        print(newnode.data, "--> NULL")


def traversUsingRecursion(head):
    if ( head == None):                                        #Base Case
        print("NULL")
        return 
    else:
        print(head.data,"->")
        return traversUsingRecursion(head.next)               #Progress Forward
    
    
        
            



my_linkedlist = SLL()
#print(my_linkedlist.head.data)

my_linkedlist.add_node_to_end(30)
my_linkedlist.add_node_to_end(40)
my_linkedlist.add_node_to_end(140)
#my_linkedlist.delete_node_from_middle(40)
my_linkedlist.travers_ll()
traversUsingRecursion(my_linkedlist.head)




