import './About.css';

export const About = () => {
    return (
        <section id="about" className="about-section">
            <h2 className="about-title">山口VRサークル"FUGU"とは？</h2>

            <div className="about-content">
                <div className="about-info">
                    <div className="info-item">
                        <span className="info-label">正式名称：</span>
                        <span className="info-text">山口VRサークル Fulldive Universal Gateway Unit</span>
                    </div>

                    <div className="info-item">
                        <span className="info-label">掲げるミッション：</span>
                        <span className="info-text">「バーチャル山口を創造する」</span>
                    </div>

                    <div className="info-item">
                        <span className="info-label">活動目的：</span>
                        <span className="info-text">山口県にVRとバーチャルの世界を広げる</span>
                    </div>

                    <p className="about-description">
                        ものづくり・VRでわいわいしながら、その輪を広げたいという思いで活動しています
                    </p>

                    <a href="https://note.com/tolpaz/n/nca2ff75c6f78?sub_rt=share_sb" target="_blank"
                       rel="noopener noreferrer" className="note-link">
                        創設者の思い(note記事)
                    </a>
                </div>
            </div>
        </section>
    )
}
