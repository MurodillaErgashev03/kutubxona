const elInput = document.querySelector(".input");
const elBtn = document.querySelector(".btn");
const elText = document.querySelector(".input-title");
const elBook = document.querySelector(".title");
const elAfter = document.querySelector(".item-title");
const elRandom = document.querySelector(".btn-random");


elBtn.addEventListener(("click"), function () {
    const result = elInput.value;


    if ((result == "Ha") || (result == "ha")) {
        elText.textContent = "Ajoyib!";
        elText.className = "green-block"
    }
    else if ((result == "Yo'q") || (result == "yo'q") || (result == "yoq")) {
        elText.textContent = "Bu kitobni albatta o'qing!";
        elText.className = "blue-block";
    } else {
        elText.textContent = "Notog'ri qiymat kiritildi!";
        elText.className = "red-block" 
    }


    elInput.value = "";
})

const book1 = "Temur tuziklari";
const book2 = "Sehirli qalpoqcha";
const book3 = "Kecha va kunduz";
const book4 = "Yulduzli tunlar";
const book5 = "Mexrobdan chayon";



const after1 = "Amir Temur";
const after2 = "Hudoyberdi To'xtaboyev";
const after3 = "Cho'lpon"
const after4 = "Primqul Qodirov";
const after5 = "Abdulla Qodiriy";



let arr = [book1,book2,book3,book4,book5];
let aff = [after1,after2,after3,after4,after5];



elRandom.addEventListener(("click"), function () {


    
        if (arr[0] === book1){
            elBook.textContent = arr[0];
            elAfter.textContent = aff[0];
            elRandom.textContent = "3-kitob";

            arr[0]= arr[1];
            aff[0]=aff[1];

        }
        else if(arr[1]===book2){
            elBook.textContent =arr[1];
            elAfter.textContent = aff[1];
            elRandom.textContent = "4-kitob";


            arr[1]=arr[2];
            aff[1]=aff[2];

        }

        else if(arr[2]===book3){
            elBook.textContent =arr[2];
            elAfter.textContent = aff[2];
            elRandom.textContent = "5-kitob";


            arr[2]=arr[3];
            aff[2]=aff[3];
            
        }

        else if(arr[3]===book4){
            elBook.textContent =arr[3];
            elAfter.textContent = aff[3];
            elRandom.textContent = "6-kitob";


            arr[3]=arr[4];
            aff[3]=aff[4];
            
        }
        else if(arr[4]===book5){
            elBook.textContent =arr[4];
            elAfter.textContent = aff[4];
            elRandom.textContent = "Tugadi";


            aff[4]=aff[0];
            arr[4]=arr[0];
            
        }

        
    
});



