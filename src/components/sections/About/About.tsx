import { useEffect, useRef, useState } from 'react';
import FuguLogo from "./fugu_logo.png";

// スクロールアニメーション用のカスタムフック
const useScrollAnimation = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return { ref, isVisible };
};

export const About = () => {
    const textAnimation = useScrollAnimation();
    const imageAnimation = useScrollAnimation();

    return (
        <section id="about" className="w-full py-16 px-4 md:px-8 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">山口VRサークル"FUGU"とは？</h2>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div
                    ref={textAnimation.ref}
                    className={`md:w-1/2 transition-all duration-1000 ${
                        textAnimation.isVisible
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 -translate-x-20'
                    }`}
                >
                    <div className="space-y-4">
                        <p className="text-lg"><span className="font-semibold">正式名称：</span>山口VRサークル Fulldive Universal Gateway Unit</p>
                        <p className="text-lg"><span className="font-semibold">掲げるミッション：</span>「バーチャル山口を創造する」</p>
                        <p className="text-lg"><span className="font-semibold">活動目的：</span>山口県にVRとバーチャルの世界を広げる</p>

                        <p className="text-lg mt-6">ものづくり・VRでわいわいしながら、その輪を広げたいという思いで活動しています</p>

                        <a
                            href="https://note.com/tolpaz/n/nca2ff75c6f78?sub_rt=share_sb"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700 inline-block mt-2 font-medium"
                        >
                            創設者の思い(note記事)
                        </a>
                    </div>
                </div>

                <div
                    ref={imageAnimation.ref}
                    className={`md:w-1/2 flex justify-center transition-all duration-1000 ${
                        imageAnimation.isVisible
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-20'
                    }`}
                >
                    <img
                        src={FuguLogo}
                        alt="FUGUロゴ"
                        className="max-w-full h-auto object-contain"
                        style={{ maxHeight: '300px' }}
                    />
                </div>
            </div>
        </section>
    );
};
