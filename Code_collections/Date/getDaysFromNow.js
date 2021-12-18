const getDaysFromNow = days => {
    
    let today = new Date();
    
    if (!days || days === 0 ) return  new Date().toISOString().split('T')[0];
    today.setDate(today.getDate() + Math.abs(days));
    return today.toISOString().split('T')[0];
  };

  console.log(getDaysFromNow());
  console.log(getDaysFromNow(0));
  console.log(getDaysFromNow(1));
  console.log(getDaysFromNow(2));