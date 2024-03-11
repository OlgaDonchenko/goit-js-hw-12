import{S,i as n}from"./assets/vendor-1f440181.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgBrZVRDoMgDIar0fi6m2xH2Y3Ek2w3cFfZXXwBljFQCai0xemfoCaU/xNpKwAirXWrlDY5w8ViPhVmbgwIO14A3zeQKq/2IuwaqOu6A07+zaVUT8iUi+V28rd5NuSIOQs5wxyFUOZKqRtnmIpZQCZz3acWcgcXUjkF0b2bmwFSpAxskMAgYecaWSsFC8AgnHkMqIBR09TCGrnHsZic5iLs3By3ngWsITMgy9yphEyVJZjUM6esHUS9yfea7N7DAmJz/1niM2EhVBZR2UKl8DS/SFO80OhUnCBkoYWgz2MdNAx8q0jFOK/Fy1GQvdqYe50BQc3PgLDmRyCU+aYOfFsoCtPa+yXvp2/ue9rHqLATflCf5QflVUcNIrzeSwAAAABJRU5ErkJggg==";function u(t){const s="https://pixabay.com/api/",i="42458918-8f01ea81f4ffacec8edc4f5cf",r=new URLSearchParams({key:i,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${s}?${r}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function d(t){return t.map(({webformatURL:s,largeImageURL:i,tags:r,likes:e,views:o,comments:a,downloads:p})=>`<li class="gallery-item">
              <a class="gallery-link" href="${i}">
                <img
                  class="gallery-image"
                  src="${s}"
                  alt="${r}"
                  width="360"
                />
              </a>
              <div class="info-block">
                <div class="block">
                  <h2 class="title">Likes</h2>
                  <p class="amount">${e}</p>
                </div>
                <div class="block">
                  <h2 class="title">Views</h2>
                  <p class="amount">${o}</p>
                </div>
                <div class="block">
                  <h2 class="title">Comments</h2>
                  <p class="amount">${a}</p>
                </div>
                <div class="block">
                  <h2 class="title">Downloads</h2>
                  <p class="amount">${p}</p>
                </div>
              </div>
            </li>`).join("")}function y(){new S(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}const h=document.querySelector(".form-search"),g=document.querySelector(".gallery"),f=document.querySelector(".lds-heart"),l=document.querySelector(".load-more");f.style.display="none";h.addEventListener("submit",b);l.addEventListener("click",C);let m=1,A="";function b(t){t.preventDefault();const s=h.elements.search.value.trim();if(s===""){n.show({message:"The search query cannot be empty",timeout:5e3,close:!1,position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",title:"Sorry,",titleSize:16,titleColor:"#fff",iconUrl:c});return}f.style.display="block",g.innerHTML="",u(s).then(i=>{i.hits.length||n.show({title:"Sorry,",message:"There are no images matching your search query. Please try again!",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:c}),g.insertAdjacentHTML("afterbegin",d(i.hits)),y(),i.totalHits>m*15?l.style.display="block":l.style.display="none",A=s,m=1}).catch(i=>{console.log(i),n.show({title:"Sorry,",message:"Try again!",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:c})}).finally(()=>f.style.display="none")}function C(){f.style.display="block",l.style.display="none",m++,u(A).then(t=>{t.hits.length||n.show({title:"Sorry,",message:"There are no more images to load.",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:c}),g.insertAdjacentHTML("beforeend",d(t.hits)),y(),t.totalHits>m*15?l.style.display="block":l.style.display="none"}).catch(t=>{console.log(t),n.show({title:"Sorry,",message:"Try again!",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:c})}).finally(()=>f.style.display="none")}
//# sourceMappingURL=commonHelpers.js.map
