
// Add shopping item

$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    var userinput = $('#shopping-list-entry').val();
    $('.shopping-list').append('<li><span class="shopping-item">'+userinput+'</span><div class="shopping-item-controls"><button class="shopping-item-toggle">check</button> <button class="shopping-item-delete">delete</button></div></li>');
    $('#shopping-list-entry').val('')             
})
	

// Delete shoppingItem

$(document).on('click', 'button.shopping-item-delete',function(event){
	$(this).parent().parent().remove();
})


// Strike-trhough  shopping item

$(document).on('click', "button.shopping-item-toggle", function(event){
	$(this).parent().siblings(".shopping-item").toggleClass("shopping-item__checked");
})
