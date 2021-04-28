export default function handler(req, res) {
    const graphData = {
        graph: [
            {node: 01, name: "Nodo 1"},
            {node: 02, name: "Nodo 2", childs: [
                {node: 8, name: "Nodo 8", title: "Cliente", idioma: "ESP"},
                {node: 78, name: "Nodo 78", id: 101, local: "Argentina", childs: [
                    {node: "Ab", name:"Nodo AB", origen: "Latino", compras: 12},
                    {node: "js", name: "Nodo JX", tipo: {cliente: true, edad: 32, descripcion: "Cliente test"} }
                ]}
            ]},
            {node: 03, name: "Nodo 3", childs: [
                {isA: 0},
                {isB: 1}
            ]}
        ]

      };
      
    res.status(200).json(graphData);
  }