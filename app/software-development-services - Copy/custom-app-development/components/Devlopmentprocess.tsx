"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Ideation",
    icon: "/assets/images/software-dev/custom-app-dev/mobile-app-1.png",
    description:
      "We transform your ideas into actionable app concepts through market research and strategic planning that define clear goals and a strong foundation for mobile app development.",
    side: "left",
  },
  {
    number: "02",
    title: "Scoping",
    icon: "/assets/images/software-dev/custom-app-dev/mobile-app-1.png",
    description:
      "Our scoping process aligns your app features, development timelines, and technical requirements to ensure clarity and cost control with your business objectives from day one.",
    side: "right",
  },
  {
    number: "03",
    title: "Prototype design",
    icon: "/assets/images/software-dev/custom-app-dev/mobile-app-1.png",
    description:
      "Our prototype design process creates clickable app models that showcase user flow and functionality, it’s enables[ early feedback and smarter development decisions.",
    side: "left",
  },
  {
    number: "04",
    title: "UX/UI app design",
    icon: "/assets/images/software-dev/custom-app-dev/mobile-app-1.png",
    description:
      "We design intuitive UX/UI interfaces focused on usability, consistency, and delivering visually appealing mobile apps that enhance user experience and retention.",
    side: "right",
  },
  {
    number: "05",
    title: "Development & testing",
    icon: "/assets/images/software-dev/custom-app-dev/mobile-app-1.png",
    description:
      "We build and test mobile apps using robust frameworks, clean code, and quality assurance practices to provide high-performing applications.",
    side: "left",
  },
  {
    number: "06",
    title: "Maintenance & Support",
    icon: "/assets/images/software-dev/custom-app-dev/mobile-app-1.png",
    description:
      "Our maintenance and support services ensure continuous app optimization, updates, bug fixes, and performance monitoring.",
    side: "right",
  },
];

