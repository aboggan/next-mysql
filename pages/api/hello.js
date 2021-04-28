
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

export default function handler(req, res) {
    const menuData = {
        topLevel: [
          {
            name: "Comunidad Errepar",
            id: 101,
            children: [
              {
                name: "conozca errepar",
                id: 1001,
                link: "conozca",
              },
              {
                name: "quienes somos",
                id: 1002,
                link: "quienessomos",
              },
              {
                name: "trabajar en errepar",
                id: 1111,
                link: "trabajar",
              },
            ],
          },
          {
            name: "productos servicios",
            id: 102,
            children: [
              {
                name: "aplicaciones",
                id: 1003,
                link: "aplicaciones",
              },
              {
                name: "subscripciones",
                id: 1004,
                link: "subscripciones",
              },
            ],
          },
          {
            name: "subscripciones",
            id: 103,
            children: [
              {
                name: "conozca errepar",
                id: 1005,
                link: "conozca",
              },
              {
                name: "quienes somos",
                id: 1006,
                link: "quienessomos",
              },
            ],
          },
          {
            name: "contacto",
            id: 105,
            children: [
              {
                name: "aplicaciones",
                id: 1034,
                link: "aplicaciones",
              },
              {
                name: "subscripciones",
                id: 1023,
                link: "subscripciones",
              },
            ],
          },
        ],
      };
      
        // Run the middleware
   await runMiddleware(req, res, cors)
    res.status(200).json(menuData);
  }
  