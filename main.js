const slide = document.querySelectorAll(".slide");
let index = 0;

function nextSlide(){
    slide[index].classList.remove('active');
    index++;
    if(index < slide.length){
        slide[index].classList.add('active');
    }
    else{
        index--;
        slide[index].classList.remove('active');
        slide[0].classList.add('active');
        index = 0;
    }
}

function prevSlide(){
    slide[index].classList.remove('active');
    index--;
    if(index >= 0){
        slide[index].classList.add('active');
    }
    else{
        index++;
        slide[index].classList.remove('active');
        slide[slide.length-1].classList.add('active');
        index = slide.length - 1;
    }
}
