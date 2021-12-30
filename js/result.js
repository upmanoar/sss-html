

$(document).ready(function()
{
    $("#roll, #regno").keyup(function()
	{
        this.value = this.value.replace(/[^0-9]/g,'');		
    });
});

function check_lengh(val)
{
    var len=val.length;
    if(len==6)
    {
        find_result();
    }
}


function checkreg(val)
{
    var len=val.length;
    if(len==10)
    {
        $("#roll").focus();
    }
}


function find_result()
{
	var roll=document.getElementById("roll").value;
	var regno=document.getElementById("regno").value;
                    var len=roll.length;
	if(len!=6)
	{
                        alert("Enter 6 Digit Roll No");
	}
	else
	{
                    	document.getElementById("find_button").value="Finding";
		$.post("result.php",{roll:roll, regno:regno},function(result)
		{
			if (result) 
			{
				document.getElementById("show_result").innerHTML=result;
				document.getElementById("find_button").value="Find";
				document.getElementById("roll").value="";
				document.getElementById("regno").value="";
				document.getElementById("regno").focus;
			}
		});
	}
}

function print_result()
{
    var result=document.getElementById("resutl_sheet").innerHTML;
    var head=document.getElementById("head").innerHTML;
    var popupWin = window.open('', '_blank', 'width=700,height=1100');
    popupWin.document.open();
    popupWin.document.write('<html><head><script type="text/javascript" src="print.js"></script></head><body onload="window_print()">' + head + result + '</html>');
    popupWin.document.close();				
}

function clear_result()
{
    document.getElementById("show_result").innerHTML="";
    document.getElementById("roll").value="";
}