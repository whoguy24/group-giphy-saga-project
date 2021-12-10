const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
// router.get('/', (req, res) => {
//   res.sendStatus(200);
// });

router.get('/', (req, res) => {
  console.log(`in /favorite GET`);

  const queryText = `SELECT * FROM "favorites";`;

  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(`Error in GET /favorite`, err);
      res.sendStatus(500);
    })
});

// add a new favorite
router.post('/', (req, res) => {
  const giphy = req.body;
  const sqlText = 
      `
          INSERT INTO favorites (url )
          VALUES ( $1 )
      `;
  pool.query(sqlText, [ giphy.images.fixed_height.url ])
  .then((result) => {
      console.log(`Added gif to the database`, result);
      res.sendStatus(201);
  })
  .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
  })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
