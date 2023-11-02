let start_btn = document.querySelector(".start");
let stop_btn = document.querySelector(".stop");
let reset_btn = document.querySelector(".reset");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let msecond = document.querySelector(".msecond");

let hr = "0" + 0 , min = "0" +  0 , s = "0" +  0  , ms = "0" +  0 , timer;

start_btn.addEventListener("click",()=>{
    start_btn.classList.add("run");
    stop_btn.classList.remove("stoprun");

    timer = setInterval(()=>{
        ms++
        ms < 10 ? ms = "0" + ms : ms;

        if (ms >=100) {
            ms = "0" + 0;
            s++
            s < 10 ? s = "0" + s : s;

            if (s >= 60) {
                s = "0" + 0;
                min++
                min < 10 ? min = "0" + min : min;

                if (min >= 60) {
                    min = "0" + 0;
                    hr++
                    hr < 10 ? hr = "0" + hr : hr;
                }
            }
        }
        set();
    },10)
});

stop_btn.addEventListener("click",()=>{
    stop_btn.classList.add("stoprun");
    start_btn.classList.remove("run");
    clearInterval(timer);
});

reset_btn.addEventListener("click",()=>{
    start_btn.classList.remove("run");
    stop_btn.classList.remove("stoprun");
    clearInterval(timer);
    hr = "0" + 0 ,
    min = "0" + 0 ,
    s = "0" + 0  ,
    ms = "0" + 0;
    set();
});

function set() {
    hour.innerText = hr,
    minute.innerText = min,
    second.innerText = s,
    msecond.innerText = ms;
}