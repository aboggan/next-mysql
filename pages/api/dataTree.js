import Cors from "cors";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});
// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}


export default async function handler(req, res) {
  /*const graphData = {
        graph: [
            {node: 1, name: "Nodo 1"},
            {node: 2, name: "Nodo 2", childs: [
                {node: 8, name: "Nodo 8", title: "Cliente", idioma: "ESP"},
                {node: 78, name: "Nodo 78", id: 101, local: "Argentina", childs: [
                    {node: "Ab", name:"Nodo AB", origen: "Latino", compras: 12},
                    {node: "js", name: "Nodo JX", tipo: {cliente: true, edad: 32, descripcion: "Cliente test"} }
                ]}
            ]},
            {node: 3, name: "Nodo 3", childs: [
                {isA: 0},
                {isB: 1}
            ]}
        ]

      };*/

  const graphData = {
    root_node: "nombre nodo root",
    root_node_id: 0,
    childs: [
      {
        node_name: "nodo uno",
        node_id: 1,
        node_depth: 1,
        has_child: false,
        childs: [],
      },
      {
        node_name: "nodo dos",
        node_id: 2,
        node_depth: 1,
        has_child: true,
        childs: [
          {
            node_name: "nodo ocho",
            node_id: 8,
            node_depth: 2,
            has_child: false,
            childs: [],
          },
          {
            node_name: "nodo setenta y ocho",
            node_id: 78,
            node_depth: 2,
            has_child: true,
            childs: [
              {
                node_name: "nodo ab",
                node_id: 124,
                node_depth: 3,
                has_child: false,
                childs: [],
              },
              {
                node_name: "nodo jx",
                node_id: 125,
                node_depth: 3,
                has_child: false,
                childs: [],
              },
              {
                node_name: "nodo jx 2",
                node_id: 127,
                node_depth: 3,
                has_child: false,
                childs: [],
              },
              {
                node_name: "nodo jx 3",
                node_id: 126,
                node_depth: 3,
                has_child: false,
                childs: [],
              },
            ],
          },
        ],
      },
      {
        node_name: "nodo tres",
        node_id: 3,
        node_depth: 1,
        has_child: true,
        childs: [
          {
            node_name: "nodo sesenta y siete",
            node_id: 67,
            node_depth: 2,
            has_child: false,
            childs: [],
          },
        ],
      },
      {
        node_name: "nodo YU",
        node_id: 201,
        node_depth: 1,
        has_child: false,
        childs: [],
      },
    ],
    schema_version: "1.0",
  };

  await runMiddleware(req, res, cors)

  res.status(200).json(graphData);
}
