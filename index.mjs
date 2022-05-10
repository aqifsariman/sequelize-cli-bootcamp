import db from './models/index.mjs';

const action = process.argv[2];

// TODO Add Trip
const createTrip = async () => {
  try {
    const trip = await db.Trip.create({
      name: process.argv[3],
      created_at: Date.now(),
      updated_at: Date.now(),
    });
    console.log('Success!');
    console.log(trip);
    console.log(trip.name);
  } catch (error) {
    console.log(error);
  }
};

// TODO Add Attraction
const addAttraction = async () => {
  try {
    const trip = await db.Trip.findOne({
      where: { name: process.argv[3] },
    });
    const tripId = trip.id;
    const newAttraction = await db.Attraction.create({
      name: process.argv[4],
      tripId,
      created_at: Date.now(),
      updated_at: Date.now(),
    });
    console.log('Success!');
    console.log(newAttraction);
  } catch (error) {
    console.log(error);
  }
};

// TODO Add Find Trip
const findTrip = async () => {
  try {
    const trip = await db.Trip.findOne({
      where: {
        name: process.argv[3],
      },
    });
    const tripId = trip.id;
    const attractionsInTrip = await db.Attraction.findOne({
      where: {
        tripId,
      },
    });
    console.log('Success!');
    console.log(attractionsInTrip.name);
  } catch (error) {
    console.log(error);
  }
};

if (action === 'create') {
  createTrip();
}
if (action === 'add-attrac') {
  addAttraction();
}
if (action === 'trip') {
  findTrip();
}
