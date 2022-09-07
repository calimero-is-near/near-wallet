import * as React from 'react';

const SvgComponent = (props) => (
    <svg
        width={48}
        height={48}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24Z"
            fill="#fff"
        />
        <g clipPath="url(#a)" fill="#111618">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.744 17.914a1.018 1.018 0 0 1 1.125.213l4.557 4.505 4.558-4.505c.3-.296.742-.38 1.125-.213.382.167.63.552.63.978v10.43a1.05 1.05 0 0 1-1.036 1.063 1.05 1.05 0 0 1-1.036-1.062v-7.93l-3.521 3.48a1.019 1.019 0 0 1-1.44 0l-3.52-3.48v7.93a1.05 1.05 0 0 1-1.037 1.062 1.05 1.05 0 0 1-1.037-1.062v-10.43c0-.427.249-.812.632-.979Z"
            />
            <path d="m28.076 18.467-2.815 3.897a.264.264 0 0 0 .05.363c.055.045.125.07.197.07a.312.312 0 0 0 .197-.067l2.772-2.241a.12.12 0 0 1 .121-.017.11.11 0 0 1 .048.039.1.1 0 0 1 .018.057v7.016a.1.1 0 0 1-.02.06.112.112 0 0 1-.054.038.119.119 0 0 1-.125-.031l-8.377-9.348a1.43 1.43 0 0 0-.491-.35 1.524 1.524 0 0 0-.604-.123H18.7c-.38 0-.745.14-1.014.391-.27.251-.42.591-.42.946v9.88c0 .355.15.695.42.946a1.519 1.519 0 0 0 1.715.222c.214-.112.394-.273.523-.467l2.815-3.897a.263.263 0 0 0-.05-.364.312.312 0 0 0-.393-.003l-2.773 2.242a.12.12 0 0 1-.121.017.11.11 0 0 1-.048-.04.1.1 0 0 1-.018-.057V20.63a.1.1 0 0 1 .02-.06.112.112 0 0 1 .054-.038.119.119 0 0 1 .125.031l8.376 9.35c.134.148.302.267.491.349.19.082.396.124.604.124h.293c.188 0 .375-.035.55-.102.174-.067.332-.165.465-.29.133-.124.24-.271.311-.433a1.26 1.26 0 0 0 .11-.513v-9.88c0-.355-.151-.695-.42-.946A1.517 1.517 0 0 0 28.6 18a1.396 1.396 0 0 0-.524.468Z" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M45.256 30.3a1.018 1.018 0 0 1-1.125-.213l-4.557-4.504-4.558 4.504c-.3.296-.742.38-1.125.213a1.063 1.063 0 0 1-.63-.977v-10.43a1.05 1.05 0 0 1 1.036-1.063 1.05 1.05 0 0 1 1.036 1.062v7.93l3.521-3.48a1.018 1.018 0 0 1 1.44 0l3.52 3.48v-7.93a1.05 1.05 0 0 1 1.037-1.062 1.05 1.05 0 0 1 1.037 1.062v10.43c0 .427-.249.812-.632.978Z"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.452 8.003c-6.722.159-12.353 4.697-14.293 10.91-.172.552-.762.86-1.317.689a1.045 1.045 0 0 1-.693-1.31c2.192-7.018 8.574-12.2 16.253-12.38 8.592-.203 15.859 5.92 17.547 14.148a1.052 1.052 0 0 1-2.062.418C37.392 13.19 30.971 7.826 23.451 8.003ZM24.351 40.263c6.722-.159 12.352-4.697 14.292-10.91.172-.551.762-.86 1.317-.688.555.17.865.757.693 1.309-2.191 7.019-8.573 12.2-16.252 12.38-8.592.204-15.86-5.92-17.547-14.147a1.052 1.052 0 0 1 2.062-.418c1.495 7.286 7.915 12.651 15.435 12.474Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path
                    fill="#fff"
                    transform="translate(1.6 5.64)"
                    d="M0 0h44.8v36.721H0z"
                />
            </clipPath>
        </defs>
    </svg>
);

export default SvgComponent;
