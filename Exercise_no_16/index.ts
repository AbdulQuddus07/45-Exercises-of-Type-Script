// Q:16 You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.Start with your program from Exercise 15.
// Add a print statement to the end of your program informing people that you found a bigger dinner table.
// Add one new guest to the beginning of your array.Add one new guest to the middle of your array. •
// Use append() to add one new guest to the end of your list. • Print a new set of invitation messages,
// one for each person in your list.

var guest_List = ["Hamza", "Hunain", "Hamid", "Haider"];
var new_member = guest_List[0];
console.log("".concat(new_member, " nhi a paye ga"));

 // adding new member in last index 
guest_List.push("Abdul Quddus");
console.log(guest_List);

 // adding new member in first index 
guest_List.unshift("Abdul Quddus");
console.log(guest_List);

 // adding new member in middle index
guest_List.splice(3,0,"Abdul Quddus");
 console.log(guest_List);
console.log("message of our updated list");

 guest_List.forEach(function (newguest_List) { return console.log("".concat(newguest_List, " would you like to dinner with me?")); });
