function setAlarm(employed, vacation) {
  return employed === true || vacation === false ? true : false;
  // return employed && !vacation
}

console.log(setAlarm(true, false));
