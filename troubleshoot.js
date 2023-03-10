var $ = function (id) {
    return document.getElementById(id);
};

var fixPrinter = function() 
{
    var stringOutput = "";
    var stringMessage1 = "Check the power cable.";
    var stringMessage2 = "Check the printer-computer cable.";
    var stringMessage3 = "Ensure printer software is installed.";
    var stringMessage4 = "Check / replace ink.";
    var stringMessage5 = "Check for paper jam.";
    var stringMessage6 = "Looks like everything is working fine!";
    var boolPrinting = $("not_printing").selected;  
    var boolRedLight = $("yes_redlight").selected;  
    var boolRecognised = $("not_recognised").selected;  
    if (boolPrinting === true)
    {
        if(boolRedLight === true)
        {
            if(boolRecognised === true)
            {
            stringOutput = stringMessage2 +"\n"+ stringMessage3 + "\n"+ stringMessage4;
            }
                else
                {
                stringOutput = stringMessage4 + "\n" + stringMessage5;
                }
        }
        else if (boolRecognised === true)
        {
        stringOutput = stringMessage1+"\n"+stringMessage2 +"\n"+stringMessage3;
        }
        else
        {
        stringOutput = stringMessage5;
        }
      } 
        else if(boolRedLight === true)
        {
            if(boolRecognised === true)
            {
            stringOutput = stringMessage3 + "\n" + stringMessage4;
            }
            else
            {
            stringOutput = stringMessage4;
            }
        }
            else if(boolRecognised ===true)
            {
            stringOutput = stringMessage3;
            }
            else
            {
            stringOutput = stringMessage6;
            }
       $("output").value = stringOutput 
    };
window.onload = function () 
    {
    $("troubleshoot").onclick = fixPrinter;
};