"use client";
import Image from "next/image";

import React from "react";

export const Card = () => {
    return (
        <div>
            <div className="hover-3d">
                <div className="card card-body rounded-2xl grid grid-cols-9 md:grid-cols-12 items-center">
                    <div className="col-span-3 md:flex justify-center hidden">
                        <Image
                            width={150}
                            height={150}
                            className="rounded-full shadow-lg"
                            src="https://lh3.googleusercontent.com/a/ACg8ocJyKmN00v0EKYBId9b_gms6XRo-YnT7ZbgZVYPma5cNTPhMnjo=s576-c-no"
                            alt="ikeyu's-icon"
                        />
                    </div>
                    <div className="col-span-9 md:col-span-8 md:pl-4">
                        <div className="mb-4">
                            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-200 py-2 whitespace-nowrap">
                                いけゆう / 池田 悠真
                            </h2>
                            <div className="text-gray-200 text-xs lg:text-base space-y-3 whitespace-nowrap">
                                <p>
                                    日本工業大学先進工学部データサイエンス学科
                                </p>
                                <p>特定非営利活動法人NxTEND　戦略事業本部</p>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div>
                                <p className="flex justify-center items-center my-2.5 text-sm md:text-xl text-gray-200 transition-all duration-300 whitespace-nowrap">
                                    SNS
                                </p>
                                <div className="text-gray-200">
                                    <div className="flex justify-center items-center p-1">
                                        <a
                                            target="_blank"
                                            href="https://x.com/ikeyu_dev"
                                            className="transition-all duration-100"
                                            rel="noopener noreferrer"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                                xmlSpace="preserve"
                                                className="w-5 h-5 md:w-6 md:h-6 fill-gray-200 hover:fill-gray-500 transition-all duration-100"
                                            >
                                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                            </svg>
                                        </a>
                                        <p>
                                            <span className="ml-2 font-bold">
                                                ikeyu_dev
                                            </span>
                                        </p>
                                    </div>
                                    <div className="flex justify-center items-center p-1">
                                        <a
                                            target="_blank"
                                            href="https://github.com/ikeyu-dev"
                                            className="transition-all duration-100"
                                            rel="noopener noreferrer"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                className="w-5 h-5 md:w-6 md:h-6 fill-gray-200 hover:fill-gray-500 transition-all duration-100"
                                            >
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                        <p>
                                            <span className="ml-2 font-bold">
                                                ikeyu-dev
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="flex justify-center items-center my-2.5 text-sm md:text-xl text-gray-200 transition-all duration-300 whitespace-nowrap">
                                    frontend
                                </p>
                                <div className="text-gray-200">
                                    <div className="flex justify-center items-center p-1">
                                        <a
                                            target="_blank"
                                            href="https://ja.vuejs.org/"
                                            rel="noopener noreferrer"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                version="1.1"
                                                viewBox="0 0 261.76 226.69"
                                                className="w-5 h-5 md:w-6 md:h-6"
                                            >
                                                <g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
                                                    <g transform="translate(178.06 235.01)">
                                                        <path
                                                            d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"
                                                            fill="#41b883"
                                                        />
                                                    </g>
                                                    <g transform="translate(178.06 235.01)">
                                                        <path
                                                            d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"
                                                            fill="#34495e"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                        </a>
                                        <p>
                                            <span className="ml-2 font-bold">
                                                Vue.js
                                            </span>
                                        </p>
                                    </div>
                                    <div className="flex justify-center items-center p-1">
                                        <a
                                            target="_blank"
                                            href="https://nuxt.com/"
                                            rel="noopener noreferrer"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 400 298"
                                                className="w-5 h-5 md:w-6 md:h-6"
                                            >
                                                <g
                                                    fill="none"
                                                    fillRule="nonzero"
                                                >
                                                    <path
                                                        fill="#00C58E"
                                                        d="M227.92099 82.07407l-13.6889 23.7037-46.8148-81.08641L23.7037 273.58025h97.3037c0 13.0912 10.61252 23.7037 23.70371 23.7037H23.70371c-8.46771 0-16.29145-4.52017-20.5246-11.85382-4.23315-7.33366-4.23272-16.36849.00114-23.70174L146.89383 12.83951c4.23415-7.33433 12.0596-11.85252 20.5284-11.85252 8.46878 0 16.29423 4.51819 20.52839 11.85252l39.97037 69.23456z"
                                                    />
                                                    <path
                                                        fill="#2F495E"
                                                        d="M331.6642 261.7284l-90.05432-155.95062-13.6889-23.7037-13.68888 23.7037-90.04445 155.95061c-4.23385 7.33325-4.23428 16.36808-.00113 23.70174 4.23314 7.33365 12.05689 11.85382 20.5246 11.85382h166.4c8.46946 0 16.29644-4.51525 20.532-11.84955 4.23555-7.3343 4.23606-16.37123.00132-23.706h.01976zM144.7111 273.58024L227.921 129.48148l83.19012 144.09877h-166.4z"
                                                    />
                                                    <path
                                                        fill="#108775"
                                                        d="M396.04938 285.4321c-4.23344 7.33254-12.05656 11.85185-20.52345 11.85185H311.1111c13.0912 0 23.7037-10.6125 23.7037-23.7037h40.66173L260.09877 73.74815l-18.4889 32.02963-13.68888-23.7037L239.5753 61.8963c4.23416-7.33433 12.0596-11.85252 20.5284-11.85252 8.46879 0 16.29423 4.51819 20.52839 11.85252l115.41728 199.8321c4.23426 7.33395 4.23426 16.36975 0 23.7037z"
                                                    />
                                                </g>
                                            </svg>
                                        </a>
                                        <p>
                                            <span className="ml-2 font-bold">
                                                Nuxt.js
                                            </span>
                                        </p>
                                    </div>
                                    <div className="flex justify-center items-center p-1">
                                        <a
                                            target="_blank"
                                            href="https://nextjs.org/"
                                            rel="noopener noreferrer"
                                        >
                                            <svg
                                                viewBox="0 0 256 256"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 md:w-6 md:h-6 fill-gray-200"
                                            >
                                                <g>
                                                    <path d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z"></path>
                                                </g>
                                            </svg>
                                        </a>
                                        <p>
                                            <span className="ml-2 font-bold">
                                                Next.js
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="flex justify-center items-center my-2.5 text-sm md:text-xl text-gray-200 transition-all duration-300 whitespace-nowrap">
                                    backend
                                </p>
                                <div className="text-gray-200">
                                    <div className="flex justify-center items-center p-1">
                                        <a
                                            target="_blank"
                                            href="https://fastapi.tiangolo.com/ja/"
                                            rel="noopener noreferrer"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                height="2500"
                                                width="2500"
                                                viewBox="0 0 154 154"
                                                className="w-5 h-5 md:w-6 md:h-6"
                                            >
                                                <circle
                                                    cx="77"
                                                    cy="77"
                                                    fill="#05998b"
                                                    r="77"
                                                />
                                                <path
                                                    d="M81.375 18.667l-38.75 70H77.5l-3.875 46.666 38.75-70H77.5z"
                                                    fill="#fff"
                                                />
                                            </svg>
                                        </a>
                                        <p>
                                            <span className="ml-2 font-bold">
                                                FastAPI
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};
