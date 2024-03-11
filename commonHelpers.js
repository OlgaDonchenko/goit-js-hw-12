import{a as b,S,i as a}from"./assets/vendor-9bcadea2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();async function d(e,r=1,s=15){try{const i="https://pixabay.com/api/",t="42458918-8f01ea81f4ffacec8edc4f5cf";return(await b.get(i,{params:{key:t,q:e,page:r,per_page:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(i){throw console.error(i),new Error("Error fetching pictures from Pixabay API")}}function m(e){return e.map(({webformatURL:r,largeImageURL:s,tags:i,likes:t,views:o,comments:l,downloads:p})=>`<li class="gallery-item">
              <a class="gallery-link" href="${s}">
                <img
                  class="gallery-image"
                  src="${r}"
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
                  <p class="amount">${o}</p>
                </div>
                <div class="block">
                  <h2 class="title">Comments</h2>
                  <p class="amount">${l}</p>
                </div>
                <div class="block">
                  <h2 class="title">Downloads</h2>
                  <p class="amount">${p}</p>
                </div>
              </div>
            </li>`).join("")}function y(){new S(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}const h=document.querySelector(".form-search"),u=document.querySelector(".gallery"),f=document.querySelector(".lds-heart"),n=document.querySelector(".load-more");let c=1,g="";f.style.display="none";h.addEventListener("submit",L);n.addEventListener("click",w);async function L(e){e.preventDefault();const r=h.elements.search.value.trim();if(r===""){a.show({message:"The search query cannot be empty",timeout:5e3,close:!1,position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",title:"Sorry,",titleSize:16,titleColor:"#fff",iconUrl:iconRejected});return}f.style.display="block",u.innerHTML="";try{const s=await d(r,c);v(s,r)}catch(s){console.error(s),a.show({title:"Sorry,",message:"An error occurred while fetching images. Please try again later!",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:iconRejected})}finally{f.style.display="none"}}async function w(){c++;try{const e=await d(g,c);C(e)}catch(e){console.error(e),a.show({title:"Sorry,",message:"An error occurred while loading more images. Please try again later!",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:iconRejected})}finally{f.style.display="none"}}function v(e,r){if(!e.hits.length){a.show({title:"Sorry,",message:"There are no images matching your search query. Please try again!",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:iconRejected});return}u.innerHTML=m(e.hits),y(),g=r,e.totalHits>c*15?n.style.display="block":n.style.display="none"}function C(e){if(!e.hits.length){a.show({title:"Sorry,",message:"There are no more images to load.",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:iconRejected});return}u.insertAdjacentHTML("beforeend",m(e.hits)),y(),e.totalHits>c*15?n.style.display="block":n.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
