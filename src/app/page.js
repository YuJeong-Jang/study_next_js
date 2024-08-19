import ProductList from "@/Components/ProductList";
import ShopFooter from "@/Components/ShopFooter";
import Image from "next/image";

export default function Home() {
  // // 데이터를 페칭(조달) 해와야됨
  const products = ["아이폰", "아이패드", "갤럭시"];
  const copyright = "Copyright 2024 by kitri";
  return (
    <div>
      <hr />
      <Image
        src="https://plus.unsplash.com/premium_photo-1723300354426-e8c90954f6d5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={300}
        height={200}
        alt="이미지 로드에 실패했습니다."
      />
      <p>상품 목록</p>
      <ProductList products={products} />
      {/* <ShopFooter copyright={copyright}/> */}
    </div>
  );
}
