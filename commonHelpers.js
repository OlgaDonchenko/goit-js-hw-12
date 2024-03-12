import{a as S,S as w,i as c}from"./assets/vendor-64b55ca9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function g(e,o=1,s=15){try{const i="https://pixabay.com/api/",t="42458918-8f01ea81f4ffacec8edc4f5cf";return(await S.get(i,{params:{key:t,q:e,page:o,per_page:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(i){throw console.error(i),new Error("Error fetching pictures from Pixabay API")}}function u(e){return e.map(({webformatURL:o,largeImageURL:s,tags:i,likes:t,views:r,comments:n,downloads:b})=>`<li class="gallery-item">
              <a class="gallery-link" href="${s}">
                <img
                  class="gallery-image"
                  src="${o}"
                  alt="${i}"
                  width="360"
                />
              </a>
              <div class="info-block">
                <div class="block">
                  <h2 class="title">Likes</h2>
                  <p class="amount">${t}</p>
                </div>
                <div class="block">
                  <h2 class="title">Views</h2>
                  <p class="amount">${r}</p>
                </div>
                <div class="block">
                  <h2 class="title">Comments</h2>
                  <p class="amount">${n}</p>
                </div>
                <div class="block">
                  <h2 class="title">Downloads</h2>
                  <p class="amount">${b}</p>
                </div>
              </div>
            </li>`).join("")}function h(){new w(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}const f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgBrZVRDoMgDIar0fi6m2xH2Y3Ek2w3cFfZXXwBljFQCai0xemfoCaU/xNpKwAirXWrlDY5w8ViPhVmbgwIO14A3zeQKq/2IuwaqOu6A07+zaVUT8iUi+V28rd5NuSIOQs5wxyFUOZKqRtnmIpZQCZz3acWcgcXUjkF0b2bmwFSpAxskMAgYecaWSsFC8AgnHkMqIBR09TCGrnHsZic5iLs3By3ngWsITMgy9yphEyVJZjUM6esHUS9yfea7N7DAmJz/1niM2EhVBZR2UKl8DS/SFO80OhUnCBkoYWgz2MdNAx8q0jFOK/Fy1GQvdqYe50BQc3PgLDmRyCU+aYOfFsoCtPa+yXvp2/ue9rHqLATflCf5QflVUcNIrzeSwAAAABJRU5ErkJggg==",p=document.querySelector(".form-search"),m=document.querySelector(".gallery"),y=document.querySelector(".lds-heart"),l=document.querySelector(".load-more");let a=1,A="",d;y.style.display="none";p.addEventListener("submit",C);l.addEventListener("click",L);async function C(e){e.preventDefault(),a=1;const o=p.elements.search.value.trim();if(o===""){c.show({message:"The search query cannot be empty",timeout:5e3,close:!1,position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",title:"Sorry,",titleSize:16,titleColor:"#fff",iconUrl:f});return}y.style.display="block",m.innerHTML="";try{const s=await g(o,a);U(s,o)}catch(s){console.error(s),c.show({title:"Sorry,",message:"An error occurred while fetching images. Please try again later!",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:f})}finally{y.style.display="none"}}async function L(){a++;try{const e=await g(A,a);k(e)}catch(e){console.error(e),c.show({title:"Sorry,",message:"An error occurred while loading more images. Please try again later!",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:f})}finally{y.style.display="none"}}function U(e,o){if(!e.hits.length){c.show({title:"Sorry,",message:"There are no images matching your search query. Please try again!",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:f}),l.style.display="none";return}m.innerHTML=u(e.hits),h(),A=o,d=document.querySelector(".gallery-item"),d&&window.scrollBy({top:d.getBoundingClientRect().height*2,behavior:"smooth"}),e.totalHits>a*15?l.style.display="block":l.style.display="none"}function k(e){if(!e.hits.length){c.show({title:"Sorry,",message:"There are no more images to load.",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:f}),l.style.display="none";return}m.insertAdjacentHTML("beforeend",u(e.hits)),h(),e.totalHits>a*15?l.style.display="block":l.style.display="none",m.lastElementChild.scrollIntoView({behavior:"smooth",block:"end"}),l.style.display="block"}
//# sourceMappingURL=commonHelpers.js.map
