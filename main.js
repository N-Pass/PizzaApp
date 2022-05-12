window.addEventListener('scroll', onScroll)
onScroll()

function onScroll(){
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  //verficiar se a seção passou da linha
  //quais dados vou precisar?

  //o topo da seção
  const sectionTop = section.offsetTop

  //a altura da seção
  const sectionHeight = section.offsetHeight
  
  //O topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachedOrPassedTargetLine = targetLine >= sectionTop
  
  //verificar se a base está abaixo da linha alvo
  //quais dados vou precisar?

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine =  sectionEndsAt <= targetLine

  //limites da seção
  const sectionBoundaries = 
  sectionTopReachedOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if(sectionBoundaries) {
    menuElement.classList.add('active')
  }

}

function showNavOnScroll(){
  if(scrollY > 0){
    navigation.classList.add('scroll')
  } else{
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll(){
  if(scrollY > 300){
    backToTopButton.classList.add('show')
  } else{
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top', 
  distance: '30px',
  duration: 700,
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`)


