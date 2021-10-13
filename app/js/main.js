const defaultFunction = () => {
    const element = document.querySelectorAll('.content__filter-select');
    element.forEach (el => {
        const choices = new Choices(el, {
            searchEnabled: false,
            
        });
    })
   
}
defaultFunction()



let accordeinos = document.querySelectorAll(".content__item-more");


for(item of accordeinos) {
    item.addEventListener('click', function (){
        if(this.classList.contains('active')) {
            this.classList.remove('active');
        }
        else {
            for(el of accordeinos ){
                el.classList.remove('active');
            }
            this.classList.add('active');
        }
    }) 
}
document.addEventListener('DOMContentLoaded', () => {
    const contentArows = document.querySelectorAll('.content__item-more');
    const contentItems = document.querySelectorAll('.content__item-inner');
  

    const closecontentItems = ()=>{
      contentItems.forEach((contentItem)=>{
        contentItem.classList.remove('active');
      })

      contentArows.forEach((contentArow)=>{
        contentArow.classList.remove('stat');
      })

    };

    contentArows.forEach((contentArow, index) => {
       contentArow.addEventListener('click', () => {
         if(contentArows[index].classList.contains('stat')){
          contentItems[index].classList.toggle('active');
          contentArows[index].classList.toggle('stat');
          return
         }
        closecontentItems();
        contentItems[index].classList.toggle('active');
        contentArows[index].classList.toggle('stat');
        
       })
    })
 
});


