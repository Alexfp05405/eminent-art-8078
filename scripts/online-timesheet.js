
// changeable img

let imgbtn=document.querySelectorAll("#btn1,#btn2,#btn3,#btn4")
console.log(imgbtn)
imgbtn.forEach(element => {
    element.style.backgroundColor="white"
    element.style.color=""
    element.addEventListener("click",function(){
        setimg(element.id)
    })
});


let setimg=(ele)=>{
    imgbtn.forEach(element => {
        element.style.backgroundColor="white"
        element.style.color="black"
    });
    let changeableimg=document.getElementById("change-img");
    if(ele=="btn1"){
        changeableimg.src="https://trackingtime.co/wp-content/uploads/2020/04/landing-remote-teams-ind-RemoteTeam-bot-ilus-03.svg"
    }else if(ele=="btn2"){
        changeableimg.src="https://trackingtime.co/wp-content/uploads/2020/05/landing-consultor-ind-Consultor-feature-03-1.svg"
    }else if(ele=="btn3"){
        changeableimg.src="https://trackingtime.co/wp-content/uploads/2020/05/Timecard-ind-Timecard-bot-ilus-03@2x-768x525.png"
    }else if(ele=="btn4"){
        changeableimg.src="https://trackingtime.co/wp-content/uploads/2020/04/Timecard-ind-Timecard-bot-ilus-02.svg"
    }
     
        let btn=document.getElementById(ele)
        btn.style.backgroundColor="black"
        btn.style.color="white"

    
}
function redirect(n){

    if(n==1){
        window.location.href="https://trackingtime.co/features/time-cards"
    }else if(n==2){
        window.location.href="https://trackingtime.co/features/project-management"
    }else if(n==3){
        window.location.href="https://trackingtime.co/features/attendance-tracker"
    }else if(n==4){
        window.location.href="https://trackingtime.co/features/online-timesheet"
    }
        
    }