function onClickMenu() {
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");

    document.getElementById("menu-bg").classList.toggle("change-bg");
}
document.getElementById("bt1");
document.getElementById("bt2");
var l = window.localStorage;

function fun() {

    alert(l.getItem("BLOODPRESSURE"));
    alert(l.getItem("BLOODSUGAR"));
    alert(l.getItem("CALORIE"));
}
var counter = 0;
var i=0;
var size =7;

var a1=new Array();
var a2=new Array();
var a3=new Array();

for(var k =0;k<size;k++)
    {
        a1[k]=0;
        a2[k]=0;
        a3[k]=0;
    }
function myfunction() {
    
    if(counter>=7){
        counter=0;
        average();
    }
    document.getElementById("count").innerHTML = ++counter;
    var a = document.getElementById("bpl").value;
    var b = document.getElementById("bsl").value;
    var c = document.getElementById("cal").value;
    a1[i]=a;
   
    a2[i]=b;
    a3[i]=c;
    i++;
   
    l.setItem("BLOODPRESSURE", a);
    l.setItem("BLOODSUGAR", b);
    l.setItem("CALORIE", c);
   // alert("data is saved");
}
function average()
{
    var sum1=parseFloat(0);
    var sum2=parseFloat(0);
    var sum3=parseFloat(0);
    for(var j=0;j<7;j++)
        {  
             console.log(sum1);
    console.log(sum2);
    console.log(sum3);
    
            sum1+=parseFloat(a1[j]);
            
            sum2+=parseFloat(a2[j]);
            
            sum3+=parseFloat(a3[j]);
        }
    var bp=sum1/7;
    var bs=sum2/7;
    var cl=sum3/7;
    alert("average bp="+bp);
    alert("average bs="+bs);
    alert("average cl="+cl);
    
    if(bp <= 120)
        {
            alert("your bp is below normal check suggestion for low blood pressure");
            
        }
    else if(bp>=139)
        {
            alert("your bp is above average check suggestion for high blood pressure");
        }
    else
        {
            alert("your bp is normal");
        }
        if(bs <= 100)
        {
            alert("your blood sugar is below normal check suggestion for low blood sugar");
            
        }
    else if(bs>=200)
        {
            alert("your blood sugar is above average check suggestion for high blood sugar");
        }
    else
        {
            alert("your blood sugar is normal");
        }
        if(cl <= 120)
        {
            alert("your calori intake is below normal check suggestion for calori intake pressure");
            
        }
    else if(cl>=139)
        {
            alert("your calori intake is above average check suggestion for calori intake");
        }
    else
        {
            alert("your calori intake is normal");
        }
}
