AOS.init();


$(function(){
    $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        centerMode:true,
        focusOnSelect:true,
        prevArrow:`<i class="fa-solid fa-angle-left slick-prev">`,
        nextArrow:`<i class="fa-solid fa-angle-right slick-next">`,
        responsive: [
          {
            breakpoint: 740,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
      
})
async function miFunction(){
  let centerImg =document.querySelectorAll(".slick-active")

  console.log(centerImg.length)
  
  // centerImg.style.filter = `brightness(50%)`;
}

miFunction()