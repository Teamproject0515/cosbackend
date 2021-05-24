import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/users";
const PRODUCT_API_BASE_URL = "http://localhost:8080/products";

class ApiService {
    
    fetchUsers() {
        return axios.get(USER_API_BASE_URL);
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

    fetchProductByID(productID){
        return axios.get(PRODUCT_API_BASE_URL + '/' + productID);
    }

}

export default new ApiService();