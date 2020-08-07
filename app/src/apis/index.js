import axios from 'axios'
import URLS from './URLS'

// export async function getItems() {
export async function getItems(sort='desc') {
    let rs = await axios({
        url: URLS.ITEMS + '?sort=' + sort
        // url: URLS.ITEMS
    });

    return rs;
}


export async function getItem(id) {

    let rs = await axios({
        url: URLS.ITEM + '/' + id
    });

    return rs;
}