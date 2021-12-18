const getTimeFromMS = milliSeconds => {
    
    // If negative millisecond is provided, it  is converted into positive value
    if (milliSeconds < 0) milliSeconds = -milliSeconds;

    // If 0 millisecond is provided,  function will return '0 millisecond'
    if (milliSeconds == 0 ) return '0 millisecond'


    const time = {
      day: Math.floor(milliSeconds / 86400000),
      hour: Math.floor(milliSeconds / 3600000) % 24,
      minute: Math.floor(milliSeconds / 60000) % 60,
      second: Math.floor(milliSeconds / 1000) % 60,
      millisecond: Math.floor(milliSeconds) % 1000
    };

    // console.log(time);

    return Object.entries(time)
       // To remove 0 value
      .filter(val => val[1] !== 0)
       // To make plural form  
      .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
       // To make single entry
      .join(', ');
  };

  console.log(getTimeFromMS(1002));
  console.log(getTimeFromMS(1110002));
  console.log(getTimeFromMS(0));
  console.log(getTimeFromMS(-1110002));