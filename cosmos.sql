create table product(
product_seq number(20) primary key,
product_title varchar2(500),
product_price number(20),
product_color varchar2(500),
product_img varchar2(500),
product_gender varchar2(500),
product_size varchar2(500),
product_stock number(20),
product_sale number(20),
product_category varchar2(500),
product_content varchar2(3000)
);

drop table product;
create sequence product_seq INCREMENT by 1 start with 0 minvalue 0;
drop sequence product_seq;
insert into product values(product_seq.nextval, '스프라이트 랩 드레스', 150000, 'BLACK', '이미지1', '남자', 'XL', 350, 78, '바지', '통풍 잘되는 바지');
insert into product values(product_seq.nextval, '', 30000, 'BLUE', '이미지2', '여자', 'M', 120, 31, '치마', '면 치마');
insert into product values(product_seq.nextval, '스프라이트 랩 드레스', 150000, 'Blue', '이미지1', '남자', 'XL', 350, 78, '바지', '통풍 잘되는 바지');

insert into product values(product_seq.nextval, '스프라이트 랩 드레스', 150000, 'red', '이미지1', '남자', 'XL', 350, 78, '바지', '통풍 잘되는 바지');

insert into product values(product_seq.nextval, '스프라이트 랩 드레스', 150000, 'yellow', '이미지1', '남자', 'XL', 350, 78, '바지', '통풍 잘되는 바지');

delete from product;
select * from product;
commit;
SELECT * FROM PRODUCT;

        SELECT * FROM product
        ORDER BY product_seq;
        
        SELECT * FROM product WHERE product_seq = 1;
        
        select * from users;
        
        commit;
        
        
create table fileuploadtest(
fileseq number(5) primary key,
filename varchar2(300),
filecontent blob
);



create table test1(
test1_seq number(5) primary key,
test1_name varchar2(300),
test1_price number(10),
test1_style varchar2(300));

drop table test1;
drop table test2;
create table test2(
test1_seq number(5),
test2_size1 varchar2(300),
constraints test1_seq foreign key(test1_seq) references test1(test1_seq));

create sequence test1_seq increment by 1 start with 0 minvalue 0;

select * from test1;
select * from test2;
insert into test1 values(test1_seq.nextval, '상품4', 4000, '상의');
insert into test1 values(test1_seq.nextval, '상품5', 57000, '하의');
insert into test1 values(test1_seq.nextval, '상품6', 63000, '모자');
insert into test1 values(test1_seq.nextval, '상품7', 25000, '신발');
insert into test1 values(test1_seq.nextval, '상품8', 14000, '신발');
insert into test1 values(test1_seq.nextval, '상품9', 28000, '모자');
insert into test1 values(test1_seq.nextval, '상품10', 72000, '상의');
insert into test1 values(test1_seq.nextval, '상품11', 30000, '하의');

insert into test2 values(1, 'black');
insert into test2 values(1, 'blue');
insert into test2 values(1, 'lightblue');
insert into test2 values(1, 'yellow');
insert into test2 values(1, 'pink');
insert into test2 values(1, 'white');
insert into test2 values(1, 'green');

insert into test2 values(2, 'black');
insert into test2 values(2, 'blue');
insert into test2 values(2, 'lightblue');
insert into test2 values(2, 'yellow');
insert into test2 values(2, 'pink');
insert into test2 values(2, 'white');
insert into test2 values(2, 'green');

select * from test2;
select * from test1;

select * from (select t1.test1_name, t1.test1_price, t1.test1_style, t2.test2_size1 from test1 t1, test2 t2) where test1_name='상품1' and test2_size1='black';




-- USER SQL
CREATE USER "test1" IDENTIFIED BY "test1"  
DEFAULT TABLESPACE "USERS"
TEMPORARY TABLESPACE "TEMP";

-- QUOTAS
ALTER USER "test1" QUOTA UNLIMITED ON "USERS";

-- ROLES
GRANT "DBA" TO "test1" WITH ADMIN OPTION;

