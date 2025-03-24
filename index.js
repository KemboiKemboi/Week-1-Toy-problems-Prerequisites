function speedDetector(speed) {
    const speedLimit = 70;
    if (speed < speedLimit) {
      console.log("Ok");
    } else {
      let points = Math.floor((speed - speedLimit) / 5);
      if (points > 12) {
        console.log("License suspended");
      } else {
        console.log(`Points: ${points}`);
      }
    }
  }
  
  speedDetector(80); // Points: 2
  speedDetector(120); // License suspended
  
  