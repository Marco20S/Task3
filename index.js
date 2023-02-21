window.onload = function()
{

   /*  <!--my bio variables--> */

    var a = "Makhosini Syabonga Nzima";
    console.log();

    document.getElementById('namee').innerHTML = a;

};

window.onload = function()
{

    var para = "aa";
    console.log(a);console.log(a);

  document.getElementById('suiii').innerHTML = para;
};

window.onload = function()
{
    /* aboout us variables */

    var mmab = "About Myself";
    console.log(mmab);

    document.getElementById('am').innerHTML = + mmab;
};

window.onload = function()
{
    var edu = "Education background";
    console.log(edu);
    document.getElementById("ed").innerHTML = + edu;
    
};

window.onload = function()
{
    var com = "Computer Literacy";
    console.log(com);
    document.getElementById("col").innerHTML = + com;

};

window.onload = function()
{
    // array
    let hs = ["Supreme Educational College", "Year Completed: 2016","Certificate: Matric "];
    document.getElementById('high').innerHTML = hs.length;
    console.log(hs);

};

window.onload = function()
{

    var ter = ["Rosebank College", "Year Completed: 2022","Certificate: Diploma in Software Development "];
    document.getElementById('varsity').innerHTML = ter.length;
    console.log(varsity);
};

window.onload = function()
{
    let comlit = new Array
    (
       {item: Word},
       {item: Word}, 
       {item: Word}, 
       {item: Word}, 
       {item: Word}, 
       {item: Word}, 
       {item: Word}, 
       {item: Word},
       {item: Word},
       {item: Word} 


    );

    let listui = "<table>"

    for (let i = 0; i <comlit.length; i++)
    {
        console.log(comli[i].item);
        listui +="<tr>"+ comli[i].item + "</te>";

    }
    listui += "</table>";

    document.getElementById("itemlist").innerHTML = listui;


};


window.onload = function()
{

};


function validateform()
    {
        var x = document.forms["myform"]["fname", "lname","email", "message"].value;
        

        if (x==""){alert("Please fill in the form");
      return false;

    }


    }




