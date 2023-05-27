import React from 'react';

interface Props {
  id: string;
}

export const GlobalSvgSelector = ({ id }: Props) => {
  switch (id) {
    case 'header-logo':
      return (
        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M32.5 65C50.4493 65 65 50.4493 65 32.5C65 14.5507 50.4493 0 32.5 0C14.5507 0 0 14.5507 0 32.5C0 50.4493 14.5507 65 32.5 65Z"
            fill="#4793FF"
          />
          <path
            d="M65 32.5C65 29.8954 64.6916 27.3631 64.113 24.9358L54.3423 15.1651L53.0241 15.7211L48.3234 11.1622C48.3234 11.1622 46.5495 14.0707 44.5393 12.8754L41.3829 9.79712L41.1963 14.2822L8.78807 46.265L27.0688 64.5458C28.8351 64.843 30.6491 65 32.5 65C50.4493 65 65 50.4493 65 32.5Z"
            fill="#424FDD"
          />
          <path
            d="M58.3388 29.0023L59.7103 28.1252L58.2387 27.1841C56.6467 26.1659 56.217 24.03 57.2915 22.4755L58.2847 21.0387L56.6808 20.7601C54.8077 20.4347 53.5845 18.6126 53.9927 16.7559L54.3422 15.1659L52.6363 15.541C50.7905 15.9467 48.9765 14.7403 48.637 12.8812L48.3233 11.163L46.9922 12.1001C45.4377 13.1946 43.2843 12.7711 42.26 11.1694L41.3829 9.79797L40.4418 11.2695C39.4237 12.8615 37.2878 13.2912 35.7333 12.2167L34.2964 11.2235L34.0179 12.8275C33.6925 14.7005 31.8705 15.9237 30.0136 15.5156L28.4237 15.1661L28.7987 16.8719C29.2044 18.7177 27.998 20.5317 26.1389 20.8712L24.4207 21.1849L25.3579 22.516C26.4523 24.0705 26.0288 26.2239 24.4272 27.2482L23.0557 28.1253L24.5271 29.0664C26.1192 30.0846 26.5488 32.2204 25.4743 33.775L24.4811 35.2118L26.0851 35.4904C27.9581 35.8157 29.1813 37.6379 28.7732 39.4946L28.4237 41.0845L30.1295 40.7095C31.9753 40.3038 33.7893 41.5102 34.1288 43.3693L34.4425 45.0876L35.7736 44.1505C37.3282 43.056 39.4815 43.4795 40.5058 45.0812L41.3829 46.4526L42.324 44.9811C43.3422 43.3891 45.478 42.9594 47.0326 44.0339L48.4694 45.0271L48.748 43.4231C49.0734 41.5501 50.8955 40.3269 52.7522 40.735L54.3422 41.0845L53.9671 39.3787C53.5614 37.5329 54.7678 35.7189 56.6269 35.3794L58.3453 35.0657L57.4081 33.7346C56.3136 32.1801 56.7371 30.0265 58.3388 29.0023V29.0023Z"
            fill="#FDBF2D"
          />
          <path
            d="M57.4082 33.734L58.3451 35.0645L56.6275 35.3781C54.7676 35.7183 53.5615 37.5324 53.9678 39.3783L54.3423 41.0833L52.7529 40.7342C50.8955 40.3254 49.0738 41.5492 48.7475 43.4218L48.4695 45.0265L47.0323 44.0324C45.4784 42.9584 43.3418 43.3875 42.3237 44.9795L41.3829 46.4522V9.797L42.2602 11.1681C43.2847 12.7702 45.4378 13.1943 46.9917 12.0987L48.3235 11.1617L48.637 12.8807C48.976 14.7393 50.7902 15.9453 52.6361 15.5404L54.3423 15.1646L53.9932 16.7553C53.5844 18.6114 54.8082 20.4344 56.6808 20.7594L58.2842 21.0374L57.2914 22.4745C56.2174 24.0297 56.6465 26.1651 58.2385 27.1832L59.7099 28.1239L58.3388 29.0012C56.7366 30.0257 56.3139 32.1788 57.4082 33.734Z"
            fill="#FD9827"
          />
          <path
            d="M41.383 40.9705C48.4777 40.9705 54.2291 35.2191 54.2291 28.1243C54.2291 21.0296 48.4777 15.2782 41.383 15.2782C34.2883 15.2782 28.5368 21.0296 28.5368 28.1243C28.5368 35.2191 34.2883 40.9705 41.383 40.9705Z"
            fill="#FFE05F"
          />
          <path
            d="M54.2293 28.1239C54.2293 35.2193 48.4771 40.9703 41.3829 40.9703V15.2788C48.4771 15.2788 54.2293 21.0298 54.2293 28.1239V28.1239Z"
            fill="#F9CB0D"
          />
          <path
            d="M42.5274 32.242C42.1958 32.242 41.8694 32.2633 41.5478 32.3006C41.5794 31.9404 41.5966 31.5761 41.5966 31.2077C41.5966 24.3886 36.0687 18.8606 29.2495 18.8606C23.5703 18.8606 18.7873 22.6953 17.3468 27.9164C16.8894 27.8562 16.4229 27.8248 15.9491 27.8248C10.0886 27.8248 5.33776 32.5756 5.33776 38.4361C5.33776 44.2967 10.0886 49.0475 15.9491 49.0475H42.5274C47.1682 49.0475 50.9302 45.2854 50.9302 40.6447C50.9302 36.004 47.1682 32.242 42.5274 32.242V32.242Z"
            fill="white"
          />
          <path
            d="M50.9302 40.6436C50.9302 45.2846 47.1683 49.0467 42.5272 49.0467H28.134V18.9098C28.5015 18.876 28.8735 18.8596 29.2498 18.8596C36.0691 18.8596 41.5969 24.3874 41.5969 31.2067C41.5969 31.5754 41.5795 31.9396 41.5477 32.2996C41.8696 32.2626 42.1956 32.2407 42.5272 32.2407C47.1683 32.2407 50.9302 36.0036 50.9302 40.6436V40.6436Z"
            fill="#DAEFEC"
          />
        </svg>
      );
    case 'close':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.25 8.25C16.836 8.25 16.5 8.586 16.5 9C16.5 13.1355 13.1355 16.5 9 16.5C4.8645 16.5 1.5 13.1355 1.5 9C1.5 4.8645 4.8645 1.5 9 1.5C11.0134 1.5 12.9034 2.28675 14.322 3.7155C14.6138 4.00912 15.0889 4.011 15.3825 3.71925C15.6765 3.4275 15.678 2.95238 15.3862 2.65838C13.6841 0.94425 11.4157 0 9 0C4.03725 0 0 4.03725 0 9C0 13.9628 4.03725 18 9 18C13.9624 18 18 13.9628 18 9C18 8.586 17.664 8.25 17.25 8.25Z"
            fill="#4793FF"
          />
          <path
            d="M10.0605 9L11.7803 7.28025C12.0731 6.98737 12.0731 6.51262 11.7803 6.21975C11.4874 5.92687 11.0126 5.92687 10.7198 6.21975L9.00003 7.9395L7.28028 6.21975C6.98778 5.92687 6.51228 5.92687 6.21978 6.21975C5.9269 6.51262 5.9269 6.98737 6.21978 7.28025L7.93953 9L6.21978 10.7197C5.9269 11.0126 5.9269 11.4874 6.21978 11.7802C6.36603 11.9269 6.55803 12 6.75003 12C6.94203 12 7.13403 11.9269 7.28028 11.7802L9.00003 10.0605L10.7198 11.7802C10.8664 11.9269 11.058 12 11.25 12C11.442 12 11.6336 11.9269 11.7803 11.7802C12.0731 11.4874 12.0731 11.0126 11.7803 10.7197L10.0605 9Z"
            fill="#4793FF"
          />
        </svg>
      );
    case '01d':
      return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24.0092 35.5016C30.3585 35.5016 35.5056 30.3547 35.5056 24.0058C35.5056 17.6568 30.3585 12.5099 24.0092 12.5099C17.6599 12.5099 12.5128 17.6568 12.5128 24.0058C12.5128 30.3547 17.6599 35.5016 24.0092 35.5016Z"
            fill="url(#paint5_linear)"
          />
          <path
            d="M34.8135 2.40051L32.1118 8.92324C31.2312 11.0477 28.0444 9.72795 28.925 7.60352L31.6267 1.08079C32.5073 -1.04363 35.6941 0.276087 34.8135 2.40051ZM19.0727 40.3988L16.371 46.9215C15.4904 49.0459 12.3036 47.7262 13.1842 45.6018L15.8859 39.0791C16.7665 36.9546 19.9533 38.2743 19.0727 40.3988ZM46.9215 16.3748L40.3984 19.0763C38.2739 19.9569 36.9541 16.7703 39.0786 15.8897L45.6017 13.1882C47.7262 12.3076 49.046 15.4942 46.9215 16.3748ZM8.92137 32.1149L2.39833 34.8164C0.273802 35.697 -1.04598 32.5104 1.07855 31.6298L7.60158 28.9283C9.72611 28.0477 11.0459 31.2343 8.92137 32.1149ZM45.6017 34.8187L39.0786 32.1172C36.9541 31.2366 38.2739 28.05 40.3984 28.9306L46.9215 31.6321C49.046 32.5127 47.7262 35.6993 45.6017 34.8187ZM7.60158 19.0786L1.07855 16.3771C-1.04598 15.4965 0.273802 12.3099 2.39833 13.1905L8.92137 15.892C11.0459 16.7726 9.72611 19.9592 7.60158 19.0786ZM16.3687 1.0785L19.0704 7.60122C19.951 9.72565 16.7642 11.0454 15.8836 8.92094L13.1819 2.39821C12.3013 0.273788 15.4881 -1.04593 16.3687 1.0785ZM32.1095 39.0768L34.8112 45.5995C35.6918 47.7239 32.505 49.0436 31.6244 46.9192L28.9227 40.3965C28.0421 38.2721 31.2289 36.9523 32.1095 39.0768Z"
            fill="#FFB300"
          />
          <defs>
            <linearGradient
              id="paint5_linear"
              x1="24.0092"
              y1="12.5099"
              x2="24.0092"
              y2="35.1951"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFC227" />
              <stop offset="1" stopColor="#FFB300" />
            </linearGradient>
          </defs>
        </svg>
      );
    case '01n':
      return (
        <svg enableBackground="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g id="Layer_19">
            <g>
              <g>
                <path
                  d="M30.9,20.8c-2.2,6.1-8,10.2-14.5,10.2C7.9,31,1,24.2,1,15.8C1,8.7,5.9,2.6,12.9,1c0.3-0.1,0.7,0,1,0.3     c0.2,0.3,0.3,0.7,0.2,1c-0.5,1.4-0.8,2.9-0.8,4.4c0,7.3,6,13.2,13.4,13.2c1,0,2.1-0.1,3.1-0.4c0.3-0.1,0.7,0,1,0.3     C31,20.1,31.1,20.5,30.9,20.8z"
                  fill="#FFC10A"
                />
              </g>
            </g>
          </g>
        </svg>
      );
    case '02d':
      return (
        <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient
              gradientTransform="matrix(-1, 0, 0, 1, 65.8, 0)"
              gradientUnits="userSpaceOnUse"
              id="linear-gradient"
              x1="46.72"
              x2="25.63"
              y1="58.39"
              y2="31.08"
            >
              <stop offset="0" stopColor="#f2f2f2" />
              <stop offset="1" stopColor="#cfcfcf" />
            </linearGradient>
            <linearGradient
              gradientTransform="matrix(0, -1, -1, 0, 109.04, 59.43)"
              gradientUnits="userSpaceOnUse"
              id="linear-gradient-2"
              x1="12.25"
              x2="23.86"
              y1="56.93"
              y2="74.58"
            >
              <stop offset="0.02" stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <title />
          <circle fill="#efcc00" cx="39.8" cy="28" r="12.59" />
          <line
            fill="none"
            stroke="#efcc00"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            x1="39.8"
            x2="39.8"
            y1="8"
            y2="12.44"
          />
          <line
            fill="none"
            stroke="#efcc00"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            x1="39.8"
            x2="39.8"
            y1="43.56"
            y2="48"
          />
          <line
            fill="none"
            stroke="#efcc00"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            x1="19.8"
            x2="24.25"
            y1="28"
            y2="28"
          />
          <line
            fill="none"
            stroke="#efcc00"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            x1="55.36"
            x2="59.8"
            y1="28"
            y2="28"
          />
          <line
            fill="none"
            stroke="#efcc00"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            x1="25.66"
            x2="28.8"
            y1="13.86"
            y2="17"
          />
          <line
            fill="none"
            stroke="#efcc00"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            x1="50.8"
            x2="53.94"
            y1="39"
            y2="42.14"
          />
          <line
            fill="none"
            stroke="#efcc00"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            x1="25.66"
            x2="28.8"
            y1="42.14"
            y2="39"
          />
          <line
            fill="none"
            stroke="#efcc00"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            x1="50.8"
            x2="53.94"
            y1="17"
            y2="13.86"
          />
          <path
            fill="url(#linear-gradient)"
            d="M23.5,21.9A17.49,17.49,0,0,1,39,31.22a13.75,13.75,0,1,1,6.92,25.62L23.5,56.9a17.5,17.5,0,0,1,0-35Z"
          />
          <circle
            fill="url(#linear-gradient-2)"
            cx="45.89"
            cy="43.09"
            r="13.75"
            transform="translate(-7.96 75.69) rotate(-74.39)"
          />
        </svg>
      );
    case '02n':
      return (
        <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient
              gradientTransform="matrix(-1, 0, 0, 1, 65.97, 0)"
              gradientUnits="userSpaceOnUse"
              id="linear-gradient"
              x1="46.72"
              x2="25.63"
              y1="58.39"
              y2="31.08"
            >
              <stop offset="0" stopColor="#f2f2f2" />
              <stop offset="1" stopColor="#cfcfcf" />
            </linearGradient>
            <linearGradient
              gradientTransform="matrix(0, -1, -1, 0, 168.93, 51.25)"
              gradientUnits="userSpaceOnUse"
              id="linear-gradient-2"
              x1="4.06"
              x2="15.68"
              y1="116.66"
              y2="134.3"
            >
              <stop offset="0.02" stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <title />
          <path
            fill="#efcc00"
            d="M50,26.71A13.88,13.88,0,0,1,37.86,8.77.6.6,0,0,0,37,8.08,13.88,13.88,0,1,0,55.92,27a.6.6,0,0,0-.69-.89A13.91,13.91,0,0,1,50,26.71Z"
          />
          <path
            fill="url(#linear-gradient)"
            d="M23.66,21.9a17.49,17.49,0,0,1,15.47,9.32A13.75,13.75,0,1,1,46,56.84l-22.39.06a17.5,17.5,0,0,1,0-35Z"
          />
          <circle
            fill="url(#linear-gradient-2)"
            cx="46.05"
            cy="43.09"
            r="13.75"
            transform="translate(-7.84 75.85) rotate(-74.39)"
          />
        </svg>
      );
    case '03d':
      return (
        <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="linear-gradient"
              x1="45.72"
              x2="24.63"
              y1="55.39"
              y2="28.08"
            >
              <stop offset="0" stopColor="#f2f2f2" />
              <stop offset="1" stopColor="#cfcfcf" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="linear-gradient-2"
              x1="14.82"
              x2="26.43"
              y1="33.86"
              y2="51.51"
            >
              <stop offset="0.02" stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <title />
          <path
            fill="url(#linear-gradient)"
            d="M41.3,18.9a17.49,17.49,0,0,0-15.47,9.32,13.75,13.75,0,1,0-6.92,25.62l22.39.06a17.5,17.5,0,0,0,0-35Z"
          />
          <circle
            fill="url(#linear-gradient-2)"
            cx="18.92"
            cy="40.09"
            r="13.75"
            transform="translate(-10.09 6.57) rotate(-15.61)"
          />
        </svg>
      );
    case '03n':
      return (
        <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="linear-gradient"
              x1="45.72"
              x2="24.63"
              y1="55.39"
              y2="28.08"
            >
              <stop offset="0" stopColor="#f2f2f2" />
              <stop offset="1" stopColor="#cfcfcf" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="linear-gradient-2"
              x1="14.82"
              x2="26.43"
              y1="33.86"
              y2="51.51"
            >
              <stop offset="0.02" stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <title />
          <path
            fill="url(#linear-gradient)"
            d="M41.3,18.9a17.49,17.49,0,0,0-15.47,9.32,13.75,13.75,0,1,0-6.92,25.62l22.39.06a17.5,17.5,0,0,0,0-35Z"
          />
          <circle
            fill="url(#linear-gradient-2)"
            cx="18.92"
            cy="40.09"
            r="13.75"
            transform="translate(-10.09 6.57) rotate(-15.61)"
          />
        </svg>
      );
    case '04d':
      return (
        <svg height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg">
          <title />
          <desc />
          <defs />
          <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
            <g fill="#157EFB" id="icon-20-clouds">
              <path
                d="M15.8374098,23.0232669 C17.0608812,23.1902285 18,24.2354757 18,25.5 C18,26.8903379 16.877788,28 15.4934692,28 L7.50653076,28 C6.11962422,28 5,26.8807119 5,25.5 C5,24.283795 5.85871249,23.282362 7.00041797,23.0505909 L7.00041797,23.0505909 C7.00013969,23.0337606 7,23.0168966 7,23 C7,21.3431457 8.34314567,20 10,20 C10.9268437,20 11.7555192,20.4203078 12.3058217,21.0807187 C12.5286313,21.0279355 12.7610533,21 13,21 C14.3148969,21 15.4322146,21.8459367 15.8374098,23.0232669 L15.8374098,23.0232669 Z M16.5537697,22.1622374 C17.8133041,22.5615948 18.7713123,23.6580102 18.9643479,25 L18.9643479,25 L25.0005601,25 C27.7616745,25 30,22.7558048 30,20 C30,17.9483386 28.7676457,16.1852931 26.9993494,15.4145295 L26.9993494,15.4145295 C26.9536744,12.4163763 24.5090248,10 21.5,10 C20.441357,10 19.4525719,10.299097 18.6135384,10.8173973 C17.3372745,9.10728055 15.2979469,8 13,8 C9.13400656,8 6,11.1340066 6,15 C6,15.1381509 6.00400207,15.275367 6.01189661,15.4115388 L6.01189661,15.4115388 C4.23965876,16.1816085 3,17.9491311 3,20 C3,21.4240417 3.59370353,22.7090387 4.54823845,23.6196934 C4.91252289,23.0491956 5.43754441,22.5908867 6.05940842,22.3093277 L6.05940842,22.3093277 C6.38662961,20.4293433 8.0263942,19 10,19 C11.0220863,19 11.9546373,19.3833459 12.6617178,20.0141026 C12.7732404,20.0047636 12.8860639,20 13,20 C14.5465851,20 15.8881641,20.8777349 16.5537697,22.1622374 L16.5537697,22.1622374 L16.5537697,22.1622374 Z M27.4248783,12.8229499 C28.3479899,12.4564585 29,11.5597662 29,10.5 C29,9.2354757 28.0608812,8.19022851 26.8374098,8.02326686 L26.8374098,8.02326686 C26.4322146,6.84593672 25.3148969,6 24,6 C23.7610533,6 23.5286313,6.02793551 23.3058217,6.08071872 C22.7555192,5.42030784 21.9268437,5 21,5 C19.3431457,5 18,6.34314567 18,8 C18,8.01689661 18.0001397,8.0337606 18.000418,8.05059087 L18.000418,8.05059087 C17.7688618,8.09759778 17.5489463,8.17626423 17.3454746,8.28196094 C17.9030329,8.64335206 18.4127608,9.07226749 18.8630774,9.55712634 C19.6689817,9.19900383 20.5612509,9 21.5,9 C24.1354933,9 26.4046422,10.5685061 27.4248783,12.8229499 L27.4248783,12.8229499 L27.4248783,12.8229499 Z"
                id="clouds"
              />
            </g>
          </g>
        </svg>
      );
    case '04n':
      return (
        <svg height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg">
          <title />
          <desc />
          <defs />
          <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
            <g fill="#157EFB" id="icon-20-clouds">
              <path
                d="M15.8374098,23.0232669 C17.0608812,23.1902285 18,24.2354757 18,25.5 C18,26.8903379 16.877788,28 15.4934692,28 L7.50653076,28 C6.11962422,28 5,26.8807119 5,25.5 C5,24.283795 5.85871249,23.282362 7.00041797,23.0505909 L7.00041797,23.0505909 C7.00013969,23.0337606 7,23.0168966 7,23 C7,21.3431457 8.34314567,20 10,20 C10.9268437,20 11.7555192,20.4203078 12.3058217,21.0807187 C12.5286313,21.0279355 12.7610533,21 13,21 C14.3148969,21 15.4322146,21.8459367 15.8374098,23.0232669 L15.8374098,23.0232669 Z M16.5537697,22.1622374 C17.8133041,22.5615948 18.7713123,23.6580102 18.9643479,25 L18.9643479,25 L25.0005601,25 C27.7616745,25 30,22.7558048 30,20 C30,17.9483386 28.7676457,16.1852931 26.9993494,15.4145295 L26.9993494,15.4145295 C26.9536744,12.4163763 24.5090248,10 21.5,10 C20.441357,10 19.4525719,10.299097 18.6135384,10.8173973 C17.3372745,9.10728055 15.2979469,8 13,8 C9.13400656,8 6,11.1340066 6,15 C6,15.1381509 6.00400207,15.275367 6.01189661,15.4115388 L6.01189661,15.4115388 C4.23965876,16.1816085 3,17.9491311 3,20 C3,21.4240417 3.59370353,22.7090387 4.54823845,23.6196934 C4.91252289,23.0491956 5.43754441,22.5908867 6.05940842,22.3093277 L6.05940842,22.3093277 C6.38662961,20.4293433 8.0263942,19 10,19 C11.0220863,19 11.9546373,19.3833459 12.6617178,20.0141026 C12.7732404,20.0047636 12.8860639,20 13,20 C14.5465851,20 15.8881641,20.8777349 16.5537697,22.1622374 L16.5537697,22.1622374 L16.5537697,22.1622374 Z M27.4248783,12.8229499 C28.3479899,12.4564585 29,11.5597662 29,10.5 C29,9.2354757 28.0608812,8.19022851 26.8374098,8.02326686 L26.8374098,8.02326686 C26.4322146,6.84593672 25.3148969,6 24,6 C23.7610533,6 23.5286313,6.02793551 23.3058217,6.08071872 C22.7555192,5.42030784 21.9268437,5 21,5 C19.3431457,5 18,6.34314567 18,8 C18,8.01689661 18.0001397,8.0337606 18.000418,8.05059087 L18.000418,8.05059087 C17.7688618,8.09759778 17.5489463,8.17626423 17.3454746,8.28196094 C17.9030329,8.64335206 18.4127608,9.07226749 18.8630774,9.55712634 C19.6689817,9.19900383 20.5612509,9 21.5,9 C24.1354933,9 26.4046422,10.5685061 27.4248783,12.8229499 L27.4248783,12.8229499 L27.4248783,12.8229499 Z"
                id="clouds"
              />
            </g>
          </g>
        </svg>
      );
    case '09d':
      return (
        <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient
              gradientTransform="matrix(-1, 0, 0, 1, -82.03, 0)"
              gradientUnits="userSpaceOnUse"
              id="linear-gradient"
              x1="-101.28"
              x2="-122.37"
              y1="46.39"
              y2="19.08"
            >
              <stop offset="0" stopColor="#f2f2f2" />
              <stop offset="1" stopColor="#cfcfcf" />
            </linearGradient>
            <linearGradient
              gradientTransform="matrix(0, -1, -1, 0, 134.73, -122.7)"
              gradientUnits="userSpaceOnUse"
              id="linear-gradient-2"
              x1="-157.89"
              x2="-146.27"
              y1="82.46"
              y2="100.11"
            >
              <stop offset="0.02" stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <title />
          <line
            fill="none"
            stroke="#0baeff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            x1="32.5"
            x2="32.5"
            y1="50.5"
            y2="57.5"
          />
          <line
            fill="none"
            stroke="#0baeff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            x1="26.5"
            x2="26.5"
            y1="48.5"
            y2="55.5"
          />
          <line
            fill="none"
            stroke="#0baeff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            x1="38.5"
            x2="38.5"
            y1="48.5"
            y2="55.5"
          />
          <path
            fill="url(#linear-gradient)"
            d="M23.66,9.9a17.49,17.49,0,0,1,15.47,9.32A13.75,13.75,0,1,1,46,44.84l-22.39.06a17.5,17.5,0,0,1,0-35Z"
          />
          <circle
            fill="url(#linear-gradient-2)"
            cx="46.05"
            cy="31.09"
            r="13.75"
            transform="translate(3.72 67.08) rotate(-74.39)"
          />
        </svg>
      );
    case '09n':
      return (
        <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient
              gradientTransform="matrix(-1, 0, 0, 1, -82.03, 0)"
              gradientUnits="userSpaceOnUse"
              id="linear-gradient"
              x1="-101.28"
              x2="-122.37"
              y1="46.39"
              y2="19.08"
            >
              <stop offset="0" stopColor="#f2f2f2" />
              <stop offset="1" stopColor="#cfcfcf" />
            </linearGradient>
            <linearGradient
              gradientTransform="matrix(0, -1, -1, 0, 134.73, -122.7)"
              gradientUnits="userSpaceOnUse"
              id="linear-gradient-2"
              x1="-157.89"
              x2="-146.27"
              y1="82.46"
              y2="100.11"
            >
              <stop offset="0.02" stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <title />
          <line
            fill="none"
            stroke="#0baeff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            x1="32.5"
            x2="32.5"
            y1="50.5"
            y2="57.5"
          />
          <line
            fill="none"
            stroke="#0baeff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            x1="26.5"
            x2="26.5"
            y1="48.5"
            y2="55.5"
          />
          <line
            fill="none"
            stroke="#0baeff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            x1="38.5"
            x2="38.5"
            y1="48.5"
            y2="55.5"
          />
          <path
            fill="url(#linear-gradient)"
            d="M23.66,9.9a17.49,17.49,0,0,1,15.47,9.32A13.75,13.75,0,1,1,46,44.84l-22.39.06a17.5,17.5,0,0,1,0-35Z"
          />
          <circle
            fill="url(#linear-gradient-2)"
            cx="46.05"
            cy="31.09"
            r="13.75"
            transform="translate(3.72 67.08) rotate(-74.39)"
          />
        </svg>
      );
    case '10d':
      return (
        <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient
              gradientTransform="matrix(-1, 0, 0, 1, -378.03, 0)"
              gradientUnits="userSpaceOnUse"
              id="linear-gradient"
              x1="-397.28"
              x2="-418.37"
              y1="52.39"
              y2="25.08"
            >
              <stop offset="0" stopColor="#f2f2f2" />
              <stop offset="1" stopColor="#cfcfcf" />
            </linearGradient>
            <linearGradient
              gradientTransform="matrix(0, -1, -1, 0, 103.42, -388.95)"
              gradientUnits="userSpaceOnUse"
              id="linear-gradient-2"
              x1="-430.14"
              x2="-418.52"
              y1="51.15"
              y2="68.8"
            >
              <stop offset="0.02" stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <title />
          <circle fill="#efcc00" cx="40" cy="25" r="12.59" />
          <line
            fill="none"
            stroke="#efcc00"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            x1="39.8"
            x2="39.8"
            y1="5"
            y2="12.44"
          />
          <line
            fill="none"
            stroke="#efcc00"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            x1="55.36"
            x2="60.8"
            y1="28"
            y2="28"
          />
          <line
            fill="none"
            stroke="#efcc00"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            x1="25.66"
            x2="28.8"
            y1="13.86"
            y2="17"
          />
          <line
            fill="none"
            stroke="#efcc00"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            x1="50.8"
            x2="53.94"
            y1="17"
            y2="13.86"
          />
          <path
            fill="url(#linear-gradient)"
            d="M23.66,15.9a17.49,17.49,0,0,1,15.47,9.32A13.75,13.75,0,1,1,46,50.84l-22.39.06a17.5,17.5,0,0,1,0-35Z"
          />
          <circle
            fill="url(#linear-gradient-2)"
            cx="46.05"
            cy="37.09"
            r="13.75"
            transform="translate(-2.06 71.46) rotate(-74.39)"
          />
          <line
            fill="none"
            stroke="#0baeff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px;"
            x1="32.5"
            x2="32.5"
            y1="55.5"
            y2="56.5"
          />
          <line
            fill="none"
            stroke="#0baeff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px;"
            x1="26.5"
            x2="26.5"
            y1="53.5"
            y2="54.5"
          />
          <line
            fill="none"
            stroke="#0baeff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px;"
            x1="38.5"
            x2="38.5"
            y1="53.5"
            y2="54.5"
          />
          <line
            fill="none"
            stroke="#0baeff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px;"
            x1="38.5"
            x2="38.5"
            y1="59.5"
            y2="60.5"
          />
          <line
            fill="none"
            stroke="#0baeff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px;"
            x1="26.5"
            x2="26.5"
            y1="59.5"
            y2="60.5"
          />
          <line
            fill="none"
            stroke="#0baeff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px;"
            x1="32.5"
            x2="32.5"
            y1="61.5"
            y2="62.5"
          />
        </svg>
      );
    case '10n':
      return (
        <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient
              gradientTransform="matrix(-1, 0, 0, 1, -378.03, 0)"
              gradientUnits="userSpaceOnUse"
              id="linear-gradient"
              x1="-397.28"
              x2="-418.37"
              y1="52.39"
              y2="25.08"
            >
              <stop offset="0" stopColor="#f2f2f2" />
              <stop offset="1" stopColor="#cfcfcf" />
            </linearGradient>
            <linearGradient
              gradientTransform="matrix(0, -1, -1, 0, 103.42, -388.95)"
              gradientUnits="userSpaceOnUse"
              id="linear-gradient-2"
              x1="-430.14"
              x2="-418.52"
              y1="51.15"
              y2="68.8"
            >
              <stop offset="0.02" stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <title />
          <path
            fill="#efcc00"
            d="M50,20.71A13.88,13.88,0,0,1,37.86,2.77.6.6,0,0,0,37,2.08,13.88,13.88,0,1,0,55.92,21a.6.6,0,0,0-.69-.89A13.91,13.91,0,0,1,50,20.71Z"
          />
          <path
            fill="url(#linear-gradient)"
            d="M23.66,15.9a17.49,17.49,0,0,1,15.47,9.32A13.75,13.75,0,1,1,46,50.84l-22.39.06a17.5,17.5,0,0,1,0-35Z"
          />
          <circle
            fill="url(#linear-gradient-2)"
            cx="46.05"
            cy="37.09"
            r="13.75"
            transform="translate(-2.06 71.46) rotate(-74.39)"
          />
          <line
            fill="none"
            stroke="#0baeff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px;"
            x1="32.5"
            x2="32.5"
            y1="55.5"
            y2="56.5"
          />
          <line
            fill="none"
            stroke="#0baeff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px;"
            x1="26.5"
            x2="26.5"
            y1="53.5"
            y2="54.5"
          />
          <line
            fill="none"
            stroke="#0baeff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px;"
            x1="38.5"
            x2="38.5"
            y1="53.5"
            y2="54.5"
          />
          <line
            fill="none"
            stroke="#0baeff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px;"
            x1="38.5"
            x2="38.5"
            y1="59.5"
            y2="60.5"
          />
          <line
            fill="none"
            stroke="#0baeff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px;"
            x1="26.5"
            x2="26.5"
            y1="59.5"
            y2="60.5"
          />
          <line
            fill="none"
            stroke="#0baeff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px;"
            x1="32.5"
            x2="32.5"
            y1="61.5"
            y2="62.5"
          />
        </svg>
      );
    case '11d':
      return (
        <svg
          enableBackground="new 0 0 512 512"
          height="512px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 512 512"
          width="512px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Layer_3">
            <path
              d="M397.696,205.913c-2.568,0-5.105,0.136-7.605,0.395c-0.663-60.201-49.663-108.802-110.021-108.802   c-46.48,0-86.229,28.819-102.354,69.563c-7.243-1.793-14.816-2.75-22.614-2.75c-51.827,0-93.841,42.014-93.841,93.842   c0,51.549,41.569,93.387,93.016,93.83V352h243.42c40.339,0,73.043-32.703,73.043-73.045   C470.739,238.617,438.035,205.913,397.696,205.913z"
              fill="#E8F3F9"
            />
            <path
              d="M377.696,185.913   c-2.568,0-5.105,0.136-7.605,0.395c-0.663-60.201-49.663-108.802-110.021-108.802c-46.48,0-86.229,28.819-102.354,69.563   c-7.243-1.793-14.816-2.75-22.614-2.75c-51.827,0-93.841,42.014-93.841,93.841c0,51.549,41.569,93.387,93.016,93.831V332h243.42   c40.339,0,73.043-32.703,73.043-73.045C450.739,218.617,418.035,185.913,377.696,185.913z"
              fill="none"
              stroke="#65BAE0"
              strokeLinejoin="round"
              stroke-miterlimit="10"
              strokeWidth="10"
            />
          </g>
          <polygon
            fill="#65BAE0"
            points="  348.364,257.916 290.426,350.472 328.491,340.907 294.714,422.257 365.336,318.827 330.385,322.876 "
            stroke="#65BAE0"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            strokeWidth="10"
          />
          <path
            d="  M212.398,387.368c2.329-7.023,21.893-23.954,21.893-23.954s5.569,25.266,3.24,32.289c-2.329,7.024-9.844,10.852-16.784,8.55  S210.068,394.392,212.398,387.368z"
            fill="none"
            stroke="#65BAE0"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            strokeWidth="10"
          />
          <path
            d="  M112,378.592c2.329-7.023,21.893-23.954,21.893-23.954s5.569,25.266,3.24,32.289c-2.329,7.024-9.844,10.852-16.784,8.55  S109.67,385.615,112,378.592z"
            fill="none"
            stroke="#65BAE0"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            strokeWidth="10"
          />
          <path
            d="  M155.364,435.469c2.329-7.023,21.893-23.954,21.893-23.954s5.569,25.266,3.24,32.289c-2.329,7.024-9.844,10.852-16.784,8.55  S153.034,442.492,155.364,435.469z"
            fill="none"
            stroke="#65BAE0"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            strokeWidth="10"
          />
        </svg>
      );
    case '11n':
      return (
        <svg
          enableBackground="new 0 0 512 512"
          height="512px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 512 512"
          width="512px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Layer_3">
            <path
              d="M397.696,205.913c-2.568,0-5.105,0.136-7.605,0.395c-0.663-60.201-49.663-108.802-110.021-108.802   c-46.48,0-86.229,28.819-102.354,69.563c-7.243-1.793-14.816-2.75-22.614-2.75c-51.827,0-93.841,42.014-93.841,93.842   c0,51.549,41.569,93.387,93.016,93.83V352h243.42c40.339,0,73.043-32.703,73.043-73.045   C470.739,238.617,438.035,205.913,397.696,205.913z"
              fill="#E8F3F9"
            />
            <path
              d="M377.696,185.913   c-2.568,0-5.105,0.136-7.605,0.395c-0.663-60.201-49.663-108.802-110.021-108.802c-46.48,0-86.229,28.819-102.354,69.563   c-7.243-1.793-14.816-2.75-22.614-2.75c-51.827,0-93.841,42.014-93.841,93.841c0,51.549,41.569,93.387,93.016,93.831V332h243.42   c40.339,0,73.043-32.703,73.043-73.045C450.739,218.617,418.035,185.913,377.696,185.913z"
              fill="none"
              stroke="#65BAE0"
              strokeLinejoin="round"
              stroke-miterlimit="10"
              strokeWidth="10"
            />
          </g>
          <polygon
            fill="#65BAE0"
            points="  348.364,257.916 290.426,350.472 328.491,340.907 294.714,422.257 365.336,318.827 330.385,322.876 "
            stroke="#65BAE0"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            strokeWidth="10"
          />
          <path
            d="  M212.398,387.368c2.329-7.023,21.893-23.954,21.893-23.954s5.569,25.266,3.24,32.289c-2.329,7.024-9.844,10.852-16.784,8.55  S210.068,394.392,212.398,387.368z"
            fill="none"
            stroke="#65BAE0"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            strokeWidth="10"
          />
          <path
            d="  M112,378.592c2.329-7.023,21.893-23.954,21.893-23.954s5.569,25.266,3.24,32.289c-2.329,7.024-9.844,10.852-16.784,8.55  S109.67,385.615,112,378.592z"
            fill="none"
            stroke="#65BAE0"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            strokeWidth="10"
          />
          <path
            d="  M155.364,435.469c2.329-7.023,21.893-23.954,21.893-23.954s5.569,25.266,3.24,32.289c-2.329,7.024-9.844,10.852-16.784,8.55  S153.034,442.492,155.364,435.469z"
            fill="none"
            stroke="#65BAE0"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            strokeWidth="10"
          />
        </svg>
      );
    case '13d':
      return (
        <svg id="icone" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <title />
          <line
            fill="none"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
            x1="64.3"
            x2="447.7"
            y1="256"
            y2="256"
          />
          <polyline
            fill="none"
            points="419.35 301 374.35 256 419.35 211"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
          />
          <polyline
            fill="none"
            points="92.2 301 137.2 256 92.2 211"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
          />
          <line
            fill="none"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
            x1="170.5"
            x2="170.5"
            y1="224.5"
            y2="287.5"
          />
          <line
            fill="none"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
            x1="341.5"
            x2="341.5"
            y1="224.5"
            y2="287.5"
          />
          <line
            fill="none"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
            x1="160.15"
            x2="351.85"
            y1="422.02"
            y2="89.98"
          />
          <polyline
            fill="none"
            points="376.64 137.04 315.17 153.51 298.7 92.04"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
          />
          <polyline
            fill="none"
            points="213.07 420.36 196.6 358.89 135.13 375.36"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
          />
          <line
            fill="none"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
            x1="185.97"
            x2="240.53"
            y1="314.3"
            y2="345.8"
          />
          <line
            fill="none"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
            x1="271.47"
            x2="326.03"
            y1="166.2"
            y2="197.7"
          />
          <path
            d="M216.34,187.3C197,155,179,122,160.15,90"
            fill="none"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
          />
          <path
            d="M232.07,214.48c-.58-1-.17-.28-.76-1.27"
            fill="none"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
          />
          <path
            d="M327.34,380.07C306,343.15,285,306,263.8,269q-8.92-15.51-17.92-31"
            fill="none"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
          />
          <path
            d="M351.85,422q-5.66-9.56-11.26-19.15"
            fill="none"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
          />
          <polyline
            fill="none"
            points="213.3 92.04 196.83 153.51 135.35 137.04"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
          />
          <polyline
            fill="none"
            points="376.87 375.36 315.4 358.89 298.93 420.36"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
          />
          <line
            fill="none"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
            x1="271.47"
            x2="326.03"
            y1="345.8"
            y2="314.3"
          />
          <line
            fill="none"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
            x1="185.97"
            x2="240.53"
            y1="197.7"
            y2="166.2"
          />
        </svg>
      );
    case '13n':
      return (
        <svg id="icone" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <title />
          <line
            fill="none"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
            x1="64.3"
            x2="447.7"
            y1="256"
            y2="256"
          />
          <polyline
            fill="none"
            points="419.35 301 374.35 256 419.35 211"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
          />
          <polyline
            fill="none"
            points="92.2 301 137.2 256 92.2 211"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
          />
          <line
            fill="none"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
            x1="170.5"
            x2="170.5"
            y1="224.5"
            y2="287.5"
          />
          <line
            fill="none"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
            x1="341.5"
            x2="341.5"
            y1="224.5"
            y2="287.5"
          />
          <line
            fill="none"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
            x1="160.15"
            x2="351.85"
            y1="422.02"
            y2="89.98"
          />
          <polyline
            fill="none"
            points="376.64 137.04 315.17 153.51 298.7 92.04"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
          />
          <polyline
            fill="none"
            points="213.07 420.36 196.6 358.89 135.13 375.36"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
          />
          <line
            fill="none"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
            x1="185.97"
            x2="240.53"
            y1="314.3"
            y2="345.8"
          />
          <line
            fill="none"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
            x1="271.47"
            x2="326.03"
            y1="166.2"
            y2="197.7"
          />
          <path
            d="M216.34,187.3C197,155,179,122,160.15,90"
            fill="none"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
          />
          <path
            d="M232.07,214.48c-.58-1-.17-.28-.76-1.27"
            fill="none"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
          />
          <path
            d="M327.34,380.07C306,343.15,285,306,263.8,269q-8.92-15.51-17.92-31"
            fill="none"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
          />
          <path
            d="M351.85,422q-5.66-9.56-11.26-19.15"
            fill="none"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
          />
          <polyline
            fill="none"
            points="213.3 92.04 196.83 153.51 135.35 137.04"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
          />
          <polyline
            fill="none"
            points="376.87 375.36 315.4 358.89 298.93 420.36"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
          />
          <line
            fill="none"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
            x1="271.47"
            x2="326.03"
            y1="345.8"
            y2="314.3"
          />
          <line
            fill="none"
            stroke="#02005c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
            x1="185.97"
            x2="240.53"
            y1="197.7"
            y2="166.2"
          />
        </svg>
      );
    case '50d':
      return (
        <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <title />
          <line
            fill="none"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            stroke="#b9c1c6"
            x1="16.5"
            x2="29.5"
            y1="17.5"
            y2="17.5"
          />
          <line
            fill="none"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            stroke="#b9c1c6"
            x1="9.5"
            x2="22.5"
            y1="22.5"
            y2="22.5"
          />
          <line
            fill="none"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            stroke="#b9c1c6"
            x1="6.5"
            x2="55.5"
            y1="27.5"
            y2="27.5"
          />
          <line
            fill="none"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            stroke="#a5a9aa"
            x1="39.5"
            x2="57.5"
            y1="32.5"
            y2="32.5"
          />
          <line
            fill="none"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            stroke="#b9c1c6"
            x1="6.5"
            x2="31.5"
            y1="32.5"
            y2="32.5"
          />
          <line
            fill="none"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            stroke="#a5a9aa"
            x1="30.5"
            x2="56.5"
            y1="37.5"
            y2="37.5"
          />
          <line
            fill="none"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            stroke="#a5a9aa"
            x1="15.5"
            x2="52.5"
            y1="42.5"
            y2="42.5"
          />
          <line
            fill="none"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            stroke="#a5a9aa"
            x1="25.5"
            x2="42.5"
            y1="47.5"
            y2="47.5"
          />
          <line
            fill="none"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            stroke="#a5a9aa"
            x1="8.5"
            x2="23.5"
            y1="37.5"
            y2="37.5"
          />
          <line
            fill="none"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            stroke="#b9c1c6"
            x1="28.5"
            x2="35.5"
            y1="22.5"
            y2="22.5"
          />
          <line
            fill="none"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            stroke="#a5a9aa"
            x1="45.5"
            x2="52.5"
            y1="22.5"
            y2="22.5"
          />
        </svg>
      );
    case '50n':
      return (
        <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <title />
          <line
            fill="none"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            stroke="#b9c1c6"
            x1="16.5"
            x2="29.5"
            y1="17.5"
            y2="17.5"
          />
          <line
            fill="none"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            stroke="#b9c1c6"
            x1="9.5"
            x2="22.5"
            y1="22.5"
            y2="22.5"
          />
          <line
            fill="none"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            stroke="#b9c1c6"
            x1="6.5"
            x2="55.5"
            y1="27.5"
            y2="27.5"
          />
          <line
            fill="none"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            stroke="#a5a9aa"
            x1="39.5"
            x2="57.5"
            y1="32.5"
            y2="32.5"
          />
          <line
            fill="none"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            stroke="#b9c1c6"
            x1="6.5"
            x2="31.5"
            y1="32.5"
            y2="32.5"
          />
          <line
            fill="none"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            stroke="#a5a9aa"
            x1="30.5"
            x2="56.5"
            y1="37.5"
            y2="37.5"
          />
          <line
            fill="none"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            stroke="#a5a9aa"
            x1="15.5"
            x2="52.5"
            y1="42.5"
            y2="42.5"
          />
          <line
            fill="none"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            stroke="#a5a9aa"
            x1="25.5"
            x2="42.5"
            y1="47.5"
            y2="47.5"
          />
          <line
            fill="none"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            stroke="#a5a9aa"
            x1="8.5"
            x2="23.5"
            y1="37.5"
            y2="37.5"
          />
          <line
            fill="none"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            stroke="#b9c1c6"
            x1="28.5"
            x2="35.5"
            y1="22.5"
            y2="22.5"
          />
          <line
            fill="none"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3px"
            stroke="#a5a9aa"
            x1="45.5"
            x2="52.5"
            y1="22.5"
            y2="22.5"
          />
        </svg>
      );

    default:
      return null;
  }
};
