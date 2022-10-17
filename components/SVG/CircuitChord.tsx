


//@ts-nocheck
import * as React from "react";
import { useEffect, useState } from "react";
import styles from "./CircuitBoard.module.css";

const CircuitBoard = (props: any) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.screen.width < 768 ? setIsMobile(true) : "";

    const paths = document.querySelector("#fullBoard").querySelectorAll("svg path");
    let i = 0;
    paths.forEach((item, index) => {
      i++;
      let pathLength: number = Math.round(item.getTotalLength());
      item.setAttribute("stroke-dasharray", pathLength);
      item.setAttribute("stroke-dashoffset", pathLength);
      //item.style.strokeWidth = 6;
      let speed = pathLength / 500;
      //console.log(speed)

   /*    if (index == 0) {
        item.innerHTML =
          "<animate id='a" +
          i +
          "' attributeName='stroke-dashoffset' begin='1s' dur='" +
          speed +
          "s' to='0' fill='freeze' />";
      } else {
        item.innerHTML =
          "<animate id='a" +
          i +
          "' attributeName='stroke-dashoffset' begin='a" +
          (i-1) +
          ".end+1.5s' dur='" +
          speed +
          "s' to='0' fill='freeze' />";
      }
 */
       item.innerHTML =
        "<animate  attributeName='stroke-dashoffset' begin='0s' dur='5s' to='0' fill='freeze' />";
      //console.log(index, pathLength, item.innerHTML, speed)
    });
  }, []);

  return (
    <div className={styles.svgWrapper}>
      <svg
        width="950"
        height="484"
        viewBox="0 0 950 484"
        stroke="#47B5FF"
        fill="none"
        strokeOpacity="1"
        id="fullBoard"
      >
        <path
          opacity="0.96"
          d="M305.505 98.2549C312.804 93.7789 320.161 86.8438 332.941 94.2658C338.759 97.6198 343.798 106.601 338.961 115.779C333.809 125.176 321.298 129.282 311.342 122.665C302.168 117.146 299.043 111.532 293.287 117.163C271.92 137.628 262.431 144.303 256.61 151.486C254.975 153.499 252.859 155.018 250.767 156.518C248.632 158.012 247.412 160.403 245.576 162.203C243.746 164.088 241.3 165.18 239.342 166.912C234.67 171.212 230.211 175.75 225.435 179.953C222.995 182.179 221.037 184.869 218.689 187.193C214.176 191.487 189.095 215 188.185 215.764C188.167 215.78 144.215 256.994 143.487 257.766C133.378 267.407 65.589 330.749 58.324 337.915C54.411 341.175 6.185 387.555 0 392.116V381.497C1.507 380.338 3.056 379.228 4.416 377.898C12.999 369.726 88.858 298.37 88.92 298.311C89.53 297.79 167.986 224.243 176.291 215.552C188.056 205.309 221.126 174.101 221.922 173.282C221.924 173.281 265.973 132.586 265.973 132.585C273.012 124.393 281.631 117.769 289.17 110.071C293.959 105.287 299.808 101.823 305.505 98.2549ZM313.325 105.489C313.898 108.112 313.947 110.918 315.155 113.37C323.115 126.183 343.569 107.097 329.398 97.1628C321.993 91.8218 311.603 97.9839 313.325 105.489Z"
          className={styles.pathOne}
        />
        <path
          opacity="0.96"
          d="M451.762 105.324C467.008 104.937 517.835 105.427 540.822 104.787C552.182 105.178 551.779 104.597 589.033 104.744C602.537 104.816 599.622 106.604 610.43 115.626C616.702 120.839 626.813 118.734 637.433 124.104C647.254 129.672 651.049 142.623 640.818 151.912C630.765 162.005 610.922 155.753 609.118 140.274C606.592 121.595 605.811 122.516 597.175 114.454C592.812 110.278 591.003 112.561 406.618 112.832C403.873 112.838 401.159 112.1 398.414 112.417C394.034 112.899 389.631 112.35 385.245 112.722C381.878 113.033 378.09 112.1 375.162 114.259C370.447 117.62 366.806 122.201 362.481 126.019C349.113 137.775 346.494 143.391 337.698 143.336C293.528 143.241 301.674 141.479 290.31 152.01C285.373 156.64 178.032 257.435 175.29 259.643C169.182 264.42 121.947 309.54 121.101 310.477C116.773 315.489 61.749 366.409 60.001 368.265C56.903 371.428 5.308 420.125 1 423.332V412.652C5.639 409.394 19.994 395.337 22.745 392.639C39.201 377.466 89.719 329.594 89.719 329.594C90.331 329.033 139.279 283.062 141.346 281.267C148.685 274.831 159.758 263.561 160.017 263.31C162.249 261.017 165.171 259.54 167.312 257.156C174.075 249.824 173.194 250.866 230.748 196.801C231.483 196.192 285.061 146.093 291.396 139.666C293.763 137.238 297.191 136.256 300.509 136.391C309.457 136.44 318.393 135.653 327.335 136.098C340.515 134.658 335.664 140.881 352.014 124.68C370.486 106.991 371.952 105.846 375.516 105.698C381.336 105.048 420.909 105.494 428.619 105.35C436.33 105.128 444.046 105.488 451.762 105.324ZM626.991 127.069C622.874 127.831 619.33 131.644 619.678 135.968C619.14 155.819 641.4 150.097 640.331 137.17C640.349 130.582 633.231 125.623 626.991 127.069Z"
          className={styles.pathOne}
        />
        <path
          opacity="0.96"
          d="M744.104 123.94C760.121 116.433 769.918 126.137 772.595 133.693C777.682 148.314 760.497 161.221 746.629 154.602C732.007 147.018 734.574 142.349 717.717 142.098C678.579 142.039 675.862 141.401 671.921 145.069C626.523 188.105 663.678 167.871 540.267 173.499C533.014 172.97 463.936 173.759 463.327 173.798C307.271 173.976 316.817 174.683 308.416 174.188C305.275 174.042 301.957 172.742 298.907 174.06C292.716 177.134 289.386 183.722 283.701 187.522C278.773 191.719 274.655 196.763 269.709 200.947C265.33 205.528 259.913 208.999 255.79 213.848C249.741 220.786 214.918 252.261 208.238 259.077C201.712 265.028 149.033 314.538 148.431 315.15C148.43 315.151 62.4179 396.314 59.6269 399.013C56.9299 401.253 10.2099 446.086 1.00391 453.58V443.016C6.29591 439.171 20.5539 425.157 21.1569 424.546C21.7859 423.916 82.4059 366.902 83.0249 366.258C83.0249 366.258 141.759 310.768 141.984 310.55C142.57 309.939 197.784 257.726 201.022 254.915C203.452 252.677 243.746 214.309 247.037 211.785C250.772 208.924 287.863 172.908 292.827 169.253C297.719 165.502 318.05 167.552 392.61 166.52C394.086 166.42 499.968 166.319 500.579 166.313C509.685 165.971 634.159 165.582 634.77 165.587C639.874 165.699 641.837 161.976 653.471 151.039C664.191 141.965 667.773 135.178 673.825 135.15C678.219 134.97 720.172 134.717 720.182 134.717C731.781 134.249 726.46 133.962 736.297 128.935C739.053 127.502 741.261 125.227 744.104 123.94ZM746.049 134.443C744.938 145.221 752.042 149.365 756.876 148.728C763.85 147.36 768.164 140.447 766.202 133.815C762.576 124.029 747.323 124.746 746.049 134.443Z"
          className={styles.pathOne}
        />
        <path
          opacity="0.96"
          d="M662.424 167.149C665.003 165.384 665.347 165.167 696.942 165.594C698.01 165.513 721.721 164.58 725.921 166.747C730.441 169.626 733.625 174.207 738.218 176.988C744.354 180.172 751.46 180.288 758.036 182.057C775.422 188.102 777.9 205.675 763.965 214.745C759.787 217.307 754.681 216.191 750.058 216.245C743.361 216.349 738.133 210.566 736.169 204.613C734.437 198.532 734.016 192.145 732.143 186.101C730.867 182.002 722.98 171.827 714.661 172.59C707.326 173.136 672.617 172.883 672.007 172.901C662.99 173.232 655.357 189.261 646.218 190.742C640.628 191.355 609.52 190.741 588.382 191.291C580.977 191.768 467.807 191.105 448.073 192.005C438.01 191.422 329.888 192.04 314.65 192.524C308.635 192.318 304.903 198.896 295.009 207.383C294.98 207.408 258.61 241.638 255.789 244.401C244.498 254.075 236.716 262.737 229.963 268.525C224.06 274.677 208.11 288.25 207.498 288.831C203.399 292.235 199.691 296.071 196.165 300.06C193.707 302.903 190.498 304.928 187.87 307.593C172.741 322.657 158.982 333.01 158.982 333.01C156.664 335.23 155.28 338.213 153.059 340.525C140.045 354.017 131.802 360.378 123.452 368.87C123.452 368.87 83.9089 406.048 73.0819 416.703C62.5149 425.777 5.16793 481.245 1.00293 483.713V473.392C4.90693 470.599 8.00493 466.902 11.6409 463.81C11.6409 463.81 117.147 364.232 121.184 360.52C121.795 359.944 169.884 314.131 180.765 304.196C182.485 302.323 233.001 255.049 233.612 254.442C234.88 253.334 278.119 211.902 284.409 206.505C286.112 204.734 303.403 188.473 305.666 186.895C308.795 184.705 312.778 185.285 316.371 185.199C322.25 185.297 410.295 184.759 410.896 184.729C469.921 184.385 615.423 183.827 640.277 183.954C645.468 184.247 648.81 179.819 652.141 176.574C655.55 173.413 658.526 169.735 662.424 167.149ZM757.34 209.865C760.079 209.426 761.896 207.163 763.775 205.351C767.639 198.292 765.783 192.89 759.548 189.114C739.313 182.278 741.703 214.04 757.34 209.865Z"
          className={styles.pathOne}
        />
        <path
          opacity="0.96"
          d="M334.246 74.689C610.622 74.324 420.713 74.2229 642.892 74.0059C650.421 73.8149 653.506 78.274 659.959 84.577C664.247 89.03 669.096 92.8969 673.372 97.3679C683.824 106.983 673.947 102.711 725.847 104.395C770.924 103.261 768.885 103.443 777.773 112.544C783.037 118.259 789.039 123.231 794.455 128.799C801.864 136.385 793.351 134.157 883.845 134.343C888.621 134.123 893.732 135.209 898.197 132.958C903.864 130.03 908.963 126.096 914.672 123.241C934.606 112.69 954.382 139.014 935.215 152.397C930.683 155.441 924.943 154.123 919.832 154.282C911.748 154.362 902.998 142.52 894.537 141.57C890.161 141.093 828.302 141.265 827.691 141.314C818.963 141.869 810.204 141.424 801.469 141.887C797.584 142.076 794.034 140.045 791.411 137.331C784.007 131.275 769.753 115.209 763.932 112.536C760.71 111.08 746.524 111.842 739.332 111.658C732.891 111.24 689.912 111.395 686.192 111.414C674.373 111.656 678.606 114.293 650.808 86.9849C643.193 79.2919 661.826 81.4449 485.527 81.5079L401.975 81.9409C398.257 81.7449 361.318 82.1209 360.51 82.0999C299.205 82.1399 300.888 81.2349 297.227 84.6799C288.752 92.2309 202.67 173.148 202.067 173.759C201.705 174.101 142.612 229.061 137.387 234.163C134.776 236.627 131.69 238.573 129.317 241.293C126.871 244.117 123.962 246.472 121.083 248.838C119.987 249.736 102.777 266.318 99.393 269.912C96.24 273.309 92.244 275.768 88.963 279.031C67.296 300.145 58.38 308.467 37.775 327.816C37.163 328.403 5.185 359.068 0 362.633V351.946C5.48 348.127 10.084 342.848 41.886 313.122C46.422 309.48 74.291 282.278 77.959 279.586C77.971 279.578 111.023 248.294 114.258 245.136L161.39 200.835C164.415 197.752 215.856 150.06 223.978 142.017C225.218 140.911 263.495 105.374 272.665 96.2699C281.654 88.6349 291.069 78.1689 295.624 75.9219C302.809 73.6159 310.416 75.4769 317.778 74.7269C323.266 74.4269 328.756 75.104 334.246 74.689ZM914.689 132.538C913.866 137.101 915.567 141.712 918.373 145.286C924.158 150.005 935.557 147.152 934.757 134.74C934.469 124.259 917.26 121.878 914.689 132.538Z"
          className={styles.pathOne}
        />
        <path
          opacity="0.96"
          d="M622.17 57.1398C637.212 56.8838 652.253 57.2928 667.295 57.0298C672.443 56.7798 677.457 58.1578 682.489 59.0668C690.173 60.8938 703.721 62.0148 707.869 71.7658C712.115 80.1548 709.209 90.1228 698.915 95.1578C688.411 99.7608 675.662 94.9288 672.766 82.8118C670.387 72.9188 670.552 64.0558 664.294 64.6048C614.184 64.4418 495.244 64.9888 495.244 64.9888C495.244 64.9888 300.589 65.4788 293.408 65.3368C286.478 65.4038 285.802 66.8048 277.653 74.5168C259.106 91.9958 226.624 121.649 226.624 121.649C223.861 124.388 220.604 126.608 218.115 129.633C215.132 133.189 211.009 135.464 207.685 138.648C207.075 139.216 130.176 212.971 121.65 220.407C121.65 220.407 47.096 290.429 47.095 290.43C41.974 294.859 4.361 331.084 0 334.054V323.386C3.256 321.061 23.888 301.379 24.502 300.775C27.744 297.876 118.503 212.793 134.575 197.356C134.665 197.261 192.429 143.265 194.735 140.971C236.887 101.671 236.188 102.653 236.188 102.653C238.285 100.254 276.902 63.9358 277.513 63.3898C284.5 57.0138 272.776 57.6178 410.509 57.7538C411.567 57.7648 553.832 57.4348 555.667 57.3938C555.667 57.3938 595.344 57.2958 595.345 57.2958C604.28 57.0418 613.228 57.1148 622.17 57.1398ZM682.031 75.5718C681.952 78.7988 681.848 82.2818 683.373 85.2398C685.581 89.4488 691.284 91.1198 695.53 89.1498C697.811 88.2898 699.33 86.3258 700.873 84.5508C701.745 82.6778 702.715 80.7328 702.648 78.6218C702.398 73.7908 698.482 69.5208 693.797 68.5448C688.845 67.2588 683.221 70.5948 682.031 75.5718Z"
          className={styles.pathOne}
        />
        <path
          opacity="0.96"
          d="M542.266 0.543495C545.83 0.481495 679.191 0.321499 681.928 0.397499C692.508 -0.161501 755.878 0.514527 768.542 0.263527C785.522 -0.978473 782.928 1.93352 796.686 14.0735C799.91 16.8415 818.843 35.2935 820.487 37.6915C823.466 41.9485 819.971 46.0975 823.823 52.8915C829.759 63.7395 837.887 69.5315 835.443 80.7175C833.256 91.1465 819.284 97.9435 808.33 92.1785C800.197 88.1375 794.957 77.0095 801.803 67.0425C811.3 53.2235 814.386 50.0925 812.874 42.8815C810.84 37.5655 801.35 30.6415 796.753 25.6505C780.498 8.86149 777.87 7.13948 772.202 7.42448C737.257 7.60148 654.095 7.34052 648.96 7.85752C648.857 7.86852 422.209 8.0955 422.11 8.0955C415.374 8.2045 274.865 8.38449 265.338 8.57749C254.129 8.44949 251.618 6.8745 246.24 12.1395C239.436 18.7445 191.164 63.5145 190.362 64.2845C190.108 64.4935 127.575 122.953 127.335 123.177C127.335 123.177 73.89 173.099 69.883 176.731C64.424 180.621 32.769 211.505 31.657 212.268C26.863 215.55 23.563 220.514 18.793 223.82C15.18 226.197 6.778 237.433 0 241.564V231.147C2.123 229.701 4.105 228.072 5.947 226.285C10.575 221.739 4.504 229.555 27.936 205.547C30.688 203.332 46.113 188.347 50.413 184.71C51.01 184.096 124.178 115.666 124.474 115.413C126.802 112.954 176.191 66.8065 176.705 66.3115C177.477 65.5495 236.286 10.7255 236.286 10.7255C250.24 -0.729498 237.149 1.28851 286.059 1.19151C295.943 1.05051 351.977 0.917519 351.977 0.917519C368.752 0.364519 407.153 1.05749 416.602 0.551491C458.494 0.549491 500.38 0.536495 542.266 0.543495ZM808.635 74.5795C809.544 77.7875 809.312 81.4055 811.294 84.2535C814.96 88.3895 822.194 88.4505 825.97 84.4125C828.868 81.8555 833.269 73.5445 823.213 66.6325C812.752 63.5905 808.656 70.4175 808.635 74.5795Z"
          className={styles.pathOne}
        />
        <path
          opacity="0.96"
          d="M303.137 24.0288C311.138 23.4998 485.014 23.5368 495.872 23.6078C495.872 23.6078 629.047 23.2798 637.401 23.1748C638.017 23.1428 758.042 22.5078 762.455 23.8758C765.877 24.8818 768.158 27.7798 770.647 30.1398C774.752 34.4098 779.418 38.0878 783.481 42.4058C791.427 51.1938 790.463 45.5778 790.392 68.2928C789.82 95.9488 789.191 97.8988 794.863 102.28C797.26 104.098 799.108 106.971 802.25 107.568C808.27 108.318 814.339 107.544 820.39 107.708C901.883 108.303 896.213 108.743 901.771 103.328C910.367 94.8068 908.068 97.5308 911.555 81.5948C912.36 77.5878 913.415 73.3358 916.392 70.3528C920.21 66.2238 925.834 64.0518 931.397 63.9548C943.125 65.0368 948.948 72.9068 949.354 81.6618C948.955 98.6288 927.366 99.7628 922.924 100.735C919.899 101.412 916.66 101.668 913.994 103.394C909.621 106.23 906.674 110.823 902.136 113.44C899.473 114.984 824.683 115.23 823.415 115.185C794.72 115.141 797.577 117.043 788.202 107.811C785.561 105.084 782.096 102.632 781.297 98.6918C780.632 91.5558 782.096 84.3878 781.279 77.2578C780.996 69.6358 783.582 56.7408 779.223 50.2368C775.148 45.7778 770.598 41.7888 766.353 37.5068C763.218 34.7258 760.436 30.5718 755.813 30.4988C735.233 30.4128 618.424 30.4228 605.08 30.8648C599.102 30.8038 593.125 30.1568 587.147 30.6938C581.737 31.2668 576.326 30.2058 570.916 30.6388C562.908 31.3258 331.209 31.0928 330.598 31.0898C327.05 31.2988 297.849 31.1688 295.812 31.2788C282.116 32.2328 264.965 29.4088 260.111 33.7128C259.5 34.2818 225.713 66.0878 222.599 68.8218C201.07 89.0198 215.388 72.8948 195.187 92.5858C192.046 95.8248 188.093 98.1118 184.854 101.247C180.566 105.09 176.833 109.518 172.283 113.068C167.812 117.094 162.945 120.949 159.858 126.225C156.65 131.288 151.569 134.697 147.397 138.894C147.054 139.195 64.065 216.814 60.508 220.275C56.467 223.6 5.26 272.861 0 276.257V265.589C3.544 263.21 6.581 260.227 9.57 257.208C15.019 252.475 66.595 203.808 69.627 200.781C75.328 195.983 124.521 149.144 129.592 144.957C145.47 129.079 167.657 110.66 171.801 105.895C171.801 105.895 219.546 60.9708 230.339 50.3698C262.324 23.1198 252.097 24.4808 269.578 24.1048C276.745 23.9158 283.93 24.5498 291.079 23.8428C295.097 23.5158 299.111 24.2478 303.137 24.0288ZM921.587 77.4548C921.301 89.4648 929.557 92.3648 935.116 90.3618C942.632 86.9778 944.004 78.7568 940.331 74.0208C935.216 66.8288 922.591 68.1738 921.587 77.4548Z"
          className={styles.pathOne}
        />
        <path
          opacity="0.96"
          d="M628.259 40.2264C628.869 40.2054 714.541 39.2395 719.631 41.4645C725.641 45.2345 735.492 57.9984 741.797 59.4764C760.651 63.4884 765.019 64.0485 770.532 71.7065C779.365 85.7665 764.021 100.907 749.787 97.4835C742.583 95.8675 736.636 89.5725 735.605 82.2405C734.952 77.3855 733.635 72.6575 732.763 67.8455C731.959 63.0555 729.32 61.9965 719.795 52.2795C713.652 45.7205 714.104 47.7515 677.074 47.4545C676.464 47.4585 598.11 47.5705 595.919 47.4725C595.309 47.4455 538.275 47.2575 520.284 48.0585C517.268 48.1525 313.53 47.8045 301.912 48.5225C265.004 51.5805 289.872 35.2195 239.263 81.7715C233.787 86.6665 156.861 159.001 144.158 170.264C143.176 171.264 110.415 202.842 103.626 207.74C103.289 208.022 67.98 241.331 64.546 245.1C61.99 248.028 58.812 250.286 55.75 252.646C55.75 252.646 43.541 265.458 23.947 283.052C22.206 284.921 3.774 302.402 0 305.022V294.299C5.004 290.91 34.999 261.899 45.052 252.852C47.638 250.803 50.67 249.235 52.664 246.533C55.443 242.849 77.104 222.66 77.715 222.122C79.339 220.837 134.607 168.648 135.21 168.037C135.287 167.968 229.182 80.1205 231.62 77.7575C272.743 41.5845 264.691 41.0175 280.581 40.9465C281.191 40.9415 356.653 40.5645 359.888 40.6115C359.89 40.6115 522.79 40.5875 522.79 40.5875C522.791 40.5875 611.771 40.0875 611.771 40.0875C617.262 40.4765 622.757 40.0794 628.259 40.2264ZM745.695 84.5765C751.347 93.7365 759.99 90.4474 763.03 86.3334C769.401 76.2934 761.346 68.5785 754.533 68.7845C749.126 68.6075 742.558 73.5435 745.695 84.5765Z"
          className={styles.pathOne}
        />
      </svg>
      ;
    </div>
  );
};

export default CircuitBoard;

//g means group of paths - works like somehow like a div, you can apply fill and stroke there to all including elements (except you overwrite the)
//d= means drawing

//Inside Path Data --> Capital letters are absolute, small letters are relative
//Z,z at the end of a drawing means its closing the shape at the point of beginning
//M moveTo --> at the beginning and it will never work with out the M
//L,l lineTo --> straigt line
//H,h horizontal Line --> needs only y Position
//V,v vertical Line --> needs only X Position
//C,c cubic-bezier --> two dots curve
//S,s reflecting cubic-bezier --> two dots curve mirrored
//Q,q quadratic bezier --> like cubic bezier but with only one control point between
//T,t reflecting quadratic-bezier --> quadratic-bezier mirrored
//A,a elliptical arc
