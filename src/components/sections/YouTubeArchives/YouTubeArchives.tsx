import { SectionTitle } from "../../common/SectionTitle/SectionTitle";

export const YouTubeArchives = () => {
  return (
    <section id="archive">
      <SectionTitle>交流会アーカイブ(準備中)</SectionTitle>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "20px",
        }}
      >
       <iframe
          width="100%"
          height="250"
          src="https://www.youtube.com/embed/動画ID"
          title="アーカイブ1"
          allowFullScreen
        />

        <iframe
          width="100%"
          height="250"
          src="https://www.youtube.com/embed/動画ID"
          title="アーカイブ2"
          allowFullScreen
        />
      </div>
    </section>
  );
};