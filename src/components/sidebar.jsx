import React from 'react';
import '../styles/components/_sidebar.scss';
import HomeIcon from '../assets/icons/home.svg';
import CatIcon from '../assets/icons/categories.svg';
import ShopIcon from '../assets/icons/shop.svg';
import EventIcon from '../assets/icons/events.svg';
import OrderIcon from '../assets/icons/orders.svg';
import BlogIcon from '../assets/icons/blog.svg';
import ChatIcon from '../assets/icons/chat.svg';

const sidebar = () => {
  return (
    <div className="sidebar">
      <img className="sidebar__logo" src="/outright.svg" alt="outright-logo" />
      <ul className="sidebar__pages">
        <li className="active">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentcolor"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.533.861a5.75 5.75 0 00-3.066 0c-.606.168-1.154.464-1.759.88-.592.406-1.279.955-2.151 1.653l-.023.018-2 1.6-.09.072c-1.017.813-1.643 1.314-2.1 1.944a5.75 5.75 0 00-.888 1.848c-.206.75-.206 1.552-.206 2.854V17A5.75 5.75 0 007 22.75 2.75 2.75 0 009.75 20v-4a2.25 2.25 0 014.5 0v4A2.75 2.75 0 0017 22.75 5.75 5.75 0 0022.75 17V11.73c0-1.302 0-2.103-.206-2.854a5.75 5.75 0 00-.889-1.848c-.457-.63-1.082-1.13-2.099-1.944l-.09-.072-2-1.6-.023-.018c-.872-.698-1.559-1.247-2.151-1.654-.605-.415-1.153-.711-1.759-.879z"
            />
          </svg>
        </li>
        <li>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentcolor"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 5.2093C0 3.38588 0 2.47416 0.354858 1.7777C0.667012 1.16509 1.16509 0.667012 1.7777 0.354858C2.47416 0 3.38588 0 5.2093 0H7.16279C8.98622 0 9.89793 0 10.5944 0.354858C11.207 0.667012 11.705 1.16509 12.0172 1.7777C12.3721 2.47416 12.3721 3.38588 12.3721 5.2093V7.16279C12.3721 8.98622 12.3721 9.89793 12.0172 10.5944C11.705 11.207 11.207 11.705 10.5944 12.0172C9.89793 12.3721 8.98622 12.3721 7.16279 12.3721H5.2093C3.38588 12.3721 2.47416 12.3721 1.7777 12.0172C1.16509 11.705 0.667012 11.207 0.354858 10.5944C0 9.89793 0 8.98622 0 7.16279V5.2093ZM28 5.2093C28 3.38588 28 2.47416 27.6451 1.7777C27.333 1.16509 26.8349 0.667012 26.2223 0.354858C25.5258 0 24.6141 0 22.7907 0H20.8372C19.0138 0 18.1021 0 17.4056 0.354858C16.793 0.667012 16.295 1.16509 15.9828 1.7777C15.6279 2.47416 15.6279 3.38588 15.6279 5.2093V7.16279C15.6279 8.98622 15.6279 9.89793 15.9828 10.5944C16.295 11.207 16.793 11.705 17.4056 12.0172C18.1021 12.3721 19.0138 12.3721 20.8372 12.3721H22.7907C24.6141 12.3721 25.5258 12.3721 26.2223 12.0172C26.8349 11.705 27.333 11.207 27.6451 10.5944C28 9.89793 28 8.98622 28 7.16279V5.2093ZM0 20.8372C0 19.0138 0 18.1021 0.354858 17.4056C0.667012 16.793 1.16509 16.295 1.7777 15.9828C2.47416 15.6279 3.38588 15.6279 5.2093 15.6279H7.16279C8.98622 15.6279 9.89793 15.6279 10.5944 15.9828C11.207 16.295 11.705 16.793 12.0172 17.4056C12.3721 18.1021 12.3721 19.0138 12.3721 20.8372V22.7907C12.3721 24.6141 12.3721 25.5258 12.0172 26.2223C11.705 26.8349 11.207 27.333 10.5944 27.6451C9.89793 28 8.98622 28 7.16279 28H5.2093C3.38588 28 2.47416 28 1.7777 27.6451C1.16509 27.333 0.667012 26.8349 0.354858 26.2223C0 25.5258 0 24.6141 0 22.7907V20.8372ZM28 20.8372C28 19.0138 28 18.1021 27.6451 17.4056C27.333 16.793 26.8349 16.295 26.2223 15.9828C25.5258 15.6279 24.6141 15.6279 22.7907 15.6279H20.8372C19.0138 15.6279 18.1021 15.6279 17.4056 15.9828C16.793 16.295 16.295 16.793 15.9828 17.4056C15.6279 18.1021 15.6279 19.0138 15.6279 20.8372V22.7907C15.6279 24.6141 15.6279 25.5258 15.9828 26.2223C16.295 26.8349 16.793 27.333 17.4056 27.6451C18.1021 28 19.0138 28 20.8372 28H22.7907C24.6141 28 25.5258 28 26.2223 27.6451C26.8349 27.333 27.333 26.8349 27.6451 26.2223C28 25.5258 28 24.6141 28 22.7907V20.8372Z"
            />
          </svg>
        </li>
        <li>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentcolor"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.30938 0.311647C9.55637 1.94062e-08 11.0376 0 14 0C16.9624 0 18.4436 1.94062e-08 19.6907 0.311647C22.7109 1.06647 25.1622 3.11927 26.2876 5.83599C26.7521 6.95765 26.9087 8.32909 27.2217 11.072L27.5523 13.9697C27.9672 17.6056 28.1746 19.4235 27.8161 20.8976C27.0647 23.9861 24.6458 26.4903 21.4267 27.5123C19.8903 28 17.9269 28 14 28C10.0731 28 8.10966 28 6.57325 27.5123C3.35415 26.4903 0.935263 23.9861 0.18394 20.8976C-0.174643 19.4235 0.032797 17.6056 0.447692 13.9697L0.778372 11.072C1.09136 8.32909 1.24786 6.95765 1.71245 5.83599C2.8377 3.11927 5.28905 1.06647 8.30938 0.311647ZM10.8532 10.0931C10.8532 11.7114 12.2622 13.0233 14.0002 13.0233C15.7384 13.0233 17.1473 11.7114 17.1473 10.0931V7.48841C17.1473 6.94896 17.617 6.51167 18.1963 6.51167C18.7757 6.51167 19.2453 6.94896 19.2453 7.48841V10.0931C19.2453 12.7903 16.8971 14.9767 14.0002 14.9767C11.1035 14.9767 8.75514 12.7903 8.75514 10.0931V7.48841C8.75514 6.94896 9.22481 6.51167 9.80416 6.51167C10.3835 6.51167 10.8532 6.94896 10.8532 7.48841V10.0931Z"
            />
          </svg>
        </li>
        <li>
          <svg
            width="28"
            height="27"
            viewBox="0 0 28 27"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentcolor"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.67 0.514259C14.9558 -0.17142 13.0436 -0.17142 11.3294 0.514259C10.0414 1.02944 9.01606 2.10607 7.96569 3.61161C6.92156 5.11465 5.75865 7.19038 4.25687 9.87509L4.22936 9.92261L4.2031 9.97137C2.75883 12.5498 1.63969 14.5468 0.930683 16.1661C0.21793 17.7917 -0.152202 19.1859 0.0591232 20.5251C0.341815 22.3144 1.28945 23.931 2.71257 25.0517C3.77795 25.8908 5.17594 26.2484 6.94157 26.421C8.70095 26.5935 10.9905 26.5935 13.9453 26.5935H14.0554C17.0114 26.5935 19.2997 26.5935 21.0578 26.421C22.826 26.2484 24.2227 25.8908 25.2893 25.0517C26.7115 23.9306 27.6582 22.314 27.9403 20.5251C28.1529 19.1859 27.7827 17.7917 27.07 16.1661C26.3597 14.5468 25.2418 12.5498 23.7976 9.97137L23.7713 9.92261L23.7438 9.87509C22.2408 7.19038 21.0791 5.11465 20.0325 3.61161C18.9846 2.10607 17.9592 1.02944 16.67 0.514259ZM14.9369 9.39992C14.9369 9.15119 14.8381 8.91265 14.6622 8.73677C14.4864 8.56089 14.2478 8.46209 13.9991 8.46209C13.7504 8.46209 13.5118 8.56089 13.3359 8.73677C13.1601 8.91265 13.0612 9.15119 13.0612 9.39992V14.4017C13.0612 14.6504 13.1601 14.889 13.3359 15.0648C13.5118 15.2407 13.7504 15.3395 13.9991 15.3395C14.2478 15.3395 14.4864 15.2407 14.6622 15.0648C14.8381 14.889 14.9369 14.6504 14.9369 14.4017V9.39992ZM15.2495 18.153C15.2495 18.4847 15.1178 18.8027 14.8833 19.0372C14.6488 19.2717 14.3307 19.4035 13.9991 19.4035C13.6674 19.4035 13.3494 19.2717 13.1149 19.0372C12.8804 18.8027 12.7486 18.4847 12.7486 18.153C12.7486 17.8214 12.8804 17.5033 13.1149 17.2688C13.3494 17.0343 13.6674 16.9026 13.9991 16.9026C14.3307 16.9026 14.6488 17.0343 14.8833 17.2688C15.1178 17.5033 15.2495 17.8214 15.2495 18.153Z"
            />
          </svg>
        </li>
        <li>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentcolor"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.0471 0.108871C14.3572 -0.0362904 13.6428 -0.0362904 12.9529 0.108871C12.1702 0.273671 11.4553 0.685671 10.4199 1.2812L10.2819 1.3611L3.50977 5.25637L3.37953 5.33128C2.39758 5.89434 1.72037 6.28387 1.21637 6.8332C1.06532 6.99763 0.926503 7.17201 0.80093 7.35507L6.55721 10.6161L20.0884 2.7232L17.7194 1.36235L17.5814 1.28245C16.546 0.686919 15.8311 0.27492 15.0484 0.108871H15.0471ZM8.46512 11.696L14 14.8335L27.1991 7.35507C27.0735 7.17199 26.9347 6.99761 26.7836 6.8332C26.2796 6.28387 25.6024 5.89434 24.6218 5.33128L24.4915 5.25637L21.978 3.81063L8.46512 11.696ZM27.9167 9.12417L14.9767 16.4528V28C15.0002 27.9952 15.0237 27.9902 15.0471 27.985C15.8298 27.8202 16.5447 27.4082 17.5801 26.8127L17.7181 26.7328L24.4902 22.8375L24.6218 22.7626C25.6024 22.1995 26.2796 21.81 26.7836 21.2607C27.2283 20.7757 27.5635 20.2078 27.7682 19.5927C28.0013 18.8961 28 18.1382 28 17.0421V11.0506C28 10.2703 28 9.66102 27.9167 9.12417ZM13.0233 28V16.454L0.0833489 9.12417C9.70308e-09 9.66102 0 10.2703 0 11.0506V17.0433C0 18.1395 -3.88123e-08 18.8973 0.231814 19.594C0.436279 20.2095 0.772279 20.7763 1.21637 21.2619C1.72037 21.8113 2.39758 22.2008 3.37823 22.7639L3.50847 22.8388L10.2806 26.734L10.4199 26.8139C11.4553 27.4095 12.1702 27.8215 12.9529 27.9875L13.0233 28Z"
            />
          </svg>
        </li>
        <li>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentcolor"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14 0H13.9505C11.5581 0 9.69581 -3.88123e-08 8.20726 0.135442C6.69656 0.272186 5.47498 0.554791 4.39535 1.1773C3.05926 1.94909 1.94985 3.05895 1.1786 4.39535C0.553488 5.47628 0.272186 6.69656 0.135442 8.20726C-3.88123e-08 9.69581 0 11.5581 0 13.9505V14.0495C0 16.4419 -3.88123e-08 18.3042 0.135442 19.7927C0.272186 21.3034 0.554791 22.525 1.1773 23.6047C1.94909 24.9407 3.05895 26.0502 4.39535 26.8214C5.47628 27.4465 6.69656 27.7278 8.20726 27.8659C9.69581 28 11.5581 28 13.9505 28H18.2326V24.3509C18.2326 23.1801 18.2326 22.2047 18.3367 21.4311C18.4461 20.6132 18.6884 19.8748 19.2809 19.2822C19.8748 18.6884 20.6132 18.4461 21.4298 18.3367C22.2047 18.2326 23.1814 18.2326 24.3509 18.2326H28V13.9505C28 11.5581 28 9.69581 27.8646 8.20726C27.7278 6.69656 27.4452 5.47498 26.8227 4.39535C26.0509 3.05926 24.9411 1.94985 23.6047 1.1786C22.5237 0.553488 21.3034 0.272186 19.7927 0.135442C18.3042 -3.88123e-08 16.4419 0 14.0495 0H14ZM24.4473 25.7535C23.2463 26.8306 21.7721 27.5564 20.186 27.8515V24.4186C20.186 23.1632 20.1887 22.3193 20.2733 21.6902C20.354 21.0899 20.4934 20.832 20.664 20.6627C20.8333 20.4934 21.0899 20.354 21.6902 20.272C22.3193 20.1887 23.1632 20.186 24.4186 20.186H27.8515C27.5564 21.7721 26.8306 23.2463 25.7535 24.4473C25.5933 24.6244 25.4214 24.7976 25.131 25.088L25.1088 25.1088L25.088 25.131C24.7976 25.4214 24.6244 25.5933 24.4473 25.7535ZM8.7907 7.81395C8.53165 7.81395 8.28321 7.91686 8.10004 8.10004C7.91686 8.28321 7.81395 8.53165 7.81395 8.7907C7.81395 9.04975 7.91686 9.29818 8.10004 9.48136C8.28321 9.66453 8.53165 9.76744 8.7907 9.76744H19.2093C19.4684 9.76744 19.7168 9.66453 19.9 9.48136C20.0831 9.29818 20.186 9.04975 20.186 8.7907C20.186 8.53165 20.0831 8.28321 19.9 8.10004C19.7168 7.91686 19.4684 7.81395 19.2093 7.81395H8.7907ZM7.81395 14C7.81395 13.741 7.91686 13.4925 8.10004 13.3093C8.28321 13.1262 8.53165 13.0233 8.7907 13.0233H16.6047C16.8637 13.0233 17.1121 13.1262 17.2953 13.3093C17.4785 13.4925 17.5814 13.741 17.5814 14C17.5814 14.259 17.4785 14.5075 17.2953 14.6907C17.1121 14.8738 16.8637 14.9767 16.6047 14.9767H8.7907C8.53165 14.9767 8.28321 14.8738 8.10004 14.6907C7.91686 14.5075 7.81395 14.259 7.81395 14ZM8.7907 18.2326C8.53165 18.2326 8.28321 18.3355 8.10004 18.5186C7.91686 18.7018 7.81395 18.9503 7.81395 19.2093C7.81395 19.4684 7.91686 19.7168 8.10004 19.9C8.28321 20.0831 8.53165 20.186 8.7907 20.186H11.3953C11.6544 20.186 11.9028 20.0831 12.086 19.9C12.2692 19.7168 12.3721 19.4684 12.3721 19.2093C12.3721 18.9503 12.2692 18.7018 12.086 18.5186C11.9028 18.3355 11.6544 18.2326 11.3953 18.2326H8.7907Z"
            />
          </svg>
        </li>
        <li>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.17619 19.4659L1.2906 19.8774L1.32056 19.9425C1.94307 21.2865 2.2986 22.0536 1.99777 23.1046C1.92367 23.3347 1.83224 23.5589 1.72428 23.7753C1.68651 23.8534 1.64614 23.9407 1.60447 24.0357C1.44037 24.3978 1.232 24.8913 1.18772 25.4422C1.1593 25.7876 1.21003 26.135 1.33605 26.4578C1.46208 26.7807 1.66007 27.0706 1.91498 27.3054C2.16989 27.5402 2.475 27.7138 2.80709 27.8129C3.13918 27.9121 3.48952 27.9342 3.83144 27.8776C4.65842 27.7395 5.36949 27.3736 5.89042 27.104C6.01805 27.0389 6.13526 26.9777 6.23944 26.9282C6.79293 26.6651 7.25526 26.5271 7.9494 26.6899C8.09265 26.7237 8.5693 26.893 9.73358 27.3085C11.0333 27.7734 12.419 28 14 28C21.7319 28 28 21.7319 28 14C28 6.26809 21.7319 0 14 0C6.26809 0 0 6.26809 0 14C0 16.0967 0.462326 18.0893 1.2893 19.8761L2.17619 19.4659ZM8.7907 10.4186C8.53165 10.4186 8.28321 10.5215 8.10004 10.7047C7.91686 10.8879 7.81395 11.1363 7.81395 11.3953C7.81395 11.6544 7.91686 11.9028 8.10004 12.086C8.28321 12.2692 8.53165 12.3721 8.7907 12.3721H19.2093C19.4684 12.3721 19.7168 12.2692 19.9 12.086C20.0831 11.9028 20.186 11.6544 20.186 11.3953C20.186 11.1363 20.0831 10.8879 19.9 10.7047C19.7168 10.5215 19.4684 10.4186 19.2093 10.4186H8.7907ZM7.81395 16.6047C7.81395 16.3456 7.91686 16.0972 8.10004 15.914C8.28321 15.7308 8.53165 15.6279 8.7907 15.6279H14C14.259 15.6279 14.5075 15.7308 14.6907 15.914C14.8738 16.0972 14.9767 16.3456 14.9767 16.6047C14.9767 16.8637 14.8738 17.1121 14.6907 17.2953C14.5075 17.4785 14.259 17.5814 14 17.5814H8.7907C8.53165 17.5814 8.28321 17.4785 8.10004 17.2953C7.91686 17.1121 7.81395 16.8637 7.81395 16.6047Z"
              fill="currentcolor"
            />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default sidebar;
