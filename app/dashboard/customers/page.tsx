import AcmeLogo from '@/app/ui/acme-logo';
import { lusitana } from '../../ui/fonts';
import styles from '../../ui/home.module.css';

export default function Page() {
    return <p>Customers page!</p>
}

// export default function Page() {
//   return (
//     <main className="flex min-h-screen flex-col p-6">
//       <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
//         <AcmeLogo />
//       </div>
//       <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
//         <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
//           <div className={styles.shape} />
//           <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
//             <strong>Customers page</strong> This is the example for the customers page.
//           </p>
//         </div>
//         <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
//           {/* Add Hero Images Here */}
//         </div>
//       </div>
//     </main>
//   );
// }
