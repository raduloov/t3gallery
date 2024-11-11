import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/83SbnXkuEV7wjR7PjURcWcyqdo14ZA5fhXEnzMjUI0YKGOep",
  "https://utfs.io/f/83SbnXkuEV7wCZYLsjoJAz8TOKpy04mWVjuQfPSM32ZJvFgH",
  "https://utfs.io/f/83SbnXkuEV7wQJpB3pYUd60PH5mcrbFDJyoBMLWGnYaf3Tgi",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
