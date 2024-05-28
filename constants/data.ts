

export const general_faq =      [
    {
        question: 'What is Ant Media Server?',
        answer: 'Ant Media Server is a real-time video streaming platform that enables developers to build scalable, low-latency video solutions. It supports WebRTC, RTMP, RTSP, and HLS protocols for live streaming and video conferencing applications.',
        isOpen: false
    },
    {
        question: 'How do I install Ant Media Server?',
        answer: 'To install Ant Media Server, you can download the installation package from the official website. It is available for Linux, macOS, and Windows. Follow the installation instructions provided in the documentation to set up Ant Media Server on your machine.',
        isOpen: false
    },
    {
        question: 'What are the benefits of using Ant Media Server?',
        answer: 'Ant Media Server offers several benefits, such as low-latency streaming, scalability, adaptive bitrate, and cross-platform compatibility. It provides a comprehensive set of features and APIs for building live streaming applications, video conferencing solutions, and real-time communication systems.',
        isOpen: false
    }
]

export const features_faq =  [

    {
        question: 'What are the key features of Ant Media Server for low-latency streaming?',
        answer: 'Ant Media Server provides ultra-low latency streaming capabilities using WebRTC technology. It enables real-time video delivery with latencies as low as 0.5 seconds, making it ideal for interactive applications like video conferencing and live events.',
        isOpen: false
    },
    {
        question: 'How does Ant Media Server ensure scalability for large-scale video streaming?',
        answer: 'Ant Media Server is designed to handle high-traffic video streaming scenarios. It supports horizontal scaling, allowing you to distribute the load across multiple instances. It also offers adaptive bitrate streaming, which dynamically adjusts the video quality based on the viewer\'s network conditions, ensuring smooth playback for a large number of concurrent users.',
        isOpen: false
    },
    {
        question: 'What are the advantages of Ant Media Server\'s cross-platform compatibility?',
        answer: 'Ant Media Server supports a wide range of platforms and devices. It is compatible with web browsers, mobile devices (iOS and Android), and smart TVs. It also supports popular streaming protocols like WebRTC, RTMP, RTSP, and HLS, making it easy to integrate with existing video infrastructures and reach a broad audience.',
        isOpen: false
    }

]

export const features = [
    { name: 'WebRTC Support', description: 'Ant Media Server provides built-in support for WebRTC, enabling low-latency real-time streaming.' },
    { name: 'Adaptive Bitrate Streaming', description: 'Automatically adjusts the video quality based on the viewer\'s network conditions for optimal streaming experience.' },
    { name: 'Scalability', description: 'Ant Media Server can scale horizontally to handle thousands of concurrent streams.' },
    { name: 'Ultra Low Latency', description: 'Achieves sub-second latency for real-time video applications.' },
    { name: 'Streaming Protocols', description: 'Supports WebRTC, RTMP, and HLS streaming protocols.' },
    { name: 'Cloud Integration', description: 'Can be easily deployed on cloud platforms like AWS, Azure, and Google Cloud.' },
];


