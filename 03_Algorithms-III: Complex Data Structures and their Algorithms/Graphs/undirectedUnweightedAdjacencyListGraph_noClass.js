

// Adjacency list representing relationships between key characters in "The Office"
const officeRelationships = {
    "Michael Scott": ["Dwight Schrute", "Jim Halpert", "Pam Beesly", "Ryan Howard", "Jan Levinson"],
    "Jim Halpert": ["Pam Beesly", "Michael Scott", "Dwight Schrute", "Andy Bernard"],
    "Pam Beesly": ["Jim Halpert", "Michael Scott", "Dwight Schrute", "Angela Martin"],
    "Dwight Schrute": ["Michael Scott", "Jim Halpert", "Angela Martin"],
    "Angela Martin": ["Dwight Schrute", "Oscar Martinez", "Pam Beesly", "Andy Bernard"],
    "Ryan Howard": ["Michael Scott", "Kelly Kapoor", "Jim Halpert"],
    "Kelly Kapoor": ["Ryan Howard", "Darryl Philbin"],
    "Andy Bernard": ["Jim Halpert", "Angela Martin", "Erin Hannon"],
    "Jan Levinson": ["Michael Scott"],
    "Darryl Philbin": ["Kelly Kapoor", "Michael Scott", "Jim Halpert"],
    "Erin Hannon": ["Andy Bernard", "Michael Scott"],
    "Oscar Martinez": ["Angela Martin", "Michael Scott"]
};

// Display relationships
// console.log(officeRelationships);

const breadthFirstSearch = ( graph, source ) => {

    // Queue based (array with push/shift)
    const queue = [ source ];
    const visited = {};

    while( queue.length ){
        
        // Add to visited 
        const current = queue.shift();
        visited[current] = true;

        // Enqueue any neighbor nodes
        for ( const neighbor of  graph[current] ){

            if( ! visited[neighbor] ) {
                queue.push(neighbor);
            }

        }

    }

    return Object.keys(visited).sort();
}

const depthFirstSearch = ( graph, source) => {

    // DFS uses a stack - [] push/pop
    const stack = [ source ];
    const result = [];
    const visited = {};

    
    visited[source] = true;
    let currentVertex;

    while (stack.length){

        //  Pop off next item on the stack to check
        currentVertex = stack.pop();
        
        // Push iten  to result list
        result.push(currentVertex);

        // Loop through all neighbors of this vertex    
        graph[currentVertex].forEach( neighbor => {
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

const addNode = (graph, node) => {
    graph[node] = [];
}

const addEdge = (graph, node1, node2) => {
    if(!graph[node1]) graph[node1] = [];
    graph[node1].push(node2);
    
    if(!graph[node2]) graph[node2] = [];
    graph[node2].push(node1);
}

// ACTIONS
const BFSResults = breadthFirstSearch(officeRelationships, "Michael Scott");
const DFSResulrs = depthFirstSearch(officeRelationships, "Michael Scott");

addNode(officeRelationships, "Todd Packer");
addEdge(officeRelationships, "Todd Packer", "Michael Scott");











