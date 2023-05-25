//your JS code here. If required.
document.getElementById("btnSelectRemove").addEventListener("click", function(){
	const colorSelect = document.getElementById("colorSelect");
	colorSelect.firstElementChild.remove();
})
