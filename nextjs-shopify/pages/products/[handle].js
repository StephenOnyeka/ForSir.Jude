import React,{useState} from "react";
import { formatPrice, storefront } from "@/utils";
import Link from "next/link";
import Image from "next/image";

const staticProducts = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
];
function Handle({ product, products }) {
  // function handle({ product: singleProduct}) {
    // console.log({ product });
  const [isLoading, setIsLoading] = useState(false);
  const image = product.images.edges[0].node;
  const variantId= product.variants.edges[0].node.id
    
  const relatedProducts = products.edges
    .filter((item) => item.node.handle !== product.handle)
        .slice(0, 4);
    
    async function checkout() {
        setIsLoading(true)
        const checkoutUrl = `https://ik20ex-qu.myshopify.com/cart/${variantId}:1`;

        // Redirect to the checkout page
        window.location.href = checkoutUrl;
    }
    // async function checkout() {
    //     setIsLoading(true)
    //     const { data } = await storefront(checkoutMutation, { variantId })
    //     const { webUrl } = data.checkoutCreate.checkout
    //         window.location.href= webUrl
    // }
  return (
    <main className="mx-auto pt-14 sm:pt-24 max-sm:px-4 px-6 lg:max-w-7xl mb-4 lg:px-8">
      {/* Product */}
      <div className="lg:grid lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
        {/* Product image */}
        <div className="lg:col-span-4">
          <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
            <Image
              src={image.transformedSrc}
              alt={image.altText}
              className="object-center object-cover"
              width={500}
              height={250}
              layout="responsive"
            />
          </div>
        </div>
        <div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:col-span-3">
          {/* <div className="flex flex-col-reverse"> */}
          <div className="flex flex-col">
            <div className="mt-4">
              <h1 className="text-3xl font-bold">{product.title}</h1>
              <br />
              <h2 id="information-heading" className="font-medium  italic">
                Product information
              </h2>
              <br />
              <p className="text-gray-500 mt-4">{product.description}</p>
            </div>
            {/* untouched */}
            {/* <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2"></div> */}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <button
                onClick={checkout}
                // onClick={() => setIsLoading(!isLoading)}
                className="w-full bg-green-900 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-500"
              >
                {isLoading && (
                  <svg
                    class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                Pay {formatPrice(product.priceRange.minVariantPrice.amount)}
              </button>
              <button className="w-full bg-white border rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-green-900 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-500">
                Preview
              </button>
            </div>
            {/* <hr /> */}
            <div className="border-t border-gray-200 mt-10 pt-10">
              <h3 className="text-sm font-medium text-gray-900">License</h3>
              <p className="mt-4 text-sm text-gray-500">
                For personal and professional use. You cannot resell or
                redistribute these icons in their original or modified state.
                <a
                  href=""
                  className="font-medium text-gray-900 hover:text-gray-700"
                >
                  Read full license
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Product details */}
      {/* Related products */}
      {/* <div className="mt-24 mb-8 grid grid-cols-1 gap-x-6 gap-y-4"> */}
      <p className="mt-24 mb-8 font-semibold text-lg">
        Customers also viewed
      </p>{" "}
      <div className="flex flex-wrap gap-x-6 lg:gap-x-8  gap-y-4 ">
        {relatedProducts.map((item) => {
          const product = item.node;
          const image = product.images.edges[0].node;
          return (
            <>
              <Link
                key={product.handle}
                href={`/products/${product.handle}`}
                className="group"
              >
                <div className="w-[250px] max-sm:w-[150px]">
                  <Image
                    alt={image.altText}
                    src={image.transformedSrc}
                    className="aspect-[6/6] max-sm:aspect-[4/4] w-full border rounded-lg bg-gray-200 object-cover group-hover:opacity-75"
                    width={250}
                    height={100}
                  />
                </div>
                <h3 className="mt-4 font-medium text-sm text-gray-700">
                  {product.title}
                </h3>
                <p className="mt-1 text-lg font-medium text-green-900">
                  {formatPrice(product.priceRange.minVariantPrice.amount)}
                </p>
                {/* </div> */}
              </Link>
            </>
          );
        })}
      </div>
    </main>
  );
}
export default Handle;

export async function getStaticPaths() {
  const { data } = await storefront(productsQuery);
  return {
    paths: data.products.edges.map((product) => ({
      params: { handle: product.node.handle },
    })),
    fallback: false,
  };
}
const gql = String.raw;
const productsQuery = gql`
  query Products {
    products(first: 6) {
      edges {
        node {
          handle
        }
      }
    }
  }
`;

export async function getStaticProps({ params }) {
  const { data } = await storefront(singleProductQuery, {
    handle: params.handle,
  });
  return {
    props: {
      product: data.productByHandle,
      products: data.products,
    },
  };
}
// const gql = String.raw;
const singleProductQuery = gql`
  query SingleProduct($handle: String!) {
    productByHandle(handle: $handle) {
      title
      handle
      description
      updatedAt
      tags
      priceRange {
        minVariantPrice {
          amount
        }
      }
      images(first: 1) {
        edges {
          node {
            transformedSrc
            altText
          }
        }
      }
      variants(first: 1) {
        edges {
          node {
            id
          }
        }
      }
    }

    products(first: 6) {
      edges {
        node {
          title
          handle
          tags
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 1) {
            edges {
              node {
                transformedSrc
                altText
              }
            }
          }
        }
      }
    }
  }
`;

const checkoutMutation = gql`
  mutation CheckoutCreate($variantId: ID!) {
    checkoutCreate(
      input: { lineItems: [{ variantId: $variantId, quantity: 1 }] }
    ) {
      checkout {
        webUrl
      }
    }
  }
`;