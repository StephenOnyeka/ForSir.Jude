import Image from "next/image";
// import localFont from "next/font/local";
import Link from "next/link";
// import Example from "@/components/Navbar";
import { formatPrice, storefront } from "@/utils";

export default function Products({ products }) {
  // console.log("API URL:", process.env.NEXT_PUBLIC_API_0.
  
  console.log({ products });
  return (
    // <div className="relative isolate px-6 pt-14 lg:px-8">
    <>
      {/* <Example /> */}
      <div className="relative isolate px-4 pt-8 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
        {/* <div> */}
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {/* <div className="mx-auto mt-6 mb-0 font-semibold text-lg"> */}
          <h2 className="text-2xl font-semibold">All Products</h2>
          <br />
          {/* <h2 className="sr-only">Products</h2> */}

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.edges.map((item) => {
              const product = item.node;
              const image = product.images.edges[0].node;
              return (
                <Link key={product.handle} href={`/products/${product.handle}`}>
                  <div className="group">
                    <Image
                      alt={image.imageAlt}
                      src={image.transformedSrc}
                      className="aspect-square w-full border rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
                      width={250}
                      height={100}
                      overlay="responsive"
                    />
                    <h3 className="mt-4 font-medium text-sm text-gray-700">
                      {product.title}
                    </h3>
                    <p className="mt-1 max-sm:mt-0 text-lg font-semibold text-green-900">
                      {formatPrice(product.priceRange.minVariantPrice.amount)}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
          {/* <div className="flex flex-wrap gap-x-6 lg:gap-x-8 gap-y-4">
            {products.edges.map((item) => {
              const product = item.node;
              const image = product.images.edges[0].node;
              return (
                <Link
                  key={product.handle}
                  href={`/products/${product.handle}`}
                  className="group"
                >
                  <div className="w-[250px] max-sm:w-[150px]">
                    <img
                      alt={image.altText}
                      src={image.transformedSrc}
                      className="aspect-[6/6] max-sm:aspect-[4/4] w-full border rounded-lg bg-gray-200 object-cover group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 font-medium text-sm text-gray-700">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {formatPrice(product.priceRange.minVariantPrice.amount)}
                  </p>
                </Link>
              );
            })}
          </div> */}
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

// export async function getStaticProps() {
//   const { data } = await storefront(productsQuery);
//   return {
//     props: {
//       products: data.products,
//     },
//   };
// }

export async function getStaticProps() {
    try {
        const { data } = await storefront(productsQuery);
      console.log("API Response: ", data);
        // Check if data and products are defined
        if (!data || !data.products) {
            console.error("No products data found", data);
            return {
                notFound: true, // Return a 404 page if no products are found
            };
        }

        return {
            props: {
                products: data.products,
            },
        };
    } catch (error) {
        console.error("Error fetching products:", error);
        return {
            notFound: true, // Return a 404 page on error
        };
    }
}


const gql = String.raw;
const productsQuery = gql`
  query Products {
    products(first: 100) {
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
