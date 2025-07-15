// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Package, Terminal, FileText, CheckCircle } from 'lucide-react';
// import { CodeBlock } from './code-block';
// import { cn } from '@/lib/utils';

// interface InstallationGuideProps {
//   component: string;
//   dependencyCommand?: string;
//   npmCommandTs?: string;
//   npmCommandJs?: string;
//   tsCode: string;
//   jsCode: string;
//   className?: string;
// }

// export const InstallationGuide: React.FC<InstallationGuideProps> = ({
//   component,
//   dependencyCommand,
//   npmCommandTs,
//   npmCommandJs,
//   tsCode,
//   jsCode,
//   className,
// }) => {
//   const [completedSteps, setCompletedSteps] = useState<number[]>([]);

//   const toggleStep = (stepIndex: number) => {
//     setCompletedSteps(prev =>
//       prev.includes(stepIndex)
//         ? prev.filter(i => i !== stepIndex)
//         : [...prev, stepIndex]
//     );
//   };

//   const steps = [
//     ...(dependencyCommand ? [{
//       title: 'Install Dependencies',
//       description: 'Install the required dependencies for this component',
//       icon: Package,
//       content: (
//         <CodeBlock
//           code={dependencyCommand}
//           language="bash"
//           filename="Terminal"
//           showLineNumbers={false}
//         />
//       ),
//     }] : []),
//     {
//       title: 'Copy Component Code',
//       description: 'Copy the component code to your project',
//       icon: FileText,
//       content: (
//         <div className="space-y-4">
//           <div className="flex space-x-2 mb-4">
//             <button
//               onClick={() => {/* Handle TypeScript */}}
//               className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition-colors"
//             >
//               TypeScript
//             </button>
//             <button
//               onClick={() => {/* Handle JavaScript */}}
//               className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors"
//             >
//               JavaScript
//             </button>
//           </div>
//           <CodeBlock
//             code={tsCode}
//             language="tsx"
//             filename={`${component}.tsx`}
//           />
//         </div>
//       ),
//     },
//     ...(npmCommandTs ? [{
//       title: 'CLI Installation (Optional)',
//       description: 'Or install using our CLI tool',
//       icon: Terminal,
//       content: (
//         <div className="space-y-3">
//           <CodeBlock
//             code={npmCommandTs}
//             language="bash"
//             filename="TypeScript"
//             showLineNumbers={false}
//           />
//           {npmCommandJs && (
//             <CodeBlock
//               code={npmCommandJs}
//               language="bash"
//               filename="JavaScript"
//               showLineNumbers={false}
//             />
//           )}
//         </div>
//       ),
//     }] : []),
//   ];

//   return (
//     <div className={cn('space-y-6', className)}>
//       <div className="space-y-2">
//         <h3 className="text-xl font-semibold text-gray-900">Installation Guide</h3>
//         <p className="text-gray-600">
//           Follow these steps to add the {component} component to your project.
//         </p>
//       </div>

//       <div className="space-y-4">
//         {steps.map((step, index) => {
//           const Icon = step.icon;
//           const isCompleted = completedSteps.includes(index);

//           return (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="border border-gray-200 rounded-lg overflow-hidden"
//             >
//               <button
//                 onClick={() => toggleStep(index)}
//                 className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
//               >
//                 <div className="flex items-center space-x-3">
//                   <div className={cn(
//                     'flex items-center justify-center w-8 h-8 rounded-full transition-colors',
//                     isCompleted
//                       ? 'bg-green-100 text-green-600'
//                       : 'bg-gray-200 text-gray-600'
//                   )}>
//                     {isCompleted ? (
//                       <CheckCircle className="w-5 h-5" />
//                     ) : (
//                       <Icon className="w-5 h-5" />
//                     )}
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-900">
//                       Step {index + 1}: {step.title}
//                     </h4>
//                     <p className="text-sm text-gray-600">{step.description}</p>
//                   </div>
//                 </div>
//                 <motion.div
//                   animate={{ rotate: isCompleted ? 180 : 0 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <svg
//                     className="w-5 h-5 text-gray-400"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </motion.div>
//               </button>

//               <motion.div
//                 initial={false}
//                 animate={{
//                   height: isCompleted ? 'auto' : 0,
//                   opacity: isCompleted ? 1 : 0,
//                 }}
//                 transition={{ duration: 0.3 }}
//                 className="overflow-hidden"
//               >
//                 <div className="p-6 bg-white border-t border-gray-200">
//                   {step.content}
//                 </div>
//               </motion.div>
//             </motion.div>
//           );
//         })}
//       </div>

//       <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
//         <div className="flex items-start space-x-3">
//           <div className="flex-shrink-0">
//             <svg
//               className="w-5 h-5 text-blue-600 mt-0.5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//           </div>
//           <div>
//             <h4 className="text-sm font-medium text-blue-900">Need Help?</h4>
//             <p className="text-sm text-blue-700 mt-1">
//               Check our documentation or join our community for support and examples.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };