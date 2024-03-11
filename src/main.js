import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getPictures } from './js/pixabay-api';
import { createMarkup, initializeLightbox } from './js/render-functions';

const formSearch = document.querySelector('.form-search');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.lds-heart');
const loadMoreBtn = document.querySelector('.load-more');


let currentPage = 1;
let currentQuery = '';

loader.style.display = 'none';

formSearch.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSearch(event) {
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
    gallery.innerHTML = '';

    try {
        const data = await getPictures(searchValue, currentPage);
        handleSearchResult(data, searchValue);
    } catch (error) {
        console.error(error);
        iziToast.show({
            title: 'Sorry,',
            message: 'An error occurred while fetching images. Please try again later!',
            position: 'bottomLeft',
            backgroundColor: '#ef4040',
            messageSize: 16,
            messageColor: '#fff',
            titleSize: 16,
            titleColor: '#fff',
            iconUrl: iconRejected,
        });
    } finally {
        loader.style.display = 'none';
    }
}

async function onLoadMore() {
    currentPage++;

    try {
        const data = await getPictures(currentQuery, currentPage);
        handleLoadMoreResult(data);
    } catch (error) {
        console.error(error);
        iziToast.show({
            title: 'Sorry,',
            message: 'An error occurred while loading more images. Please try again later!',
            position: 'bottomLeft',
            backgroundColor: '#ef4040',
            messageSize: 16,
            messageColor: '#fff',
            titleSize: 16,
            titleColor: '#fff',
            iconUrl: iconRejected,
        });
    } finally {
        loader.style.display = 'none';
    }
}

function handleSearchResult(data, query) {
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
        return;
    }

    gallery.innerHTML = createMarkup(data.hits);
    initializeLightbox();
    currentQuery = query;

    if (data.totalHits > currentPage * 15) {
        loadMoreBtn.style.display = 'block';
    } else {
        loadMoreBtn.style.display = 'none';
    }
}

function handleLoadMoreResult(data) {
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
        return;
    }

    gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));
    initializeLightbox();

    if (data.totalHits > currentPage * 15) {
        loadMoreBtn.style.display = 'block';
    } else {
        loadMoreBtn.style.display = 'none';
    }
}