-- SYSTEM PRIVILEGES

        select * from (select p.product_seq, p.product_title, p.product_price, p.product_img, p.product_gender, p.product_size, p.product_saled, p.product_category, p.product_content, c.color1, c.color2, c.color3, c.color4, c.color5, c.color6, c.color7, c.color8, c.color9, c.color10, c.color11, c.color12
        from product p, product_color c where p.product_seq = c.fk_product_seq);
        select * from product_color where fk_product_seq = 1;
        
        select * from product where product_category = '치마';
        select * from product_color;
        update product_color set color1='black' where fk_product_seq = 5;
        commit;
        
        select * from product;
        
        select * from color;
        
create table color(
product_seq number(5),
product_color varchar2(300),
constraints product_seq foreign key(product_seq) references product(product_seq));


insert into color values(4,'black');
insert into color values(4,'pink');
insert into color values(4,'blue');
insert into color values(4,'white');
insert into color values(4,'gray');
insert into color values(4,'green');
insert into color values(5,'yellow');
insert into color values(6,'orange');
insert into color values(6,'purple');
select * from color;
commit;


create table test1(
seq number(5) primary key,
title varchar2(30),
content varchar2(30));

drop table test1;

create table test2(
seq number(5),
color varchar2(50),
constraints seq foreign key(seq) references test1(seq));

insert into test1 values(3,'상품3','상품3');

insert into test2 values(3,'blue');

select * from test1;

select t1.seq,t1.title,t1.content,t2.color from test1 t1, test2 t2 where t1.seq=t2.seq;

select * from test2;

select seq, max(case when color = 'black' then 1 else 0 end) color1 from 
(select t1.seq, t1.title, t1.content, t2.color from test1 t1, test2 t2 where t1.seq=t2.seq) group by seq;

select * from test1 t1,
(select seq,
max(decode(color, 'black', 'black',null)) as black, 
max(decode(color, 'purple', 'purple', null)) as purple,
max(decode(color, 'blue', 'blue', null)) as blue,
max(decode(color, 'white', 'white', null)) as white,
max(decode(color, 'green', 'green', null)) as green,
max(decode(color, 'gray', 'gray', null)) as gray,
max(decode(color, 'yellow', 'yellow', null)) as yellow
from test2 group by seq) t2 where t1.seq = t2.seq;


select t1.seq, min(decode(color, 'black', 'black', null)) as black from ;
select * from product;
select * from color;

select * from (select p.product_title, p.product_price, p.product_gender, p.product_category, p.product_content, c.* from product p,
(select product_seq,
max(decode(product_color, 'black','black',null)) as black,
max(decode(product_color, 'pink','pink',null)) as pink,
max(decode(product_color, 'blue','blue',null)) as blue,
max(decode(product_color, 'white','white',null)) as white,
max(decode(product_color, 'gray','gray',null)) as gray,
max(decode(product_color, 'green','green',null)) as green,
max(decode(product_color, 'yellow','yellow',null)) as yellow,
max(decode(product_color, 'orange','orange',null)) as orange,
max(decode(product_color, 'purple','purple',null)) as purple
from color group by product_seq) c where p.product_seq = c.product_seq) where product_category = '치마';


select * from color where product_seq = 4;


SELECT * FROM COLOR WHERE PRODUCT_SEQ = 4 ;

select p.*,c.product_color from product p, (select product_seq, substr(xmlagg(xmlelement(col,',',product_color)).extract('//text()').getstringval(),2)product_color from color group by product_seq) c where p.product_seq = c.product_seq;
commit;
--select product_seq, group_concat(product_color) from color group by product_seq;


select p.*,c.product_color from product p, (select product_seq, substr(xmlagg(xmlelement(col,',',product_color)).extract('//text()').getstringval(),2)product_color from color group by product_seq) c where p.product_seq = c.product_seq;
commit;

select * from color;

create table optiontest(
product_seq number(5),
product_color varchar2(30),
product_size varchar2(30));

insert into optiontest values(17,'black','95');
insert into optiontest values(18,'white','95');
insert into optiontest values(19,'white','100');
insert into optiontest values(20,'white','105');
insert into optiontest values(20,'pink','95');
insert into optiontest values(20,'yellow','95');
insert into optiontest values(21,'green','95');
insert into optiontest values(22,'black','95');
insert into optiontest values(23,'purple','95');
insert into optiontest values(22,'purple','100');
insert into optiontest values(24,'purple','105');

