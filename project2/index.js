let isDobOpen=false;
let DateOfBirth;
const settingCogEl =document.getElementById("settings-icon");
const settingcontentEl =document.getElementById("settingcontent");
const settingClickEl=document.getElementById("clickset");
const initialTextEl=document.getElementById("initialText");
const afterchangeEl=document.getElementById("afterchange");
const dobButtonEl=document.getElementById("dobButton");
const dobInputEl=document.getElementById("dobInput");



const yearEl=document.getElementById("year");
const monthsEl=document.getElementById("Month");
const daysEl=document.getElementById("Days");
const HoursEl=document.getElementById("hours");
const MinutesEl=document.getElementById("minutes");
const SecondsEl=document.getElementById("seconds");


// const yearEl=document.getElementById("year");
// const yearEl=document.getElementById("year");

const makeTwoDigitNumber=(number)=>{
    return number>9?number:`0${number}`;
}
const toggleDateOfBirthSelector=()=>{
    if(isDobOpen)
    {
        settingClickEl.classList.remove("hide");
        settingcontentEl.classList.add("hide");
    }
    else{
        settingcontentEl.classList.remove("hide");
      
        settingClickEl.classList.add("hide");
    }
    isDobOpen=!isDobOpen;
    console.log('toggle',isDobOpen);
}
const updateAge=()=>{
    const currentDate = new Date();
    const dateDiff = currentDate - DateOfBirth;
    const year=Math.floor(dateDiff/(1000*60*60*24*365));
    const month=Math.floor(dateDiff/(1000*60*60*24*365))%12;
    const days=Math.floor(dateDiff/(1000*60*60*24))%30;
    const hours=Math.floor(dateDiff/(1000*60*60))%24;
    const minutes=Math.floor(dateDiff/(1000*60))%60;
    const seconds=Math.floor(dateDiff/(1000))%60;
    // console.log(dateDiff);
    // console.log({year,month,days,hours,minutes,seconds});
    console.log(month);
    console.log(hours);
    console.log(minutes);
    yearEl.innerHTML=makeTwoDigitNumber(year);
    monthsEl.innerHTML=makeTwoDigitNumber(month);
    daysEl.innerHTML=makeTwoDigitNumber(days);
    HoursEl.innerHTML=makeTwoDigitNumber(hours);
    MinutesEl.innerHTML=makeTwoDigitNumber(minutes);
    SecondsEl.innerHTML=makeTwoDigitNumber(seconds);

}

const localStorageHandler=()=>{

    const year=localStorage.getItem("year");
    const month=localStorage.getItem("month");
    const date=localStorage.getItem("date");
    if(year&&month&&date)
    {
        DateOfBirth=new Date(year,month,date);
    }
    updateAge();
}
const setDobHandler=()=>{

    const dateString=dobInputEl.value;
    DateOfBirth=dateString?new Date(dateString):null;

   
    if(DateOfBirth)
    {
        localStorage.setItem("year",DateOfBirth.getFullYear());
        localStorage.setItem("month",DateOfBirth.getMonth());
        localStorage.setItem("date",DateOfBirth.getDate());
        initialTextEl.classList.add("hide");
        afterchangeEl.classList.remove("hide");
        // updateAge(DateOfBirth);
        setInterval(()=>updateAge(),1000);
    }
    else{
        initialTextEl.classList.remove("hide");
        afterchangeEl.classList.add("hide");
    }
    

    // console.log(DateOfBirth);  
}
setDobHandler();


settingCogEl.addEventListener("click",toggleDateOfBirthSelector);
dobButtonEl.addEventListener("click",setDobHandler);
