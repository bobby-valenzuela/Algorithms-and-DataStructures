// An unDirected, unweighted Graph built using an adjacency list
class Graph {

    constructor(){
        this.adjacencyList = {};
    }

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
}

// Create Graph
const g = new Graph();

// Adding vertices (nodes)
g.addVertext("A")
g.addVertext("B")
g.addVertext("C")
g.addVertext("D")
g.addVertext("E")

// Adding Edges (vertex connections)
g.addEdge("A", "C" );
g.addEdge("A", "B" );
g.addEdge("A", "E" );
g.addEdge("B", "D" );
g.addEdge("B", "C" );


// Removing an Edge (connection from two vertices)
g.removeEdge("A", "C");


// Removing a vertex
g.removeVertex("B")
