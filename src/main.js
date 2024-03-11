import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getPictures, iconRejected } from './js/pixabay-api';
import { createMarkup, initializeLightbox } from './js/render-functions';

const formSearch = document.querySelector('.form-search');
const listImages = document.querySelector('.gallery');
const loader = document.querySelector('.lds-heart');
const loadMoreBtn = document.querySelector('.load-more');

loader.style.display = 'none';

formSearch.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

let currentPage = 1;
let currentQuery = '';

function onSearch(event) {
    event.preventDefault();

    const searchValue = formSearch.elements.search.value.trim();

    if (searchValue === '') {
        iziToast.show({
            message: `The search query cannot be empty`,
            timeout: 5000,
            close: false,
            position: 'bottomLeft',
            backgroundColor: '#ef4040',
            messageSize: 16,
            messageColor: '#fff',
            title: 'Sorry,',
            titleSize: 16,
            titleColor: '#fff',
            iconUrl: iconRejected,
        });
        return;
    }

    loader.style.display = 'block';
    listImages.innerHTML = '';

    getPictures(searchValue, currentPage)
        .then(data => {
            if (!data.hits.length) {
                iziToast.show({
                    title: 'Sorry,',
                    message: 'There are no images matching your search query. Please try again!',
                    position: 'bottomLeft',
                    backgroundColor: '#ef4040',
                    messageSize: 16,
                    messageColor: '#fff',
                    titleSize: 16,
                    titleColor: '#fff',
                    iconUrl: iconRejected,
                });
            }

            listImages.insertAdjacentHTML('afterbegin', createMarkup(data.hits));
            initializeLightbox();

            if (data.totalHits > currentPage * 15) {
                loadMoreBtn.style.display = 'block';
            } else {
                loadMoreBtn.style.display = 'none';
            }

            currentQuery = searchValue;
            currentPage = 1;
        })
        .catch((error) => {
            console.log(error);
            iziToast.show({
                title: 'Sorry,',
                message: 'Try again!',
                position: 'bottomLeft',
                backgroundColor:'#ef4040',
                messageSize: 16,
                messageColor: '#fff',
                titleSize: 16,
                titleColor: '#fff',
                iconUrl: iconRejected,
            });
        })
        .finally(() => loader.style.display = 'none');
}

function onLoadMore() {
    loader.style.display = 'block';
    loadMoreBtn.style.display = 'none';

    currentPage++;

    getPictures(currentQuery, currentPage)
        .then(data => {
            if (!data.hits.length) {
                iziToast.show({
                    title: 'Sorry,',
                    message: 'There are no more images to load.',
                    position: 'bottomLeft',
                    backgroundColor: '#ef4040',
                    messageSize: 16,
                    messageColor: '#fff',
                    titleSize: 16,
                    titleColor: '#fff',
                    iconUrl: iconRejected,
                });
            }

            listImages.insertAdjacentHTML('beforeend', createMarkup(data.hits));
            initializeLightbox();

            if (data.totalHits > currentPage * 15) {
                loadMoreBtn.style.display = 'block';
            } else {
                loadMoreBtn.style.display = 'none';
            }
        })
        .catch((error) => {
            console.log(error);
            iziToast.show({
                title: 'Sorry,',
                message: 'Try again!',
                position: 'bottomLeft',
                backgroundColor: '#ef4040',
                messageSize: 16,
                messageColor: '#fff',
                titleSize: 16,
                titleColor: '#fff',
                iconUrl: iconRejected,
            });
        })
        .finally(() => loader.style.display = 'none');
}




