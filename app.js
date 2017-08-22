
//add new item to the shopping list
// PROBLEM: I do not manage to insert two buttons after the variable with the user input 

$('#js-shopping-list-form').submit(function(event) {
            event.preventDefault();
            var userinput = $('#shopping-list-entry').val();
            $('.shopping-list').append('<li>'+userinput+'</li>');
                $('#shopping-list-entry').val('');
            })

//// by clicking delete button user deletes the shopping item
//// PROBLEM: only deleting existing lists

$("button.shopping-item-delete").click(function(event){
	$("ul li:first").remove();
})

////cross-check the item by pressing the button "check"
/// PROBLEM: DOM is modified on other objects too

$("button.shopping-item-toggle").click(function(event){
	$("span.shopping-item").toggleClass("shopping-item__checked");
})