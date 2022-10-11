export default function initAnimacaoScroll(){
  const sections = document.querySelectorAll('[data-anime="scroll"]')

  if(sections.length){
    const windowHalf = innerHeight * 0.7;

    function animaScroll(){
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const isSectionVisible = (sectionTop - windowHalf) < 0;
        if(isSectionVisible) {
          section.classList.add('ativo')
        }else {
          section.classList.remove('ativo')
        }
      })
    }
    animaScroll()
    addEventListener('scroll', animaScroll)
  }
}

