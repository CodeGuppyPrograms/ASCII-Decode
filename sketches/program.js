// #SKETCHNAME Codes to ASCII
var txtCodes;
var txtBase;
var txtOutput;

createUI();
showCodes();

function createUI()
{
    background('PapayaWhip');
    fill(0);
    noStroke();

    // display the main title
    push();
    fill("Tan");
    rect(10, 10, 780, 40);
    fill("Black");
    textSize(25);
    text("CODES to ASCII", 10, 39);
    pop();

    text("Type here your codes separated by space characters", 10, 80);
    txtCodes = createEdit(10, 90, 780, 120);
    txtCodes.text = "73 32 76 79 86 69 32 67 79 68 73 78 71";
    txtCodes.onchange = showCodes;

    text("Base / Radix for the codes", 10, 230);
    txtBase = createEdit(10, 240, 80);
    txtBase.text = "10";
    txtBase.readonly = true;

    var btn2 = createButton(100, 240, 32, 22);
    btn2.text = "2";
    btn2.onclick = function() { txtBase.text = "2"; showCodes(); }

    var btn10 = createButton(140, 240, 32, 22);
    btn10.text = "10";
    btn10.onclick = function() { txtBase.text = "10"; showCodes(); }

    var btn16 = createButton(180, 240, 32, 22);
    btn16.text = "16";
    btn16.onclick = function() { txtBase.text = "16"; showCodes(); }

    text("Decoded characters", 10, 300);
    txtOutput = createEdit(10, 310, 781, 275);
    txtOutput.readonly = true;
}

function showCodes()
{
    var msg = txtCodes.text;
    var base = parseInt(txtBase.text);

    var arMsg = msg.split(" ");

    var txt = "";

    for(var i = 0; i < arMsg.length; i++)
    {
        // usually empty due to extra space characters
        if (!arMsg[i])
            continue;
        
        var code = parseInt(arMsg[i], base);

        var chr = String.fromCharCode(code);
        
        // print only characters in visible ASCII range [32, 127)
        chr = code >= 32 && code < 127 ? chr : ".";
        txt += chr;
    }
    
    txtOutput.text = txt; 
}
