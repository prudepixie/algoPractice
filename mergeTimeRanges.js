// O(nlgn), because we had to sort the array first,
// if meetings were sorted already, it could be O(n)
function mergeRanges(meetings) {

  // sort meetings by start time first
  meetings.sort((a, b) => a.startTime - b.startTime);

  let mergedMeetings = [meetings[0]];

  for (let i = 1; i < meetings.length; i ++) {
    let current = meetings[i];
    let last = mergedMeetings[mergedMeetings.length-1];

    if (current.endTime > last.endTime && current.startTime <= last.endTime) {
      // merge times
      mergedMeetings[mergedMeetings.length-1] = {'startTime': last.startTime, 'endTime': current.endTime}
    } else if (current.startTime > last.endTime) {
      mergedMeetings.push(current);
    }
  }
  return mergedMeetings;
}


// function mergeRanges(meetings) {
//
// // Create a deep copy of the meetings array
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone
// const meetingsCopy = JSON.parse(JSON.stringify(meetings));
//
// // Sort by start time
// const sortedMeetings = meetingsCopy.sort((a, b) => {
//   return a.startTime - b.startTime;
// });
//
// // Initialize mergedMeetings with the earliest meeting
// const mergedMeetings = [sortedMeetings[0]];
//
// for (let i = 1; i < sortedMeetings.length; i++) {
//   const currentMeeting    = sortedMeetings[i];
//   const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
//
//   // If the current meeting overlaps with the last merged meeting, use the
//   // later end time of the two
//   if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
//     lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
//   } else {
//
//     // Add the current meeting since it doesn't overlap
//     mergedMeetings.push(currentMeeting);
//   }
// }
//
// return mergedMeetings;
// }
