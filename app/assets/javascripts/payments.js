/**
 * @author Sunil
 */
$(document).on("click","#click_me",function(event){
	var am = $("#amount").val();
	alert(am);
	$("#amount").val("USD 2000");
});
