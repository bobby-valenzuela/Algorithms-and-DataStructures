// An unDirected, unweighted Graph built using an adjacency list
class Graph {

    constructor(){
        this.adjacencyList = {};

        // adjacencyList format:
        // {
        //      A: ["B", "D"]
        //      B: ["A", C", "D"]
        //      C: ["B"]
        //      D: ["A", "B"]
        // }

    }
    
    // ########## Adding/Removing Vertices/Edges
    addVertext(vertex){
        if( ! this.adjacencyList[vertex] ) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2){
        // If the specified vertex doesn't exist - add it
        if( ! this.adjacencyList[vertex1]){
            this.addVertext(vertex1);
        }

        // Add vertex
        this.adjacencyList[vertex1].push(vertex2);
        
        // Repeat for the second vertex
        
        // If the specified vertex doesn't exist - add it
        if( ! this.adjacencyList[vertex2]){
            this.addVertext(vertex2);
        }

        // Add vertex
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2){
        // Remove vertex2 from the vertex1 edges and vice versa
        if( this.adjacencyList[vertex1] ) this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter( v => v != vertex2);
        if( this.adjacencyList[vertex2] ) this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter( v => v != vertex1);
    }

    removeVertex(vertex){
        //  Guard clause
        if( ! this.adjacencyList[vertex] ) return;

        //Find edges and remove this vertex from those other edges
        for(let v of this.adjacencyList[vertex] ){
            this.removeEdge(vertex, v);
        } 


        //Remove vertex itself from the list
        delete this.adjacencyList[vertex];
    }








    // ########## Graph Traversal/Searching

    // Depth-First Search (recursive)
    depthFirstTraversalRecursive(startingVertex){

        const result = [];
        const visitedVertices = {};

        const DFSTraverse = vertex => {
            
            // Base case
            if( ! vertex ) return null;

            // Mark as visited  
            visitedVertices[vertex] = true;
            result.push(vertex);

            // Loop through all neighbor vertices of this vertex
            this.adjacencyList[vertex]
                .forEach( neighbor => {

                
                    // Skip visited ones
                    if(visitedVertices[neighbor]) return;

                    DFSTraverse(neighbor)

                });


        }

        DFSTraverse(startingVertex); 


        return result;

    }

    depthFirstTraversalIterative(startingVertex){

        // We need a stack (LIFO) - will use an array and pop/push methods to add to the end and remove from the end (Last-In-First-Out)
        const stack = [startingVertex];
        const result = [];
        const visited = {};

        visited[startingVertex] = true;
        let currentVertex;

        while (stack.length){
            //  Pop off next item on the stack to check
            currentVertex = stack.pop();
            
            // Push iten  to result list
            result.push(currentVertex);

            // Loop through all neighbors of this vertex    
            this.adjacencyList[currentVertex].forEach( neighbor => {
                // Make sure we haven't visited this neighbor
                if(! visited[neighbor]){

                    visited[neighbor] = true;
                    // Push to stack to be checked next
                    stack.push(neighbor);

                }

            });

        }

        return result;

    }




    breadthFirstTraversal(start){

        // We need a queue (FIFO) - will use an array and shift/push methods (adding to end and removing from beginning | First-In-First-Out)
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;

        while(queue.length){
            // Remove first element
            currentVertex = queue.shift();


            result.push(currentVertex);

            // Add neightbors to queue (if not visited)
            this.adjacencyList[currentVertex].forEach( neighbor=>{

                if(!visited[neighbor]){

                    visited[neighbor] = true;
                    queue.push(neighbor);
                }


            })



        }

        return result;

    }

}

// Create Graph
const g = new Graph();

// Adding vertices (nodes)
g.addVertext("A")
g.addVertext("B")
g.addVertext("C")
g.addVertext("D")
g.addVertext("E")
g.addVertext("F")

// Adding Edges (vertex connections)
g.addEdge("A", "B" );
g.addEdge("A", "C" );
g.addEdge("B", "D" );
g.addEdge("C", "E" );
g.addEdge("D", "E" );
g.addEdge("D", "F" );
g.addEdge("E", "F" );


// Diagram
//        A
//      /   \
//     B     C
//     |     |
//     D --- E
//     \     /
//        F
        





// Removing an Edge (connection from two vertices)
// g.removeEdge("A", "C");


// Removing a vertex
// g.removeVertex("B")


// Traverse graph recursively
g.depthFirstTraversalRecursive("A");

// Traverse graph iteratively
g.depthFirstTraversalIterative("A");

// Traverse graph iteratively
g.breadthFirstTraversal("A");
