// An unDirected, unweighted Graph built using an adjacency list
// Includes Dijkstra's Algorithm

class WeightedGraph {

    constructor(){
        this.adjacencyList = {};

        // Format:
        // {
        //      "A": [ { name: "B", weight: 10 }, { name: "C", weight: 5 } ]
        //      "B": [ { name: "A", weight: 10 } ]
        //      "C": [ { name: "A", weight: 5 } ]
        // }
    }
    
    // ########## Adding/Removing Vertices/Edges
    addVertext(vertex){
        if( ! this.adjacencyList[vertex] ) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight){
        // If the specified vertex doesn't exist - add it
        if( ! this.adjacencyList[vertex1]){
            this.addVertext(vertex1);
        }

        // Add vertex
        this.adjacencyList[vertex1].push( { name: vertex2, weight } );
        
        // Repeat for the second vertex
        
        // If the specified vertex doesn't exist - add it
        if( ! this.adjacencyList[vertex2]){
            this.addVertext(vertex2);
        }

        // Add vertex
        this.adjacencyList[vertex2].push( { name: vertex1, weight} );
    }

    removeEdge(vertex1, vertex2){
        // Remove vertex2 from the vertex1 edges and vice versa
        if( this.adjacencyList[vertex1] ) this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter( v => v.name != vertex2);
        if( this.adjacencyList[vertex2] ) this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter( v => v.name != vertex1);
    }

    removeVertex(vertex){
        //  Guard clause
        if( ! this.adjacencyList[vertex] ) return;

        //Find edges and remove this vertex from those other edges
        for(let v of this.adjacencyList[vertex] ){
            this.removeEdge(vertex, v.name);
        } 


        //Remove vertex itself from the list
        delete this.adjacencyList[vertex];
    }








    // ########## Graph Traversal/Searching

    // Depth-First Search (recursive)
    depthFirstTraversalRecursive(startingVertexName){

        const result = [];
        const visitedVertices = {};

        const DFSTraverse = vertex => {
            
            // Base case
            if( ! vertex ) return null;

            // Mark as visited  
            visitedVertices[vertex] = true;
            result.push(this.adjacencyList[vertex]);
            
            console.log("VERTX: ", vertex)
            // Loop through all neighbor vertices of this vertex
            this.adjacencyList[vertex]
                .forEach( neighbor => {

                
                    // Skip visited ones
                    if(visitedVertices[neighbor.node]) return;

                    DFSTraverse(neighbor.node)

                });


        }

        DFSTraverse(startingVertexName); 


        return result;

    }

