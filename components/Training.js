import React from 'react';
import { useParams } from 'react-router-dom';
import './Training.css';

const Training = () => {
    const { course } = useParams();

    // List all videos together, without separating by course
    const allVideos = [
        {
            url: 'https://youtu.be/XlvsJLer_No?list=PLZlA0Gpn_vH8jbFkBjOuFjhxANC63OmXM',
            img: 'https://i.ytimg.com/vi/XlvsJLer_No/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBpctCYeRuVtI83UMt9FS6FjQd3Kg', // Replace with actual thumbnail URLs
        },
        {
            url: 'https://youtu.be/HVjjoMvutj4',
            img: 'https://i.ytimg.com/vi/HVjjoMvutj4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjK3-f3IbnzmT7f8REzkiTOXJnQA',
        },
        {
            url: 'https://youtu.be/cQBvRlZPym0',
            img: 'https://i.ytimg.com/vi/eILUmCJhl64/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCcfV5IHBnyD98sODlMgJlnUmHs9A',
        },
        {
            url: 'https://www.youtube.com/watch?v=Q33KBiDriJY&pp=ygUbd2ViIGRldmVsb3BtZW50IGZ1bGwgY291cnNl',
            img: 'https://i.ytimg.com/vi/Q33KBiDriJY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEnd1Tr2ZjMBb6Oc2-WsKCjPIO0A',
        },
        {
            url: 'https://www.youtube.com/watch?v=ZxKM3DCV2kE&pp=ygUbd2ViIGRldmVsb3BtZW50IGZ1bGwgY291cnNl',
            img: 'https://i.ytimg.com/vi/ZxKM3DCV2kE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCooslJYgn0QT7UbkH7K15APgDwBQ',
        },
        {
            url: 'https://www.youtube.com/watch?v=Ywfuw4SUDv8&list=PL2Kd-KQLppEFbfdJHywOu6b_GAjn3LxE1',
            img: 'https://i.ytimg.com/vi/Ywfuw4SUDv8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAb1eiLuWA6GDG29EZjdbGctBpNFQ',
        },
        
        {
            url: 'https://youtu.be/XlvsJLer_No?list=PLZlA0Gpn_vH8jbFkBjOuFjhxANC63OmXM',
            img: 'https://i.ytimg.com/vi/XlvsJLer_No/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBpctCYeRuVtI83UMt9FS6FjQd3Kg',
        },
        {
            url: 'https://www.youtube.com/watch?v=-6RqxhNO2yY&pp=ygUYcHl0aG9uIHdpdGggZGF0YSBzY2llbmNl',
            img: 'https://i.ytimg.com/vi/-6RqxhNO2yY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5r17BF1YKWUrJSnh6UpjX_Kzf5g',
        },
        {
            url: 'https://www.youtube.com/watch?v=-6RqxhNO2yY&pp=ygUYcHl0aG9uIHdpdGggZGF0YSBzY2llbmNl',
            img: 'https://i.ytimg.com/vi/-6RqxhNO2yY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5r17BF1YKWUrJSnh6UpjX_Kzf5g',
        },
        {
            url: 'https://www.youtube.com/watch?v=mkv5mxYu0Wk&pp=ygUYcHl0aG9uIHdpdGggZGF0YSBzY2llbmNl',
            img: 'https://i.ytimg.com/vi/mkv5mxYu0Wk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjWjebHvoKZTL0m1j5-J0XV0Irqw',
        },
        {
            url: 'https://www.youtube.com/watch?v=gDZ6czwuQ18&pp=ygUYcHl0aG9uIHdpdGggZGF0YSBzY2llbmNl',
            img: 'https://i.ytimg.com/vi/gDZ6czwuQ18/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCvl8BQv9nGIKYBhyNvW9vLWGCXeA',
        },
        {
            url: 'https://www.youtube.com/watch?v=-6RqxhNO2yY&pp=ygUfcHl0aG9uIGRhdGEgc2NpZW5jZSBmdWxsIGNvdXJzZQ%3D%3D',
            img: 'https://i.ytimg.com/vi/nHAPcZRg9VM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMMFv6zLTDRFvA7QZREtnXrsQbwg',
        },
        {
            url: 'https://www.youtube.com/watch?v=LHBE6Q9XlzI&pp=ygUjcHl0aG9uIGZvciBkYXRhIHNjaWVuY2UgZnVsbCBjb3Vyc2U%3D',
            img: 'https://i.ytimg.com/vi/LHBE6Q9XlzI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA34SrMs9yxby6l6JWlHRQnwyzj8w',
        },
        {
            url: 'https://www.youtube.com/watch?v=UrsmFxEIp5k&pp=ygUjcHl0aG9uIGZvciBkYXRhIHNjaWVuY2UgZnVsbCBjb3Vyc2U%3D',
            img: 'https://i.ytimg.com/vi/UrsmFxEIp5k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgVi5ujXAKguur03EW6bRz2JX6Hg',
        },
        {
            url: 'https://www.youtube.com/watch?v=Ae-r8hsbPUo&pp=ygUYYWR2YW5jZSBqYXZhIGZ1bGwgY291cnNl',
            img: 'https://i.ytimg.com/vi/Ae-r8hsbPUo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCquKa_BO7y4TfzBFBmpE7bFA1NOg',
        },
        {
            url: 'https://www.youtube.com/watch?v=uGMwcITtnNM&list=PLdBwVRHjcI__HBqxd51g3j3GJSRaocWZ7',
            img: 'https://i.ytimg.com/vi/uGMwcITtnNM/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBaHMmIatpCHaE5SrKikY65QHBC5A',
        },
        {
            url: 'https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q',
            img: 'https://i.ytimg.com/vi/ntLJmHOJ0ME/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDyFQ0oe6H-Ti29BAon05OD2dTC3Q',
        },
        {
            url: 'https://www.youtube.com/watch?v=16uMi7dvrZk&pp=ygUYYWR2YW5jZSBqYXZhIGZ1bGwgY291cnNl',
            img: 'https://i.ytimg.com/vi/16uMi7dvrZk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVw-BOmWz9LKUXOzXxjyr3OLWy-g',
        },
        {
            url: 'https://www.youtube.com/watch?v=ECT-ehj-q7s&pp=ygUYQWR2YW5jZSBqYXZhIGZ1bGwgY291cnNl',
            img: 'https://i.ytimg.com/vi/ECT-ehj-q7s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUDxsiaw1DYoGFXqhFhkMxIa-8vw',
        },
        {
            url: 'https://www.youtube.com/watch?v=5bEEbo-vlY8&pp=ygUYQWR2YW5jZSBqYXZhIGZ1bGwgY291cnNl',
            img: 'https://i.ytimg.com/vi/5bEEbo-vlY8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAV_ZBVS08fdXDaPRYBlkBse881Cw',
        },
        {
            url: 'https://www.youtube.com/watch?v=AnwgxRtWXLI&list=PLhfrWIlLOoKMe1Ue0IdeULQvEgCgQ3a1B',
            img: 'https://i.ytimg.com/vi/AnwgxRtWXLI/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAm34tK8xs8FSw79KpXTFRDSQ0rZw',
        },
        {
            url: 'https://www.youtube.com/watch?v=3FNYvj2U0HM&list=PLLKT__MCUeixqHJ1TRqrHsEd6_EdEvo47',
            img: 'https://i.ytimg.com/vi/3FNYvj2U0HM/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDv0jGRtvWRpnPUqnVs6oFq0nRPrg',
        },
        {
            url: 'https://www.youtube.com/watch?v=B9fGYDM_TU4&pp=ygUjSGFja2luZyB3aXRoIGthbGkgbGludXggZnVsbCBjb3Vyc2U%3D',
            img: 'https://i.ytimg.com/vi/B9fGYDM_TU4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYd4JISevb3rJoLdLMUL00dMLQFQ',
        },
        {
            url: 'https://www.youtube.com/watch?v=J8odohybOIM&pp=ygUjSGFja2luZyB3aXRoIGthbGkgbGludXggZnVsbCBjb3Vyc2U%3D',
            img: 'https://i.ytimg.com/vi/J8odohybOIM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArJ8BzEqAZgzYE2ON5p8GubuIbBQ',
        },
        {
            url: 'https://www.youtube.com/watch?v=v3iUx2SNspY&t=40081s&pp=ygUZbGludXggaGFja2luZyBmdWxsIGNvdXJzZQ%3D%3D',
            img: 'https://i.ytimg.com/vi/v3iUx2SNspY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBh1wfXWJWPhbEfYxy4aLy2bZOsCA',
        },
        {
            url: 'https://www.youtube.com/watch?v=_tCY-c-sPZc&pp=ygUZbGludXggaGFja2luZyBmdWxsIGNvdXJzZQ%3D%3D',
            img: 'https://i.ytimg.com/vi/_tCY-c-sPZc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC05WyIzfH9xwXuKe_cGQjjUBGzTw',
        },
        {
            url: 'https://www.youtube.com/watch?v=Gv9_4yMHFhI',
            img: 'https://i.ytimg.com/vi/GwIo3gDZCVQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEr8qd7Nm1isQJ6f5DomlI7Eme8w',
        },
        {
            url: 'https://www.youtube.com/watch?v=ukzFI9rgwfU',
            img: 'https://i.ytimg.com/vi/Nl3NJB3IJwo/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAILirFY-0vl5rTpgJCVicwi-c7tg',
        },
        {
            url: 'https://www.youtube.com/watch?v=UehuI1w10lg&pp=ygUcbWFjaGluZSBsZWFybmluZyBmdWxsIGNvdXJzZQ%3D%3D',
            img: 'https://i.ytimg.com/vi/UehuI1w10lg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKiTSs326QHRx8iRC9mxtqZRYivA',
        },
        {
            url: 'https://www.youtube.com/watch?v=LvC68w9JS4Y&pp=ygUcbWFjaGluZSBsZWFybmluZyBmdWxsIGNvdXJzZQ%3D%3D',
            img: 'https://i.ytimg.com/vi/LvC68w9JS4Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAgfYs57s3CRg8vbioW40w2xvfkaA',
        },
        {
            url: 'https://www.youtube.com/watch?v=kz184QIO4ZQ&list=PLxCzCOWd7aiEXg5BV10k9THtjnS48yI-T',
            img: 'https://i.ytimg.com/vi/kz184QIO4ZQ/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCSb9kX4lIe6ZUY8FH4nd-edgRUvw',
        },
        {
            url: 'https://www.youtube.com/watch?v=xaAdbDCX0XI&pp=ygUcbWFjaGluZSBsZWFybmluZyBmdWxsIGNvdXJzZQ%3D%3D',
            img: 'https://i.ytimg.com/vi/xaAdbDCX0XI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAdct7tsGYHIsb-fK3-xB8ypgj6zQ',
        },
        {
            url: 'https://www.youtube.com/watch?v=8eJJe4Slnik&pp=ygUTbW9uZ29kYiBmdWxsIGNvdXJzZQ%3D%3D',
            img: 'https://i.ytimg.com/vi/8eJJe4Slnik/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBoyelETf79aH570wKpwK1sEjJKBw',
        },
        {
            url: 'https://www.youtube.com/watch?v=ExcRbA7fy_A&list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA',
            img: 'https://i.ytimg.com/vi/ExcRbA7fy_A/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB7k8twj76Hu9cGnfSLrN_QUsUpYg',
        },
        {
            url: 'https://www.youtube.com/watch?v=tww-gbNPOcA&pp=ygUTbW9uZ29kYiBmdWxsIGNvdXJzZQ%3D%3D',
            img: 'https://i9.ytimg.com/vi/tww-gbNPOcA/hq720_custom_1.jpg?sqp=CKiN5LcG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtpjtLHlkW0FLSEOPWtXGiY2IyGA',
        },
        {
            url: 'https://www.youtube.com/watch?v=oSIv-E60NiU&pp=ygUTbW9uZ29kYiBmdWxsIGNvdXJzZQ%3D%3D',
            img: 'https://i.ytimg.com/vi/oSIv-E60NiU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCeUnZRZXsKOpQUmqaFu3dGqPE3Uw',
        },
        {
            url: 'https://www.youtube.com/watch?v=uySOLLcrcYU&list=PL5IobCNPDnI_Xh2iya6p37Ain_71ro71w',
            img: 'https://i.ytimg.com/vi/uySOLLcrcYU/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAhLgwev_zbWx3AgPetBzJeBcbRJA',
        },
        {
            url: 'https://www.youtube.com/watch?v=aDd4HiGQSIU&pp=ygUUbW9uZ29kYiBjb3Vyc2UgZnVsbCA%3D',
            img: 'https://i.ytimg.com/vi/aDd4HiGQSIU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCGyBXUAOOy5BJeTnQgiwJtU7jCWg',
        },
        // Add more videos here if needed
    ];

    return (
        <div className="training-container">
            <h2> -    </h2>
            <h2></h2>
            <h2>{course ? `Videos for ${course.replace("-", " ")}` : "Available Videos"}</h2>
            <div className="video-gallery">
                {allVideos.map((video, index) => (
                    <a key={index} href={video.url} target="_blank" rel="noopener noreferrer" className="video-item">
                        <img src={video.img} alt={`Thumbnail for video ${index + 1}`} className="video-thumbnail" />
                    </a>
                ))}
            </div>
        </div>
    );
    
};

export default Training;
