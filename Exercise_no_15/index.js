// Q:15 You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
// You’ll have to think of someone else to invite.Start with your program from Exercise 
//14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// Print a second set of invitation messages, one for each person who is still in your list.
var guest_List = ["Hamza", "Hunain", "Hamid", "Haider"];
var neww_member = guest_List[0];
console.log("".concat(neww_member, " nhi a paye ga"));
guest_List.splice(0, 1, "Hammad");
console.log(guest_List);
guest_List.forEach(function (newguest_List) { return console.log("".concat(newguest_List, " would you like to dinner with me?")); });
