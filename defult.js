

/*num1=prompt("please Enter The Frist Number ");
num_1=Number(num1);
num2=prompt("please Enter The Second Number ");
num_2=Number(num2);
choise_num=prompt("please Enter The number of case ");
switch(choise_num)
    {
        case '1':
            result=num_1+num_2;
            alert(result);
        break;
        
        case '2':
            result=num_1-num_2;
            alert(result);
        break;    
        case '3':
            result=num_1*num_2;
            alert(result);
        break;    
        
        case '4':
            result=num_1/num_2;
            alert(result);
        break;    
        case '5':
            result=num_1%num_2;
            alert(result);
        break;
        
        default:
            alert("erorr");
            
    }




age=prompt("please Enter the age");
Age=Number(age);
if(Age===18)
    {
        alert("welcom");
    }
else
    {
        alert("not allowed");
    }









for(i=2;i<=100;i++)
    {
        
        for(j=100;j>=2;j--)
            {
                if(j%i==0)
                    {
                        alert("the number is notprime "+j);
                    }
                else
                    {
                        alert("the number is prime "+j);
                    }
            }
    }



x=Array(10,20,30,40,50,60,70,80);
alert("the sum of item array is : "+x.length);
total=x.length;
sum=0;
for(i=0;i<total;i++)
    {
        sum+=x[i];
       
    }
 alert(sum);
document.getElementById('x').innerHTML=sum;



y= new Array('ahmed','abdullah','mohamed','mostafa','donya','atef','saida');
total=y.length;
alert(total);
i=0;
while(i<total)
    {
        alert("y["+i+"]= "+y[i]);
        i++;
    }
    
    
    
    
    
    
num=prompt("please Enter The Number to cheak ");
Num=Number(num);
Flag=0;
for(i=2;i<Num;i++)
    {
        if(Num%i==0)
            {
                Flag=1;
            }
          
    }
if(Flag==1)
    {
          
                alert(Num+" "+"the Number Is Not Prime");
        
    }
else
    alert(Num+" "+"the Number Is  Prime");





function AGE (name,age,Nage)
{
    newage=age+Nage;
     return 'your age after this period '+name+"  "+Nage+' will be '+newage;
} 





var max=50;
studant= new Array;

studant[0]=new Array;
studant[0].f_name='ahmed';
studant[0].l_name='atef';
studant[0].Degre=45;

studant[1]=new Array;
studant[1].f_name='abdullah';
studant[1].l_name='atef';
studant[1].Degre=35;

studant[2]=new Array;
studant[2].f_name='mostafa';
studant[2].l_name='atef';
studant[2].Degre=25;

studant[3]=new Array;
studant[3].f_name='donya';
studant[3].l_name='atef';
studant[3].Degre=27;
 

function result(deg)
{
    
    var re=(deg/max)*100;
    var mes='';
    
    if(re>=95){
        mes='امتياز';}
    else if(re>=75 && re<=94){
        mes='جيد جدا';}
    else if(re>=60 && re<=74){
        mes='جيد';}
    else if(re>=50 && re<=59){
        mes='مقبول';}
    else if(re<50){
        mes='ضعيف';}
    
    return mes;
}




function rebort()
{
  var  output='<table dir="rtl">';
    output +='<tr>';
    output +='<td>الاسم</td>';
    output +='<td>الدرجة</td>';
    output +='<td>التقدير</td>'
    output += '</tr>';
    var studant_deg='';
    
    for(i=0;i<(studant.length);i++)
        {
            studant_deg = result((studant[i].Degre));
            output +='<tr>';
            output +='<td>'+(studant[i].f_name)+' '+(studant[i].l_name)+'</td>';
            output +='<td>'+(studant[i].Degre)+'</td>';
            output +='<td>'+(studant_deg)+'</td>';
            output += '</tr>'; 
        }
    output +='</table>';
    
    return output;
}

function printresult()
{
    document.getElementById('out').innerHTML= rebort();
}




studant = {
    Name:"ahmed",
    id:201900052,
    degre:85,
    grade:'exullant',
    sum: function (x,y){
    z=x+y;
    return z;
},
}
num1=prompt("please Enter the First Number");
num2=prompt("Please Enter the second number");
Num1=Number(num1);
Num2=Number(num2);
alert(studant.sum(Num1,Num2));



function newcreat(){
     var Newlink=document.createElement('a');
     Newlink.href='http://www.google.com';
    Newlink.target='_blank';
    Newlink.innerHTML='www.google.com';
    
    var tag=document.getElementById('div1');
    tag.appendChild( Newlink);
}
function print(){
    var sum = document.createElement('div');
    sum.innerHTML='<h1> iam jocker </h1>';
    sum.id='tab1';
    sum.style.backgroundColor="gray";
     
     var getbody=document.getElementsByTagName('body')[0];
     
     getbody.appendChild(sum);
}





function showresult()
{
    var f_name=document.getElementById('text_name1');
    var l_name=document.getElementById('text_name1');
    var Email=document.getElementById('email');
    var b_day=document.getElementById('day');
    var b_month=document.getElementById('month');
    var b_year=document.getElementById('year');
    var Country=document.getElementById('country');
    var About=document.getElementById('about');
    var type_male=document.getElementById('male');
     var type_female=document.getElementById('female');
     
    var g='';
     if(type_male.checked==true)
         {
              g='male';
         }
    else
        {
             g='female';
        }
    var language='';
    if(document.getElementById('arabic').checked==true)
        {
            language+='Arabic';
        }
     if (document.getElementById('english').checked){
        language+=' English';
        
    }
    if(document.getElementById('franch').checked)
        {
            language+=' franch';
        }
      document.getElementById('form').style.display='none';
    
     var report='<div>'+'Name: '+' '+text_name1.value+' '+text_name2.value;
     report+='<br/>'+'Email: '+email.value;
    report+='<br/>'+'birthday: '+day.value+'/'+month.value+'/'+year.value;
    report+='<br/>'+'type_personal: '+g;
    report+='<br/>'+'country: '+country.value;
    report+='<br/>'+'language: '+language;
    report+='<br/>'+'about me: '+about.value+' '+'</div>';
    
    var div_result=document.getElementById('display_result');
    div_result.innerHTML=(report);
     document.getElementById('show result').value=(report);
    div_result.style.display='block';
   
    
     
}
function Displaycode()
{
     document.getElementById('html_code').style.display='block';
}
function closecode()
{
     document.getElementById('html_code').style.display='none';
}


function the_value()
{
    var x=document.getElementById('txt').value;
    var y=Number(x);
    y=Math.floor(Math.random()*(100-0)+1);
    
    
    document.getElementById('result').innerHTML=y;
}







                   transtop=0;
                   transleft=0;
                   speed=10;
                  function keybord(e){
                   
                      var my_div=document.getElementById('txt');
                      
                    if(e.keyCode==38)
                        {
                           transtop -=speed;
                            my_div.style.top=transtop+'px';
                        }
                      if(e.keyCode==40)
                        {
                           transtop +=speed;
                            my_div.style.top=transtop+'px';
                        }
                     if(e.keyCode==39)
                        {
                           transleft +=speed;
                            my_div.style.left=transleft+'px';
                        }
                     if(e.keyCode==37)
                        {
                           transleft -=speed;
                            my_div.style.left=transleft+'px';
                        }
                    
                      oncontextmenu=function(){
                          return false;
                      }
                  }
                   document.onkeydown=keybord;*/