const ArrowRight = () => (
  <svg width="151" height="126" viewBox="0 0 181 136" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M163.884 134.471C164.052 134.997 164.615 135.287 165.141 135.119L173.713 132.376C174.239 132.207 174.528 131.645 174.36 131.119C174.192 130.593 173.629 130.303 173.103 130.471L165.484 132.909L163.045 125.29C162.877 124.764 162.314 124.474 161.788 124.642C161.262 124.81 160.972 125.373 161.141 125.899L163.884 134.471ZM0.335938 21.6664C0.671584 22.6084 0.671574 22.6084 0.671566 22.6084C0.671567 22.6084 0.671561 22.6084 0.671562 22.6084C0.671564 22.6084 0.671576 22.6084 0.671597 22.6084C0.67164 22.6084 0.67172 22.6084 0.671839 22.6083C0.672076 22.6082 0.672465 22.6081 0.673006 22.6079C0.674089 22.6075 0.675779 22.6069 0.678075 22.6061C0.682667 22.6045 0.689681 22.602 0.699098 22.5986C0.717932 22.592 0.746381 22.5819 0.784297 22.5686C0.86013 22.5418 0.97383 22.5019 1.12422 22.4495C1.42501 22.3448 1.87257 22.1901 2.45748 21.9914L2.13577 21.0445L1.81405 20.0977C1.22416 20.2981 0.771799 20.4544 0.466375 20.5608C0.313663 20.614 0.197682 20.6547 0.11961 20.6822C0.0805742 20.696 0.0510148 20.7064 0.0310793 20.7135C0.0211115 20.717 0.0135496 20.7197 0.00841206 20.7216C0.00584328 20.7225 0.00388056 20.7232 0.00252622 20.7236C0.00184906 20.7239 0.00132397 20.7241 0.00095126 20.7242C0.000764906 20.7243 0.00061664 20.7243 0.00050652 20.7244C0.000451446 20.7244 0.000405937 20.7244 0.000369936 20.7244C0.000351936 20.7244 0.000332087 20.7244 0.000323087 20.7244C0.000305623 20.7244 0.000290573 20.7244 0.335938 21.6664ZM5.9065 19.7928L6.21572 20.7438C7.30684 20.389 8.54526 19.9921 9.91859 19.5609L9.61897 18.6068L9.31936 17.6527C7.93936 18.0861 6.69453 18.485 5.59728 18.8418L5.9065 19.7928ZM13.3701 17.4478L13.661 18.4046C14.8501 18.0431 16.1088 17.6659 17.4317 17.2763L17.1492 16.317L16.8666 15.3578C15.5379 15.7491 14.2738 16.1279 13.0793 16.4911L13.3701 17.4478ZM20.9267 15.2218L21.2012 16.1834C22.4081 15.839 23.6571 15.4878 24.9452 15.1317L24.6787 14.1679L24.4123 13.204C23.1188 13.5616 21.8644 13.9143 20.6523 14.2602L20.9267 15.2218ZM28.466 13.1379L28.7244 14.104C29.9669 13.7716 31.2396 13.4367 32.5401 13.1007L32.2899 12.1325L32.0398 11.1643C30.7336 11.5018 29.4555 11.8381 28.2076 12.1719L28.466 13.1379ZM36.0852 11.169L36.3271 12.1393C37.5723 11.8288 38.8391 11.5186 40.1258 11.2097L39.8924 10.2373L39.659 9.26496C38.3665 9.57525 37.0939 9.88687 35.8433 10.1987L36.0852 11.169ZM43.7411 9.33166L43.9657 10.3061C45.2173 10.0176 46.485 9.73122 47.7672 9.448L47.5516 8.47154L47.3359 7.49507C46.0475 7.77965 44.7738 8.06735 43.5164 8.35722L43.7411 9.33166ZM51.3965 7.64147L51.6028 8.61995C52.8717 8.3524 54.1528 8.08867 55.4448 7.82963L55.2482 6.84914L55.0516 5.86865C53.753 6.12903 52.4653 6.3941 51.1901 6.66298L51.3965 7.64147ZM59.0959 6.09813L59.2824 7.08059C60.563 6.83753 61.8526 6.59975 63.1499 6.36806L62.974 5.38364L62.7982 4.39921C61.4937 4.63221 60.197 4.8713 58.9095 5.11567L59.0959 6.09813ZM66.831 4.71697L66.9957 5.70331C68.281 5.48866 69.5723 5.28061 70.8686 5.07994L70.7156 4.09171L70.5626 3.10348C69.2583 3.30541 67.9591 3.51471 66.6663 3.73063L66.831 4.71697ZM74.5967 3.51543L74.7374 4.50549C76.028 4.32215 77.3223 4.14676 78.6188 3.98004L78.4913 2.9882L78.3638 1.99637C77.0582 2.16424 75.7552 2.34082 74.4561 2.52537L74.5967 3.51543ZM82.3895 2.51441L82.5032 3.50793C83.7999 3.35962 85.0978 3.22067 86.3956 3.0918L86.2968 2.09669L86.1979 1.10159C84.8899 1.23147 83.5822 1.37148 82.2759 1.52088L82.3895 2.51441ZM90.2053 1.73956L90.2883 2.73611C91.5915 2.62758 92.8934 2.52997 94.1928 2.44401L94.1268 1.44619L94.0608 0.448371C92.7497 0.535103 91.4364 0.633567 90.1223 0.743012L90.2053 1.73956ZM98.0403 1.22269L98.0881 2.22155C99.397 2.15892 100.702 2.10898 102.002 2.07248L101.974 1.07288L101.946 0.0732703C100.632 0.110145 99.3141 0.160596 97.9925 0.223837L98.0403 1.22269ZM105.896 1.00401L105.903 2.00399C107.212 1.99513 108.515 2.00095 109.81 2.02224L109.827 1.02237L109.843 0.0225084C108.532 0.000961423 107.214 -0.00492167 105.889 0.0040313L105.896 1.00401ZM113.755 1.13595L113.714 2.13508C115.018 2.18957 116.313 2.26101 117.596 2.35023L117.666 1.35263L117.735 0.355039C116.432 0.264495 115.119 0.192053 113.797 0.136824L113.755 1.13595ZM121.593 1.68513L121.494 2.68013C122.792 2.81043 124.077 2.96051 125.347 3.13128L125.48 2.14019L125.613 1.14911C124.32 0.975236 123.013 0.822569 121.693 0.690126L121.593 1.68513ZM129.371 2.73663L129.201 3.72201C130.492 3.94526 131.765 4.19198 133.018 4.46317L133.23 3.48578L133.441 2.5084C132.159 2.23105 130.859 1.97905 129.542 1.75126L129.371 2.73663ZM137.025 4.39812L136.768 5.3646C138.039 5.70213 139.285 6.06762 140.506 6.46221L140.814 5.51066L141.121 4.55911C139.865 4.15316 138.584 3.77779 137.281 3.43164L137.025 4.39812ZM144.512 6.82542L144.149 7.75712C145.357 8.22795 146.535 8.73109 147.681 9.26777L148.105 8.36216L148.529 7.45654C147.341 6.90027 146.122 6.37984 144.875 5.89372L144.512 6.82542ZM151.61 10.1634L151.119 11.0347C152.247 11.6696 153.337 12.3425 154.387 13.0547L154.949 12.227L155.51 11.3992C154.411 10.6547 153.274 9.95286 152.1 9.29202L151.61 10.1634ZM158.089 14.5677L157.455 15.3411C158.446 16.1532 159.394 17.0081 160.295 17.9076L161.001 17.1997L161.708 16.4919C160.759 15.5451 159.763 14.6464 158.723 13.7942L158.089 14.5677ZM163.631 20.1063L162.856 20.7381C163.259 21.2326 163.65 21.7387 164.029 22.2567L164.836 21.6664L165.643 21.0762C165.244 20.5298 164.831 19.996 164.406 19.4745L163.631 20.1063ZM164.836 21.6664L164.029 22.2567C164.415 22.7852 164.793 23.3162 165.161 23.8497L165.984 23.2811L166.807 22.7124C166.428 22.1645 166.04 21.619 165.643 21.0762L164.836 21.6664ZM168.128 26.5646L167.277 27.089C167.96 28.1989 168.609 29.3179 169.223 30.4449L170.101 29.9662L170.979 29.4875C170.348 28.3299 169.682 27.1803 168.98 26.0401L168.128 26.5646ZM171.893 33.4699L170.991 33.9017C171.553 35.0749 172.08 36.2554 172.574 37.442L173.498 37.0575L174.421 36.673C173.913 35.4549 173.372 34.2429 172.795 33.0381L171.893 33.4699ZM174.915 40.7202L173.973 41.0574C174.411 42.2801 174.816 43.508 175.19 44.7399L176.147 44.4495L177.104 44.1592C176.721 42.8965 176.306 41.6373 175.856 40.3831L174.915 40.7202ZM177.198 48.2415L176.229 48.4857C176.546 49.7465 176.833 51.0102 177.09 52.2754L178.07 52.0761L179.05 51.8769C178.787 50.5823 178.493 49.2886 178.168 47.9973L177.198 48.2415ZM178.767 55.9447L177.78 56.1005C177.982 57.3849 178.156 58.6694 178.303 59.9526L179.297 59.8387L180.29 59.7248C180.14 58.4143 179.962 57.1018 179.755 55.7889L178.767 55.9447ZM179.665 63.7498L178.668 63.8237C178.764 65.1234 178.834 66.4203 178.88 67.7131L179.88 67.6776L180.879 67.6421C180.832 66.3245 180.761 65.002 180.662 63.676L179.665 63.7498ZM179.947 71.611L178.947 71.6099C178.946 72.9157 178.921 74.2154 178.875 75.5077L179.874 75.5434L180.874 75.5791C180.921 74.2644 180.946 72.9415 180.947 71.612L179.947 71.611ZM179.668 79.47L178.671 79.4013C178.581 80.7065 178.47 82.0021 178.341 83.2865L179.336 83.3865L180.331 83.4865C180.462 82.1819 180.575 80.8654 180.666 79.5387L179.668 79.47ZM178.884 87.2892L177.893 87.1595C177.722 88.4598 177.535 89.7464 177.331 91.0173L178.319 91.1753L179.306 91.3334C179.512 90.0443 179.703 88.7388 179.876 87.419L178.884 87.2892ZM177.643 95.0509L176.661 94.8659C176.416 96.163 176.157 97.4408 175.886 98.6971L176.864 98.908L177.841 99.1188C178.116 97.8459 178.378 96.5509 178.626 95.236L177.643 95.0509ZM175.986 102.743L175.014 102.507C174.701 103.797 174.378 105.06 174.046 106.294L175.012 106.553L175.978 106.812C176.313 105.563 176.641 104.285 176.957 102.978L175.986 102.743ZM173.947 110.336L172.988 110.054C172.61 111.337 172.227 112.581 171.843 113.783L172.795 114.088L173.748 114.393C174.137 113.176 174.524 111.917 174.907 110.618L173.947 110.336ZM171.551 117.826L170.606 117.499C170.158 118.795 169.713 120.029 169.28 121.193L170.217 121.542L171.154 121.891C171.593 120.713 172.042 119.464 172.496 118.153L171.551 117.826ZM168.805 125.199L167.876 124.828C167.337 126.174 166.83 127.387 166.371 128.452L167.29 128.848L168.208 129.244C168.674 128.164 169.187 126.935 169.733 125.571L168.805 125.199ZM165.689 132.41L164.784 131.985C164.518 132.551 164.307 132.985 164.164 133.275C164.092 133.421 164.037 133.53 164.001 133.603C163.982 133.639 163.969 133.666 163.96 133.684C163.955 133.693 163.952 133.699 163.95 133.703C163.949 133.705 163.948 133.707 163.947 133.708C163.947 133.708 163.947 133.708 163.947 133.708C163.947 133.708 163.947 133.709 163.947 133.709C163.947 133.709 163.947 133.709 163.947 133.708C163.947 133.708 163.947 133.708 163.947 133.708C163.947 133.708 163.947 133.708 164.836 134.166C165.725 134.624 165.725 134.624 165.725 134.624C165.725 134.624 165.725 134.624 165.725 134.624C165.725 134.624 165.725 134.624 165.725 134.624C165.725 134.624 165.725 134.624 165.725 134.623C165.726 134.623 165.726 134.622 165.726 134.622C165.727 134.62 165.728 134.618 165.73 134.615C165.732 134.61 165.736 134.602 165.741 134.592C165.752 134.572 165.767 134.542 165.786 134.503C165.826 134.426 165.883 134.311 165.957 134.16C166.106 133.859 166.322 133.414 166.594 132.836L165.689 132.41Z" fill="#FFCC00"/>
</svg>

);

