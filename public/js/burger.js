$(document).on("click","#add-burger", (event) => {
	event.preventDefault();
	const burger = {burger: $("#burger-order").val().trim()};
	
	$.ajax({
		url: "/api/burgers",
		type: "POST",
		data: burger
	}).then( () => {
		location.reload();
	});
});

$(".eat-burger").click( function(event) {
	event.preventDefault();
	let id = $(this).data("id");

	$.ajax("/api/burgers/" + id,
		{type: "DELETE"
	}).then( () => {
		console.log("nom nom" + id);
		location.reload();
	});
})