package com.shopping.cosmos.mapper;

import com.shopping.cosmos.vo.CartVO;
import com.shopping.cosmos.vo.ProductDetailVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductDetailMapper {

    //상품 정보 모두 출력
    public List<ProductDetailVO> productDetail(int id);

    //장바구니 저장
    public void insertCart(CartVO cart);
}