export const ant_data =  [
    {
        anchor: 'web',
        title: 'Web',
        label: 'Web',
        url: '#web',
        class: 'web-link',
        iconClass: 'web-icon',
        color: '#FCD34D',
        viewAll: '',
        isDefault: true,
        svgPath: `
            <path d="M10 10h6v2h-4v10h-2V12h-4v-2h4z" fill="black"></path>
            <path d="M21.0094 20.2286C21.5794 20.2286 22.0422 20.1659 22.3978 20.0404C23.0724 19.7998 23.4097 19.3527 23.4097 18.699C23.4097 18.3173 23.2424 18.0218 22.9077 17.8127C22.573 17.6087 22.0475 17.4283 21.3311 17.2714L20.1074 16.9969C18.9046 16.725 18.0732 16.4295 17.613 16.1105C16.8338 15.5771 16.4442 14.743 16.4442 13.6083C16.4442 12.5728 16.8207 11.7126 17.5738 11.0276C18.3268 10.3425 19.4328 10 20.8918 10C22.1102 10 23.1483 10.3242 24.0059 10.9727C24.8687 11.6159 25.321 12.5519 25.3629 13.7808H23.0411C22.9992 13.0853 22.6959 12.5911 22.1311 12.2983C21.7546 12.1048 21.2866 12.0081 20.7271 12.0081C20.1048 12.0081 19.608 12.1336 19.2367 12.3846C18.8654 12.6356 18.6798 12.986 18.6798 13.4357C18.6798 13.8488 18.8628 14.1573 19.2289 14.3613C19.4642 14.4972 19.9662 14.6567 20.7349 14.8398L22.7273 15.3183C23.6006 15.5274 24.2595 15.8072 24.704 16.1576C25.3943 16.7014 25.7394 17.4884 25.7394 18.5186C25.7394 19.575 25.3341 20.4535 24.5236 21.1542C23.7183 21.8497 22.5783 22.1975 21.1036 22.1975C19.5975 22.1975 18.4131 21.855 17.5502 21.1699C16.6874 20.4796 16.256 19.5331 16.256 18.3304H18.5621C18.6353 18.8585 18.7791 19.2533 18.9935 19.5148C19.3857 19.9907 20.0577 20.2286 21.0094 20.2286Z" fill="black"></path>
          `,
        content : [
            {
                url: 'https://github.com/ant-media/StreamApp',
                demoUrl: 'https://antmedia.io/webrtc-samples/live-demo/',
                title: 'Streaming application for Ant Media',
                image: '/sample.png',
                tags: ['Real-time' , 'Streaming'],
                description: '',
                isFeatured: false,
            },
            {
                url: 'https://github.com/ant-media/conference-call-application',
                demoUrl: 'https://meet.antmedia.io/Conference/',
                title: 'Circle Online Video Conferencing',
                image: '/circle.png',
                tags: ['Real-time' , 'Conferencing', 'Chat'],
                description: 'Circle is a ready-to-use open-source, online video conferencing application that can be deployed on-prem, private or public cloud. If you are concerned about Privacy or being behind a firewall, this is the best solution for you.',
                isFeatured: true,
            },
        ]},
    {
        anchor: 'android',
        title: 'Android',
        label: 'Android',
        url: '#android',
        class: 'android-link',
        iconClass: 'android-icon',
        color: '#4ADE80',
        viewAll: '',
        isDefault: false,
        svgPath: `
            <path d="M20.4279 19.3348C19.8308 19.3348 19.3333 18.8697 19.3333 18.3115C19.3333 17.7534 19.8308 17.2883 20.4279 17.2883C21.0249 17.2883 21.5224 17.7534 21.5224 18.3115C21.5224 18.8697 21.1244 19.3348 20.4279 19.3348ZM11.3731 19.3348C10.7761 19.3348 10.2786 18.8697 10.2786 18.3115C10.2786 17.7534 10.7761 17.2883 11.3731 17.2883C11.9702 17.2883 12.4677 17.7534 12.4677 18.3115C12.4677 18.8697 11.9702 19.3348 11.3731 19.3348ZM21.0249 14.4976L22.7164 11.7998C22.8159 11.5208 22.7164 11.2417 22.5174 11.0556C22.2189 10.9626 21.9204 10.9626 21.7214 11.2417L20.0299 14.0324C17.4428 13.0092 14.5572 13.0092 11.8706 14.0324L10.1791 11.2417C9.9801 10.9626 9.68159 10.9626 9.38309 11.0556C9.08458 11.2417 9.08457 11.5208 9.18408 11.7998L10.8756 14.4976C8.08955 15.9859 6.199 18.6836 6 21.7535H26C25.7015 18.6836 23.8109 15.9859 21.0249 14.4976Z" fill="white"></path>
          `,
        content : [
            {
                url: 'https://github.com/ant-media/WebRTC-Android-SDK/tree/master/webrtc-android-sample-app',
                demoUrl: '',
                title: 'WebRTC Android Sample App',
                image: '/android.png',
                tags: ['Real-time'],
                description: 'This repository provides ReactJS code and a walkthrough to build a demo web app for multi-participant live streaming in a grid layout with latency <300ms.',
                isFeatured: false,
            },
            {
                url: 'https://github.com/ant-media/LibRtmp-Client-for-Android',
                demoUrl: '',
                title: 'RTMP Android Client Library',
                image: '/android.png',
                tags: ['Real-time'],
                description: '',
                isFeatured: false,
            },

        ]},
    {
        anchor: 'swift',
        title: 'iOS',
        label: 'iOS',
        url: '#swift',
        class: 'ios-link',
        iconClass: 'ios-icon',
        color: '#6B7280',
        svgPath: `
            <path d="M9.45042 13.4563H8V12.1753H9.45042V13.4563ZM8 14.0895H9.45042V19.3986H8V14.0895Z" fill="white"></path>
            <path d="M14.2283 18.327C14.8405 18.327 15.3257 18.1079 15.6837 17.6695C16.045 17.2311 16.2257 16.6077 16.2257 15.7991C16.2257 14.9939 16.045 14.372 15.6837 13.9337C15.3257 13.4921 14.8405 13.2713 14.2283 13.2713C13.616 13.2713 13.1275 13.4904 12.7628 13.9288C12.3981 14.3672 12.2157 14.9906 12.2157 15.7991C12.2157 16.6077 12.3981 17.2311 12.7628 17.6695C13.1275 18.1079 13.616 18.327 14.2283 18.327ZM17.7715 15.7991C17.7715 17.0883 17.3984 18.0754 16.6523 18.7605C16.0936 19.319 15.2855 19.5983 14.2283 19.5983C13.171 19.5983 12.363 19.319 11.8042 18.7605C11.0547 18.0754 10.68 17.0883 10.68 15.7991C10.68 14.4841 11.0547 13.4969 11.8042 12.8378C12.363 12.2793 13.171 12 14.2283 12C15.2855 12 16.0936 12.2793 16.6523 12.8378C17.3984 13.4969 17.7715 14.4841 17.7715 15.7991Z" fill="white"></path>
            <path d="M20.0751 17.1824C20.1219 17.5104 20.2139 17.7555 20.3511 17.9179C20.6021 18.2134 21.032 18.3611 21.6409 18.3611C22.0056 18.3611 22.3017 18.3222 22.5293 18.2442C22.9609 18.0949 23.1767 17.8172 23.1767 17.4114C23.1767 17.1743 23.0696 16.9908 22.8555 16.861C22.6413 16.7343 22.3051 16.6223 21.8467 16.5249L21.0638 16.3544C20.2942 16.1856 19.7623 16.0021 19.4678 15.804C18.9693 15.4728 18.72 14.9549 18.72 14.2503C18.72 13.6073 18.9609 13.0732 19.4427 12.6478C19.9245 12.2224 20.6322 12.0097 21.5657 12.0097C22.3452 12.0097 23.0094 12.2111 23.5581 12.6137C24.1102 13.0131 24.3996 13.5943 24.4263 14.3574H22.9408C22.914 13.9256 22.72 13.6187 22.3586 13.4369C22.1177 13.3167 21.8183 13.2566 21.4603 13.2566C21.0621 13.2566 20.7443 13.3346 20.5067 13.4904C20.2691 13.6463 20.1504 13.8639 20.1504 14.1431C20.1504 14.3996 20.2675 14.5912 20.5017 14.7179C20.6522 14.8023 20.9734 14.9013 21.4653 15.015L22.74 15.3121C23.2988 15.442 23.7204 15.6157 24.0048 15.8332C24.4464 16.1709 24.6672 16.6596 24.6672 17.2993C24.6672 17.9552 24.4079 18.5008 23.8893 18.9359C23.3741 19.3678 22.6447 19.5837 21.7012 19.5837C20.7376 19.5837 19.9797 19.371 19.4277 18.9456C18.8756 18.517 18.5996 17.9293 18.5996 17.1824H20.0751Z" fill="white"></path>
          `,
        viewAll: '',
        isDefault: false,
        content : [
            {
                url: 'https://github.com/ant-media/iOSRTMPReferenceApp',
                demoUrl: '',
                title: 'iOS RTMP Example App',
                image: '/swift-full.png',
                tags: ['Real-time', 'swift', 'RTMP'],
                description: 'A sample iOS application that demonstrates how to stream live video using the RTMP protocol. This reference app serves as a starting point for developers looking to integrate live video streaming capabilities into their iOS projects, providing a basic implementation and a foundation for further customization.',
                isFeatured: false,
            },
            {
                url: 'https://github.com/ant-media/WebRTC-iOS-SDK/tree/master/WebRTC-Sample-App',
                demoUrl: '',
                title: 'iOS WebRTC Sample App',
                image: '/streamvideo.png',
                tags: ['swift', 'WebRTC'],
                description: 'A sample WebRTC application that demonstrates how to stream live video using the WebRTC protocol. This reference app serves as a starting point for developers looking to integrate live video streaming capabilities into their iOS projects, providing a basic implementation and a foundation for further customization.',
                isFeatured: false,
            },

        ]},
    {
        anchor: 'dart',
        title: 'Flutter',
        label: 'Flutter',
        url: '#dart',
        class: 'dart-link',
        iconClass: 'dart-icon',
        color: '#20cfbb',
        svgPath: `

<path fill="white" d="M16.314 2L4.3 14 8 17.7 23.684 2.012h-7.357L16.314 2zm.014 11.072l-6.471 6.457 6.47 6.47H23.7l-6.46-6.468 6.46-6.46h-7.371z"/>
          `,
        viewAll: '',
        isDefault: false,
        content : [
            {
                url: 'https://github.com/ant-media/WebRTC-Flutter-SDK/tree/main/example/SampleProject',
                demoUrl: '',
                title: 'Sample Project',
                image: '/flutter-dev-2.png',
                tags: ['Real-time', 'flutter'],
                description: '',
                isFeatured: false,
            },
            {
                url: 'https://github.com/ant-media/WebRTC-Flutter-SDK/tree/main/example/Publish',
                demoUrl: '',
                title: 'Sample Publish',
                image: '/publish.png',
                tags: ['Real-time', 'flutter'],
                description: '',
                isFeatured: false,
            },
            {
                url: 'https://github.com/ant-media/WebRTC-Flutter-SDK/tree/main/example/Play',
                demoUrl: '',
                title: 'Sample Play',
                image: '/play.png',
                tags: ['Real-time', 'flutter'],
                description: '',
                isFeatured: false,
            },
            {
                url: 'https://github.com/ant-media/WebRTC-Flutter-SDK/tree/main/example/Peer',
                demoUrl: '',
                title: 'Sample Peer',
                image: '/flutter-dev-0.png',
                tags: ['Real-time', 'flutter'],
                description: '',
                isFeatured: false,
            },
            {
                url: 'https://github.com/ant-media/WebRTC-Flutter-SDK/tree/main/example/DataChannel',
                demoUrl: '',
                title: 'Sample Data Channel',
                image: '/flutter-dev-1.png',
                tags: ['Real-time', 'flutter'],
                description: '',
                isFeatured: false,
            },
            {
                url: 'https://github.com/ant-media/WebRTC-Flutter-SDK/tree/main/example/Conference',
                demoUrl: '',
                title: 'Sample Conference',
                image: '/flutter-dev-2.png',
                tags: ['Real-time', 'flutter'],
                description: '',
                isFeatured: false,
            },
        ]},
    {
        anchor: 'java',
        title: 'Java',
        label: 'Java',
        url: '#java',
        class: 'java-link',
        iconClass: 'java-icon',
        color: '#f4913e',
        viewAll: '',
        isDefault: true,
        svgPath: `
    <text x="1.4" y="18" font-family="Arial" font-size="12" fill="white">JAVA</text>  
          `,
        content : [
            {
                url: 'https://github.com/ant-media/WebRTC-Android-SDK/tree/master/webrtc-android-sample-app',
                demoUrl: '',
                title: 'Live Video Broadcaster',
                image: '/java.png',
                tags: ['Real-time'],
                description: 'Native RTMP client for publishing and playing video streams for Android.',
                isFeatured: false,
            },
        ]},
    {
        anchor: 'sdks',
        title: 'SDK\'s',
        label: 'SDK',
        url: '#sdks',
        class: 'sdk-link',
        iconClass: 'sdk-icon',
        color: '#1a5ce1',
        svgPath: `
            <path fill-rule="evenodd" fill="white" d="M8.34 1.804A1 1 0 0 1 9.32 1h1.36a1 1 0 0 1 .98.804l.295 1.473c.497.144.971.342 1.416.587l1.25-.834a1 1 0 0 1 1.262.125l.962.962a1 1 0 0 1 .125 1.262l-.834 1.25c.245.445.443.919.587 1.416l1.473.294a1 1 0 0 1 .804.98v1.361a1 1 0 0 1-.804.98l-1.473.295a6.95 6.95 0 0 1-.587 1.416l.834 1.25a1 1 0 0 1-.125 1.262l-.962.962a1 1 0 0 1-1.262.125l-1.25-.834a6.953 6.953 0 0 1-1.416.587l-.294 1.473a1 1 0 0 1-.98.804H9.32a1 1 0 0 1-.98-.804l-.295-1.473a6.957 6.957 0 0 1-1.416-.587l-1.25.834a1 1 0 0 1-1.262-.125l-.962-.962a1 1 0 0 1-.125-1.262l.834-1.25a6.957 6.957 0 0 1-.587-1.416l-1.473-.294A1 1 0 0 1 1 10.68V9.32a1 1 0 0 1 .804-.98l1.473-.295c.144-.497.342-.971.587-1.416l-.834-1.25a1 1 0 0 1 .125-1.262l.962-.962A1 1 0 0 1 5.38 3.03l1.25.834a6.957 6.957 0 0 1 1.416-.587l.294-1.473ZM13 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd" />
            <path fill-rule="evenodd" fill="white" d="M21.34 16.804A1 1 0 0 1 22.32 16h1.36a1 1 0 0 1 .98.804l.295 1.473c.497.144.971.342 1.416.587l1.25-.834a1 1 0 0 1 1.262.125l.962.962a1 1 0 0 1 .125 1.262l-.834 1.25c.245.445.443.919.587 1.416l1.473.294a1 1 0 0 1 .804.98v1.361a1 1 0 0 1-.804.98l-1.473.295a6.95 6.95 0 0 1-.587 1.416l.834 1.25a1 1 0 0 1-.125 1.262l-.962.962a1 1 0 0 1-1.262.125l-1.25-.834a6.953 6.953 0 0 1-1.416.587l-.294 1.473a1 1 0 0 1-.98.804H22.32a1 1 0 0 1-.98-.804l-.295-1.473a6.957 6.957 0 0 1-1.416-.587l-1.25.834a1 1 0 0 1-1.262-.125l-.962-.962a1 1 0 0 1-.125-1.262l.834-1.25a6.957 6.957 0 0 1-.587-1.416l-1.473-.294A1 1 0 0 1 14 25.68v-1.36a1 1 0 0 1 .804-.98l1.473-.295c.144-.497.342-.971.587-1.416l-.834-1.25a1 1 0 0 1 .125-1.262l.962-.962A1 1 0 0 1 18.38 18.03l1.25.834a6.957 6.957 0 0 1 1.416-.587l.294-1.473ZM26 25a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd" />
        `,
        viewAll: '',
        isDefault: true,
        content : [
            {
                url: 'https://github.com/ant-media/WebRTCEmbeddedSDKReference',
                demoUrl: '',
                title: 'WebRTC Embedded C++ SDK',
                image: '/webrtc.png',
                tags: ['C++', 'WebRTC', 'Streaming'],
                description: 'Embedded SDK is a C++ library that captures the camera stream from an RTSP URL and restreams it to a web browser using WebRTC. By utilizing WebRTC, clients do not need to install any third-party tools on their devices. Instead, they can use their web browsers alone. Additionally, the video latency is less than 1 second.',
                isFeatured: false,
            },
            {
                url: 'https://github.com/ant-media/WebRTC-React-Native-SDK',
                demoUrl: '',
                title: 'WebRTC React Native SDK',
                image: '/webrtc.png',
                tags: ['React Native', 'WebRTC', 'Streaming'],
                description: 'Ant Media React Native SDK for WebRTC is included in this repository. WebRTC publishing is available for Ant Media Server Community Edition, while WebRTC play, Conference, and Data Channel features are exclusive to the Enterprise Edition.',
                isFeatured: false,
            },
            {
                url: 'https://github.com/ant-media/WebRTC-Flutter-SDK',
                demoUrl: '',
                title: 'WebRTC Flutter SDK',
                image: '/webrtc.png',
                tags: ['Flutter', 'WebRTC', 'Streaming'],
                description: 'Ant Media Flutter SDK for WebRTC is included in this repository. WebRTC publishing is available for Ant Media Server Community Edition, while WebRTC play, Conference, and Data Channel features are exclusive to the Enterprise Edition.',
                isFeatured: false,
            },
            {
                url: 'https://github.com/ant-media/WebRTC-iOS-SDK',
                demoUrl: '',
                title: 'WebRTC iOS SDK',
                image: '/webrtc.png',
                tags: ['iOS', 'WebRTC', 'Streaming'],
                description: 'Ant Media iOS SDK for WebRTC is included in this repository. WebRTC publishing is available for Ant Media Server Community Edition, while WebRTC play, Conference, and Data Channel features are exclusive to the Enterprise Edition.',
                isFeatured: false,
            },
        ]},
    {
        anchor: 'tools',
        title: 'Tools',
        label: 'Tools',
        url: '#tools',
        class: 'tools-link',
        iconClass: 'tools-icon',
        color: '#ea116b',
        svgPath: `
<path fill="white" fill-rule="evenodd" d="M16 9.5a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L10.844 24.05A3.298 3.298 0 1 1 6.2 19.407l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 16 9.5ZM8.117 21.875a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd" />
<path fill="white" d="m13.576 11.39-2.201-2.2V7.624a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
<path fill="white" fill-rule="evenodd" d="m16.056 20.079 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L19.47 19.78a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
`,
        viewAll: '',
        isDefault: true,
        content : [
            {
                url: 'https://github.com/ant-media/Web-Player',
                demoUrl: '',
                title: 'Web Player for Ant Media Server',
                image: '/webplayerfull.png',
                tags: ['Real-time', 'Streaming', 'Web Player'],
                description: 'Web Player is a powerful, versatile player for Ant Media Server, designed to embed and play streams directly in web applications. It supports various stream types including WebRTC, HLS, DASH, and VR 360, ensuring broad compatibility and high performance. The player can be easily configured via URL parameters or directly in your code, offering both flexibility and ease of use.',
                isFeatured: false,
            },
            {
                url: 'https://github.com/ant-media/spaceport-web-player',
                demoUrl: 'https://spaceport.tv/demo-view/',
                title: 'Spaceport',
                image: '/spaceport.png',
                tags: ['Real-time', '3D' , 'Spatial Audio', 'Volumetric Video'],
                description: 'Volumetric Video Capturing & Streaming With this technology, you can move freely, explore every angle, and truly feel like you are a part of the live action unfolding before your eyes.',
                isFeatured: false,
            },
            {
                url: 'https://github.com/ant-media/TunaDesk',
                demoUrl: '',
                title: 'TunaDesk',
                image: '/tuna.png',
                tags: ['WebRTC', 'Remote Desktop Control'],
                description: 'TunaDesk is a cross platform remote desktop control app that runs within Ant Media Server. The controller user can connect and control the remote host through a web browser. The host application is an Electron app that runs on the controlled computer. The controller sends mouse and keyboard events to the host, which executes the corresponding commands. The session is completely secure and private as all data flows through Ant Media Server using WebRTC data channels.',
                isFeatured: true,
            },
            {
                url: 'https://github.com/ant-media/Plugins',
                demoUrl: '',
                title: 'Server Plugins',
                image: '/plugins.png',
                tags: ['WebRTC', 'Remote Desktop Control'],
                description: '',
                isFeatured: false,
            },
            {
                url: 'https://github.com/ant-media/videojs-webrtc-plugin',
                demoUrl: '',
                title: 'VideoJS WebRTC Plugin',
                image: '/play.png',
                tags: ['WebRTC', 'Remote Desktop Control'],
                description: 'Webrtc plug-in for videojs. Plugin for viewing streams located on the ant-media server. There is also a function to change the resolution of the stream.',
                isFeatured: false,
            },
            {
                url: 'https://github.com/ant-media/helm',
                demoUrl: '',
                title: 'Ant Media Server Helm chart for Kubernetes',
                image: '/helm.png',
                tags: ['WebRTC', 'Remote Desktop Control'],
                description: '',
                isFeatured: false,
            },
            {
                url: 'https://github.com/ant-media/OktaApp',
                demoUrl: '',
                title: 'Okta (Identity Service) App Sample',
                image: '/okta.png',
                tags: ['WebRTC', 'Remote Desktop Control'],
                description: '',
                isFeatured: false,
            },
        ]},

];