const ArrowLeft = () => (
<svg width="151" height="126" viewBox="0 0 177 139" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0234 24.5669L11.198 24.0024L12.0234 24.5669ZM12.9146 137.521C12.664 138.013 12.062 138.209 11.5698 137.958L3.54924 133.875C3.05705 133.625 2.86118 133.022 3.11172 132.53C3.36229 132.038 3.96439 131.842 4.45657 132.093L11.5859 135.722L15.2153 128.593C15.4658 128.101 16.0679 127.905 16.5601 128.155C17.0523 128.406 17.2482 129.008 16.9976 129.5L12.9146 137.521ZM176.523 24.5669C176.141 25.491 176.141 25.491 176.141 25.491C176.141 25.491 176.141 25.491 176.141 25.491C176.141 25.491 176.141 25.491 176.141 25.491C176.141 25.491 176.141 25.491 176.141 25.4909C176.141 25.4908 176.14 25.4907 176.14 25.4905C176.139 25.49 176.137 25.4893 176.135 25.4884C176.13 25.4866 176.124 25.4837 176.114 25.4799C176.096 25.4722 176.067 25.4606 176.03 25.4453C175.955 25.4146 175.842 25.3686 175.693 25.3084C175.394 25.1878 174.95 25.0099 174.37 24.7811L174.736 23.8507L175.103 22.9203C175.689 23.1512 176.138 23.3313 176.442 23.454C176.594 23.5153 176.709 23.5623 176.787 23.594C176.826 23.6099 176.855 23.622 176.875 23.6301C176.885 23.6342 176.892 23.6373 176.897 23.6394C176.9 23.6405 176.902 23.6413 176.903 23.6419C176.904 23.6422 176.905 23.6424 176.905 23.6425C176.905 23.6426 176.905 23.6427 176.905 23.6427C176.905 23.6427 176.905 23.6428 176.905 23.6428C176.905 23.6428 176.906 23.6428 176.906 23.6428C176.906 23.6428 176.906 23.6428 176.523 24.5669ZM170.975 22.4041L170.622 23.3399C169.539 22.932 168.309 22.476 166.946 21.9806L167.287 21.0407L167.629 20.1008C169 20.5989 170.236 21.0577 171.327 21.4682L170.975 22.4041ZM163.546 19.7039L163.215 20.6473C162.029 20.2306 160.774 19.7959 159.454 19.347L159.776 18.4003L160.098 17.4536C161.424 17.9047 162.686 18.3416 163.878 18.7605L163.546 19.7039ZM155.983 17.1309L155.671 18.0808C154.466 17.6841 153.219 17.2797 151.933 16.8699L152.237 15.9171L152.54 14.9643C153.833 15.3762 155.086 15.7825 156.296 16.1811L155.983 17.1309ZM148.453 14.7315L148.159 15.6872C146.917 15.3048 145.645 14.9195 144.346 14.5331L144.631 13.5746L144.916 12.616C146.222 13.0043 147.5 13.3915 148.747 13.7758L148.453 14.7315ZM140.811 12.4597L140.535 13.421C139.29 13.0642 138.023 12.7078 136.735 12.3532L137.001 11.3891L137.266 10.425C138.56 10.7815 139.834 11.1397 141.086 11.4983L140.811 12.4597ZM133.146 10.3489L132.891 11.3157C131.63 10.9826 130.353 10.6523 129.06 10.3257L129.305 9.35622L129.55 8.38668C130.85 8.715 132.134 9.04718 133.402 9.38208L133.146 10.3489ZM125.449 8.40474L125.215 9.37696C123.936 9.0689 122.644 8.76554 121.341 8.46789L121.563 7.493L121.786 6.51811C123.097 6.81755 124.396 7.1227 125.683 7.43252L125.449 8.40474ZM117.699 6.63463L117.488 7.61214C116.201 7.33448 114.904 7.06319 113.6 6.79921L113.799 5.81909L113.997 4.83897C115.31 5.10468 116.614 5.37771 117.91 5.65711L117.699 6.63463ZM109.904 5.05739L109.718 6.04007C108.424 5.79605 107.124 5.55999 105.819 5.33278L105.99 4.34759L106.162 3.36241C107.477 3.59128 108.786 3.82901 110.089 4.07471L109.904 5.05739ZM102.069 3.69454L101.912 4.68216C100.611 4.47541 99.3054 4.27822 97.9978 4.09145L98.1392 3.1015L98.2806 2.11154C99.5989 2.29983 100.914 2.49859 102.226 2.70693L102.069 3.69454ZM94.1995 2.57187L94.0746 3.56404C92.765 3.39919 91.4543 3.24561 90.1434 3.10415L90.2507 2.10992L90.358 1.1157C91.681 1.25846 93.0035 1.41342 94.3244 1.5797L94.1995 2.57187ZM86.297 1.72063L86.2086 2.71671C84.8921 2.59979 83.5768 2.49599 82.264 2.4062L82.3322 1.40853L82.4005 0.410865C83.7272 0.501608 85.056 0.60647 86.3855 0.72455L86.297 1.72063ZM78.3644 1.18004L78.3179 2.17896C76.9982 2.11756 75.6822 2.07134 74.3714 2.0412L74.3943 1.04146L74.4173 0.0417258C75.7444 0.0722421 77.076 0.119018 78.4109 0.18112L78.3644 1.18004ZM70.4149 0.999976L70.4174 1.99997C69.0992 2.00325 67.7875 2.024 66.4838 2.06314L66.4538 1.06359L66.4238 0.0640439C67.7465 0.0243257 69.0765 0.00329781 70.4124 -2.11596e-05L70.4149 0.999976ZM62.4695 1.2426L62.5297 2.24078C61.2121 2.32022 59.9043 2.41995 58.6076 2.54096L58.5147 1.54528L58.4218 0.549609C59.7411 0.426494 61.0707 0.325115 62.4094 0.244409L62.4695 1.2426ZM54.5617 1.98513L54.6905 2.9768C53.3781 3.14724 52.0792 3.34136 50.7953 3.56023L50.6273 2.57445L50.4592 1.58867C51.7702 1.36518 53.0954 1.16717 54.433 0.993458L54.5617 1.98513ZM46.7438 3.32227L46.9546 4.29982C45.6581 4.57931 44.3795 4.88647 43.1205 5.22245L42.8627 4.25626L42.6049 3.29007C43.8964 2.94542 45.2064 2.63075 46.5331 2.34473L46.7438 3.32227ZM39.0551 5.37984L39.364 6.33095C38.115 6.73653 36.8885 7.17364 35.6862 7.6435L35.3222 6.7121L34.9582 5.78069C36.1983 5.29605 37.4617 4.84588 38.7463 4.42873L39.0551 5.37984ZM31.66 8.27946L32.0834 9.18539C30.8981 9.73941 29.7404 10.3295 28.6123 10.957L28.1262 10.083L27.6401 9.20913C28.8107 8.55803 30.0103 7.9467 31.2365 7.37354L31.66 8.27946ZM24.7336 12.1407L25.2847 12.9751C24.1986 13.6925 23.1449 14.4502 22.1257 15.2496L21.5086 14.4628L20.8914 13.6759C21.9545 12.8421 23.0522 12.0528 24.1824 11.3063L24.7336 12.1407ZM18.494 17.0408L19.176 17.7722C18.2302 18.6541 17.3204 19.5792 16.4485 20.549L15.7049 19.8805L14.9612 19.2119C15.8728 18.1978 16.8239 17.2308 17.8121 16.3095L18.494 17.0408ZM13.192 22.9367L13.9917 23.5372C13.6011 24.0573 13.2201 24.5886 12.8489 25.1314L12.0234 24.5669L11.198 24.0024C11.5859 23.4353 11.9841 22.8799 12.3924 22.3362L13.192 22.9367ZM12.0234 24.5669L12.8489 25.1314C12.4704 25.6848 12.1036 26.2479 11.7482 26.8205L10.8986 26.293L10.049 25.7656C10.4197 25.1685 10.8026 24.5806 11.198 24.0024L12.0234 24.5669ZM8.87054 29.8879L9.76074 30.3435C9.14995 31.537 8.58096 32.7634 8.05183 34.0197L7.13025 33.6315L6.20865 33.2434C6.7561 31.9436 7.3459 30.6721 7.98036 29.4324L8.87054 29.8879ZM5.65736 37.489L6.60272 37.8151C6.16417 39.0867 5.76134 40.3832 5.39244 41.7017L4.42943 41.4322L3.4664 41.1628C3.84543 39.8081 4.25993 38.4738 4.71201 37.163L5.65736 37.489ZM3.42392 45.4387L4.39983 45.6569C4.10501 46.9755 3.84052 48.3117 3.60464 49.6631L2.61954 49.4912L1.63443 49.3192C1.87544 47.9384 2.14601 46.5712 2.44801 45.2205L3.42392 45.4387ZM1.99678 53.576L2.98828 53.7061C2.81163 55.0516 2.66069 56.4088 2.53389 57.7749L1.53818 57.6825L0.54245 57.5901C0.671478 56.1999 0.825195 54.8176 1.00529 53.4458L1.99678 53.576ZM1.2283 61.8006L2.22661 61.8588C2.14735 63.2181 2.08995 64.5836 2.05286 65.9529L1.05322 65.9258L0.0535889 65.8987C0.091217 64.5096 0.14949 63.1233 0.229996 61.7424L1.2283 61.8006ZM1.00095 70.0559L2.00095 70.0546C2.00279 71.4225 2.02325 72.7916 2.06079 74.1595L1.06117 74.187L0.061554 74.2144C0.0235443 72.8299 0.00282288 71.4433 0.000946045 70.0573L1.00095 70.0559ZM1.22484 78.3156L2.22351 78.2641C2.29419 79.6358 2.38062 81.0037 2.48123 82.3653L1.48395 82.439L0.486679 82.5127C0.38501 81.1368 0.297638 79.7541 0.226151 78.367L1.22484 78.3156ZM1.83153 86.5549L2.82707 86.4605C2.95715 87.833 3.10034 89.1964 3.25494 90.548L2.26143 90.6616L1.2679 90.7753C1.11188 89.4113 0.967346 88.0351 0.835999 86.6492L1.83153 86.5549ZM2.7683 94.7581L3.75958 94.6264C3.94205 95.9992 4.13496 97.3564 4.33649 98.6952L3.34763 98.844L2.35876 98.9929C2.15559 97.6432 1.96106 96.2745 1.77702 94.8899L2.7683 94.7581ZM3.99619 102.923L4.98245 102.758C5.2128 104.134 5.45065 105.486 5.69379 106.811L4.71024 106.991L3.72667 107.172C3.4817 105.837 3.24203 104.475 3.0099 103.088L3.99619 102.923ZM5.48654 111.045L6.46724 110.85C6.74335 112.235 7.02304 113.582 7.30339 114.888L6.32568 115.098L5.34798 115.308C5.06564 113.993 4.78394 112.636 4.50583 111.241L5.48654 111.045ZM7.22543 119.142L8.19995 118.918C8.52301 120.321 8.84271 121.662 9.1545 122.931L8.18336 123.17L7.21222 123.408C6.89821 122.13 6.57623 120.78 6.2509 119.366L7.22543 119.142ZM9.19235 127.15L10.1598 126.897C10.5471 128.378 10.9109 129.717 11.2402 130.897L10.277 131.165L9.31377 131.434C8.98177 130.245 8.6151 128.895 8.2249 127.403L9.19235 127.15ZM11.4155 135.102L12.3731 134.814C12.564 135.448 12.7148 135.936 12.8177 136.264C12.8691 136.428 12.9086 136.552 12.935 136.635C12.9482 136.676 12.9582 136.707 12.9648 136.728C12.9681 136.738 12.9706 136.746 12.9722 136.751C12.973 136.753 12.9736 136.755 12.9739 136.756C12.9741 136.757 12.9742 136.757 12.9743 136.757C12.9743 136.757 12.9744 136.758 12.9744 136.758C12.9744 136.758 12.9744 136.758 12.9744 136.758C12.9744 136.758 12.9744 136.758 12.9744 136.758C12.9744 136.758 12.9744 136.758 12.0234 137.067C11.0725 137.376 11.0725 137.376 11.0725 137.376C11.0725 137.376 11.0725 137.376 11.0725 137.376C11.0724 137.376 11.0724 137.376 11.0724 137.376C11.0724 137.376 11.0723 137.376 11.0722 137.375C11.0721 137.375 11.0719 137.374 11.0716 137.374C11.0711 137.372 11.0704 137.37 11.0695 137.367C11.0676 137.361 11.0649 137.353 11.0613 137.342C11.0542 137.32 11.0437 137.287 11.0299 137.244C11.0023 137.158 10.9618 137.03 10.9093 136.862C10.8042 136.527 10.651 136.032 10.4578 135.39L11.4155 135.102Z" fill="#FFCC00"/>
</svg>

);

