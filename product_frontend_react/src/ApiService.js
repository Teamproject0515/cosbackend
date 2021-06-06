import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8080/products";
const USER_API_BASE_URL = "http://localhost:8080/mycos";

class ApiService {

    // 해당 옵션 상품 리스트 출력 값 받아오기
    productsCategory(ProductVO){
        return axios.post(PRODUCT_API_BASE_URL+'/list', ProductVO);
    }

    // 해당 옵션 상품 TOTAL PAGE 값 받아오기
    findPageNum(ProductVO){
        return axios.post(PRODUCT_API_BASE_URL+'/pagenum', ProductVO);
    }

    // 해당 상품 선택시 맞는 값 받아오기
    fetchProductByID(productID){
        return axios.get(PRODUCT_API_BASE_URL + '/' + productID);
    }


    // 해당 유저 정보 출력하기
    getUserByID(user_email){
        return axios.get(USER_API_BASE_URL+'/'+user_email);
    }

    // 해당 유저의 배송지 리스트 출력하기

    getUserAddressList(user_email){
        return axios.get(USER_API_BASE_URL+'/useraddressinfo/'+user_email);
    }

}

export default new ApiService();