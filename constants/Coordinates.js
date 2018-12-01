import getRandomArbitrary from '../utils/getRandomArbitrary';

const manila = {
  'latitude': 14.5995,
  'longitude': 120.9842
};

const minPhCoordinates = {
  'latitude': 6.0474,
  'longitude': 121.0090
};

const maxPhCoordinates = {
  'latitude': 20.4485,
  'longitude': 121.9708
};

const randomCoordinates = getRandomCoordinates();
function getRandomCoordinates() {
  let randomMaxCount = 50;
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