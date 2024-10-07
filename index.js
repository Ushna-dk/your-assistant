let btn = document.querySelector(".btn")
let content = document.querySelector(".para")
let voice = document.querySelector(".sec")
function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.lang ="en-GB"
    text_speak.volume = 1
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day = new Date()
    let hours = day.getHours()
    if(hours >=6 && hours < 12){
        speak("Good Morning Mam")
    }
    else if(hours >= 12 && hours < 16){
        speak("Good afternoon Mam")
    }
    else if(hours >= 16 && hours < 20){
        speak("Good evening Mam")
    }
    else if(hours >= 20 && hours <= 24){
        speak("Good night Mam")
    }
    else if(hours >= 0 && hours < 6){
        speak("Its Midnight Mam")
    }
}
// window.addEventListener('load', () => {
//     wishMe()
// })
let sprecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new sprecognition()
recognition.onresult = (event) => {
    let currIndex = event.resultIndex
    let transcript = event.results[currIndex][0].transcript
    content.innerText = transcript
   takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click", () => {
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"
})
function takeCommand(message){
    btn.style.display = "flex"
    voice.style.display = "none"
    if(message.includes("Hello what is your name?")){
        speak("Hi my name is Astra")
    } // not working 
    else if(message.includes("open youtube")){
        speak("Opening youtube")
        window.open("https://www.youtube.com/","_blank")
    } // working
    else if(message.includes("open instagram")){
        speak("Opening instagram")
        window.open("https://www.instagram.com/", "_blank")
    } // working
    else if(message.includes("open facebook")){
        speak("Opening facebook")
        window.open("https://www.facebook.com/","_blank")
    } // working
    else if(message.includes("open twitter")){
        speak("twitter is banned in your region")
    } // working
    else if(message.includes("open tiktok")){
        speak("Opening tiktok")
        window.open("https://www.tiktok.com/en/","_blank")
    } // working
    else if(message.includes("open calculator")){
        speak("Opening calculator")
        window.open("calculator://")
    } // working
    else if(message.includes("time")){
        let time = new Date().toLocaleString(undefined, {hour : "numeric", minute : "numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let date = new Date().toLocaleString(undefined, {day : "numeric", month : "short"})
        speak(date)
    }
    else if(message.includes("hello")){
        speak("Hello Mam, How can I help you ?")
    } // working
    else if(message.includes("who are you")){
        speak("i am  a virtual assistant, created by Ushna")
    } // working
    else if(message.includes("what is your name")){
        speak("my name is Astra")
    } // working
    else if(message.includes("hi how are you")){
        speak("hey i am fine, how about you")
    } // working
    else{
        speak(`this is what i found on web regarding ${message.replace("Astra" , "")}`)
        window.open(`https://www.google.com/search?q=${message.replace("Astra" , "")}`)
    } // working
}