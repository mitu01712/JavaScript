console.clear()
var currentDay = 'Mon'

if(currentDay === 'Mon'){
  console.log('Timings: 10:00-06:00')
}else if(currentDay === 'Tue'){
  console.log('Timings: 08:00-05:00')
}else if(currentDay === 'Wed'){
  console.log('Timings: 07:00-05:00')
}else if(currentDay === 'Thu'){
  console.log('Timings: 05:00-05:00')
}else if(currentDay === 'Fir'){
  console.log('Timings: 06:00-05:00')
}else if(currentDay === 'Sat'){
  console.log('Timings: 08:30-05:00')
}else if(currentDay === 'Sun'){
  console.log('Timings: 11:00-05:00')
}

switch(currentDay) {
  case 'Mon':
    console.log('Timings: 10:00-06:00')
    break;
    
  case 'Tue':
    console.log('Timings: 08:00-05:00')
    break;
    
  case 'Wed':
     console.log('Timings: 05:00-05:00')
    break;
    
  case 'Thu':
    console.log('Timings: 05:00-05:00')
    break;
    
  case 'Fri':
    console.log('Timings: 05:00-05:00')
    break;
    
  case 'Sat':
    console.log('Timings: 05:00-05:00')
    break;
    
  case 'Sun':
    console.log('Timings: 05:00-05:00')
    break;
    
    

}