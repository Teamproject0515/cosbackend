import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8080/products";

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
}

export default new ApiService();