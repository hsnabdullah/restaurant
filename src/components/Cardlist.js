import React from "react";

export default function Cardlist({ data }) {
  return (
    <div>
      <div class="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
        <div class="flex items-center justify-between p-4 bg-orange-600 text-white rounded-t-md">
          <h5 class="text-xl font-bold leading-none">{data?.title}</h5>
          <a href="#" class="text-sm font-medium">
            View all
          </a>
        </div>
        <div class="flow-root">
          <ul
            role="list"
            class="divide-y divide-gray-200 dark:divide-gray-700 "
          >
            {data?.list?.map((d, i) => {
              return (
                <li key={i} class="py-3 sm:py-4 px-6">
                  <div class="flex items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src="/docs/images/people/profile-picture-1.jpg"
                        alt="Neil image"
                      />
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {d?.title}
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      {d?.price}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