const Developmentprocess = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !headerRef.current) return;

      const headerHeight = headerRef.current.offsetHeight;

      stepRefs.current.forEach((ref, i) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        if (
          rect.top <= headerHeight + 150 &&
          rect.bottom > headerHeight + 50
        ) {
          setActiveStep(i);
          // FIX 1: Only reveal cards up to index 5 (all 6 cards), never hide them
          if (i + 1 >= visibleCount && i + 1 < steps.length) {
            setVisibleCount((prev) => Math.max(prev, i + 2));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCount]);

  return (
    // FIX 2: Removed sectionRef from section tag — section is now normal flow.
    // The sticky header is gone entirely. Header is just plain relative flow.
    // Cards are in a normal scrollable div — no pinning, no fixed positioning.
    // visibleCount stops at 6 (all cards shown), then scroll exits naturally.
    <section className="w-full bg-white relative">

      {/* HEADER — plain relative, no sticky, no fixed */}
      <div ref={headerRef} className="w-full bg-white relative z-10">
        <div className="mx-auto px-6 py-10 text-center">
          <h2 className="md:max-w-md lg:max-w-xl xl:max-w-3xl mx-auto text-[19px] sm:text-[19px] md:text-[21px] lg:text-[28px] xl:text-[36px] text-black leading-tight font-bold mb-4">
            Mobile {" "}
            <span data-text="App Development Process" className="text-[#F5B800] shine-text ">App Development Process</span> That Makes Your App Stand Out
            
            
          </h2>
          <p className="text-black text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px] leading-relaxed font-semibold max-w-[680px] mx-auto mb-8">
            Mobile App Development Solutions are built on the idea that mobile app
            development is an ongoing process focused on constant iteration and
            better alignment with user needs.
          </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">

          {/* Consult Our Experts */}
          <Link href="/contact-us" target="_blank">
            <button className="group relative flex items-center justify-center gap-2 border border-black rounded-full overflow-hidden cursor-pointer bg-white px-5 py-2 lg:px-4 lg:py-0 w-auto">
              
              <span className="absolute inset-0 flex items-center justify-center z-0">
                <span className="w-10 h-10 bg-gray-100 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" />
              </span>

              <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300 z-0" />

              <span className="relative z-10 text-black font-medium text-sm whitespace-nowrap">
                Consult Our Experts
              </span>

              <svg
                viewBox="0 0 56 55"
                className="relative z-10 w-10 h-10 lg:w-14 lg:h-14 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 group-active:scale-95"
              >
                <circle cx="28.2" cy="27.1" r="15.9" fill="#F6E000" stroke="#F9C901" strokeWidth="1.5" />
                <path
                  d="M31.3 22.1L33.2 29.4M31.3 22.1L24.1 24.1M31.3 22.1L25.1 32.8"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>

          {/* Explore Portfolio */}
          <Link href="/portfolio" target="_blank">
            <button className="group relative flex items-center justify-center gap-2 border border-black rounded-full overflow-hidden cursor-pointer bg-white px-4 py-2 lg:px-4 lg:py-0 w-auto">
              
              <span className="absolute inset-0 flex items-center justify-center z-0">
                <span className="w-10 h-10 bg-gray-100 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" />
              </span>

              <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300 z-0" />

              <span className="relative z-10 text-black font-medium text-sm whitespace-nowrap">
                Explore Our Portfolio
              </span>

              <svg
                viewBox="0 0 56 55"
                className="relative z-10 w-10 h-10 lg:w-14 lg:h-14 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 group-active:scale-95"
              >
                <circle cx="28.2" cy="27.1" r="15.9" fill="#F6E000" stroke="#F9C901" strokeWidth="1.5" />
                <path
                  d="M31.3 22.1L33.2 29.4M31.3 22.1L24.1 24.1M31.3 22.1L25.1 32.8"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>

        </div>
        </div>
      </div>

      {/* ── MOBILE LAYOUT ── */}
      <div className="relative w-full max-w-[500px] mx-auto px-4 pb-16 mt-8 md:hidden flex flex-col gap-6">
{steps.map((step, i) => {
  const isLeft = i % 2 === 0;
  const isVisible = true; // always visible on mobile

  return (
    <div
      key={i}
      ref={(el) => { stepRefs.current[i] = el; }}
      className={`relative flex items-center justify-between w-full gap-4 transition-all duration-700 ${
        isLeft ? "flex-row" : "flex-row-reverse"
      } ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
              <div className="w-[68%] bg-[#f0f0f0] border border-[#e0e0e0] rounded-2xl p-4 z-10">
                <div className="flex items-center gap-2">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-5 h-5 object-contain"
                  />
                  <h3 className="text-[13px] font-bold text-black">{step.title}</h3>
                </div>
                <p className="text-gray-500 text-[11px] leading-relaxed">{step.description}</p>
              </div>

              <div className="w-[28%] relative flex justify-center items-center">
                <span
                  className="text-[72px] font-black leading-none select-none tracking-tighter"
                  style={{
                    color: "#000",
                    WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 80%)",
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 80%)",
                  }}
                >
                  {step.number}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div ref={sectionRef} className="hidden md:block relative max-w-[1100px] mx-auto px-8 pb-28 mt-6">
        {steps.map((step, i) => {
          const isLeft = step.side === "left";
          const isActive = activeStep === i;
          const isVisible = i < visibleCount;
          // FIX 3: Only show arrow between cards that are BOTH visible, stop at last card
          const showArrow = i < steps.length - 1 && isVisible && i + 1 < visibleCount;

          return (
            <div
              key={i}
              ref={(el) => { stepRefs.current[i] = el; }}
              className={`relative flex items-center mb-7 transition-all duration-700 ${
                isLeft ? "flex-row" : "flex-row-reverse"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10 pointer-events-none"
              }`}
              style={{ transitionDelay: `${(i % 3) * 100}ms` }}
            >
              {/* Card */}
              <div className={`w-[95%] ${isLeft ? "pr-5" : "pl-5"}`}>
                <div
                  ref={(el) => { cardRefs.current[i] = el; }}
                  className={`rounded-2xl p-7 transition-all duration-500 ${
                    isActive
                      ? "bg-white shadow-xl scale-[1.02] border border-gray-200"
                      : "bg-[#f0f0f0] opacity-85"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-8 h-8 object-contain"
                    />
                    <h3 className="text-[18px] font-bold text-black">{step.title}</h3>
                  </div>
                  <p className="text-gray-500 md:text-[12px] lg:text-[14px] xl:text-[16px] leading-relaxed">{step.description}</p>
                </div>
              </div>

              {/* Number + Arrow */}
              <div className={`w-[50%] relative flex items-center ${isLeft ? "justify-start pl-0" : "justify-end pr-0"}`}>
                <span
                  className="text-[110px] lg:text-[120px] font-black leading-none select-none tracking-tighter z-10 relative"
                  style={{
                    color: "#666666",
                    WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0) 100%)",
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0) 100%)",
                    // fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
                  }}
                >
                  {step.number}
                </span>

                {showArrow && (
                  <div
                    className={`hidden lg:block absolute z-0 ${
                      isLeft ? "right-[10%] top-[10%]" : "left-[10%] top-[10%]"
                    }`}
                  >
                    {isLeft ? <ArrowRight /> : <ArrowLeft />}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Fade overlay — only show when cards 4-6 are NOT yet visible */}
        {visibleCount < steps.length && (
          <div
            className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.85) 60%, white 100%)",
            }}
          />
        )}
      </div>

    </section>
  );
};

export default Developmentprocess;