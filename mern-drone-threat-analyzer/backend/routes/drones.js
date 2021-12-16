const router = require('express').Router();
let Drone = require('../models/drone.model');

// GET request ('../drones/') - retrieves the drone data logs
router.route('/').get((req, res) => {
    Drone.find()
        .then(drones => res.json(drones))
        .catch(err => res.status(400).json('Error: ' + err));
});

// POST requests ('../drones/add') - adds a new drone data log
router.route('/add').post((req, res) => {
    const velocity = Number(req.body.velocity);
    const distance = Number(req.body.distance);
    const date = Date.parse(req.body.date);

    const newDrone = new Drone({
        velocity,
        distance,
        date,
    });

    newDrone.save()
        .then(() => res.json('Drone data added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// GET request ('../drones/[obj_id]') - retrieves the drone data log by the id
router.route('/:id').get((req, res) => {
    Drone.findById(req.params.id)
        .then(drone => res.json(drone))
        .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE requests ('../drones/[obj_id]') - deletes the drone data log by the id
router.route('/:id').delete((req, res) => {
    Drone.findByIdAndDelete(req.params.id)
        .then(() => res.json('Drone data deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// POST requests ('../drones/update/[obj_id]') - updates the drone data log of the id
router.route('/update/:id').post((req, res) => {
    Drone.findById(req.params.id)
        .then(drone => {
            drone.velocity = Number(req.body.velocity);
            drone.distance = Number(req.body.distance);
            drone.date = Date.parse(req.body.date);

            drone.save()
                .then(() => res.json('Drone data updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;