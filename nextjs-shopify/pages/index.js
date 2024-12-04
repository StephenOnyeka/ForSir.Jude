import Image from "next/image";
// import localFont from "next/font/local";
import Link from "next/link";
import { formatPrice, storefront } from "@/utils";
import { FaRegCircleCheck } from "react-icons/fa6"
import Navbar from "@/components/Navbar";

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
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];
export default function Home({ products }) {
  console.log({ products });
  return (
    <div>
      <div className="relative isolate px-6  lg:px-8">
        <span>
          <Navbar />
        </span>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#b780ff] to-[#89fce1] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of farm produce.{" "}
              {/* <a href="#" className="font-semibold text-indigo-600">
              <span aria-hidden="true" className="absolute inset-0" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a> */}
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-5xl font-normal italic tracking-tight text-green-900 sm:text-7xl">
              <span className="font-bold not-italic">Connecting farms to tables:</span> A
              substainable future
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Discover the true essence of food: organic products cultivated
              with natural methods, for a healthy and environmentally friendly
              table
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="flex items-center justify-center rounded-md bg-green-900 px-3.5 py-3.5 text-sm font-semibold text-white shadow-sm divide-x divide-green-600 hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                <span className="pr-4">Get started</span>
                <span className="pl-4">
                  <FaRegCircleCheck size={18} />
                </span>
              </a>
              {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
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
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#a280ff] to-[#89fcb5] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div>
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-semibold">Products</h2>
            <br />

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.edges.map((item) => {
                const product = item.node;
                const image = product.images.edges[0].node;
                return (
                  <Link
                    key={product.handle}
                    href={`/products/${product.handle}`}
                  >
                    <div className="group">
                      <Image
                        alt={image.imageAlt}
                        src={image.transformedSrc}
                        className="aspect-square w-full border rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
                        width={500}
                        height={250}
                      />
                      <h3 className="mt-4 font-medium text-sm text-gray-700">
                        {product.title}
                      </h3>
                      <p className="mt-1 text-lg font-semibold text-green-900">
                        {/* ₦{product.priceRange.minVariantPrice.amount} */}
                        {formatPrice(product.priceRange.minVariantPrice.amount)}
                      </p>
                      {/* </div> */}
                      {/* <p className="mt-1 text-sm italic text-gray-500">{product.tags[0]}</p> */}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        {/* <Navbar /> */}
      </div>
    </div>
  );
}
const gql = String.raw;

export async function getStaticProps() {
  const { data } = await storefront(productsQuery);
  return {
    props: {
      products: data.products,
    },
  };
}
const productsQuery = gql`
  query Products {
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
