var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var letters = "01";
letters = letters.split("");
var fontSize = 10;
var columns = canvas.width / fontSize;
var drops = [];
for(var x=0;x<columns;x++) drops[x] = 1;

function drawMatrix(){
ctx.fillStyle="rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.fillStyle="#0F0";
ctx.font = fontSize+"px monospace";
for(var i=0;i<drops.length;i++){
var text = letters[Math.floor(Math.random()*letters.length)];
ctx.fillText(text,i*fontSize,drops[i]*fontSize);
if(drops[i]*fontSize>canvas.height && Math.random()>0.975) drops[i]=0;
drops[i]++;
}
}
var speed = window.innerWidth < 768 ? 50 : 33;
setInterval(drawMatrix, speed);


function chat(){

}

function scrollToProjects(){
document.getElementById("projects").scrollIntoView({behavior:"smooth"});
}
window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    columns = canvas.width / fontSize;
    drops = [];
    for (var x = 0; x < columns; x++) drops[x] = 1;
});
window.addEventListener('dblclick', () => {
    document.getElementById("question").focus();
});// AI Chatbot Logic - النسخة المطورة الشاملة
    function chat() {
        const q = document.getElementById("question").value.toLowerCase();
        const a = document.getElementById("answer");
        let response = "";

        // 1. التعريف العام
        if (q.includes("who are you") || q.includes("من انت") || q.includes("اسمك")) {
            response = "I am Kareem AI, the digital assistant for Engineer Kareem Salama, an AI and Cybersecurity specialist.";
        } 
        // 2. المهارات التقنية
        else if (q.includes("skills") || q.includes("مهارات") || q.includes("تعرف تعمل ايه")) {
            response = "Kareem is expert in C++, Python, AI development, and Cisco Network Design. He also masters HTML, CSS, and JavaScript.";
        } 
        // 3. التعليم والجامعة
        else if (q.includes("education") || q.includes("study") || q.includes("بتدرس") || q.includes("كلية")) {
            response = "Kareem is a dedicated student specializing in Cybersecurity and Artificial Intelligence, focusing on building secure and intelligent systems.";
        }
        // 4. المشاريع
        else if (q.includes("projects") || q.includes("مشاريع") || q.includes("عملت ايه")) {
            response = "He has developed an AI Password Analyzer, a Network Scanner, and designed professional enterprise networks using Cisco Packet Tracer.";
        } 
        // 5. الأبحاث
        else if (q.includes("research") || q.includes("ابحاث") || q.includes("بحث")) {
            response = "His key research projects include a Real-Time Sign Language to Speech system, Zero-Day threat prediction, and Secure IoT Protocols.";
        }
        // 6. التواصل
        else if (q.includes("contact") || q.includes("تواصل") || q.includes("رقم") || q.includes("ايميل") || q.includes("email")) {
            response = "You can contact Kareem via email at kareemslama300@gmail.com or through his LinkedIn profile linked in the footer.";
        }
        // 7. مكان السكن / المنشأ
        else if (q.includes("where") || q.includes("عيش") || q.includes("ساكن") || q.includes("مكان")) {
            response = "Kareem is based in Egypt, and he is available for global projects in AI and Security.";
        }
        // 8. أسئلة المساعدة
        else if (q.includes("help") || q.includes("مساعدة") || q.includes("bot")) {
            response = "I can tell you about Kareem's skills, projects, research, contact info, and education. Just ask!";
        }
        // 9. الرد الافتراضي
        else {
            response = "That's an interesting question! I don't have a specific answer for it right now, but you can ask me about Kareem's skills, projects, or how to contact him.";
        }

        a.innerText = response;

        // تفعيل الصوت
        const speech = new SpeechSynthesisUtterance();
        speech.text = response;
        speech.lang = 'en-US'; // الرد بالإنجليزية لضمان جودة الصوت التقني
        speech.volume = 1;
        window.speechSynthesis.speak(speech);
    }