import { blogPosts } from "./blog-data";
export default function Blog() {
    return (
        <>
            {blogPosts.map((rows, idx) => (
                <div className={rows} key={idx}>
                    <div className="text-3xl">{rows.title}</div>
                    <div className="text-2xl">{rows.subtitle}</div>
                    <div className="text-xs">{rows.date}</div>
                    <div>{rows.blog}</div>
                    <br></br>
                    <br></br>
                </div>
            ))}
        </>
    );
}