select * from optiontest  order by product_color desc;
select * from product;
select * from product p, optiontest o where p.product_seq = o.product_seq;

insert into product values(4,'상품2',27000,'이미지2','여성','L',300,120,'치마','예쁜 치마');

select p.*,c.product_color, c.product_size from product p, 
(select 
product_seq, 
substr(xmlagg(xmlelement(col,',',product_color)).extract('//text()').getstringval(),2)product_color, 
substr(xmlagg(xmlelement(col,',',product_size)).extract('//text()').getstringval(),2)product_size 
from optiontest group by product_seq) 
c where p.product_seq = c.product_seq and p.product_category = '치마' and c.product_color like '%pink%' and c.product_size like '%95%';

select * from color;
insert into color values(;

select * from optiontest;

select p.*,c.product_color, c.product_size from product p, 
(select 
product_seq, 
substr(xmlagg(xmlelement(col,',',product_color)).extract('//text()').getstringval(),2)product_color, 
substr(xmlagg(xmlelement(col,',',product_size)).extract('//text()').getstringval(),2)product_size 
from optiontest group by product_seq) 
c where p.product_seq = c.product_seq;

commit;




-- rownum을 적용해서 해당 행만 출력하는 쿼리
select * from
(select ROW_NUMBER() OVER(ORDER BY p.product_seq) RNUM, p.* ,c.product_color, c.product_size as product_size2 from product p, 
(select product_seq, substr(xmlagg(xmlelement(col,',',product_color)).extract('//text()').getstringval(),2)product_color, substr(xmlagg(xmlelement(col,',',product_size)).extract('//text()').getstringval(),2)product_size from optiontest group by product_seq) c 
where p.product_seq = c.product_seq) where rownum between ((1-1)*10)+1 and (1*10);


select rownum, p.* from product p;


WITH MAIN AS
(
SELECT 'R1' SEQ FROM DUAL UNION ALL
SELECT 'R2' SEQ FROM DUAL UNION ALL
SELECT 'R3' SEQ FROM DUAL UNION ALL
SELECT 'R4' SEQ FROM DUAL UNION ALL
SELECT 'R5' SEQ FROM DUAL UNION ALL
SELECT 'R6' SEQ FROM DUAL UNION ALL
SELECT 'R7' SEQ FROM DUAL UNION ALL
SELECT 'R8' SEQ FROM DUAL UNION ALL
SELECT 'R9' SEQ FROM DUAL UNION ALL
SELECT 'R10' SEQ FROM DUAL 
)
SELECT * FROM 
(SELECT ROW_NUMBER() OVER(ORDER BY SEQ) RNUM, SEQ FROM MAIN) TOTAL
WHERE TOTAL.RNUM >= 1 AND TOTAL.RNUM <= 5;

-- 하나의 페이지에 5개 행만 보여준다면 1page 파라미터는 1,5 2page 파라미터는 6,10




-- 프로덕트 테이블에 rownum 넣어서 조회 - 실패
select * from (select ROW_NUMBER() OVER(ORDER BY p.product_seq) RNUM, p.* from product p) where rownum between ((1-1)*10)+1 and (1*10);



-- product + optiontest 테이블 조인 후 rownum 넣어서 조회 - 성공
select * from
(select ROW_NUMBER() OVER(ORDER BY p.product_seq) RNUM, p.* ,c.product_color, c.product_size as product_size2 from product p, 
(select product_seq, wm_concat(product_color) product_color, wm_concat(product_size) product_size from optiontest group by product_seq) c 
where p.product_seq = c.product_seq) where rnum between ((1-1)*10)+1 and (1*10) and product_color like '%purple%' order by product_seq;

select * from optiontest;


create table product(
product_seq number(20) primary key,
product_title varchar2(500),
product_content varchar2(3000),
product_price number(20),
product_gender varchar2(500),
product_category varchar2(500),
product_img varchar2(500)
);

create table product_option(
product_option_seq number(5),
constraints product_option_seq foreign key(product_option_seq) references product(product_seq),
product_color varchar2(30),
product_size varchar2(30),
product_stock number(30),
product_saled number(30));

drop table product_option;

select /* +INDEX_DESC(product SYS_C0011407) */ * from product where product_seq > 0 order by product_seq desc;
select * from product_option;

select /* +index_desc(product STS_C0011407)*/* from optiontest order by product_seq;
select /* +index_desc(product STS_C0011407)*/ * from optiontest;
select * from optiontest;
-- 이 두개가 왜 차이가 나는 것일까? -> 2개의 차이점을 줄이기 위해서 ORDER BY를 사용할 수 있고, 힌트를 줄 수도 있다. 

select * from user_indexes;


SELECT * FROM PRODUCT;


select ROW_NUMBER() OVER(ORDER BY p.product_seq) RNUM, p.* ,c.product_color, c.product_size as product_size2 from product p, 
(select product_seq, wm_concat(product_color) product_color, wm_concat(product_size) product_size from optiontest group by product_seq) c 
where p.product_seq = c.product_seq and rownum between ((3-1)*2)+1 and (3*2) and c.product_color like '%purple%' order by p.product_seq;



select * from (select rownum rnum, p.* from product p where rownum <= 10) where rnum >=1;

select * from (select rownum rnum, p.* from product p where rownum <= (2*10)) where rnum >=((2-1)*10)+1;

-- 실패
select * from
(select rownum rnum, p.* ,c.product_color, c.product_size as product_size2 from product p, 
(select product_seq, wm_concat(product_color) product_color, wm_concat(product_size) product_size from optiontest group by product_seq) c 
where p.product_seq = c.product_seq and rownum <= (1*10)) where rnum >= ((1-1)*10)+1 and product_category = '상의';

-- 실패 : 1페이지부터여야만 뜬다.
select rownum rnum, p.* ,c.product_color, c.product_size as product_size2 from product p, 
(select product_seq, wm_concat(product_color) product_color, wm_concat(product_size) product_size from optiontest group by product_seq) c 
where p.product_seq = c.product_seq and rownum between ((1-1)*10)+1 and (1*10);

-- 성공 : where를 안에 넣자
select * from (select rownum rnum, p.* ,c.product_color, c.product_size as product_size2 from product p, 
(select product_seq, wm_concat(product_color) product_color, wm_concat(product_size) product_size from optiontest group by product_seq) c 
where p.product_seq = c.product_seq and p.product_category='상의') where rnum between 1 and 3;


-- max rownum을 뽑고싶어
select max(rownum) from product p,
(select product_seq, wm_concat(product_color) product_color, wm_concat(product_size) product_size from optiontest group by product_seq) c 
where p.product_seq = c.product_seq and p.product_category='상의';

select * from product;
select * from product_option;



drop table product;
drop table product_option;
drop sequence product_seq;

create sequence product_seq increment by 1 start with 0 minvalue 0;



create table product(
product_seq number(20) primary key,
product_title varchar2(500),
product_content varchar2(3000),
product_price number(20),
product_gender varchar2(500),
product_category varchar2(500),
product_img varchar2(500)
);




create table product_option(
product_option_seq number(5),
constraints product_option_seq foreign key(product_option_seq) references product(product_seq),
product_color varchar2(30),
product_size varchar2(30),
product_stock number(30),
product_saled number(30));




insert into product values(product_seq.nextval, '상품1', '상품1내용', 25000, 'M', '바지', 'IMAGE01');
insert into product values(product_seq.nextval, '상품2', '상품2내용', 25000, 'W', '모자', 'IMAGE02');
insert into product values(product_seq.nextval, '상품3', '상품3내용', 25000, 'M', '바지', 'IMAGE03');
insert into product values(product_seq.nextval, '상품4', '상품4내용', 25000, 'W', '치마', 'IMAGE04');
insert into product values(product_seq.nextval, '상품5', '상품5내용', 25000, 'W', '원피스', 'IMAGE05');
insert into product values(product_seq.nextval, '상품6', '상품6내용', 25000, 'W', '원피스', 'IMAGE06');
insert into product values(product_seq.nextval, '상품7', '상품7내용', 25000, 'W', '원피스', 'IMAGE07');
insert into product values(product_seq.nextval, '상품8', '상품8내용', 25000, 'W', '치마', 'IMAGE08');
insert into product values(product_seq.nextval, '상품9', '상품9내용', 25000, 'M', '모자', 'IMAGE09');
insert into product values(product_seq.nextval, '상품10', '상품10내용', 25000, 'W', '치마', 'IMAGE10');
insert into product values(product_seq.nextval, '상품11', '상품11내용', 25000, 'W', '치마', 'IMAGE11');
insert into product values(product_seq.nextval, '상품12', '상품12내용', 25000, 'W', '치마', 'IMAGE12');
insert into product values(product_seq.nextval, '상품13', '상품13내용', 25000, 'W', '원피스', 'IMAGE13');
insert into product values(product_seq.nextval, '상품14', '상품14내용', 25000, 'W', '치마', 'IMAGE14');
insert into product values(product_seq.nextval, '상품15', '상품15내용', 25000, 'W', '원피스', 'IMAGE15');
insert into product values(product_seq.nextval, '상품16', '상품16내용', 25000, 'M', '모자', 'IMAGE16');
insert into product values(product_seq.nextval, '상품17', '상품17내용', 25000, 'W', '치마', 'IMAGE17');
insert into product values(product_seq.nextval, '상품18', '상품18내용', 25000, 'M', '모자', 'IMAGE18');
insert into product values(product_seq.nextval, '상품19', '상품19내용', 25000, 'W', '치마', 'IMAGE19');
insert into product values(product_seq.nextval, '상품20', '상품20내용', 25000, 'W', '모자', 'IMAGE20');
insert into product values(product_seq.nextval, '상품21', '상품21내용', 25000, 'W', '치마', 'IMAGE21');
insert into product values(product_seq.nextval, '상품22', '상품22내용', 25000, 'W', '치마', 'IMAGE22');
insert into product values(product_seq.nextval, '레귤러 핏 셔츠', '옷장 속에 클래식함을 더하는 일상적인 디자인의 셔츠입니다. 지속 가능한 방식으로 제작된 텐셀™ 라이오셀과 코튼 혼방 소재로 만들어졌으며, 시즌이 지나서도 변함없이 함께하기 좋은 감각적인 아이템입니다. - 레귤러 핏 - 클래식 칼라 - 앞면 버튼업 디자인 - 커프스 타입의 긴소매 - 가슴 부분의 패치 포켓', 27000, 'M', '티셔츠', '티셔츠사진');
insert into product values(product_seq.nextval, '루즈 핏 바지', '옷장 속에 있는 티셔츠를 되살릴 혁신적인 바지', 31000, 'M', '바지', '바지사진');
insert into product values(product_seq.nextval, '티셔츠', '티셔츠', 26000, 'M', '티셔츠', 'IMAGE티셔츠');
insert into product values(product_seq.nextval, '악세사리이름1', '설명1', 26000, 'W', '악세사리', '이미지');
insert into product values(product_seq.nextval, '악세사리이름2', '설명2', 27000, 'M', '악세사리', '이미지');
insert into product values(product_seq.nextval, '악세사리이름3', '설명3', 28000, 'W', '악세사리', '이미지');
insert into product values(product_seq.nextval, '악세사리이름4', '설명4', 20000, 'M', '악세사리', '이미지');
insert into product values(product_seq.nextval, '아동복1', '설명1', 20000, 'KIDS', '모자', '이미지');
insert into product values(product_seq.nextval, '아동복2', '설명2', 25000, 'KIDS', '티셔츠', '이미지');
insert into product values(product_seq.nextval, '아동복3', '설명3', 15000, 'KIDS', '티셔츠', '이미지');
insert into product values(product_seq.nextval, '아동복4', '설명4', 29000, 'KIDS', '바지', '이미지');
insert into product values(product_seq.nextval, '아동복5', '설명5', 30000, 'KIDS', '모자', '이미지');
insert into product values(product_seq.nextval, '아동복6', '설명6', 27000, 'KIDS', '티셔츠', '이미지');
insert into product values(product_seq.nextval, '아동복7', '설명7', 21000, 'KIDS', '원피스', '이미지');
insert into product values(product_seq.nextval, '아동복8', '설명8', 15000, 'KIDS', '원피스', '이미지');
insert into product values(product_seq.nextval, '아동용품1', '설명1', 21000, 'KIDS', '악세사리', '이미지');
insert into product values(product_seq.nextval, '아동용품2', '설명2', 30000, 'KIDS', '악세사리', '이미지');
insert into product values(product_seq.nextval, '아동용품3', '설명3', 87000, 'KIDS', '악세사리', '이미지');
insert into product values(product_seq.nextval, '아동용품4', '설명4', 10000, 'KIDS', '악세사리', '이미지');
insert into product values(product_seq.nextval, '아동용품5', '설명5', 8000, 'KIDS', '악세사리', '이미지');
insert into product values(product_seq.nextval, '아동용품6', '설명6', 20000, 'KIDS', '악세사리', '이미지');


insert into product_option values(1, 'BLACK', 'M', 250, 250);
insert into product_option values(1, 'WHITE', 'XL', 250, 250);
insert into product_option values(1, 'RED', 'L', 250, 250);
insert into product_option values(2, 'YELLOW', 'S', 250, 250);
insert into product_option values(2, 'GREEN', 'M', 250, 250);
insert into product_option values(2, 'BLACK', 'M', 250, 250);
insert into product_option values(2, 'WHITE', 'XL', 250, 250);
insert into product_option values(2, 'RED', 'L', 250, 250);
insert into product_option values(3, 'YELLOW', 'S', 250, 250);
insert into product_option values(3, 'GREEN', 'M', 250, 250);
insert into product_option values(3, 'BLACK', 'M', 250, 250);
insert into product_option values(3, 'WHITE', 'XL', 250, 250);
insert into product_option values(4, 'RED', 'L', 250, 250);
insert into product_option values(4, 'YELLOW', 'S', 250, 250);
insert into product_option values(4, 'GREEN', 'M', 250, 250);
insert into product_option values(4, 'BLACK', 'M', 250, 250);
insert into product_option values(5, 'WHITE', 'XL', 250, 250);
insert into product_option values(5, 'RED', 'L', 250, 250);
insert into product_option values(6, 'YELLOW', 'S', 250, 250);
insert into product_option values(6, 'GREEN', 'M', 250, 250);
insert into product_option values(7, 'BLACK', 'M', 250, 250);
insert into product_option values(8, 'WHITE', 'XL', 250, 250);
insert into product_option values(9, 'RED', 'L', 250, 250);
insert into product_option values(10, 'YELLOW', 'S', 250, 250);
insert into product_option values(11, 'GREEN', 'M', 250, 250);
insert into product_option values(12, 'BLACK', 'M', 250, 250);
insert into product_option values(12, 'WHITE', 'XL', 250, 250);
insert into product_option values(12, 'RED', 'L', 250, 250);
insert into product_option values(13, 'YELLOW', 'S', 250, 250);
insert into product_option values(13, 'GREEN', 'M', 250, 250);
insert into product_option values(13, 'BLACK', 'M', 250, 250);
insert into product_option values(14, 'WHITE', 'XL', 250, 250);
insert into product_option values(14, 'RED', 'L', 250, 250);
insert into product_option values(14, 'YELLOW', 'S', 250, 250);
insert into product_option values(15, 'GREEN', 'M', 250, 250);
insert into product_option values(15, 'BLACK', 'M', 250, 250);
insert into product_option values(16, 'WHITE', 'XL', 250, 250);
insert into product_option values(16, 'RED', 'L', 250, 250);
insert into product_option values(16, 'YELLOW', 'S', 250, 250);
insert into product_option values(16, 'GREEN', 'M', 250, 250);
insert into product_option values(16, 'BLACK', 'M', 250, 250);
insert into product_option values(17, 'WHITE', 'XL', 250, 250);
insert into product_option values(18, 'RED', 'L', 250, 250);
insert into product_option values(19, 'YELLOW', 'S', 250, 250);
insert into product_option values(19, 'GREEN', 'M', 250, 250);
insert into product_option values(19, 'BLACK', 'M', 250, 250);
insert into product_option values(20, 'WHITE', 'XL', 250, 250);
insert into product_option values(21, 'RED', 'L', 250, 250);
insert into product_option values(22, 'YELLOW', 'S', 250, 250);
insert into product_option values(22, 'GREEN', 'M', 250, 250);
insert into product_option values(22, 'BLACK', 'M', 250, 250);
insert into product_option values(23, 'WHITE', 'XL', 250, 250);
insert into product_option values(23, 'RED', 'L', 250, 250);
insert into product_option values(23, 'YELLOW', 'S', 250, 250);
insert into product_option values(24, 'GREEN', 'M', 250, 250);
insert into product_option values(24, 'BLACK', 'L', 250, 220);
insert into product_option values(24, 'YELLOW', 'M', 250, 200);
insert into product_option values(24, 'PINK', 'XS', 250, 220);
insert into product_option values(24, 'ORANGE', 'XS', 250, 200);

insert into product_option values(25, 'BLACK', 'L', 250, 150);
insert into product_option values(25, 'YELLOW', 'M', 250, 120);
insert into product_option values(25, 'PINK', 'XS', 250, 210);
insert into product_option values(25, 'ORANGE', 'XS', 250, 240);

insert into product_option values(26, 'BLACK', 'L', 250, 150);
insert into product_option values(26, 'BLACK', 'M', 250, 120);
insert into product_option values(26, 'BLACK', 'XS', 250, 210);
insert into product_option values(26, 'BLACK', 'XL', 250, 240);
insert into product_option values(26, 'YELLOW', 'L', 250, 150);
insert into product_option values(26, 'YELLOW', 'M', 250, 120);
insert into product_option values(26, 'YELLOW', 'XS', 250, 210);
insert into product_option values(26, 'YELLOW', 'XL', 250, 240);
insert into product_option values(26, 'RED', 'L', 250, 150);
insert into product_option values(26, 'RED', 'M', 250, 120);
insert into product_option values(26, 'RED', 'XS', 250, 210);
insert into product_option values(26, 'RED', 'XL', 250, 240);

insert into product_option values(27, 'BLACK', 'L', 250, 150);
insert into product_option values(27, 'BLACK', 'M', 250, 120);
insert into product_option values(27, 'BLACK', 'XS', 250, 210);
insert into product_option values(27, 'BLACK', 'XL', 250, 240);
insert into product_option values(27, 'YELLOW', 'L', 250, 150);
insert into product_option values(27, 'YELLOW', 'M', 250, 120);
insert into product_option values(27, 'YELLOW', 'XS', 250, 210);
insert into product_option values(27, 'YELLOW', 'XL', 250, 240);
insert into product_option values(27, 'RED', 'L', 250, 150);
insert into product_option values(27, 'RED', 'M', 250, 120);
insert into product_option values(27, 'RED', 'XS', 250, 210);
insert into product_option values(27, 'RED', 'XL', 250, 240);

insert into product_option values(28, 'BLACK', 'L', 250, 150);
insert into product_option values(28, 'BLACK', 'M', 250, 120);
insert into product_option values(28, 'BLACK', 'XS', 250, 210);
insert into product_option values(28, 'RED', 'L', 250, 150);
insert into product_option values(28, 'RED', 'M', 250, 120);
insert into product_option values(28, 'RED', 'XL', 250, 240);

insert into product_option values(29, 'YELLOW', 'L', 250, 150);
insert into product_option values(29, 'YELLOW', 'M', 250, 120);
insert into product_option values(29, 'YELLOW', 'XS', 250, 210);
insert into product_option values(29, 'YELLOW', 'XL', 250, 240);
insert into product_option values(29, 'RED', 'L', 250, 150);
insert into product_option values(29, 'RED', 'M', 250, 120);
insert into product_option values(29, 'RED', 'XS', 250, 210);
insert into product_option values(29, 'RED', 'XL', 250, 240);

insert into product_option values(30, 'BLACK', 'L', 250, 150);
insert into product_option values(30, 'BLACK', 'M', 250, 120);
insert into product_option values(30, 'BLACK', 'XS', 250, 210);
insert into product_option values(30, 'BLACK', 'XL', 250, 240);
insert into product_option values(30, 'YELLOW', 'L', 250, 150);
insert into product_option values(30, 'YELLOW', 'M', 250, 120);
insert into product_option values(30, 'YELLOW', 'XS', 250, 210);
insert into product_option values(30, 'YELLOW', 'XL', 250, 240);
insert into product_option values(30, 'RED', 'L', 250, 150);
insert into product_option values(30, 'RED', 'M', 250, 120);
insert into product_option values(30, 'RED', 'XS', 250, 210);
insert into product_option values(30, 'RED', 'XL', 250, 240);

insert into product_option values(31, 'DARKRED', 'XS', 250, 240);
insert into product_option values(31, 'INDIANRED', 'L', 250, 240);
insert into product_option values(32, 'LIGHTYELLOW', 'L', 250, 240);
insert into product_option values(32, 'DARKRED', 'S', 250, 240);
insert into product_option values(33, 'LIMEGREEN', 'XL', 250, 240);
insert into product_option values(33, 'RED', 'L', 250, 240);
insert into product_option values(33, 'INDIANRED', 'XL', 250, 240);
insert into product_option values(34, 'RED', 'L', 250, 240);
insert into product_option values(34, 'LIGHTYELLOW', 'XL', 250, 240);
insert into product_option values(34, 'DARKRED', 'L', 250, 240);
insert into product_option values(34, 'RED', 'XL', 250, 240);
insert into product_option values(35, 'LIGHTYELLOW', 'XL', 250, 240);
insert into product_option values(36, 'DARKRED', 'XS', 250, 240);
insert into product_option values(36, 'RED', 'XL', 250, 240);
insert into product_option values(37, 'GREENYELLOW', 'XL', 250, 240);
insert into product_option values(37, 'INDIANRED', 'XS', 250, 240);
insert into product_option values(38, 'DARKRED', 'S', 250, 240);
insert into product_option values(38, 'YELLOW', 'M', 250, 240);
insert into product_option values(39, 'INDIANRED', 'M', 250, 240);
insert into product_option values(39, 'DARKRED', 'XL', 250, 240);
insert into product_option values(40, 'LAWNGREEN', 'XL', 250, 240);
insert into product_option values(40, 'RED', 'XL', 250, 240);
insert into product_option values(41, 'YELLOW', 'M', 250, 240);
insert into product_option values(41, 'INDIANRED', 'M', 250, 240);
insert into product_option values(41, 'RED', 'XL', 250, 240);
insert into product_option values(42, 'LAWNGREEN', 'M', 250, 240);
insert into product_option values(42, 'LAWNGREEN', 'L', 250, 240);
insert into product_option values(43, 'LIMEGREEN', 'XS', 250, 240);
insert into product_option values(44, 'GREENYELLOW', 'L', 250, 240);
insert into product_option values(44, 'LAWNGREEN', 'S', 250, 240);


DELETE FROM PRODUCT_OPTION WHERE product_option_seq BETWEEN 31 AND 44;






select * from product order by product_seq desc;
select * from product_option;


select rownum rnum, p.* ,o.product_color, o.product_size, o.product_saled from product p, 
(select product_option_seq, wm_concat(product_color) product_color, wm_concat(product_size) product_size, sum(product_saled) product_saled from product_option group by product_option_seq) o 
where p.product_seq = o.product_option_seq and p.product_category != '악세사리';

select 
    product_option_seq, 
    wm_concat(product_color) product_color, 
    wm_concat(product_size) product_size, 
    sum(product_saled) product_saled 
    from product_option 
    group by product_option_seq;



COMMIT;

select product_img from (select rownum rnum, p.* from product p where p.product_gender =#{product_gender}) where rnum between #{product_~} and #{~~};