import React from 'react';
import Image from 'next/image';
import styles from '../styles/Art.module.css';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import BackPage from '@/components/BackPage';

const ART_DATA = [
    { src: '/images/starry_sky.png', link: 'https://labs.openai.com/s/bKNwxjrjoefvfGT9QINa9lks' },
    { src: '/images/heart.png', link: 'https://labs.openai.com/s/LkvB54BcoHskq9GeeXvNX2b1' },
    { src: '/images/vitruvian_man.png', link: 'https://labs.openai.com/s/xETok7jHNu6H9m2aKHOhCSyx' },
    { src: '/images/plants.png', link: 'https://labs.openai.com/s/eLNbOLULtLQLSbTYnBXSIty0' },
    { src: '/images/telescope.png', link: 'https://labs.openai.com/s/koCHNPFXQAQdHkBiqLZKFeT3' },
    { src: '/images/building.png', link: 'https://labs.openai.com/s/2xfL5Ya9ALj6hVJPdv1DMGWR' },
    { src: '/images/flying_machine.png', link: 'https://labs.openai.com/s/aRInZNvpoRDnPqUi4Vo3ykgu' },
    { src: '/images/galaxy.png', link: 'https://labs.openai.com/s/DvJKuJCEOMm8rQB4VDaLr9h0' },
    { src: '/images/plane.png', link: 'https://labs.openai.com/s/Z1et4vD3qJbtOkofL55i895J' },
    { src: '/images/vitruvian_man_2.png', link: 'https://labs.openai.com/s/R6U4eWEoJeNnmZroZ1Ids4R8' },
    { src: '/images/plants_2.png', link: 'https://labs.openai.com/s/MrUXZZPzfZITCv3XWrLesIGi' },
    { src: '/images/flying_machine_2.png', link: 'https://labs.openai.com/s/8OwBG6ph8JSJyxkTCxiI6CCo' },
    { src: '/images/flying_machine_3.png', link: 'https://labs.openai.com/s/2ziajXHas8rmNqJBx6WvwmB9' },
    { src: '/images/music.png', link: 'https://labs.openai.com/s/980bTeDCNWwwKa8xPTlEmJB4' },
];


const ArtGallery = () => {
    return (
        <div className={styles['root']}>
            <Navigation />
            <h1 className={styles['header']}>AI Art Inspired by Da Vinci's Notebooks</h1>
            <p className={styles['subheader']}>Created using <a href="https://labs.openai.com/" target='_blank'>DALL-E</a> and <a href="https://sharegpt.com/c/wEY2nkt" target='_blank'>ChatGPT</a>.</p>
            <div className={styles['art-gallery']}>
                {ART_DATA.map((art) => (
                    <a key={art.src} href={art.link} target="_blank" rel="noopener noreferrer">
                        <div className={styles['art-gallery__item']}>
                            <div className={styles['art-gallery__item-inner']}>
                                <Image
                                    src={art.src}
                                    alt="Art"
                                    width={400}
                                    height={400}
                                    className={styles['art-gallery__image']}
                                />
                                <div className={styles['art-gallery__overlay']} />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            <BackPage link='/chat'></BackPage>
            <Footer />
        </div>
    );
};

export default ArtGallery;
