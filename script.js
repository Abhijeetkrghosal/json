$(function(){getuser(1)})
function getuser(id=1){$.getJSON("users"+id+".json",function(data){var users_details='';$.each(data,function(key,value){users_details+='<div class="col-sm-4">'+'<div class="card" id="row_data">'+'<p>'+value.name+'</p>'+'<p>'+value.gender+'</p>'+'<p>'+value.designation+'</p>'+' <p>'+value.age+'</p>'+'</div>'+'</div>'});$('#aaaa').html(users_details)})}