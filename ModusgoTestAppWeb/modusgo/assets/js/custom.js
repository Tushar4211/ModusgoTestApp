
function showmenu(){
	document.getElementById("mobmenu").style.display = 'block';
}

function hidemenu(){
	document.getElementById("mobmenu").style.display = 'none';
}

function showsrch(){
	document.getElementById("topsearch").classList.remove('d-none');
	// document.getElementById("mobicon").classList.add('d-none');
	document.getElementById("cls").innerHTML= 'clear';
	document.getElementById("searchinput").focus();
	
}

$(document).ready(function(){
	$(".bg-sidebar li").click(function(){
		$(".bg-sidebar li").removeClass("active");
		$(this).addClass("active");
	});

	$(".userbox").click(function(){
		$(".user-profile").slideToggle('slow');
		$(this).toggleClass("active");
		$(".userbox i").toggleClass("move");
	});


    $('#example').addClass('nowrap').DataTable({
    	"paging":   false,
        "ordering": false,
        "info":     false,
        "searching": false,
        "responsive": true
    });


});
