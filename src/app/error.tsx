"use client"

import { AlertTriangle } from "lucide-react"
import Link from "next/link"


export default function Error({error}: {error: Error}) {
  return(
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white dark:from-black dark:to-white-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 transition-colors duration-200">
    
    <div className="max-w-lg w-full space-y-8 text-center">
      <div>
        <AlertTriangle className="mx-auto h-24 w-24 text-red-500 dark:text-red-400" />
        <h1 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Oops! Something went wrong</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">We apologize for the inconvenience. An unexpected error has occurred.</p>
      </div>
      
      {error.message && (
        <div className="mt-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">Error ID: {error.message}</p>
        </div>
      )}
      
      
      <Link
          href="/"
          className="inline-flex h-10 items-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          Return to website
        </Link>
     
    </div>
  </div>
   
  )
}