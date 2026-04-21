import DetailProduk from "@/views/DetailProduct"
import { useRouter } from "next/router"
import useSWR from "swr"
import fetcher from "@/utils/swr/fetcher"
import ProductType from "@/types/Product.type"

const HalamanProduk = ({products}: {products: ProductType}) => {
    // const {query} = useRouter()
    // const {data,error,isLoading} = useSWR(`/api/produk/${query.id}`,fetcher)
    // return(
    //     <div>
    //         <DetailProduk products={isLoading ? []: data.data}/>
    //     </div>
    // )


    return (
        <div>
            <DetailProduk products={products} />
        </div>
    )
}


export default HalamanProduk


// export async function getServerSideProps({params}:{params:{id:string}}) {
//     const res = await fetch(`http://localhost:3000/api/produk/${params?.id}`)
//     const respone = await res.json();


//     return {
//         props: {
//             products: respone.data
//         }
//     }


// }


export async function getStaticPaths() {
    const res = await fetch("http://localhost:3000/api/produk");
    const data = await res.json();

    const paths = data.data.map((product: any) => ({
      params: { id: product.id.toString() },
    }));

    return {
        paths,
      fallback: false,
    };
  }


export async function getStaticProps({ params }: { params: { id: string } }) {
    const res = await fetch(`http://localhost:3000/api/produk/${params.id}`);
    const response: { data: ProductType[] } = await res.json();
    return {
      props: {
        products: response.data,
      },
    };
  
}