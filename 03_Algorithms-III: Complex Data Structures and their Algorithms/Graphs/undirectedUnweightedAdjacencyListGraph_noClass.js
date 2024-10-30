

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
    const result = [];
    const visited = {};
    let current;

    while( queue.length ){
        
        current = queue.shift();
        result.push(current);
        visited[current] = true;

        // Enqueue any neighbor nodes
        graph[current].forEach( neighbor => {

            if( ! visited[neighbor] )  queue.push(neighbor);   // Push to stack to be checked next

        });

    }

    return result;
}

const depthFirstSearch = ( graph, source) => {

    // DFS uses a stack - [] push/pop
    const stack = [ source ];
    const result = [];
    const visited = {};
    let current;

    while (stack.length){

        current = stack.pop();    //  Pop off next item on the stack to check
        result.push(current);     // Push iten  to result list
        visited[current] = true;

        // Loop through all neighbors of this vertex    
        graph[current].forEach( neighbor => {
            
            if(! visited[neighbor]) stack.push(neighbor);   // Push to stack to be checked next

        });

    }

    return result;
}

const addNode = (graph, node) => {
    graph[node] = [];
}

const addEdge = (graph, node1, node2) => {
    // Check if node1 exists; if not, initialize it as an empty array
    if (!graph[node1]) graph[node1] = [];
    // Add node2 to node1's adjacency list if it's not already included
    if (!graph[node1].includes(node2)) graph[node1].push(node2);

    // Repeat the same check for node2
    if (!graph[node2]) graph[node2] = [];
    if (!graph[node2].includes(node1)) graph[node2].push(node1);
}
``

// ACTIONS
const BFSResults = breadthFirstSearch(officeRelationships, "Michael Scott");
const DFSResults = depthFirstSearch(officeRelationships, "Michael Scott");

addNode(officeRelationships, "Todd Packer");
addEdge(officeRelationships, "Todd Packer", "Michael Scott");











