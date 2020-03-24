function evaluateLearnerActivity(activityArray) {
  // Return an array containing 3 values:
  // 1. number of days that the user completed a lesson
  // 2. longest streak
  // 3. level based on the last 7

  //   User status rules
  // <= 2 'Slow starter' [0,1,2]
  // >2 && <= 4 'Getting there' [3, 4]
  // >4 'Super user' [5,6 7]

  // Instructions
  // run npm install to ensure that you install Jest, the test framework
  // if you want to test you code, run 'npm test' from the console and look at the console output to see if your tests passed

  //   Example input
  //  [1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0]

  // Example output
  // [13, 5, 'Super user']

  let activitySummary = [];

  let daysActive = getNumberOfDaysActive(activityArray);
  let longestStreak = getLongestStreak(activityArray);
  let status = getUserStatus(activityArray);

  activitySummary.push(daysActive);
  activitySummary.push(longestStreak);
  activitySummary.push(status);

  return activitySummary;
}

function getNumberOfDaysActive(activityArray) {
  activityArray = activityArray.filter(x => {
    return x === 1;
  });
  return activityArray.length;
}

function getLongestStreak(activityArray) {
  let streak = 0;
  let longestStreak = 0;
  activityArray.forEach(element => {
    streak = element === 1 ? ++streak : 0;
    longestStreak = streak > longestStreak ? streak : longestStreak;
  });
  return longestStreak;
}

function getUserStatus(activityArray) {
  let lastSevenDays = activityArray.slice(activityArray.length - 7);
  lastSevenDays = lastSevenDays.filter(x => {
    return x === 1;
  });

  let status =
    lastSevenDays.length <= 2
      ? "Slow starter"
      : lastSevenDays.length > 2 && lastSevenDays.length <= 4
      ? "Getting there"
      : "Super user";

  return status;
}

// do not remove or change name
module.exports = evaluateLearnerActivity;
