function getClockAngle(hh_mm:string):number{
  let time = hh_mm.split(":");
  let hourAngle = Number(time[0])%12*30 + Number(time[1])*0.5;
  let minAngle = Number(time[1])*6;
  let difAngle = Math.max(hourAngle,minAngle)-Math.min(hourAngle,minAngle);
  return Math.min(difAngle,360-difAngle);
}

console.log(getClockAngle("09:00"));
console.log(getClockAngle("17:30"));