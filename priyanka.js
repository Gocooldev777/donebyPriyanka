bill=[bill1={a:1000,b:2000,c:1000},
    bill2={a:1000,b:200,c:100,d:300},
    bill3={a:1000,b:3000,d:200},
  ]
function average(object){
    arr=[]
    sum=0
    avg=0
    for(i in object){
        arr.push(object[i])
    }
    for(i of arr){
        sum=sum+i
    }
          avg=sum/arr.length
    return avg
}
const paidbill=(object)=>{
for(i in object){
    avge=average(object)
    for(i in object){
        object[i]=object[i]-avge
    }
 
}
return object
}

for(i in bill){
bill[i]=paidbill(bill[i])
}
console.log(bill)

settle={}
for(i=0;i<bill.length;i++){
for(j in bill[i]){
  if(j in settle){
    settle[j]=settle[j]+bill[i][j]
  }
  else{
    settle[j]=bill[i][j]
  }
}
}
console.log(settle)

persontoget={}
persontopay={}
for(i in settle){
    if(settle[i]==0){
    }
    else if (settle[i]<0){
          persontopay[i]=settle[i]
    }
    else if(settle[i]>0){
          persontoget[i]=settle[i]
    }
}
//person to pay
arr=[]
pk={}
for(i in persontopay){
arr.push(persontopay[i])
}
function values(h,k){
return h,k
}
arr.sort(values)
for(j of arr){
for(k in persontopay){
  if(j==persontopay[k]){
    pk[k]=persontopay[k]
  }
}
}
console.log(pk,"person to pay")

//sorting person to get
arr1=[]
kp={}
for(i in persontoget){
arr1.push(persontoget[i])
}
function values(h,k){
return h-k
}
arr1.sort(values)
arr1.reverse()
for(j of arr1){
for(k in persontoget){
  if(j==persontoget[k]){
    kp[k]=persontoget[k]
  }
}
}
console.log(kp,"person to get")

const zeroremove=(object)=>{
zeroremoveobject={}
for(i in object){
  if(i in object){
    if(object[i]!=0){
      zeroremoveobject[i]=object[i]
    }
  }
  return zeroremoveobject
}
}
persontoget = kp
persontopay = pk
for(j in persontopay){
for(i in persontoget){
  if(persontoget[i]!=0&persontopay[j]!=0){
    if(persontoget[i]<Math.abs(persontopay[j])){
      console.log(`${j} has to pay ${i}:Rs${persontoget[i]}`)
      remaining=persontopay[j]+persontoget[i]
      persontopay[j]=remaining
      persontoget[i]=0
    }else if(persontoget[i]>Math.abs(persontopay[j])){
      console.log(`${j} has to pay ${i}:Rs${Math.abs(persontopay[j])}`)
      remaining=persontopay[j]+persontoget[i]
      persontopay[j]=0
      persontoget[i]=remaining  
    }else if(persontoget[i]==Math.abs(persontopay[j])){
      console.log(`${j} has to pay ${i}:Rs${Math.abs(persontopay[j])}`)
      remaining=persontopay[j]+persontoget[i]
      persontopay[j]=0
      persontoget[i]=0  
  }
}
}
}