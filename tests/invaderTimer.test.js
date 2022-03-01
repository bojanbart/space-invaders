import config from "../src/config.js";
import { isItTimeToShoot, isItTimeToRun } from "../src/invaderTimer.js";

let testTime = 1646079611290;
const dateNowStub = jest.fn(() => testTime);
let realDateNow;

beforeEach(() => {
  realDateNow = Date.now.bind(global.Date);
  global.Date.now = dateNowStub;
});

afterEach(() => {
  global.Date.now = realDateNow;
});

test("time to shoot", () => {
  testTime = 1646079611290;

  // should not shot at first pass
  expect(isItTimeToShoot()).toBeFalsy();

  testTime += config.invadersShotMaxInterval * 1000 + 1;
  expect(isItTimeToShoot()).toBeTruthy();
});

test("time to run", () => {
  testTime = 1646079611290;

  // should not shot at first pass
  expect(isItTimeToRun()).toBeFalsy();

  testTime += config.invadersRunMaxInterval * 1000 + 1;
  expect(isItTimeToRun()).toBeTruthy();
});
