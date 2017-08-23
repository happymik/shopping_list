

$(function() {
	
// Add shopping item
	
// to make the code neat can we not just create a function 
// can we not just create 3 functions here:
// function addShoppingItem() {}	
	

$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    var userinput = $('#shopping-list-entry').val();
    $('.shopping-list').append('<li><span class="shopping-item">'+userinput+'</span><div class="shopping-item-controls"><button class="shopping-item-toggle">check</button> <button class="shopping-item-delete">delete</button></div></li>');
    $('#shopping-list-entry').val('')             
})
	

// Delete shoppingItem
// function deleteShoppingItem() {}	
	

$(document).on('click', 'button.shopping-item-delete',function(event){
	$(this).parent().parent().remove();
})


// Strike-trhough  shopping item
// function strikeTrhoughShoppingItem() {}	

$(document).on('click', "button.shopping-item-toggle", function(event){
	$(this).parent().siblings(".shopping-item").toggleClass("shopping-item__checked");
})

})
