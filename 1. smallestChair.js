const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

var smallestChair = function (times, targetFriend) {
  const n = times.length;

  // Attach friend index to each entry: [arrival, leaving, friendIndex]
  const events = times.map((time, i) => [time[0], time[1], i]);
  events.sort((a, b) => a[0] - b[0]); // Sort by arrival time

  // Initialize priority queues with proper comparison functions
  const availableChairs = new MinPriorityQueue((x) => x);
  const occupied = new MinPriorityQueue((x) => x[0]); // prioritize by leave time

  let nextChair = 0;

  for (const [arrive, leave, friend] of events) {
    // Free up chairs from friends who have already left
    while (!occupied.isEmpty() && occupied.front()[0] <= arrive) {
      const [_, chair] = occupied.dequeue();
      availableChairs.enqueue(chair);
    }

    // Assign the smallest available chair or next new chair
    let chair;
    if (!availableChairs.isEmpty()) {
      chair = availableChairs.dequeue();
    } else {
      chair = nextChair++;
    }

    if (friend === targetFriend) return chair;

    // Mark this chair as occupied with [leave time, chair number]
    occupied.enqueue([leave, chair]);
  }
};

console.log(
  smallestChair(
    [
      [1, 4],
      [2, 3],
      [4, 6],
    ],
    1
  )
); // Output: 1
console.log(
  smallestChair(
    [
      [3, 10],
      [1, 5],
      [2, 6],
    ],
    0
  )
);
