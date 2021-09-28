function sectionVisible() {
   const main_category = document.querySelectorAll('.main-category');
   const main_section = document.querySelectorAll('.main-section');
   
   main_category.forEach((category, id)=> {
      category.addEventListener('click', () => {
         main_section.forEach((section) => {
            section.classList.remove('section-visible');
         })

         main_category.forEach((category) => {
            category.classList.remove('category-selected');
         })
         
         main_section[id].classList.add('section-visible');
         main_category[id].classList.add('category-selected');
      })
   });
}

try {
   sectionVisible();
} catch (e) {

}