    depthFirstTraversalIterative(startingVertexName){

        // We need a stack (LIFO) - will use an array and pop/push methods to add to the end and remove from the end (Last-In-First-Out)
        const stack = [startingVertexName];     // Things to check
        const result = [];                  // Things to return
        const visited = {};                 // Things processed already

        visited[startingVertexName] = true;
        let currentVertex;

        while (stack.length){
            //  Pop off next item on the stack to check
            currentVertex = stack.pop();
            
            // Push iten  to result list
            result.push(this.adjacencyList[currentVertex]);

            // Loop through all neighbors of this vertex    
            this.adjacencyList[currentVertex].forEach( neighbor => {
                // Make sure we haven't visited this neighbor
                if(! visited[neighbor.node]){

                    visited[neighbor.node] = true;
                    // Push to stack to be checked next
                    stack.push(neighbor.node);

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


            result.push(this.adjacencyList[currentVertex]);

            // Add neightbors to queue (if not visited)
            this.adjacencyList[currentVertex].forEach( neighbor=>{

                if(!visited[neighbor.node]){

                    visited[neighbor.node] = true;
                    queue.push(neighbor.node);
                }


            })



        }

        return result;

    }

    // Slow and not most efficient most can handle negative weights
    bellmanFord(start) {
        const distances = {};
        const vertices = Object.keys(this.adjacencyList);

        // Step 1: Initialize distances to infinity, except start node
        for (let vertex of vertices) {
            distances[vertex] = Infinity;
        }
        distances[start] = 0;

        // Step 2: Relax edges V-1 times (V = number of vertices)
        for (let i = 0; i < vertices.length - 1; i++) {
            for (let vertex of vertices) {
                for (let neighbor of this.adjacencyList[vertex]) {
                    const newDist = distances[vertex] + neighbor.weight;
                    if (newDist < distances[neighbor.name]) {
                        distances[neighbor.name] = newDist;
                    }
                }
            }
        }

        // Step 3: Check for negative-weight cycles
        for (let vertex of vertices) {
            for (let neighbor of this.adjacencyList[vertex]) {
                const newDist = distances[vertex] + neighbor.weight;
                if (newDist < distances[neighbor.name]) {
                    console.log("Graph contains a negative-weight cycle");
                    return;
                }
            }
        }

        return distances;
    }


    // Dijkstra's Shortest Path Algorithm
    // Note: "Node"" is the name of a vertex
    Dijkstra( startingVertexName, endingVertexName ){

        
        // This stores shortest distancesFromStart from startingVertexName to a given vertex
        const distancesFromStart = {};
        // Format:
        // {
        //      A: 0,
        //      B: 10
        //      C: 8
        // }


        // This contains a mapping for each vertex. For a given vertex name it will save the previous vertex needed to get to the one (in the shortest distance).
        const priorVertices = {};    
        
        // Format:
        // {
        //      A: null,
        //      B: C
        //      C: A
        // }
        // ^ that is to say, current short distancesFromStart to 
            // A is null (not deteremined yet)
            // B is from C
            // C is from A
            // We can update this as we find shorter distancesFromStart to/from vertices
        
        // This stores everything in distancesFromStart, but ordered by distance such that closest vertices are at the from of the queue (lowest value in the priority property)
        const vertexNamesToCheck = new PriorityQueue();

        let currentVertexNameToCheck;
        const path = [];      // To return at end 

        // 1. Initialize  
            // Shortest distancesFromStart from A to some vertex. 
            // Since we're just starting all we know is to distance from A to itself (0) so we'll set "A" to zero and rest will be Infinity until we work out the shortest distancesFromStart to those other vertices
        for ( let vertexName in this.adjacencyList ){

            if(vertexName === startingVertexName){
                distancesFromStart[vertexName] = 0;
                // Add in the PriorityQueue of things to check and give it highest priority (0)
                vertexNamesToCheck.enqueue(vertexName,0);

            }
            else{
                distancesFromStart[vertexName] = Infinity;
                // Add in the PriorityQueue of things to check and give it lowest priority (0)
                vertexNamesToCheck.enqueue(vertexName,Infinity);
            }
            
            // We haven't checked distance from startingVertexName to this vertexName - set shortestDistance to null for now until we find a shorter one later
            priorVertices[vertexName] = null;

        }

        

        // 2. As long as we have something to visit
        while(vertexNamesToCheck.values.length){

            // Get next high-priority thing from queue 
            // Since its ordered by distance, the vertices with the shortest distance from the startingVertexName are at the top (closest ones to startingVertexName)
            currentVertexNameToCheck = vertexNamesToCheck.dequeue().value;

            // If 
            if(currentVertexNameToCheck === endingVertexName){
                // DONE - FOUND SHORTEST PATH
                
                // ==== BUILD PATH ====
                // Now that we've reached the last vertex (our destination), we can push all vertices into the path list in the backwards order - starting the ending vertex and working out way backwards to the start (we can reverse the order and add it the starting vertex before returning).
                // Loop through priorVertices list -  starting at end
                while(priorVertices[currentVertexNameToCheck]){
                    path.push(currentVertexNameToCheck);
                    // Set the next one to check to be the vertex prior to this one
                    currentVertexNameToCheck = priorVertices[currentVertexNameToCheck];
                    // NOTE : Stating vertex won't have a prior vertex assigned to it and will be null - once we hit this our while loop here will end
                }

                // Since we've buit our path, break out of loop where we check things in queue
                break;

            }

            
            // Get neighbors of currentVertexNameToCheck and find their distancesFromStart
            if(currentVertexNameToCheck || distancesFromStart[currentVertexNameToCheck] != Infinity){

                // Loop through all neighboring vertexNamesToCheck
                for(let neighbor in this.adjacencyList[currentVertexNameToCheck]){
                    // Get neighbor node
                    let neighborVertex = this.adjacencyList[currentVertexNameToCheck][neighbor];

                    // Calculate distance from start to currentVertexNameToCheck and add that to distance from currentVertexNameToCheck to neighbor. That will equal total distance from startingVertexName to this neighbor vertexNamesToCheck
                    let neighborNodeDistanceCalculated = distancesFromStart[currentVertexNameToCheck] + neighborVertex.weight;
                    let neighborVertexName = neighborVertex.name;

                    // If the neighborNodeDistanceCalculated is shorter on this path than what we already have saved - update the shortest distance
                    if(neighborNodeDistanceCalculated <  distancesFromStart[neighborVertexName]){

                        // Update new shortest distance from startingVertexName to the neighborNode of currentVertexNameToCheck
                        distancesFromStart[neighborVertexName] = neighborNodeDistanceCalculated;

                        // Update where we should start from to get to neighborNode
                        priorVertices[neighborVertexName] = currentVertexNameToCheck;

                        // Enqueue in priority queue by pushing neighborNode to be checked (to have its neighbor vertexNamesToCheck checked)
                        vertexNamesToCheck.enqueue( neighborVertexName, neighborNodeDistanceCalculated );

                    }
                }


            }

        }
        // End loop: Iterating through vertexNamesToCheck
        // We should have a path now, just need to reverse the order and add our starting vertex at the start
        return path.concat(startingVertexName).reverse()

    }

}



// Creating PriorityQueue Class for Dijkstra's Algorithm
class PriorityQueue{

    constructor(){
        this.values = [];
    }
    
    enqueue( item, priority ){

        const newNode = new Node( item, priority );

        this.values.push(newNode);

        if(this.values.length > 1) this.bubbleUp();

        return this.values;
    }

    // Once any value is enqueued, bubble that value up the heap as needed to ensure parent is still smaller than any child nodes
    bubbleUp(){

        let index = this.values.length - 1;
        let parentIndex = Math.floor( (index - 1) / 2);

        // Keep checking if current node val is greater than its parent

        while( parentIndex >= 0 && this.values[index].priority < this.values[parentIndex].priority ){
            // console.log(`Inserted => index: ${index} | ${parentIndex}`)
            const current = this.values[index];

            // Swap (step 1) Put parent value in current one
            this.values[index] = this.values[parentIndex];

            // Swap (step 2) Put current val in parent spot
            this.values[parentIndex] = current;

            // Update new current indexes
            index = parentIndex;                            // Next index to check should be new parent we just added
            parentIndex = Math.floor( (index - 1) / 2);     // Next parent to check should be parent of new parent to check
        }
    
    }



    // dequeue root and return it - also, update tree
    dequeue(){

        const nextToDo = this.values[0];
        // Remove top most item and add new root (top most priority item)
        if(this.values.length > 1) this.bubbleDown();
        return nextToDo;

    }
    // Start from top (largest index) and make sure children are smaller
    bubbleDown(){

        const idxIsInBounds = i => i >= 0 && i < this.values.length;
        const valueIsLess = (idx, idx2) => idxIsInBounds(idx) && this.values[idx].priority < this.values[idx2].priority;

        let currentIdx = 0;

        // Move last element to begining to start bubbling down
        const end = this.values.pop();
        
        // Only push last element to the start if array isn't empty
        if(this.values.length > 0) this.values.splice(currentIdx,1, end );
        
        while( true ){
            
            if(this.values.length == 0) break;
            
            let leftChildIdx = (currentIdx * 2) + 1, 
                rightChildIdx = (currentIdx * 2) + 2;
            let leftChildIsLess =  valueIsLess(leftChildIdx, currentIdx),
                rightChildIsLess = valueIsLess(rightChildIdx, currentIdx);
            const lowerPriorityChildrenExist = (rightChildIsLess || leftChildIsLess);
            
            if( currentIdx > this.values.length || ! lowerPriorityChildrenExist ) break;

            // At this point we know at least one of the child nodes is greater than the current node - need to reorder.


            // The root is not the larger than its children - save it so we can swap with a child
            const currentParent = this.values[currentIdx];

            // Find greater child to swap with
            const childIdxToSwap = this.values[rightChildIdx].priority < this.values[leftChildIdx].priority ? rightChildIdx : leftChildIdx;
            
            // Move child val into current idx (parent)
            this.values[currentIdx] = this.values[childIdxToSwap];
            
            // Move parent val in child
            this.values[childIdxToSwap] = currentParent;

            // Update index
            currentIdx = childIdxToSwap; 

        }

    }



}

// Using this Node class just for the Priority Queue
class Node{
    constructor(item, priority){
        this.value = item;
        this.priority = priority;
    }
}





// ============= MAIN PROGRAM ===========



// Create Graph
const g = new WeightedGraph();

// Adding vertices (nodes)
g.addVertext("A")
g.addVertext("B")
g.addVertext("C")
g.addVertext("D")
g.addVertext("E")
g.addVertext("F")

// Adding Edges (vertex connections)
g.addEdge("A", "B", 4 );
g.addEdge("A", "C", 2 );
g.addEdge("B", "E", 3 );
g.addEdge("C", "D", 2 );
g.addEdge("C", "F", 4 );
g.addEdge("D", "E", 3 );
g.addEdge("D", "F", 1 );
g.addEdge("E", "F", 1 );



g.Dijkstra("A", "E");




// Traverse graph recursively
g.depthFirstTraversalRecursive("A");

// Traverse graph iteratively
g.depthFirstTraversalIterative("A");

// Traverse graph iteratively
g.breadthFirstTraversal("A");




// Removing an Edge (connection from two vertices)
// g.removeEdge("A", "C");


// Removing a vertex
// g.removeVertex("B")

