// import Image from "next/image"
// import { PRODUCTS } from "@/constants/content"

// export function Products() {
//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-4">
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {PRODUCTS.map((product, i) => (
//             <div key={`${product.name}-${i}`} className="rounded-xl border p-4">
//               <div className="relative aspect-square overflow-hidden rounded-lg">
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               <h3 className="mt-4 text-xl font-semibold">
//                 {product.name}
//               </h3>

//               {product.category && (
//                 <p className="mt-1 text-sm text-gray-500">
//                   {product.category}
//                 </p>
//               )}

//               <p className="mt-2 text-sm text-gray-600">
//                 {product.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
