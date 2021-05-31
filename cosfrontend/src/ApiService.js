import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/users";
const PRODUCT_API_BASE_URL = "http://localhost:8080/products";

class ApiService {
    
    // fetchUsers() {
    //     return axios.get(USER_API_BASE_URL);
    // }

    fetchUserColor(){
        return axios.get(USER_API_BASE_URL);
    }

    category(firstname){
        return axios.get(USER_API_BASE_URL+'/category/'+firstname);
    }

    fetchUserByID(userID){
        return axios.get(USER_API_BASE_URL + '/' + userID);
    }

    deleteUser(userID){
        return axios.delete(USER_API_BASE_URL + '/' + userID);
    }

    addUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }

    editUser(user){
        return axios.put(USER_API_BASE_URL + '/' + user.id, user)
    }

    fetchProducts(){
        return axios.get(PRODUCT_API_BASE_URL);
    }

    productsCategory(product_pageNum, product_gender, product_category, select_color, select_size){
        return axios.get(PRODUCT_API_BASE_URL+'/'+product_pageNum+'/'+product_gender+'/'+product_category+'/'+select_color+'/'+select_size);
    }

    findPageNum(product_gender, product_category, select_color, select_size){
        return axios.get(PRODUCT_API_BASE_URL+'/'+product_gender+'/'+product_category+'/'+select_color+'/'+select_size);
    }

    // productsCategoryPost(product){
    //     return axios.post(PRODUCT_API_BASE_URL, product);
    // }

    fetchProductByID(productID){
        return axios.get(PRODUCT_API_BASE_URL + '/' + productID);
    }

    selectColorById(SEQ){
        return axios.get(PRODUCT_API_BASE_URL+'/color/'+SEQ);
    }

}

export default new ApiService();