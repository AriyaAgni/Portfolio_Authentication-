/*name:Ariya Agnihothri Mini Suresh
  student id:301278498
  Date:27/02/2023
*/
$(document).ready(function(){
	var element = $('meta[name="active-menu"]').attr('content');
	$('#' + element).addClass('active');
});
