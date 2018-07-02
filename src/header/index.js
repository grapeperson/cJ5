const burger = document.querySelector('#burger');
const header = document.querySelector('header');
const navigation_list = document.querySelector('.navigation_list');
const showHideBurger = ()=>{
  if(header.classList.contains("unactive_mobile")){
      header.classList.remove("unactive_mobile");
      header.classList.add("active_mobile");
  }else{
      header.classList.remove("active_mobile");
      header.classList.add("unactive_mobile");
  }
}
burger.addEventListener('click',()=>{
  showHideBurger();
})
navigation_list.addEventListener('click',(ev)=>{
  showHideBurger();
})
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
