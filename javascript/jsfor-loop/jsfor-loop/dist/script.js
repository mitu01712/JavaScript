console.clear()

var mList = [1, 2, 3, 4, 5]
 var pos;
for(pos = 0; pos < mList.length; pos++){
  console.log('position =>' + pos +'Value =>' + mList[pos])
}

//Break Keyword
console.log('============================================================================')
var pos;
for(pos = 0; pos < mList.length; pos++){
  if(pos >=3) break
  console.log('position =>' + pos +'Value =>' + mList[pos])
}

console.log('============================================================================')
 //continue Keyword

var pos;
for(pos = 0; pos < mList.length; pos++){
  if(pos % 2 !==0) continue
  console.log('position =>' + pos +'Value =>' + mList[pos])
}
console.log('================================================================================')
var pos;
for(pos = 0; pos < mList.length; pos++){
  if(pos % 2 ==0) continue
  console.log('position =>' + pos +'Value =>' + mList[pos])
}