import getRandomArbitrary from '../utils/getRandomArbitrary';

const manila = {
  'latitude': 14.5995,
  'longitude': 120.9842
};

const minPhCoordinates = {
  'latitude': 6.0474,
  'longitude': 118.7384
};

const maxPhCoordinates = {
  'latitude': 18.5875,
  'longitude': 125.0388
};

const randomCoordinates = getRandomCoordinates();
function getRandomCoordinates() {
  let randomMaxCount = 25;
  let randomCoordinates = [];
  for (let i = 0; i < randomMaxCount; i++) {
    randomCoordinates.push({
      'latitude': getRandomArbitrary(minPhCoordinates.latitude, maxPhCoordinates.latitude),
      'longitude': getRandomArbitrary(minPhCoordinates.longitude, maxPhCoordinates.longitude),
      'name': 'Random Place'
    });
  }
  return randomCoordinates;
}

const defaultDelta = {
  'latitude': 4,
  'longitude': 4
}

export default {
  manila,
  defaultDelta,
  randomCoordinates
};