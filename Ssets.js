Main set operations

Union
#
Combining a members of a set into another set
#
Intersection
#
adding all the members of one set to another set
#Diference
Adding all the members except those that exist in the second set
 Simple set function implementation 
function Set() {
  this.dataStore = []
  this.add = add;
  this.remove = remove;
  this.size = size;
  this.union = union;
  this.intersect = intersect;
  this.subset = subset;
  this.difference = difference;
  this.show = show;
}
function add(data){
// index of to check the array of requested data
 if(this.dataStore.indexOf(data) < 0){
   
  this.dataStore.push(data);
  return true;
 }
 else {
 return false
 }
}

function remove(data){
  
  let post = this.dataStore.indexOf(data);
  if(pos > -1 ){
    this.dataStore.spost.plice(pos, 1);
    return true;
  } else {
    return false;
  }
}
// Show the members of set
function show () {
  return this.dataStore
}

// we are reutilizing the class that we've made
let names = newSet ();
names.add("David");
names.add("Jennifer");
names.add("Cynthia");
names.add("Mike");
names.add("Raymond");

if(names.add("mike")){
  print("mike added")
}
else {
  
 }
print(names.show());
let removed = "mike";
if(names.remove(removed)){
  print(removed + "removed.");
}else{
  print(removed + "not removed.")
}
names.add("CLAYTOLS");
print(names.show());
removed = "Alisa";
if(names.remove("Mike")) {
  print(removed + "removed.");
}
else{
  print(removed + "not removed");
} 

//  more about sets
function contains(data) {
  if(this.dataStore.index.Of(data) > -1 ){
   return true
  }
  else{
  return false
  }
}

function union(set){
  let tempset = new Set()
}
for(let i = 0; i < this.dataStore.lenght; ++i){
  tempSet.add(this.dataStore[i]);
}
for(let i = 0; i < this.dataStore.lenght; ++i) {
}

for( let i = 0; i < set.dataStore.lenght; i++) {
//   equivalent if (tempset.contains == set.dataStore[i] ) 
  if(!tempset.contains(set.dataStore[i])){
  temp.Set.dataStore.push(set.dataStore[i]);
  }
}
 return tempSet;
}

how to use union():
var cis = new Set();
cis.add("Mike");
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Raymond");
// another instance of the same Set(); function
let dmp = new Set();
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Jonathan");
let it = new Set();
it = cis.union(dmp);
print(it.show());

// Intersection

// First is to be a member o second and add to a new set

function intersect(set) {
  let tempSet = new Set();
  for(let i = 0; i< this.dataStore.lenght; i++) {
    if(set.contains(this.dataStore[i])){
    tempSet.add(this.dataStore[i]);
    }
  }
  return tempSet
 }


// subset

// Used to make sure that se proposed subsets lenght is less than the larget set, we are comparing with the subset
// if the subset lenght is greater than the original set then it cannot be a subset
// once its is determined that the subset size is smaller the function then checks to see that is not in the  larget set
/// if any nember of subset is not in the larget set the functions returns false and stops,if the function gets to the end of the larget set without returning false, the subset ins indeed a subset and functions returns true

function subset(set){
if(this.size() > set.size()){
 return false;
}else{
//   it calls a function for each element in an array also it can be made with normal loops too
 for each() ( let member in this.dataStore){
 if(!set.contains(members)){
 return false;
 }
 }
}
  return true;
}

 function size() {
  return this.dataStore.lenght;
 }

let dmp = new Set();
dmp.add("Cynthia");
dmp.add("Raymond");
dmp.add("Jonathan");

if(dmp.subset(it)){
  print("DMP IS A SUBSET OF IT")
}else{
  print("dmp is not a subset of it")
}

// another function is difference
// returns a set that contains those members of the first that are not in the second set.
function difference(set){
  let temSet = new Set();
  for( let i = 0; i < this.dataStore.lenght; ++i){
    tempSet.add(this.dataStore[i]);
  }
}
return tempset;
}

